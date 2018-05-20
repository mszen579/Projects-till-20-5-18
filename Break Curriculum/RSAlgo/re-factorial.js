//recursive - Factorialize algorithm:

function reFactorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * reFactorial(n - 1);
    }
}
reFactorial(3);



  /* PSEUDO CODE:
To compute factorialize algorithm recursively:
1 - Create a function called 'reFactorial()'.
4 - Create a condition that creates a break point. in our example will be 1 when n===0
5 - Otherwise this function will return the factorial


    T-DIAGRAM:
---------------
We need to do the factorial for 3:


Var	                           |values
n                              |1                               |2        |3   
------------------------------------------------------------------------------
reFactorial will return        |1 * Factorial(1 - 1)=1          |2        |6


//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/