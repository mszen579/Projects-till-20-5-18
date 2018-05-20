// Max product using PHP

<?php

function maxProduct(){
$arr = array(2, 1, -4, 7, 100);
sort($arr);
return ($arr[count($arr)-1] * $arr[count($arr)-2]);
}
print maxProduct();


?>



  /* PSEUDO CODE:
To get a Max of product:
1 - Create a function called maxProduct
2 - Create a variable array 
3 - Use built in function to sort this array from smaller to greater
4 - Return the multiplication of the two last elements



    T-DIAGRAM:
---------------
We need to get the max product of [2,1,-4,7,100]

Var	                 |values
+--------------------+-----------------------
$arr                 |(2, 1, -4, 7, 100)  
sort $arr            |(-4, 1, 2, 7, 100)
return               |7*100=700

//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/
