// add a DOMContentLoaded event listener to document
document.addEventListener('DOMContentLoaded', () => {
    // store a reference to the timer
    const timer = document.getElementById('timer');
    // store a reference to the timer button
    const timerBtn = document.getElementById("action");
    // add a click event listener to timer button
    timerBtn.addEventListener('click', () => {
      if (timerBtn.innerHTML === "START") {
        timerBtn.innerHTML = "PAUSE";
        countDown();
      } 
      else if(timerBtn.innerHTML === "PAUSE"){
        //countDown()
        timerBtn.innerHTML = "RESTART";
      }else if(timerBtn.innerHTML === "RESTART"){
        countDown();
      }
    
    //}
    })
    
    })
    // add pause functionality
    // timer should run in background
    // extension: add event listener on 'x' button to close popup
    let distanceLog = [];
    function countDown(){

          // initialize timer's text to 25 mins
      timer.innerHTML = '01:00'; 
      // storing the time when the timer button is clicked
      let oldDateObj = new Date();
      // storing the time for setting time to now + 25 minutes
      let end = new Date();
      end.setTime(oldDateObj.getTime() + (1 * 60 * 1000));
      // Update the count down every 1 second
      function countingTime(){
        if(timerBtn.innerHTML === "PAUSE"){
            clearInterval(x);
        }
        // Get current time
        let now = new Date().getTime();
    
        // Find the distance between now and the countdown date
        let distance
        if(!distanceLog.length){
         distance = end - now;
         distanceLog.push(distance);
        }else{
        distance  = distanceLog[distanceLog.length - 1] - 1000;  //end now + 60 seconds  //distance is how many seconds we have left 
        distanceLog.push(distance);
    
        }
    
        
    
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
    }
    