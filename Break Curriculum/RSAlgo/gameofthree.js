// Game of three

function gameOfThree(num){
 for (var i=num; i>=1; i--){
   if (num == 1){
     return 1;
   }
   else if (num%3==0){
     console.log(num + ' 0');
     num = num/3;
   }
   else if ((num-1)%3==0){
     console.log(num + ' -1');
     num = (num-1)/3;
   }
    else if ((num+1)%3==0){
      console.log(num+' +1');
      num = (num+1)/3;
    }
   }
}
gameOfThree(10);


  /* PSEUDO CODE:
To create an algorithm for this game we have to:
1 - Create a function called 'gameOfThree()'.
2 - Create a variable called 'num' to represent the random number we need to check
3 - Create a loop with variable 'i' starts at num and decreasing to reach 1
4 - Create a condition that check if num equal 1 then return 1 . 
5 - Create a condition that check if the num divided by 3 with no remainder then print it and next to it 0, and divided by 3
6 - Create a condition that check if the num-1 divided by 3 with no remainder then print it and next to it -1, and divided by 3
7 - Create a condition that check if the num+1 divided by 3 with no remainder then print it and next to it +1, and divided by 3
8 - Call the function 'gameOfThree' for the integer we need to check.


    T-DIAGRAM:
---------------
checking number 10 with our function gameOfThree

Var	              |values
i                 |10               |3                |1           
------------------------------------------------------------------
num               |n/a              |3                |n/a
num-1             |10-1=9           |n/a              |n/a
num+1             |n/a              |n/a              |n/a
printing          |10 + '-1'        |3 + '0'          |1

//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/