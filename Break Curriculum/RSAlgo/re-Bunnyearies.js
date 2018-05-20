//recursive-Bunnyearies:

function bunnyEaries(n){
  if (n===0){
    return 0;
  }
  else{
return (2 + bunnyEaries(n-1)); 
  } 
}

bunnyEaries(4);


  /* PSEUDO CODE:
To compute the total number of ears across all the bunnies recursively:
1 - Create a function called 'bunnyEaries()'.
4 - Create a condition that creates a break point. in our example will be 0 when n===0
5 - Otherwise this function will return the total number of ears for all considered bunnies


    T-DIAGRAM:
---------------
We need to check for 4 bunnies


Var	                           |values
n                              |1                               |2        |3        |4
----------------------------------------------------------------------------------------
bunnyEaries will return        |2 + bunnyEaries(1-1)=2          |4        |6        |8


//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/