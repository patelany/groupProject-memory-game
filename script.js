"use strict";

// let seconds = 0;

// let timer = setInterval(upTimer, 1000);

// function upTimer() {
//   ++seconds;

//   let hour = Math.floor(seconds / 3600);

//   let minute = Math.floor((seconds - hour * 3600) / 60);

//   let updSecond = seconds - (hour * 3600 + minute * 60);

//   document.getElementById("countup").innerHTML =
//     hour + ":" + minute + ":" + updSecond;
// }

const startButton = document.querySelector(".startBtn");
const resetButton = document.querySelector(".resetBtn");
const clickSection = document.querySelector(".clickSection");

clickSection.addEventListener =
  ("click",
  (e) => {
    if (e.target.classList.contains("startBtn")) {
    } else if (e.target.classList.contains("resetBtn")) {
    }
  });
