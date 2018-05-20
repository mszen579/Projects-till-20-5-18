
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe the tests
describe('Finding records', function () {

  var char;

    beforeEach(function(done) {
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
    it('find one record from the db', function (done) {
        MarioChar.findOne({firstname: "Omar"}).then(function(result) {
            assert(result.firstname === 'Omar');
            done();
        });

    });


    it('find one record by ID from the db', function (done) {
        MarioChar.findOne({ _id: char._id }).then(function (result) {
            assert(result._id.toString() === char._id.toString());// we put used toString() to convert the result to object result as it is listed in mongodb 
            done();
        });

    });

});
