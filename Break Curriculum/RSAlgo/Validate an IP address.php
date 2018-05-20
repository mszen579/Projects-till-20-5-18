// Validate an IP address

<?php

function validIP($arr){
if((count($arr)>0) && (count($arr)<5)){

for($i=0; $i<4; $i++){

if(($arr[$i]>=0) && ($arr[$i]<=255)){
  echo "(Vaild IP part)" . " ";
}

else{
  echo "(Invaild IP part)" . " ";
}
}
}
else{
  echo 'This is not an IP address format, IP address has to have 4 part';
}
}
validIP([-11,244,1,-9]);


?>

////////////////////////////////////////////////////////////////////////////////////////////////////

//Other Solution:

<?php
function validIP($arr){
if((count($arr)>0) && (count($arr)<5)){


if(($arr[0]>=0) && ($arr[$i]<=255) && ($arr[1]>=0) && ($arr[1]<=255) && ($arr[2]>=0) && ($arr[2]<=255) && ($arr[3]>=0) && ($arr[3]<=255)){
  echo "This is a valid IP address";
}

else{
  echo "Sorry, This is NOT a valid IP address";
}

}
else{
  echo 'This is not an IP address format, IP address has to have 4 part';
}
}
validIP([11,244,1,9,10]);
?>
//////////////////////////////////////////////////////////////////////////////////////////////////

  /* PSEUDO CODE:
To validate an IP address format:
1 - Create a function called validIP
2 - Create a condition to check that the IP address has only 4 parts 
3 - Create a loop to check every part of the IP address. 
4 - Create a condition inside the loop, that check whether each part is greater than 0 and smaller than 255 and echo the result
4 - Call the function validIP



    T-DIAGRAM:
---------------
To validate an IP address format [100,255,-4,7]

Var	                                      |values
+-----------------------------------------+-----------------------
$arr                                      |[100,255,-4,7]  
Condition to check the validity           |100 is a valid IP part |255 is a valid IP part |-4 is NOT a avalid IP part |7 is a valid IP part

=> it is not a valid IP address

//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/
