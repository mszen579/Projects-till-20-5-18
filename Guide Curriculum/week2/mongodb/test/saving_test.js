
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe the tests
describe('saving record', function() {
   
    
    //Create tests
    it('Saving record to db', function(done){
        var char = new MarioChar({
            firstname: 'Omar',
            lastname: 'Khatab',
            password: 'asdf1234',
            email: 'Omar@gmail.com',
            age: '39'
        });

     char.save().then(function(){
         assert(char.isNew === false);
         done();
     });
     
    });

});
