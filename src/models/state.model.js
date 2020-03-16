const mongoose = require('mongoose');

const StateSchema = mongoose.Schema({
    name: String,
    description: String
}, {
    timestamps: true
});
module.exports = mongoose.model('State', OriginSchema);
