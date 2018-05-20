/*to start a node JS project from scratch:
1- create a folder and name it as you like
2- create inside it an assests folder for CSS and static files such as 'images and videos'
3- create a file as a process file .js
4- in the terminal:
    A-start githube 'optional' using 'git init' command
    B-start package.json using '$ npm init' command
    C-install package express for routing using '$ npm install express -save' command and the -save it to save it in the package.jason
    D-install package parser for sending post from a form using '$ npm install body-parser -save' command
    E-install package ejs for using css, nav, photos, videos...etc '$ npm install ejs -save' command
    F-install pachage nodemon for auto save and restart the node server using '$ npm install nodemon -save' command
5- create an app.js to require the express package, ejs package, and listen to port we allocate 
6- create an MVC model 'controller, view, and module'
    a- create a controller folder and a controller file .js in it to handle the routs, views, and passing the data to views
7- require this controller in the app.js by using 'var todoController = require('./controllers/todoController');'
8- for using online db we need to install mongoose
*/


var express = require('express');


var todoController = require('./controllers/todoController');
var app = express();

//set up template engine
app.set('view engine', 'ejs');


//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);


//listen to port
app.listen(process.env.PORT || 5000, function () {
    console.log('now listening to port : 5000');
});