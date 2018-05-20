var bodyParser = require('body-parser');
var mongoose = require('mongoose');// to use an online db like mangodb or mlab


//conect to db
mongoose.connect('mongodb://root:root@ds245885.mlab.com:45885/todomsz');


//create a schemal- this is like a blueprint to our db that tells the db what to expect of kind of data
var todoSchema = new mongoose.Schema({
item: String
});


//create a Model for our db
var Todo = mongoose.model('Todo', todoSchema);
// as we need to do this dynamicly we will comment the below 3 lines
// var itemOne = Todo({item: 'get the keys from home'}).save(function(err) {
//     if (err) throw err;
//     console.log('item saved');
//});

//var data = [{ item: 'get milk' }, { item: 'get bread' }, { item: 'get butter' }] ;
var urlencodedParser = bodyParser.urlencoded({extended: false});


module.exports = function (app) {// app is the same variable in the app.js file

    app.get('/todo', function(req, res){
        // get data from mongoDB and pass it to view
        Todo.find({}, function (err, data) {
        if (err) throw err;
        res.render('todo', {todos:data}); // todos is a property that we allocate a variable array 'data' to it and pass it ot the view
        }); //we left it empty to collect all items in the db. Otherwise we will write in the {} item: 'get the keys from home'
         
    });

    app.post('/todo', urlencodedParser, function (req, res){//to pass the data from the form to the view
        //get the data from the view and added it to mongoDB
        var newTodo = Todo(req.body).save(function (err,data) {
        if (err) throw err;
        res.json(data);
        })
    });


    app.delete('/todo/:item', function (req, res) {
        //delet the requested item from mongoDB
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data) {
            if (err) throw err;
            res.json(data);
        });

    });
}