# rsonewinter18mzn

Closures and the Scope Chain in JavaScript:
the browser, global in node), which sits at the top of every scope chain:

        (global)
           ↑
           |
       someFunc()
           ↑
          / \
         /   \
        /     \
    inner()  inner2()
               ↑
               |
             foo()


 - An example scope chain:

    someFunc()
        ↑
        |
     inner()
        ↑
        |
      foo() 
if inner is accessing a variable from the someFunc() we say that inner is a 'Closure'

/////////////////////////////////////////////////////////////////////////////////////
- The javascript runtime follows these steps to assign a variable:

 1) Search within the current scope.
 2) If not found, search in the immediately outer scope.
 3) If found, go to 6.
 4) If not found, repeat 2. Until the Global Scope is reached.
 5) If not found in Global Scope, create it (on window / global objects).
 6) Assign the value.
 
///////////////////////////////////////////////////////////////////////////////////// 

Memory in Javascript is managed automatically by the runtime, most use a variation of Mark & Sweep.
Mark & Sweep algorithm works by:
marking references to memory (variables, functions, etc) which are still
reachable from active code. 

