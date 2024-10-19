const express = require('express');

const router = express.Router();

const { catchErrors } = require('../../handler/errorHandler');
const adminAuth = require('../../controller/coreController/adminAuth');

router.route('/register').post(catchErrors(adminAuth.register));
router.route('/login').post(catchErrors(adminAuth.login));
router.route('/forgetpassword').post(catchErrors(adminAuth.forgotPassword));
router.route('/resetpassword').post(catchErrors(adminAuth.resetPassword));

router.route('/logout').post(adminAuth.isValidAuthToken, catchErrors(adminAuth.logout));

module.exports = router;