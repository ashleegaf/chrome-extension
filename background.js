// // add a DOMContentLoaded event listener to document
// //document.addEventListener('DOMContentLoaded', () => {
//     // store a reference to the timer
//     //const timer = document.getElementById('timer');
//     // store a reference to the timer button
//     //const timerBtn = document.getElementById("action");
//     // add a click event listener to timer button
//    // timerBtn.addEventListener('click', () => {
//     //   if (timerBtn.innerHTML === "Start") {
//     //     timerBtn.innerHTML = "Pause";
//     //   } 
//     //   else {
//     //     timerBtn.innerHTML = "Start";
//     //   }
//       // initialize timer's text to 25 mins
//      // timer.innerHTML = '01:00'; 
//       // storing the time when the timer button is clicked
//       const browser = chrome;
//       let portFromCS;
//       let timeFromMain;
//       function connected(p) {
//         portFromCS = p;
//         portFromCS.postMessage({greeting: "hi there content script!"});
//         portFromCS.onMessage.addListener((m) => {//m is what we received
//             timeFromMain = m
//           portFromCS.postMessage({greeting: `In background script, received message from content script: ${m}`});
//         });
//       }
      
//       browser.runtime.onConnect.addListener(connected);


//       let oldDateObj = new Date();
//       let end = timeFromMain;//should be passed from main
//       // Update the count down every 1 second
//       function countingTime(){
//         // Get current time
//         let now = new Date().getTime();
    
//         // Find the distance between now and the countdown date
//         let distance = end - now;
//         console.log('distance', distance);
    
//         // Time calculations for minutes and seconds
//         let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         let seconds = Math.floor((distance % (1000 * 60)) / 1000);
//         if (minutes < 10) {
//           minutes = "0" + minutes.toString();
//         }
//         if (seconds < 10) {
//           seconds = "0" + seconds.toString();
//         }
    
//         // Display the time in the timer element
//         let passTheUpdate = minutes + " : " + seconds; //should just store it and PASSS
      
//         // If the countdown is finished
//         // cancel setInterval(), play alarm, and open popup
//         if (distance < 1000) {  
//           clearInterval(x);
//             document.getElementById('audio').play();
          
//           //later: add a pop up "Time for a break"/ sound if possible
//           //openTheForm();
//         }

//         browser.browserAction.onClicked.addListener(() => {
//             portFromCS.postMessage(passTheUpdate);
//           });
//       }
//       let x = setInterval(countingTime, 1000);
//    // })
    
//    // })
   