"use strict";
const startButton = document.querySelector(".startBtn");
const resetButton = document.querySelector(".resetBtn");
const clickSection = document.querySelector(".clickSection");
const stopWatch = document.querySelector("#stopWatch");
const cards = document.querySelector(".cards");

let seconds = 0;
let timer;

clickSection.addEventListener("click", (e)=>{
  if(e.target.classList.contains("startBtn")){
    timer = setInterval(function upTimer() {
        ++seconds;
      
        let hour = Math.floor(seconds / 3600);
      
        let minute = Math.floor((seconds - hour * 3600) / 60);
      
        let upSecond = seconds - (hour * 3600 + minute * 60);
      
      // timer for each part should only go up by 9 then go back to 0
        let h = hour < 10 ? "0" + hour : hour;
        let m = minute < 10 ? "0" + minute : minute;
        let s = upSecond < 10 ? "0" + upSecond : upSecond;
      
        stopWatch.textContent = `${h}:${m}:${s}`;
        
      }, 1000);
  } else if(e.target.classList.contains("resetBtn")){
    clearInterval(timer);
    stopWatch.textContent = "00:00:00";
    seconds = 0;
  }
})

