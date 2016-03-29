var mongoose = require('mongoose');

var Schema = mongoose.Schema
userSchema = new Schema( {
    name: {type: String, required: true},
    surname: {type: String, required: true},
},{
    timestamps: true
});

var User = mongoose.model('user', userSchema);

module.exports = User;