class ServiceException {

    constructor(message, apiError) {
        this.message = message
        this.apiError = apiError;
    }

    applyData(json) {
        Object.assign(this, json);
    }

}
module.exports = ServiceException