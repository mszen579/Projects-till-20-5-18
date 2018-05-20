

function btnplus() 
{
    document.Calculator.display.value += "+";
    document.Calculator.display.style.textAlign = "right";
    navigator.vibrate(80); //Vibration
}

function btnsub() 
{
    document.Calculator.display.value += "-";
    document.Calculator.display.style.textAlign = "right";
    navigator.vibrate(80); //Vibration        
}

function btnmult() 
{
    document.Calculator.display.value += "*";
    document.Calculator.display.style.textAlign = "right";
    navigator.vibrate(80);        
}

function btnmod() 
{
    document.Calculator.display.value += "%";
    document.Calculator.display.style.textAlign = "right";
    navigator.vibrate(80);        
}

//   adding point
function btndot() 
{
    document.Calculator.display.value += ".";
    document.Calculator.display.style.textAlign = "right";
    navigator.vibrate(80);        
}

function btndiv() 
{
    document.Calculator.display.value += "/";
    document.Calculator.display.style.textAlign = "right";
    navigator.vibrate(80);        
}

function btnclear() 
{
    document.Calculator.display.value = "";
    document.Calculator.display.style.textAlign = "right";
    navigator.vibrate(80);        
}

function del() 
{
    var x = Calculator.display.value;
    Calculator.display.value = x.substring(0, x.length - 1);
    navigator.vibrate(80);         
}

//    adding PI
function pie() 
{
    document.Calculator.display.value = Math.PI;
    navigator.vibrate(80);       
}

//    answer script
function equal() 
{
    Calculator.display.value = eval(Calculator.display.value);
    navigator.vibrate(80);       
} 
