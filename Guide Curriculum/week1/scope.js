function foo (){//a function which is an inner in side some function and in window and hence globally
     quux = 1;
    
    return function zip(){ //nesting function
        var quux = 2;//var quux inside function zip is a 'shadow' of var quux in function foo
        var bar = true;
        
    }
    return zip;// this we call a closure
    //var bar = true; //lexically scoped named bar
    
}

///////////////////////////
function foo() {
    var bar;
}

//////////////////////////
(global)
 ↑
 |
foo()
var bar
↑ 
| 
zip()
var quux
/////////////////////
(global)
quux
↑
|
foo()
var bar
↑ 
|
zip()
var quux
/////////////////////
 foo()
 var bar
 return zip
 ↑ 
 |
zip()
 bar = true
 //////////////////