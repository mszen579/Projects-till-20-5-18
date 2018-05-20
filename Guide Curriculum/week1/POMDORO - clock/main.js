// run our jquery
$(document).ready(function(){
var buzzer = $("#buzzer")[0];// it makes the audio file ready when the document is ready and the [0] is because this is an array and we chosen the first element in it
var count = parseInt($("#num").html()); //This count is for the session .we use pareInt to covert into number
var breakTime = parseInt($("#breakNum").html()); //This count is for the session . we use pareInt to covert into number
$('#reset').hide(); // this code will hide the reset button when refresh the page

////////////////////////configuring the reset button/////////////////////////////////////////////////
$("#reset").click(function () {
    count = 5;
    breakTime = 5;
    $("#num").html(count);
    $("#breakNum").html(breakTime);
    $("#start, #minus5Clock, #add5Clock, #add5Break, #minus5Break, #breakNum, #num, #title1, #title2").show();
    $('#reset').hide();
});



//////////////////////the session time///////////////////////////////////////////////////////////////
$('#minus5Clock').click(function () { // click the button 'minus5Clock' this function will fire minus it will minus 5 each time
    if(count>1){ //to prevent it from going less than 5 min
            count -= 1;
            $("#num").html(count); // this line means change the html to show the count variable
    }
    
});

$('#add5Clock').click(function () { // click the button 'adds5Clock' this function will fire add it will minus 5 each time
            count += 1;
            $("#num").html(count);
});


//////////////////////the Break time///////////////////////////////////////////////////////////////
$('#minus5Break').click(function () { // click the button 'minus5Clock' this function will fire minus it will minus 5 each time
    if (breakTime > 1) {// to prevent it from going less than 5 min
        breakTime -= 1;
        $("#breakNum").html(breakTime); // this line means change the html to show the count variable
        console.log(breakTime);
    }

});

$('#add5Break').click(function () { // click the button 'adds5Clock' this function will fire add it will minus 5 each time
    breakTime += 1;
    $("#breakNum").html(breakTime);
    console.log(breakTime);
});



////////////////////////////////////////The countdown timer ////////////////////////////////////////////////

$('#start').click(function () { // start bottun
    var counter = setInterval(timer, 1000); //setInterval is a built in function it takes any callback fucntion and set a time in mill sec
    //adding minutes to the counter
    count *= 60;
    breakTime *= 60;
    function timer() {// this function is decrement by one
        count -= 1;
       
        // hide variables
        $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2").hide(); // this is to hide all unnecessary buttoms and infos
        $("#timeType").show();
        $('#timeType').html("Session Time, Counting down:"); // this will log out "Counting down:"
        
        
         if (count === 0) {
            buzzer.play();
            clearInterval(counter); //this is a builtin function to stop the counter
            var startBreak = setInterval(breakTimer, 1000);
            $('#num').hide();
        }


        //adding minutes to the counter
        
        if(count%60>=10){
            $("#num").html(Math.floor(count/60)+":"+count%60);
        }
        else{
             $("#num").html(Math.floor(count / 60) + ":" +"0"+count % 60);
        }

           
////////////////////////////////////////The Break session countdown timer ////////////////////////////////////////////////
           
           function breakTimer() {
               
               $("#timeType").html("Break Time:"); // this is to show the break session in the HTML
               $("#breakNum").show(); // this is to show the break session in the HTML
               $("#timeType").show();
                 
               breakTime -= 1;
               if (breakTime === 0) {
                   clearInterval(startBreak);
                   buzzer.play();
                   $('#reset').show();
                   $('#breakNum').hide();
                    $('#timeType').hide();
                    
               }

              
            }
    
                    //adding minutes to the counter

                    if (breakTime % 60 >= 10) {
                        $("#breakNum").html(Math.floor(breakTime / 60) + ":" + breakTime % 60);
                    } else {
                        $("#breakNum").html(Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60);
                    }
        }
    
});



});

