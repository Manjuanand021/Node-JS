// load the things we need
const mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

//define the schema for our user model
const userSchema = mongoose.Schema({
    local: {
        email: String,
        password: String
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    twitter: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    }
});

//###############################
//Methods schema
//###############################
//Generating a hash
userSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSalt(8), null);
}
//Checking if password if valid
userSchema.methods.validPassword = (password) => {
    console.log('I am here  - ', this);
    // return bcrypt.compareSync(password, this.local.password);
    // return this.local.password === password;
    return true;
}

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);