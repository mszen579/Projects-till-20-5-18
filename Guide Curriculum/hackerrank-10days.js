/* Day 0: Hello, World!
A greeting
*/

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:

}

///////////////////////////////////////////////////////////////////////////////////////////
/* Day 0: Data Types*/

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.


    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.


    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.

}

///////////////////////////////////////////////////////////////////////////////////////////
/* Day 1: Arithmetic Operators*/

/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *   
 *	Return a number denoting the rectangle's area.
 **/
function getArea(length, width) {
    let area;
    // Write your code here

    return area;
}

/**
 *   Calculate the perimeter of a rectangle.
 *	
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *   
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here

    return perimeter;
}

///////////////////////////////////////////////////////////////////////////////////////////
/* Day 1: Functioins*/
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////
/* Day 1: Let and Const*/
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    let r = readLine('r');
    // Print the area of the circle:
    let area = PI * (r * r);

    // Print the perimeter of the circle:
    let perimeter = 2 * PI * r;

    console.log(area);
    console.log(perimeter);
}


///////////////////////////////////////////////////////////////////////////////////////////
/* Day 2: Conditional Statements: If-Else*/
function getGrade(score) {
    let grade;

    // Write your code here
    if (25 < score && score <= 30) {
        grade = 'A';
    };
    if (20 < score && score <= 25) {
        grade = 'B';
    };
    if (15 < score && score <= 20) {
        grade = 'C';
    };
    if (10 < score && score <= 15) {
        grade = 'D';
    };
    if (5 < score && score <= 10) {
        grade = 'E';
    };
    if (0 < score && score <= 5) {
        grade = 'F';
    };
    return grade;
}


///////////////////////////////////////////////////////////////////////////////////////////
/* Day 2: Conditional Statements: Switch*/
function getLetter(s) {
    let letter;
    // Write your code here
    if (s[0] === 'a' || s[0] === 'e' || s[0] === 'i' || s[0] === 'o' || s[0] === 'u') {
        letter = 'A';

    } else if (s[0] === 'b' || s[0] === 'c' || s[0] === 'd' || s[0] === 'f' || s[0] === 'g') {
        letter = 'B';

    } else if (s[0] === 'h' || s[0] === 'j' || s[0] === 'k' || s[0] === 'l' || s[0] === 'm') {
        letter = 'C';

    } else if (s[0] === 'n' || s[0] === 'p' || s[0] === 'q' || s[0] === 'r' || s[0] === 's' || s[0] === 't' || s[0] === 'u' || s[0] === 'v' || s[0] === 'w' || s[0] === 'x' || s[0] === 'y' || s[0] === 'z') {
        letter = 'D';

    }

    return letter;
}


///////////////////////////////////////////////////////////////////////////////////////////
/* Day 2: Loops*/
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for (var i = 0; i < s.length; i++) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            console.log(s[i]);
        }
    }

    for (var j = 0; j < s.length; j++) {
        if (s[j] !== 'a' && s[j] !== 'e' && s[j] !== 'i' && s[j] !== 'o' && s[j] !== 'u') {
            console.log(s[j]);
        }
    }
}


///////////////////////////////////////////////////////////////////////////////////////////
/* Day 2: Array*/
/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {

    var firstElement = nums[0];
    var secondLarg = -1;
    for (var i = 0; i < nums.length; i++) {

        if (nums[i] > firstElement) {
            secondLarg = firstElement;
            firstElement = nums[i]
        }

        if (nums[i] > secondLarg && nums[i] < firstElement) {
            secondLarg = nums[i];
        }
    }


    return secondLarg;
}


///////////////////////////////////////////////////////////////////////////////////////////
/* Day 3: Try, Catch, and Finally*/

function reverseString(s) {
    try {
        s = s.split("").reverse().join("");
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log(s);
    }

    var numb = parseInt("s");
    if (numb === '') {
        console.log('s.split is not a function');
        console.log(s);
    } else {
        var spl = s.split('');
        var rev = spl.reverse();
        var jon = rev.join('');


        return parseInt(jon);
    }
}


///////////////////////////////////////////////////////////////////////////////////////////
/* Day 3: Throw*/

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    try {
        if (a > 0) return "YES";
        if (a === 0) return "Zero Error";
        if (a < 0) return "Negative Error";
    } catch (err) {
        console.log(err.message);
    }
}


///////////////////////////////////////////////////////////////////////////////////////////
/* Day 4: Create a Rectangle Object*/

function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.area = a * b;
    this.perimeter = 2 * (a + b);
}



///////////////////////////////////////////////////////////////////////////////////////////
/* Day 4: Count Objects*/

function getCount(objects) {
    var counter = 0;
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].x == objects[i].y) {
            counter++;
        }
    }
    return counter;
}


///////////////////////////////////////////////////////////////////////////////////////////
/* Day 4: Classes*/


/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(sides) {
        this.s = sides;
    }

    perimeter() {
        var peri = 0;

        for (var e of this.s) {
            peri += e;
        }

        return peri;
    }
}


///////////////////////////////////////////////////////////////////////////////////////////
/* Day 5: Inheritance*/

Rectangle.prototype.area = function () {
    return this.w * this.h;
}


class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
}


///////////////////////////////////////////////////////////////////////////////////////////
/* Day 5: Template Literals*/

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */

function sides(literals, ...expressions) {
    const area = expressions[0];
    const perimeter = expressions[1];
    const d = Math.sqrt(perimeter * perimeter - 16 * area);
    const s1 = (perimeter + d) / 4;
    const s2 = area / s1;
    return [s1, s2].sort();
}



///////////////////////////////////////////////////////////////////////////////////////////
/* Day 5: Arrow Functions*/

function modifyArray(nums) {
    var checker = function (n) {
        if (n % 2 == 0)
            return n * 2;
        else
            return n * 3;
    }
    var oddevenArray = nums.map(checker); // map is builtin function that goes through every number in the array and change it according to the checker 
    return oddevenArray;

}




/* ///////////////////////////////////////////////////////////////////////////////////////////
/* Day 6: Bitwise Operators*/

function getMaxLessThanK(n, k) {
    var max = 0;
    var sum;
    for (var b = 1; b <= n; b++) {
        for (var a = 1; a < b; a++) {
            sum = a & b; // that mean 'summ = a' but if 'summ = a | b' that means summ = b;
            if (sum < k) {
                if (sum > max) 
                max = summ;
            }
        }
    }
    return max;
}



/* ///////////////////////////////////////////////////////////////////////////////////////////
/* Day 6: JavaScript Dates*/

function getDayName(dateString) {
    const day = new Date(dateString); // date is a built in object
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekDays[day.getDay()]; //this is a built in function
}


/* ///////////////////////////////////////////////////////////////////////////////////////////
/* Day 7: Regular Expressions I*/
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    var re = /^(a|e|i|o|u).*\1$/;       
                    // the ^ check the first letter of the string and compare it with vowels 
                    //   .* means that there may be characters after that first captured character
                    //    \1$ checks that the last character matches the first captured charcter
    return re;
}
//ref: is www.regexr.com



/* ///////////////////////////////////////////////////////////////////////////////////////////
/* Day 7: Regular Expressions II*/

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    
    var re = '^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])*$';
    /*
     * Do not remove the return statement
     */
    return re;
}

/* ///////////////////////////////////////////////////////////////////////////////////////////
/* Day 7: Regular Expressions III*/

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    var re = /(\d+)(=!\w)*/g   
    //    /g is serching global
    //    \d+ searching for any digits
    //     \w searching for words

    /*
     * Do not remove the return statement
     */
    return re;
}


/* ///////////////////////////////////////////////////////////////////////////////////////////
/* Day 8: Create a Button*/
//HTML side:
// < !--Enter your HTML code here-- >
// < !DOCTYPE html >
//     <html>
//         <head>
//             <meta charset="utf-8">
//                 <title>Button</title>
//                 <script src="js/button.js"></script>
//     </head>
//             <body>
//                 <button type="button" onClick="onClick()"><p><a id="addone">0</a></p></button>
//             </body>
// </html>

//JS side:
var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("addone").innerHTML = clicks;
};


/* ///////////////////////////////////////////////////////////////////////////////////////////
/* Day 8: Buttons Container*/
//HTML side:
// < !DOCTYPE html >
//     <html>
//         <head>
//             <meta charset="utf-8">
//                 <title>Buttons Grid</title>
//                 <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">

//     </head>
//                 <body>
//                     <div id="btns">
//                         <button id="btn1" class="btn">1</button>
//                         <button id="btn2" class="btn">2</button>
//                         <button id="btn3" class="btn">3</button>
//                         <button id="btn4" class="btn">4</button>
//                         <button id="btn5" class="btn">5</button>
//                         <button id="btn6" class="btn">6</button>
//                         <button id="btn7" class="btn">7</button>
//                         <button id="btn8" class="btn">8</button>
//                         <button id="btn9" class="btn">9</button>
//                     </div>
//                     <script src="js/buttonsGrid.js" type="text/javascript"></script>
//                 </body>
// </html>


//JS side:
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

function clockwiseRotation() {
    [btn1.innerHTML,
    btn2.innerHTML,
    btn3.innerHTML,
    btn4.innerHTML,
    btn6.innerHTML,
    btn7.innerHTML,
    btn8.innerHTML,
    btn9.innerHTML] =
        [btn4.innerHTML,
        btn1.innerHTML,
        btn2.innerHTML,
        btn7.innerHTML,
        btn3.innerHTML,
        btn8.innerHTML,
        btn9.innerHTML,
        btn6.innerHTML]
}

btn5.addEventListener("click", clockwiseRotation)



/* ///////////////////////////////////////////////////////////////////////////////////////////
/*Day 9: Binary Calculator*/