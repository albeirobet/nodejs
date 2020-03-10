class ApiError {

    constructor(messageUser, messageDeveloper, code) {
        this.messageUser = messageUser;
        this.messageDeveloper = messageDeveloper;
        this.code = code;
    }

    applyData(json) {
        Object.assign(this, json);
    }

}
module.exports = ApiError