//Find length of the longest word in the provided sentence:

var str = "The quick brown fox jumped over the lazy dog";
var max = 0;
function findLongest(str){
  
  var arrStr = str.split(" ");

  for(i=0; i<arrStr.length; i++){
    
    if (arrStr[i].length>max){
      
     max = arrStr[i].length;
      
    }
  } 
  return max;
}
console.log(findLongest(str));



/* PSEUDO CODE:
To Declare a function findLongest() that return the length of the longest word in the provided sentence:
1 - Create a function called findLongest
2 - Create a variable called max equal 0.
3 - Apply a built in function to the provided sentence called Split. this function will split each string into elements and convert it into an array and allocate it to a variable called 'arrStr'
3 - Create a loop with variable 'i' that start from 0 and increasing till the arrStr length.
5 - Inside this loop we create a condition that check if the string longest length is greater than variable 'max' then alocate it to the variable 'max'
8 - Finally retun max
9 - Call the function for the string variable str = "The quick brown fox jumped over the lazy dog".


    T-DIAGRAM:
---------------
We need to find the length of the largest string in the sentence "The quick brown fox jumped over the lazy dog"

Var	              |values
i                 |0       |1          |2 
max               |0       |3          |5   and so one
--------------------------------------------------------------------------
=> the max sting length is 6 chart

//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/
