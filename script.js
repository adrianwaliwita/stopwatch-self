window.onload = function(){
 let startButton =  document.getElementById('button-start')
 let stopButton =  document.getElementById('button-stop')
 let resetButton =  document.getElementById('button-reset')
 let seconds = 00; 
 let tens = 00; 
 let appendTens = document.getElementById("tens")
 let appendSeconds = document.getElementById("seconds")
 let Interval

 startButton.onclick = () => {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }

  stopButton.onclick = () =>{
    clearInterval(Interval);
  }

  resetButton.onclick = () => {
    clearInterval(Interval);
   tens = "00";
   seconds = "00";
   appendTens.innerHTML = tens;
   appendSeconds.innerHTML = seconds;
 }


 function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  

}