function selectionSort(arr){
  var minIdx, temp, 
      len = arr.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
       if(arr[j]<arr[minIdx]){
          minIdx = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}
selectionSort([2,5,-3,11]);


  /* PSEUDO CODE:
To use the selectio sort mechanism:
1 - Create a function called selectionSort()
2 - Create a variables minIdx, temp, and Array variable arr
3 - Create a loop with variable 'i' that start from 0 and increasing till the array length
4 - Sllocate i to minIdx variable
4 - Create another loop inside the above mentioned loop with variable 'j' that start from i+1 and increasing till the 'array length - 1'
5 - Inside the second loop we create a condition that check if the arr[j] is smaller than following arr[minIdx] then allocate  arr[i] to the variable 'temp' 
6 - And arr[minIdx] to the current arr[i]
7 - And allocate the temp to arr[minIdx]
8 - Finally retun that arr
9 - Call the function selectionSort for the given array [2,5,-3,11].


    T-DIAGRAM:
---------------
We need to check the array [2,1,-4,7,100]

Var	              |values
+-----------------+----------------------
minIdx            |2    =>    -3  
temp              |2          
i                 |0
j                 |0           |1            |2           |3        |4
arr               |[2,5,-3,11] |[-3,5,-3,11] |[-3,5,2,11]

and so on until the array got sorted

//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/
