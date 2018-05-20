//////////////////////ES6 NINJA///////////////////////////
var name = 'raya';
var age = 4;

var family = {
    name, age,
    chop(x) {// new way to define function in an object
        console.log('you chopped the enemy' + x)
    }
};

console.log(family.chop(10));

////////////////////////////////////////////////
var str = "goodbye";

console.log(str.includes('d'));

///////////////////////////////////////////////
var youSay = 'goodbye';

if (youSay.startsWith('goodbye')) {
    var iSay = 'see you later';
};

console.log(`if you say '${youSay}' I will reply '${iSay}'`);

/////////////////////////////////////////////////////////////
var test = 'my name is Lulia';

console.log(test.includes('name'));
//=> true

////////////////////////////////////////////////////////////

//normal functions
var greetings = function greating() {
    console.log('hello');
}
// => greetings();

//arrow functions looks like:
var greetings = () =>  console.log('hello');
// => greetings();

/////////////////////////////////////////////////////////
//here we are defining an object 'ninja' and inside it there is a function 'chop'
var ninja = {
    name: "Lulia",
    chop(x){
/*window.setInterval is for setting a time window*/
window.setInterval( () => {// arrow function
            if( x > 0 ){
                console.log(this.name + ' chopped the enemy');// this define the name it is global
                x--;
            }
          }, 1000);// the 1000 is 1000ms
        }
    };
ninja.chop(5);

///////////////////Sets/////////////////////////////
var names = new Set();
// we can add strings to this set
names.add('mohammad').add('husam').add('yasser');
//names.delete('yasser') // this will delete the element in this set
//console.log(names.size) // this output the size of this set => 3 in our case
//names.clear() // this empty this set
//console.log(names.has('husam')) // this check if the name exist and output 'true' of 'false'
console.log(names);
//set does not accept dublicates


/////////////////////converting array into Set and vice-versa///////////////////
var food = ['tomato', 'potato', 'mite', 'lemon', 'cucumbar', 'lemon','potato'];

var refinedFood = new Set(food);// this code convert array into set and it removes duplicats immediatly 

console.log(refinedFood);

food = [...refinedFood];// convert a set into array

console.log(food);


/////////////////////////Generator functions////////////////////////////////////////////

function* gen() {
  
   yield console.log('pear');
    console.log('banana');
    console.log('apple');
}

var myGen = gen();// this variable called 'iterator' 
myGen.next();// this 'next' is a built-in function that do what inside the function 

/*steps to create generator function:
1- Setup generator function
2- Setup an iterator variable
3- Setup a 'next' built-in function to run the 'gen' function
4- If we need to stop running 'gen' function setup a yield function is to stop running this function
5- to start the function again we just simply have to retype 'myGen.next();' again to restart 'gen' function
*/

// we can add values to generator in deffirent way
function* gen() {

    yield 'pear';
    yield'banana';
    yield'apple';
    return 'other fruits'// use return not yield for the last value only
}
var myGen = gen();
// extract these above values from the gentrator function gen
console.log(myGen.next());// this will extract the first value
console.log(myGen.next());// this will extract the second value
console.log(myGen.next());// this will extract the third value
console.log(myGen.next());// this will extract the third value

//the outputs will be objects.
//we car add values back to this generator like this

function* gen() {

    var x= yield 'pear';
    var y =yield 'banana';
    var z =yield 'apple';
    return x+y+z;//this will return the total price of the fruits
}
var myGen = gen();
// extract these above values from the gentrator function gen
console.log(myGen.next());
console.log(myGen.next(20));
console.log(myGen.next(4));
console.log(myGen.next(1));
