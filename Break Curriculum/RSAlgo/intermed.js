//1. Addition : Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. 


var total = 0;
for (var i = 200; i <= 2700; i++) {
    if ((i % 3 == 0 || i % 5 == 0) && (i % 15 != 0)) {
        total = total + i;
    }

}
console.log(total);



  /* PSEUDO CODE:
To add all values under this mentioned condition:
1 - Create a loop with variable starting from 200 and ends at 2700.
2 - Create a variable called 'total' to hold the sum of all values.
3 - Create a codition that extract all values that are divisible by 3 or 5, but not both 3 and 5
4 - Print the 'total' using console.log.

    T-DIAGRAM:
---------------
Var	           |values
i               |200                    |201                      |202
total           |401                    |605                      |810 and so on
printing total  |1450197



//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/


//2. Shift the Values:  Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. 

var b = new Array;
var a = [2, 1, 6, 4, -7];
for (i = a.length - 1; i >= 0; i--) {
    b.push(a[i]);
}
console.log(b);



  /* PSEUDO CODE:
To add all values under this mentioned condition:
1 - Create a loop with variable starting from 'array length - 1' and decreasing till 0.
2 - Create a variable array to hold the new array.
3 - push the new elements to the new array, using the built in function 'push'
4 - Print the new array using console.log.

    T-DIAGRAM:
---------------
Var	                    |values
i                        |5                  |4                   |3
new array element        |-7                 |4                   |6 and so on
printing new array       |[ -7, 4, 6, 1, 2 ]


//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/


//3. FizzBuzz:  Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".

var X = [];

for (var i = 1; i < 136; i++) {

    if (i % 15 === 0) {

        X.push("FizzBuzz");

    }

    else if (i % 3 === 0) {

        X.push("Fizz");

    }


    else if (i % 5 === 0) {

        X.push("Buzz");

    }

    else {
        X.push(i);
    }

} console.log(X);


  /* PSEUDO CODE:
To inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz":
1 - Create a loop with variable starting from 1 and till 135.
2 - Create a condintion that push 'FizzBuzz' string every time the number is divided by 15 = 'x * 5'
3 - Create a condintion that push 'Fizz' string every time the number is divided by 3 only
4 - Create a condintion that push 'Fizz' string every time the number is divided by 5 only
5 - Print using console.log.

    T-DIAGRAM:
---------------
Var	                    |values
i                        |1                  |2                  |3                      |4                  |5
printing                 |1                  |2                  |Fizz                   |4                  |Buzz and so on




//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/



//4. Fibonacci: For a fibonacci sequence starting at 0 and 1 add up all the values below 100. 


var a = 0;
var b = 1;
var fibona = 1;

for (var i = 2; i < 100; i++) {
    console.log(fibona);
    fibona = a + b;
    a = b;
    b = fibona;
}



  /* PSEUDO CODE:
to create a fibonacci sequence:
1 - Create variable for the first number starting from 0 
2 - Create variable for the second number starting from 1 
3 - Create variable called 'fibona' for example 
4 - Create a loop with variable 'i' starting from 1 and till 100.
5 - Print variable 'fibona' using console.log.
6 - each time fibon variable is the sum of the first and the second variables, when second variable hold the value of the first variable, then the fibona variable with hold the value of the second variable and so on



    T-DIAGRAM:
---------------
Var	             |values
i                 |2                  |3                  |4                   |4                  |6 and so on
-------------------------------------------------------------------------------------------------------------
a                 |0                  |1                  |1                   |2                  |3 and so on
b                 |1                  |1                  |2                   |3                  |5 and so on
fibona            |1                  |1                  |2                   |3                  |5 and so on


//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/



//5.Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

var x = [1, -2, 4, 1];
var y = [];

for (var i = 0; i < x.length; i++) {
    if (x[i] >= 0) {
        y.push(x[i]);

    }

}
console.log(y);




  /* PSEUDO CODE:
to remove the negative numbers from an array:
1 - Create an empty array y[] for example; 
2 - Create a loop with variable 'i' starting from 0 and less than the array length.
5 - Create a condition that allow only elements in an array that are greater than 0 are to be pushed into the new array y[]
6 - print the new array using console.log



    T-DIAGRAM:
---------------
Var	             |values
i                 |0                  |1                  |2                   |3 
------------------------------------------------------------------------------------
x[i]              |1                  |-2                 |4                   |1   
printing          |1                  |no output          |4                   |1


//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/



//*6-  Communist Censorship

// Given the array of strings X = ['Man', 'I','Love','The','Restart','Bootcamp'], replace every letter of the word Bootcamp with *, so the output would be ['Man', 'I','Love','The','Turing','********'].


var X = ['man', 'i', 'love', 'the', 'bootcamp', 'restart-network'];
var y = [];
for (var i = 0; i < X.length; i++) {
    if (X[i] === 'bootcamp') {
        X[i] = '*********';
        y.push(X[i]);
    }
    else {
        y.push(X[i]);
    }
} console.log(y);


  /* PSEUDO CODE:
to convert all charcts in 'bootcamp' into stars:
1 - Create an empty array y[] for example. 
2 - Create a loop with variable 'i' starting from 0 and less than the array length.
5 - Create a condition that check each string and if this string is equal to 'bootcamp' convert it into to stars to for each charct and push it into the new array.
6 - print the new array using console.log



    T-DIAGRAM:
---------------
Var	              |values
i                 |0               |1                |2                 |3               |4 and so on
-------------------------------------------------------------------------------------------------------
x[i]              |man             |i                |love              |the             |bootcamp and so on
printing          |man             |i                |love              |the             |******** and so on


//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/