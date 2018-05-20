//console.log("HELLO ES6");

//////////////////////////////////////
// my way:
// var greetings = function greating(name) {
//     console.log(`${name}`);
//     console.log(`Your name lowercased is ${name.toLowerCase()}`);
// }
// console.log(greetings('HELLO'));


//the correct way
// console.log(`Hello, ${process.argv[2]}!
// Your name lowercased is "${process.argv[2].toLowerCase()}".`);
// the 'process.argv[2]'is like a place holder of the string Hello


///////////////////////////////////////

// var inputs = process.argv.slice(2);
// var result = inputs.map(s => s[0])
//     .reduce((soFar, s) => soFar + s);

// console.log(`[${inputs}] becomes "${result}"`);


///////////////////////////////////////
// var foot = {
//     kick: function () {
//         this.yelp = "Ouch!";
//         setImmediate( () =>  {
//             console.log(this.yelp);
//         });
//     }
// };
// foot.kick();

////////////////////////////////////

// let userArray = process.argv.slice(2);

// let reg = ['userId', 'jdoe', 'john@doe.com', 'age', 'firstName', 'lastName'];
// let data = {};
// [, data.username, data.email] = reg;
// console.log(data);

/////////////////////////////////
// var numbers = process.argv.slice(2); //The "argv" array contains everything given on the command line
// var min = Math.min(...numbers);

// console.log(`The minimum of [${numbers}] is ${min}`);


//////////////////////////////////////////
// module.exports = function average(...args) {
//     // what goes here?
//     var sum=0;
//     var avg =1;
//     args.forEach(function (value) {
//         sum += value;
//         avg = sum/args.length;
//     });

//     return avg;
// }


//////////////////////////////////////////
// module.exports = function midpoint(lower = 0, upper = 1) {
//     return (lower + upper) /2
// };


//////////////////////////////////////////

//module.exports = (string, bangs = string.length) => string + "!".repeat(bangs);

//////////////////////////////////////////

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(pieces, ...substitutions) {
    var result = pieces[0];
    for (var i = 0; i < substitutions.length; ++i) {
        result += escape(substitutions[i]) + pieces[i + 1];
    }

    return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/'/g, "&apos;")
        .replace(/"/g, "&quot;");
}