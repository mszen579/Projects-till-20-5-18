function sumOfOddFibo(num) {

    var a = 0;
    var b = 1;
    var fibona = 1;
    sum = 0;
    for (var i = 0; i <= num; i++) {
        if (fibona % 2 !== 0)
            sum = sum + fibona;
        fibona = a + b;
        a = b;
        b = fibona;

    }
    return (sum);
}
sumOfOddFibo(5);


  /* PSEUDO CODE:
to create a sum of all odd fibonacie numbers:
1 - Create a function called sumOfOddFibo()
2 - Create variable for the first number starting from 0 
3 - Create variable for the second number starting from 1 
4 - Create variable called 'fibona' for example 
5 - Create a variable called sum to sum all the odd numbers
6 - Create a condition that define the odd numbers
7 - Then sum = sum + fibona
8 - For each time fibon variable is the sum of the first and the second variables, when second variable hold the value of the first variable, then the fibona variable with hold the value of the second variable and so on
9 - return sum
10 - Call the function sumOfOddFibo


    T-DIAGRAM:
---------------
calculating the sum of odd numbers in fibonacie for the first 5 elements:

Var	              |values
i                 |0                  |1                  |2                   |3                  and so on
-------------------------------------------------------------------------------------------------------------
a                 |0                  |1                  |1                   |2                  and so on
b                 |1                  |1                  |2                   |3                  and so on
fibona            |1                  |1                  |2                   |3                  and so on
sum = 0           |1                  |2                  |not odd             |5                  and so on

the function sumOfOddFibo(5) return 10

//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/
