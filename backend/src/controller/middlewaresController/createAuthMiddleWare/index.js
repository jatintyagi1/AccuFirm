const isValidAuthToken = require('./isValidAuthToken');
const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const forgotPassword = require('./forgotPassword');
const resetPassword = require('./resetPassword');


const createAuthMiddleware = (userModel) => {
    let authMethod = {};

    authMethod.isValidAuthToken = (req, res, next) =>
        isValidAuthToken(req, res, next, {
            userModel,
        });

    authMethod.register = (req, res) =>
        register(req, res, {
            userModel,
        });

    authMethod.login = (req, res) =>
        login(req, res, {
            userModel,
        });

    authMethod.logout = (req, res) =>
        logout(req, res, {
            userModel,
        });

    authMethod.forgotPassword = (req, res) =>
        forgotPassword(req, res, {
            userModel,
        });


    authMethod.resetPassword = (req, res) =>
        resetPassword(req, res, {
            userModel,
        });

    return authMethod;
};

module.exports = createAuthMiddleware;