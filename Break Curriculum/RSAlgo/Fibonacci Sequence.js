function fibo(n){
  var first = 0;
  var second =1;
  
  var fibona=0;
  var array=[];
  
for (i=1; i<=n; i++){
  array.push(fibona);
  fibona= first + second;
  
  first= second;
  second = fibona;
  
} 
  return array[n-1];
} 
fibo(4);


  /* PSEUDO CODE:
to create a fibonacci sequence:
1 - Create a function called fibo()
2 - Create variable for the first number starting from 1 
3 - Create variable for the second number starting from 1 
4 - Create variable called 'fibona' for example which start at 0
5 - Create an array variable array=[] 
6 - Create a loop with variable 'i' starting from 1 and increasing till 'n', the number we need to check.
7 - each time we push fibona variable into the array[]. As first + second allocated to fibona, when second variable hold the value of the first variable, then the fibona variable with hold the value of the second variable and so on
8 - Return the array[n-1] 'fibona' using console.log.
9 - Call the function fibo(n)




    T-DIAGRAM:
---------------
fibonacci sequence for number 4 is:

Var	              |values
i                 |1                  |2                  |3                   |4                
--------------------------------------------------------------------------------------
first             |0                  |1                  |1                   |2                 
second            |1                  |1                  |2                   |3                  
fibona            |1                  |2                  |3                   |5                 
array=[n-1]       |1                  |1                  |2                   |3

=> 3
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/

