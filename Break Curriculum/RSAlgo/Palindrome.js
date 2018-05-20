// Palindrome Checker:


function isPalindrome(str){
  var reverseStr='';
  for (i=str.length-1; i>=0; i--){
    reverseStr = reverseStr + str[i];// as we can't use push in strings.
  }
  if (str === reverseStr){return "Palindrom"}
  else {return "Not Palindrom"}
}
isPalindrome ("moem");

  /* PSEUDO CODE:
To Declare a function isPalindrome(string) that takes a string and check whether it is palindrome or not:
1 - Create a function called 'isPalindrome()'.
2 - Create a string variable called 'reverseStr' for example.
3 - Create a loop with variable that start from strng length and decreasing till 0
3 - Inside this loop the variable reverseStr will accumulate character by character until it revers the original given string
4 - Create a condition that check the new revered string if it identical to the original string and return true of false
5 - Call the function 'isPalindrome' for the required string.


    T-DIAGRAM:
---------------
We need to check string 'MOM'


Var	              |values
i                 |2          |1           |0           
------------------------------------------------------------------
reverseStr        |m          |mo          |mom 
function returns  |'Palindrom'

//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/
