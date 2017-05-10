//Get an instance of mongoose and mongoose schema
const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Set up mongoose model and export it
module.exports = mongoose.model('User', new schema({
    name: String,
    password: String,
    admin: Boolean
}));