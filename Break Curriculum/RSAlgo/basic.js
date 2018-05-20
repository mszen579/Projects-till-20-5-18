//1. Print 1 - 135


for (var i = 1; i <= 135; ++i) {
  console.log(i);
};

  // PSEUDO CODE:
// To print all the numbers from 1 to 135:
// 1 - Create a loop with variable starting from 1 till 135
// 2 - Print these numbers using console.log function

  //   T-DIAGRAM:
// ---------------
// Var	   |values
// i       |1	  |2	|3
// printing|	1	|2  |	3




//-------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------//

//2. Print Odd Numbers 1 - 135

var i;
for (i = 0; i < 136; i++)
if ((i % 2) !== 0)
  console.log(i);

  // PSEUDO CODE:
// To print all the odd numbers from 1 to 135:
// 1 - Create a loop with variable starting from 1 till 135
// 2- Create a condition "number%2 should not equal 0" that allow only odd numbers to be printed
// 3 - Print these numbers using console.log function

    //   T-DIAGRAM:
// ---------------
// Var	      |values
// i          |1	|3	|5
// printing|1	|1  |	3 |5


//-------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------//


//3. Sum of Printed Numbers


var sum = 0;
for (i = 1; i <= 135; i++) {
  sum = sum + i;
  console.log('Number is: ' + i + " Sum: " + sum);
}


  // PSEUDO CODE:
// To print all the numbers from 1 to 135 AND the sum of these numbers that have been printed so far:
// 1 - Create a loop with variable starting from 1 till 135
// 2-  Create a variable that shows the sum of each time the loop is adding up
// 3 - Print these numbers using console.log function and use concatenation for better display

  //   T-DIAGRAM:
// ---------------
// Var	      |values
// i          |1                  |2                  |3
// sum        |1                  |3                  |6
// printing 	|Number is: 1 Sum: 1|Number is: 2 Sum: 3|Number is: 3 Sum: 6


//-------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------//

    
    
//4. Print the elements of an array

var Arr = [1,4,2,2,-1,12];
for (var i=0; i<Arr.length; i++){
    console.log(Arr[i]);
}  
    

  // PSEUDO CODE:
// To print all elements in an ARRAY on the screen:
// 1 - Create a loop with variable starting from 0 and less the length of that array.
// 2 - Print these elements using console.log.

  //   T-DIAGRAM:
// ---------------
// Var	      |values
// i          |1     |2      |3
// printing 	|1     |4      |2


//-------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------//

    
//5. Find Max:

var x = [-2,-3, 4];
var max= -999999999 ;

for (i=0; i<x.length; i++)
{
  if (x[i]>max){
  max=x[i]}
}
  console.log(max);
    
  // PSEUDO CODE:
// To find the maximum value of an array:
// 1 - Create a loop with variable starting from 0 and less the length of that array.
// 2-  Create another variable and lets call it "max" and starting from '-infinity'
// 3 - Create a condintion to compare array elements with 'max'
// 4 - Print the maximum element using console.log.

  //   T-DIAGRAM:
// ---------------
// Var	      |values
// i          |1                      |2                        |3
// max        |-2>max                 |-3>max                   |4>max
// printing 	|max = 4


//-------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------//

    
    
//6. Get Average:

var X = [1, 2, 3];
var avg;
var total = 0;
for (var i = 0; i < X.length; i++) {
  total += X[i];
  avg = total / X.length;

}
console.log(avg);


  // PSEUDO CODE:
// To return the average value of all elements in the array and print it:
// 1 - Create a loop with variable starting from 1 and less the length of that array.
// 2 - Create variable called aver.
// 3 - Calculate the sum of all elements on that array and allocated it to new variable called 'total'
// 4 - Calculate the average of all elements which is equal to 'total / x.length' allocated it to the variable aver.
// 5 - Print 'aver' using console.log.

  //   T-DIAGRAM:
// ---------------
// Var	           |values
// i              |1                      |2                        |3
// total          |0                      |1                        |3
// aver           |0                      |1.5                      |2
// printing aver 	|2


//-------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------//



//7. Eliminate the Negatives

var x = [2,-1,4];
var neg=0;
for (i=0; i<x.length; i++){
if(x[i]<neg){
  x[i]=neg;
}
}
console.log(x);



  // PSEUDO CODE:
// To Eliminate the negative values of in the array and print them as 0s:
// 1 - Create a loop with variable starting from 1 and less the length of that array.
// 2 - Create variable called neg equal to 0.
// 3 - Create a codition that return each negative value into 0
// 4 - Print the array using console.log.

  //   T-DIAGRAM:
// ---------------
// Var	           |values
// i               |1                      |2                        |3
// x[i]            |2                      |-1                       |4
// neg             |na                     |0                        |na
// printing     	 |2                      |0                        |4


//-------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------//
    


//8. Number to String

var values = [2, -3, -2, 12, 0, 5, -5, 100, 23];
for (var i = 0; i < values.length; i++) {
  if (values[i] < 0) {
    values[i] = 'Turing';
  }
}
console.log(values);


  // PSEUDO CODE:
// To change the negative values of in the array and replave them with 'Turing':
// 1 - Create a loop with variable starting from 1 and less the length of that array.
// 3 - Create a codition that return each negative value into 0 and replace it with 'Turing'
// 4 - Print the array using console.log.

  //   T-DIAGRAM:
// ---------------
// Var	           |values
// i               |1                      |2                        |3
// x[i]            |2                      |-3                       |-2
// printing     	 |2                      |'Turing'                 |'Turing' and so on




