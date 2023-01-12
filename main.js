// add a DOMContentLoaded event listener to document
document.addEventListener('DOMContentLoaded', () => {
// store a reference to the timer
const timer = document.getElementById('timer');
// store a reference to the timer button
const timerBtn = document.getElementById("action");
// add a click event listener to timer button
timerBtn.addEventListener('click', () => {
  if (timerBtn.innerHTML === "Start") {
    timerBtn.innerHTML = "Pause";
  } 
//   else {
//     timerBtn.innerHTML = "Start";
//   }
  // initialize timer's text to 25 mins
  timer.innerHTML = '01:00'; 
  // storing the time when the timer button is clicked
  let oldDateObj = new Date();
  // storing the time for setting time to now + 25 minutes
  let end = new Date();
  end.setTime(oldDateObj.getTime() + (1 * 60 * 1000));
  // Update the count down every 1 second
  function countingTime(){
    // Get current time
    let now = new Date().getTime();

    // Find the distance between now and the countdown date
    let distance = end - now;
    console.log('distance', distance);

    // Time calculations for minutes and seconds
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (minutes < 10) {
      minutes = "0" + minutes.toString();
    }
    if (seconds < 10) {
      seconds = "0" + seconds.toString();
    }

    // Display the time in the timer element
    timer.innerHTML = minutes + " : " + seconds;
  
    // If the countdown is finished
    // cancel setInterval(), play alarm, and open popup
    if (distance < 1000) {  
      clearInterval(x);
        document.getElementById('audio').play();
      
      //later: add a pop up "Time for a break"/ sound if possible
      //openTheForm();
    }
  }
  let x = setInterval(countingTime, 1000);
})

})
// add pause functionality
// timer should run in background
// extension: add event listener on 'x' button to close popup

//Conection establishmenet
// let myPort = browser.runtime.connect({name:"port-from-cs"});
// myPort.postMessage({greeting: "hello from content script"});

// myPort.onMessage.addListener((m) => {
//   console.log("In content script, received message from background script: ");
//   console.log(m.greeting);
// });

// document.body.addEventListener("click", () => {
//   myPort.postMessage({greeting: "they clicked the page!"});
// });