//Angle on the clock

<?php
function AngleOfClock($hours, $minutes) { 
  $hours = $hours % 12;
  
      $hourMinPart = 0.5 * $minutes; 
      $hourHourPart = 30 * $hours; 
      $minAngle = 6 * $minutes; 
      $totalAngle = abs($hourMinPart + $hourHourPart - $minAngle); 
      
        if ($totalAngle<=180){
        echo $totalAngle .' ' .'degrees'; 
        }
        
        else{
        echo (360 - $totalAngle) .' ' .'degrees'; 
        } 
  
}

AngleOfClock(10, 00);
?>

  /* PSEUDO CODE:
To get the Angle on the clock:
1 - Create a function called AngleOfClock
2 - Divid the hours by 12
3 - Create variables for minutes and hours
4 - Allocate math formulas to define hours and the minutes parts
5 - Apply a built in function 'abs'  to calculate the total angle corresponding to the chosen hour
6 - Create a condition to check and echo only the angle between the clock hands
7 - Call the function AngleOfClock



    T-DIAGRAM:
---------------
We need to get the AngleOfClock of (10, 30)

Var	                                      |values
+-----------------------------------------+-----------------------
$hours                                    |10 
$minutes                                  |30
the angel is less than 180                |135 degrees

//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/







