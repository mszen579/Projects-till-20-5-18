//Factorialize a Number:


function factorial (num) {

var factor = 1;

if (num<2){
  factor = 1;
}

else  {
   for (var i=num; i>=2; i--){
     factor = factor * i;
   }
   
}
return (factor);
}
factorial (10);

  /* PSEUDO CODE:
To Declare a function factorialize(n) that takes an integer n as input and returns the factorial of that provided integer:
1 - Create a function called 'factorial()'. 
2 - Create a variable called 'factor' starts from 1.
3 - Create a condition that return 1 if the integer is less than 2
4 - Then ELSE we create a loop with variable 'i' equal the  integer 'we need to factoralized' and decreasing by one until 2. inside this loop the 'factor' variable equale to 'factor' multiply 'i'
5 - Call the function 'factorial' for the integer we need to calculate its factorial.


    T-DIAGRAM:
---------------
If:
num=0 or num=1 then the function will return 1 as per condition:

Else:
Var	              |values
i                 |2               |3                |4           and so on
------------------------------------------------------------------
factor            |2*1=2           |3*2*1=6          |4*3*2*1=24  and so on 
printing          |24                                             and so on

//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/