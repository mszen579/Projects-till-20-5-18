//recursive - Fibonacci algorithm:

function reFibonacci(n) {
   if (n <= 2){
     return 1;
   }else{
     return reFibonacci(n - 2) + reFibonacci(n-1);
   }
}
console.log(reFibonacci(7));
//Returns 21


  /* PSEUDO CODE:
To compute fibonacci algorithm recursively:
1 - Create a function called 'reFibonacci()'.
4 - Create a condition that creates a break point. in our example will be 1 when n===0
5 - Otherwise this function will return the factorial


    T-DIAGRAM:
---------------
We need to do the factorial for 7:


Var	                           |values
n                              |3                                          
-----------------------------------------------------------------------------
reFibonacci will return        |reFibonacci(3 - 2) + reFibonacci(3-1)
                                => reFibonacci(1) + reFibonacci(2)
                                  => 1 + 1 = 2
                                    and so on
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/