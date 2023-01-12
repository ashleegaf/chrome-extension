// add a DOMContentLoaded event listener to document
let pause = false;
// store a reference to the timer and timer button
const timer = document.getElementById('timer');
const timerBtn = document.getElementById("action");

document.addEventListener('DOMContentLoaded', () => {
  // Initialize timer's text to 25 mins
  timer.innerHTML = '01 : 00';
  // Add a click event listener to timer button
  // To check if start or pause is activated
  timerBtn.addEventListener('click', () => {
    if (timerBtn.innerHTML === "START") {
      timerBtn.innerHTML = "PAUSE";
      countDown();
    } else if(timerBtn.innerHTML === "PAUSE"){
      pause = true;
      timerBtn.innerHTML = "CONTINUE";
    } else if(timerBtn.innerHTML === "CONTINUE"){
      pause = false;
    }
  })
})

let distanceLog = [];
function countDown() {
  // console.log("STARTED countDown")
  // storing the time when the timer button is clicked
  let oldDateObj = new Date();
  // Store the time for setting time to now + 25 minutes
  let end = new Date();
  end.setTime(oldDateObj.getTime() + (1 * 60 * 1000));
  timer.innerHTML = '00 : 59';
  // Update the count down every 1 second
  function countingTime() {
    // If pause is not on
    if (!pause) {
      // Get current time
      let now = new Date().getTime();
      // Find the distance between now and the countdown date
      let distance;
      if (!distanceLog.length) {
        distance = end - now;
        distanceLog.push(distance);
      } else {
        // Access the time the timer was paused on to continue countdown 
        distance = distanceLog[distanceLog.length - 1] - 1000;
        distanceLog.push(distance);
      }
      // Time calculations for minutes and seconds
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      // Display the time in the timer element
      timer.innerHTML = minutes + " : " + seconds;
    
      // If the countdown is finished
      // cancel setInterval(), play alarm, and open popup
      if (distance < 1000) {  
        clearInterval(x);
          document.getElementById('audio').play();
          timerBtn.innerHTML = "START";
      }
    }
  }
  let x = setInterval(countingTime, 1000);
}
// extensions:
// timer should run in background
// add popup with an event listener on 'x' button to close popup