const testService = require('../services/test.service')
const GeneralResponse = require('../dtos/commons/response/general-response.dto')
const ServiceException = require('../utils/errors/service-exception')
const httpResponseCodes = require('../utils/constants/code-errors')


add = (req, res) => {
    var generalResponse = new GeneralResponse;
    generalResponse.success = false;
    var codeHttp;
    try {
        testService.test(req, res);
        generalResponse.success = true;
        generalResponse.data = { "status": "correct" };
        generalResponse.message = 'El proceso se ejecutó de manera correcta';
        codeHttp = httpResponseCodes.OK
    } catch (err) {
        if (err instanceof ServiceException) {
            codeHttp = httpResponseCodes.BAD_REQUEST
            generalResponse.message = err.message;
            generalResponse.apiError = err.apiError;
        } else {
            codeHttp = httpResponseCodes.INTERNAL_SERVER_ERROR
            generalResponse.message = err.message;
        }
    }
    return res.type('json').status(codeHttp).send(JSON.stringify(generalResponse));
}


module.exports = {
    add
}

