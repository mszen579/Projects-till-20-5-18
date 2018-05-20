//Largest number in an array with sub arrays

function largestArray (arr){
var max=[];
var largest=-Infinity;

for (var i = 0; i < arr.length; i++) {
	

for (var j = 0; j < arr[i].length; j++) 
{
		if(arr[i][j]>=largest)
	{
		largest=arr[i][j];
	}

}
	max.push(largest);
}
return (max);
}

largestArray([[-2,8,13],[10,50,40],[2,60,-1],[15,50,235]]);

/* PSEUDO CODE:
To Declare a function largestArray() that return an array consisting of the largest number from each provided sub-array:
1 - Create a function called largestArray
2 - Create a variable empty array called max[].
3 - Create a variable largest = -infinity.
3 - Create a loop with variable 'i' that start from 0 and increasing till the array length
4 - Create another loop inside the above mentioned loop for the sub arrays with variable 'j' that start from 0 and increasing till each sub array length.
5 - Inside the second loop we create a condition that check if the element with the location of [i][j] is greater than variable 'largest' then push it into array max[]
8 - Finally retun array max[]
9 - Call the function for the array [[-2,8,13],[10,50,40],[2,60,-1],[15,50,235]].


    T-DIAGRAM:
---------------
We need to get the largest array from the array [[-2,8,13],[10,50,40],[2,60,-1],[15,50,235]]

Var	              |values
i                 |0 "i.e the first sub array"         |           |  
j                 |0        						   |1          |2   
---------------------------------------------------------------------------
arr[i][j]		  |-2         						   |8          |13
largest= -infinity|-2		 						   |8          |13
=>
max=[]			  |13




Var	              |values
i                 |1 "i.e the second sub array"        |           |
j                 |0        						   |1          |2
---------------------------------------------------------------------------
arr[i][j]		  |10         						   |50         |40
largest= -infinity|10		 						   |40         |50
=>
max=[]			  |50



and so on:

=> the max array will be [ 13, 50, 60, 235 ]
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/
