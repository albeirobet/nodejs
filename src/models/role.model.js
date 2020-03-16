const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema({
    name: String,
    description: String
}, {
    timestamps: true
});
module.exports = mongoose.model('Role', OriginSchema);
