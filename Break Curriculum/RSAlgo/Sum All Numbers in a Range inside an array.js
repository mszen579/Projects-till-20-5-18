//Sum All Numbers in a Range inside an array:

function sumAll (arr){
  var temp = 0;
  var ph=0;
  if (arr[0]>arr[1]){
      ph = arr[0];
      arr[0]=arr[1];
      arr[1]=ph;
    }
    
  for (i=arr[0]; i<=arr[1]; i++){
    
    temp = temp + i;
  }return temp;
} 
sumAll([5,1]);



/* PSEUDO CODE:
To create a function sumAll() that return the sum of  of those two numbers and all numbers between them:
1 - Create a function called sumAll()
2 - Create a variable called temp which equal to 0
3 - Create a variable as placeholder called ph which equal to 0 too
3 - Create an array called arr
3 - Create a condition that check if this first element in the array 'arr' is smaller than the following element then swap between these elements 
4 - Create a loop with variable 'i' that start from arr[0] and increasing untill reaches arr[1].
8 - Then the temp variable will get the sum of all the range : temp = temp + i
9 - Finally call the function sumAll.


    T-DIAGRAM:
---------------
We will get the sum of an array arr = [5,1];
first we apply the condition and the new array will be arr = [1,5]

Var	              |values
i                 |1        |2         |3         |4          |5
arr[i]            |1        |2         |3         |4          |5
temp = 0          |1        |3         |6         |10         |15
---------------------------------------------------------------------------
=> sumAll([5,1]) = 15
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/

