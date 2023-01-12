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
  timer.innerHTML = '1:00'; 
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

    // Time calculations for minutes and seconds
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the time in the timer element
    timer.innerHTML = minutes + " : " + seconds;
  
    // If the countdown is finished, cancel setInterval() and
    if (distance <= 0) {  
      clearInterval(x);
      //later: add a pop up "Time for a break"/ sound if possible
      openTheForm();
    }
  }
  let x = setInterval(countingTime, 1000);
})

})
// add event listener on 'x' button to close popup
// add pause functionality

function openTheForm() {
   document.getElementById("popup").style.display = "block";
   let closeButton = document.getElementById("closePopup");
   closeButton.addEventListener('click', () => {
   closeTheForm();
   })
  }
  
  function closeTheForm() {
   document.getElementById("popup").style.display = "none";
  }