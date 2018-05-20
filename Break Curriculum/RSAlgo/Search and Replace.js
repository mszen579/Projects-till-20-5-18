//Search and Replace


function myReplace(str, before, after) {
  var newstr = [];
  newstr = str.split(' ');
  for (var i = 0; i < newstr.length; i++) {
    if (newstr[i] === before) {
      newstr[i] = after;
    }
  }

  return newstr.join(' ');
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");



  /*PSEUDO CODE:
To perform a search and replace on the sentence using the arguments provided and return the new sentence:
1 - Create a function called myReplace with three elements string, word before change, word after change.
2 - split the needed string into elements using built in function split(' ')
3 - Create a loop to go though each element inside the needed string
4 - Create a codition that check the required element to be changed and replace it with the new one
5 - Call the function myReplace with its arguments

    T-DIAGRAM:
    changing the string "jumped" in the sentence "A quick brown fox jumped over the lazy dog" into "leaped"
---------------
Var	           |values
i              |0                      |1                        |2                        |3                       |4
x[i]           |no change              |no change                |no change                |no change               |change into 'leaped'
printing     	 |A                      |quick                    |brown                    |fox                     |leaped
*/



