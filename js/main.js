// We're using an immediately invoked anonymous function to
// make sure none of our variables are accessible from the console 
(function (){

  // DOM elements
  var start_btn = document.getElementById('start'),
      stop_btn = document.getElementById('stop'),
      reset_btn = document.getElementById('reset'),
      secs_span = document.getElementById('secs'),
      mins_span = document.getElementById('mins');


  // Counters
  var secs = 0,
      mins = 0;


  // Will hold the interval id so we can clear it on stop
  var interval;


  // Main loop that increments the count
  function loop(){
    secs += 1;

    if(secs >= 60){
      // Reset our secs to 0
      secs = 0;

      mins += 1;

      // Draw our mins only when we have incremented it
      mins_span.innerHTML = mins;
    }

    // Draw our secs every time the loop is called
    secs_span.innerHTML = secs;
  }


  // Starts looping the loop function
  function start(){
    console.log('Starting stopwatch');
    interval = setInterval(loop, 1000);
  }


  // Stops our stopwatch
  function stop(){
    // Log about the stop event
    console.log('Stopping stopwatch at ' + mins
      + ' minutes and ' + secs + ' seconds');

    // Clear the interval so it won't loop anymore
    clearInterval(interval);

    secs_span.innerHTML = 0;
    mins_span.innerHTML = 0;

    secs = 0;
    mins = 0;
  }


  // Resets the stopwatch
  function reset(){
    // Make it visual that reset has been procced
    secs_span.innerHTML = 0;
    mins_span.innerHTML = 0;

    // Stop our current stopwatch
    stop();

    // Set our counters to 0
    secs = 0;
    mins = 0;

    // And let's start over
    start();
  }


  // Add events to DOM

  start_btn.onclick = function (){
    start();
  };

  stop_btn.onclick = function (){
    stop();
  };

  reset_btn.onclick = function (){
    reset();
  };

}());