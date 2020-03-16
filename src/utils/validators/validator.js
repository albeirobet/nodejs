const ApiError = require('../../dtos/commons/response/api-error.dto')
const ServiceException = require('../../utils/errors/service-exception')
const commonErrors = require('../../utils/constants/common-errors')

var functions = {};
functions.validateNotNullRequest = function (req) {
    if (isEmpty(req.body)) {
        throw new ServiceException(commonErrors.ET_COMMON_02, new ApiError(commonErrors.ET_COMMON_02, commonErrors.EM_COMMON_02, "EM_COMMON_02"));
    }
};

functions.validateNotNullParameter = function (parameter) {
    console.log('printing parameter  ' + parameter);
    if (typeof parameter !== 'undefined' && parameter) {
    } else {
        throw new ServiceException(commonErrors.ET_COMMON_02, new ApiError(commonErrors.ET_COMMON_02, commonErrors.EM_COMMON_03, "EM_COMMON_03"));
    };
}


function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
}


module.exports = functions;