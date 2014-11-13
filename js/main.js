// DOM elements
var start_btn = document.getElementById('start'),
    stop_btn = document.getElementById('stop'),
    secs_span = document.getElementById('secs'),
    mins_span = document.getElementById('mins'),
    reset_btn = document.getElementById('reset');

(function (){

  // Counters
  var secs = 0,
      mins = 0;


  // Gets our interval id so we can clear it on stop
  var interval;


  // Main loop that increments the count
  function loop(){
    secs += 1;

    if(secs >= 59){
      secs = 0;
      mins += 1;
      mins_span.innerHTML = mins;
    }

    secs_span.innerHTML = secs;
  }


  // Starts our stopwatch
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
  }


  // Add events to DOM

  start_btn.onclick = function (){
    start();
  };

  stop_btn.onclick = function (){
    stop();
  };

  reset_btn.onclick = function (){

    // Make it visual that a reset has procced
    secs_span.innerHTML = 0;
    mins_span.innerHTML = 0;

    // Stop our current stopwatch
    stop();

    // Set our counters to 0
    secs = 0;
    mins = 0;

    // And let's start over
    start();
  };

}());