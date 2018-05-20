
//this file is only for connecting to mongodb
const mongoose = require('mongoose');

// ES6
mongoose.Promise = global.Promise;


//connect to the db before running the test
before(function(done){

    //connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo');
    mongoose.connection.once('open', function () {
        console.log('connection has been made');
        done();
    }).on('error', function (error) {
        console.log('Connection error:', error);
    });


    //droping the characters collection before each test
    beforeEach(function (done) {
        //drop the collection
        mongoose.connection.collections.mariochars.drop(function() {
            done();
        })
        
    })
});



