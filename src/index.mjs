import "./styles.css";

var hoursInput = document.querySelector("#htime");
var minutesInput = document.querySelector("#mtime");
var secondsInput = document.querySelector("#stime");
var startPauseBtn = document.querySelector(".btn1");
var resetBtn = document.querySelector(".btn2");
var startPauseBtnState;
let countdownTimer;
var hours=0, minutes=0, second=0;
function stopInterval(){
  clearInterval(countdownTimer);
  startPauseBtnState = 'START';
  startPauseBtn.textContent = startPauseBtnState;
  hoursInput.disabled = false;
  minutesInput.disabled = false;
  secondsInput.disabled = false;
}
function timer(){
  if(second==0){
    if(minutes>0){
      second = 59;
    }else{
      stopInterval();
    }
    if(minutes==0){
      if(hours>0){
        minutes =59;

      }else{
        stopInterval();
      }
      if(hours==0){
        //stop interval
      }else{
        hours--;
      }
    }else{
      minutes--;
    }
  }else{
    second--;
  }
  hoursInput.value = hours;
  minutesInput.value = minutes;
  secondsInput.value = second;
}

function startInterval(){
 countdownTimer = setInterval(function(){
        timer();
  },1000)
  //startInterval();
}

hoursInput.addEventListener('keypress',function(e){
  if(e.key==="Enter"){
    hours = e.target.value;
    console.log(e.target.value);
    hoursInput.value = hours;
    console.log(hours,' : ',minutes,' : ', second)

  }
  
})
minutesInput.addEventListener('keypress',function(e){
  console.log(e.target.value);
  if(e.key==="Enter"){
    minutes = e.target.value;
    if(minutes>59){
      let tempHours = Math.floor(minutes/60);
      hours+=tempHours;
      minutes = minutes - (tempHours*60);
    }
    console.log("Minutes are ", minutes);
minutesInput.value = minutes;
hoursInput.value = hours;
console.log(hours,' : ',minutes,' : ', second)

  }

})
secondsInput.addEventListener('keypress',function(e){
  second = e.target.value;
  if(e.key==="Enter"){
    if(second>59){
      let tempMinutes = Math.floor(second/60);
     console.log("tempSecond", tempMinutes);
      minutes+=tempMinutes;
      second = second - (tempMinutes*60);
      if(minutes>59){
        let tempHours = Math.floor(minutes/60);
        hours+=tempHours;
        minutes = minutes - (tempHours*60);
       
      }
      hoursInput.value = hours
      minutesInput.value = minutes;
    }
    console.log("Seconds are ", second);
     secondsInput.value = second;
 console.log(hours,' : ',minutes,' : ', second)
  }
 
})
startPauseBtn.addEventListener('click', function(){
  console.log("hey ")
  startPauseBtnState = startPauseBtn.textContent.trim();
  if(startPauseBtnState=="PAUSE"){
    startPauseBtnState="START";
    hoursInput.disabled = false;
    minutesInput.disabled = false;
    secondsInput.disabled = false;
    // for(let i=0;i<100000;i++){
    // console.log("here")
    // }
  }else{
    startInterval();
    startPauseBtnState="PAUSE";
    hoursInput.disabled = true;
    minutesInput.disabled = true;
    secondsInput.disabled = true;
  }
  startPauseBtn.textContent = startPauseBtnState;
  console.log("button state",  startPauseBtnState ) 
})


resetBtn.addEventListener('click', function(){
  hoursInput.disabled = false;
  minutesInput.disabled = false;
  secondsInput.disabled = false;
  startPauseBtnState = "START"
  hours = 0;
  second =0;
  minutes=0;
  hoursInput.value = hours;
  minutesInput.value = minutes;
  secondsInput.value = second;
  startPauseBtn.textContent = startPauseBtnState;

})




// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel 
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
