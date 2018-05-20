// Sum of all prime numbers:

function isPrime(val){

//test if number is prime
for(var i=2; i < val; i++){
 if(val % i === 0){
   return false;
 }
}
return true;
}


function sumPrimes(num) {
var sum = 0;

//loop through all numbers from 2 to input value

for(var i=2; i <= num; i++){  

 //sum only prime numbers, skip all others
 if(isPrime(i)){
   sum += i;
 }
}
return sum;
}
sumPrimes(10)



  /* PSEUDO CODE:
To get the sum of all prime numbers:
Step -1-
1 - Create a function called 'isPrime()' to check whether this number is prime or not.
2 - Create a variable called 'val' for the number we need to check
3 - Create a loop with variable 'i' starts at 2 and increasing to reach 'val'
4 - Create a condition to check if the val divided by i equal 0 then return not prime, else the val is prime

Step -2-
1 - Create a function called 'sumPrime()' to sum all prime numbers.
2 - Create a variable called 'num'
3 - Create a variable called 'sum' to calculate the sum of all primes
4 - Create a loop with variable 'i' starts at 2 and increasing to reach 'num'
5 - Create a condition that check if num is prime using the above declared function "isPrime()".
6 - Then Sum = Sum + i
7 - Return sum
8 - Call the function sumPrimes()


    T-DIAGRAM for step -1-:
---------------
checking number 5 is prime using isPrime function

Var	              |values
i                 |2            |3         |4       |5
--------------------------------------------------------
val               |5            |5         |5       |5
val/i             |2.5          |1.67      |1.25    |1
            
printing          |is prime        




    T-DIAGRAM for step -2-:
---------------
sum all primes using function sumPrimes

Var	              |values
i                 |2            |3         |4         |5
------------------------------------------------------------
isPrime           |true         |true      |false     |true
sum               |2            |5         |N/A       |10
printing          |10

//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/