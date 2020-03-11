const ApiError = require('../dtos/commons/response/api-error.dto')
const ServiceException = require('../utils/errors/service-exception')
const validator = require('../utils/validators/validator')
var functions = {};
functions.test = function (req, res) {

    validator.validateNotNullRequest(req);
    // throw new ServiceException("Error desconocido", new ApiError("Error desconocido", "Failed query executed", "E-BKTEST-01"));
};

module.exports = functions;



