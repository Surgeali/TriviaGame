// on click start the timer
// intial time remaining should be 30 seconds
// once the game starts the time remaining should decrease
// if the time remaining equals zero the game should end
$(document).ready(function() {
    
    setTimeout(thirtySeconds, 30000);
    
    function thirtySeconds() {
        console.log(thirtySeconds);
        
        $("#timer").append("<h2>Time's Up!</h2>");
        console.log("time is up");
    };

})
// $("#timer").setTimeout({
//     setTimeout.
