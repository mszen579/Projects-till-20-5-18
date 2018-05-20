function bubbleSort (arr){
  var plachHolder = 0;
  
  for (var i=0; i<arr.length; i++){
    for (var j=0; j<arr.length; j++){
     if (arr[j]>arr[j+1]){
       plachHolder = arr[j];
       arr[j] = arr[j+1];
       arr[j+1] = plachHolder;
     }
   } 
  } return arr;
  
  
}
bubbleSort([2,1,-4,7,100]);

  /* PSEUDO CODE:
To Declare a function bubbleSort() sorts any array using the bubble sort mechanism:
1 - Create a function called bubbleSort
2 - Create a variable as a placeholder which start as 0.
3 - Create a loop with variable 'i' that start from 0 and increasing till the array length
4 - Create another loop inside the above mentioned loop with variable 'j' that start from 0 and increasing till the array length too
5 - Inside the second loop we create a condition that check if the element 'j' is bigger than following element 'j+1' then allocate  element 'j' to the palceholder
6 - And following element 'j+1' to the current array element 'j'
7 - And allocate the placeholder to following element 'j+1'
8 - Finally retun that array
9 - Call the function for the given array [2,1,-4,7,100,-3].


    T-DIAGRAM:
---------------
We need to check the array [2,1,-4,7,100]

Var	              |values
i                 |0          |           |  
j                 |0          |1          |   
-----------------------------------------------------
plachHolder       |0          |2               
arr[j]            |2          |1              
arr[j+1]          |1          |2            

the array will be [1,2,-4,7,100]
-----------------------------------------------------

Var	              |values
i                 |0          |             
j                 |           |1             
-----------------------------------------------------
plachHolder       |0          |2               
arr[j]            |2          |-4               
arr[j+1]          |-4         |2              

the array will be [1,-4,2,7,100]
-----------------------------------------------------
as the elements are sorted so there is no need to repeat the T-diagram 
-----------------------------------------------------
here we repeat the above steps but for i=1:
-----------------------------------------------------
Var	              |values
i                 |           |1          |
j                 |0          |1          |
-----------------------------------------------------
plachHolder       |0          |1
arr[j]            |1          |-4
arr[j+1]          |-4         |1

the array will be [-4,1,2,7,100]
------------------------------------------------------
we repeat until i and j reaches array.length-1 and return the array sorted as:
[-4,1,2,7,100]

//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/
