const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const AdminPassword = require('../../../models/coreModels/AdminPassword');
const checkAndCorrectURL = require('./checkAndCorrectURL');
const sendMail = require('./sendMail');
const { useAppSettings } = require('../../../setting');

const register = async (req, res) => {
    // Assuming 'User' is the name of your user model
    const UserModel = mongoose.model('User');
    const passwordInstance = new AdminPassword();

    const { name, email, password, country } = req.body;

    // Validate the input
    const objectSchema = Joi.object({
        email: Joi.string().email({ tlds: { allow: true } }).required(),
        name: Joi.string().required(),
        country: Joi.string().required(),
        password: Joi.string().required(),
    });

    const { error, value } = objectSchema.validate({ name, email, password, country });
    if (error) {
        return res.status(409).json({
            success: false,
            result: null,
            error: error,
            message: 'Invalid/Missing credentials.',
            errorMessage: error.message,
        });
    }

    const user = await UserModel.findOne({ email: email, removed: false });
    if (user) {
        return res.status(409).json({
            success: false,
            result: null,
            message: 'An account with this email already exists.',
        });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = {
        name: name,
        email: email,
        country: country,
        enabled: true,
    };

    const createdUser = await UserModel.create(newUser);

    // Generate emailToken (you might want to implement your logic here)
    const emailToken = jwt.sign({ userId: createdUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    const newUserPassword = new AdminPassword({
        removed: false,
        user: createdUser._id, // Reference to user ID
        password: hashedPassword,
        salt: salt,
        emailVerified: false,
        authType: 'email',
        loggedSessions: [],
        emailToken: emailToken, // Assign the generated token
    });

    const newPassword = await newUserPassword.save();
    const settings = useAppSettings();
    const accufirm_app_email = settings['accufirm_app_email'];
    const accufirm_base_url = settings['accufirm_base_url'];
    const url = checkAndCorrectURL(accufirm_base_url);
    const link = url + '/verify/' + createdUser._id + '/' + emailToken;

    await sendMail({
        email,
        name,
        link,
        accufirm_app_email,
        emailToken: emailToken,
    });

    if (!createdUser || !newUserPassword) {
        return res.status(500).json({
            success: false,
            result: null,
            message: 'Error creating your account.',
        });
    } else {
        const success = {
            success: true,
        };
        const responseUser = { ...createdUser.toObject(), ...success }; // Convert createdUser to plain object
        return res.status(200).json(responseUser);
    }
};

module.exports = register;
