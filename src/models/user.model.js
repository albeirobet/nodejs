const mongoose = require('mongoose');
const Origin = require('./origin.model');
const Role = require('./role.model');
const State = require('./state.model');

const UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    channelType: String,
    nickname: String,
    photoUrl: String,
    tokenFCM: String,
    lastLoginDate: Date,
    stateUser: State,
    originRegister: Origin,
    rolesList: [Role]
}, {
    timestamps: true
});
module.exports = mongoose.model('User', OriginSchema);
