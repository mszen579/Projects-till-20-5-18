const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create a Shcema and Model

//1- creating a Schema:
const MarioCharSchema = new Schema({
    firstname: String,
    lastname: String,
    password:String,
    email: String,
    age: String
});



//2- creating a Model:
const MarioChar = mongoose.model('mariochar', MarioCharSchema);


//exporting this model to other file
module.exports = MarioChar;