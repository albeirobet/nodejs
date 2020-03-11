const ApiError = require('../../dtos/commons/response/api-error.dto')
const ServiceException = require('../../utils/errors/service-exception')

var functions = {};
functions.validateNotNullRequest = function (req) {
    if (isEmpty(req.body)) {
        throw new ServiceException("Datos Obligatorios", new ApiError("Datos Obligatorios", "Esta petición requiere datos obligatorios", "E-NSACCESS-01"));
    }
};

function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
}


module.exports = functions;