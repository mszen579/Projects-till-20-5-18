
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe the tests
describe('Deleting records', function(){

    var char;

    beforeEach(function (done) {
        char = new MarioChar({
            firstname: 'Omar',
            lastname: 'Khatab',
            password: 'asdf1234',
            email: 'Omar@gmail.com',
            age: '39'
        });

        char.save().then(function () {
            assert(char.isNew === false);
            done();
        });
    });

    //Create test to find one record
    it('Deletes one record from the db', function (done) {
        MarioChar.findOneAndRemove({ firstname: "Omar" }).then(function(){
            MarioChar.findOne({ firstname: 'Omar' }).then(function (result){
                assert(result === null);
               done(); 
            });
        });
    });


    });
