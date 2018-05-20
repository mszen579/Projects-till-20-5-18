// -> Define an object called 'Robot'
// -> Define a method called 'new' in Robot
// -> When Robot.new is called it should return a new object with Robot as its prototype 
//    e.g. var robby = Robot.new();
//    Robot should be the prototype of robby

var Robot = {// here we have created an object called 'Robot'
	new: function () { // here we have created a method called 'new'
		return Object.create(this);//the function will return a new object as a prototype of object 'Robot'
	}
};




// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot: Robot
}
