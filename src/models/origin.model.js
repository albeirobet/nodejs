const mongoose = require('mongoose');

const OriginSchema = mongoose.Schema({
    name: String,
    description: String
}, {
    timestamps: true
});
module.exports = mongoose.model('Origin', OriginSchema);