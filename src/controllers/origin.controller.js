const GeneralResponse = require('../dtos/commons/response/general-response.dto')
const ServiceException = require('../utils/errors/service-exception')
const httpResponseCodes = require('../utils/constants/http-codes')
const commonMessages = require('../utils/constants/common-messages')
const commonErrors = require('../utils/constants/common-errors')
const originService = require('../services/origin.service')
'use strict';

create = (req, res) => {
    var generalResponse = new GeneralResponse;
    generalResponse.success = false;
    var codeHttp;
    try {
        var data = originService.create(req, res);
        generalResponse.success = true;
        generalResponse.data = data;
        generalResponse.message = commonMessages.SUCCESS_PROCESS;
        codeHttp = httpResponseCodes.OK
    } catch (err) {
        if (err instanceof ServiceException) {
            codeHttp = httpResponseCodes.BAD_REQUEST
            generalResponse.message = commonErrors.E_COMMON_01;
            generalResponse.apiError = err.apiError;
        } else {
            codeHttp = httpResponseCodes.INTERNAL_SERVER_ERROR
            generalResponse.message = err.message;
        }
    }
    return res.type('json').status(codeHttp).send(JSON.stringify(generalResponse));
}

module.exports = {
    create
}
