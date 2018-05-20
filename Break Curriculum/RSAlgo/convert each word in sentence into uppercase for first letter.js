//Convert each word in sentence into uppercase for first letter:

function titleCase(str) {
 var lowerC= str.toLowerCase(); //built in function to convert all carecters into lower case
 var newAr=lowerC.split(" ");
 
 for(var i=0; i<newAr.length; i++) { 
  
  var temp="";
  
  for(var j=0; j<newAr[i].length; j++) {
   
   if ( j===0) {
    
    temp+=newAr[i][j].toUpperCase();
   }
   
   else {
    
    temp+=newAr[i][j];    
   }
   
  }
  newAr[i]=temp;
  
  
 } 
  return newAr.join(' ');
  
  
} titleCase('why iT is nOT worKing');  


/* PSEUDO CODE:
To create a function titleCase() that return an array consisting of the largest number from each provided sub-array:
1 - Create a function called titleCase
2 - Create a variable and lets call it 'lowerC' which convert all letters in the sentence into lower case
3 - Create a variable array called 'newAr' which convert the sentence into an string array with sub string arrays for each individual. This will be done using a built in function called Split.
4 - Create a loop with variable 'i' that start from 0 and increasing till the 'newAr length - 1' 
5 - Create a placeholder string called temp.
6 - Create another loop inside the above mentioned loop for the sub string arrays with variable 'j' that start from 0 and increasing till the 'newAr length - 1'
7 - Inside the second loop we create a condition that check if the variable 'j' equal to 0 then the first letter in the sub string will be convert it into uppercase, by using the toUpperCase builtin function, and will be added to the palceholder 'temp' 
8 - Then allocate the place holder 'temp' to the newAr[i]
9 - Finally retun newAr and use the builtin function .join(' ')
10 - Call the function titleCase


    T-DIAGRAM:
---------------
We need to get convert the sentence of 'why iT is nOT worKing' in to uppercase for the first letter of each word only:

Var	              |values
+-----------------+--------------------------------------------------------
lowerC            |why it is not working      
newAr             |[[why],[it],[is],[not],[working]]  
+-----------------+--------------------------------------------------------
i                 |0  
j                 |0                                |1                   |2
temp              |=newAr[i][j]=newAr[0][0]=W       |newAr[0][1]=h       |newAr[0][2]=y
so here temp = Why
---------------------------------------------------------------------------


Var	              |values
+-----------------+--------------------------------------------------------
i                 |1
j                 |0                                |1                   
temp              |=newAr[i][j]=newAr[0][0]=I       |newAr[0][1]=t       
so here temp = It


and so on until we get 'Why It Is Not Working'

//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------*/
