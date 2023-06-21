"use strict";

const cardArrayEasy = [
  {
    foodName: "pasta",
    source: "./images/pasta.jpg",
    match: "1a",
  },
  {
    foodName: "pasta 2",
    source: "./images/pasta.jpg",
    match: "1b",
  },
  {
    foodName: "taco",
    source: "./images/taco.jpg",
    match: "2a",
  },
  {
    foodName: "taco 2",
    source: "./images/taco.jpg",
    match: "2b",
  },
  {
    foodName: "perogies",
    source: "./images/perogies.jpg",
    match: "3a",
  },
  {
    foodName: "perogies 2",
    source: "./images/perogies.jpg",
    match: "3b",
  },
  {
    foodName: "burger",
    source: "./images/burger.jpg",
    match: "4a",
  },
  {
    foodName: "burger 2",
    source: "./images/burger.jpg",
    match: "4b",
  },
].sort(() => Math.random() - 0.5);

const cardArrayMedium = [
  {
    foodName: "pasta",
    source: "/images/pasta.jpg",
    match: "1a",
  },
  {
    foodName: "pasta 2",
    source: "/images/pasta.jpg",
    match: "1b",
  },
  {
    foodName: "taco",
    source: "/images/taco.jpg",
    match: "2a",
  },
  {
    foodName: "taco 2",
    source: "/images/taco.jpg",
    match: "2b",
  },
  {
    foodName: "perogies",
    source: "/images/perogies.jpg",
    match: "3a",
  },
  {
    foodName: "perogies 2",
    source: "/images/perogies.jpg",
    match: "3b",
  },
  {
    foodName: "burger",
    source: "/images/burger.jpg",
    match: "4a",
  },
  {
    foodName: "burger 2",
    source: "/images/burger.jpg",
    match: "4b",
  },
  {
    foodName: "pizza",
    source: "/images/pizza.jpg",
    match: "5a",
  },
  {
    foodName: "pizza 2",
    source: "/images/pizza.jpg",
    match: "5b",
  },
  {
    foodName: "ice cream",
    source: "/images/icecream.jpg",
    match: "6a",
  },
  {
    foodName: "ice cream 2",
    source: "/images/icecream.jpg",
    match: "6b",
  },
].sort(() => Math.random() - 0.5);

const cardArrayHard = [
  {
    foodName: "pasta",
    source: "/images/pasta.jpg",
    match: "1a",
  },
  {
    foodName: "pasta 2",
    source: "/images/pasta.jpg",
    match: "1b",
  },
  {
    foodName: "taco",
    source: "/images/taco.jpg",
    match: "2a",
  },
  {
    foodName: "taco 2",
    source: "/images/taco.jpg",
    match: "2b",
  },
  {
    foodName: "perogies",
    source: "/images/perogies.jpg",
    match: "3a",
  },
  {
    foodName: "perogies 2",
    source: "/images/perogies.jpg",
    match: "3b",
  },
  {
    foodName: "burger",
    source: "/images/burger.jpg",
    match: "4a",
  },
  {
    foodName: "burger 2",
    source: "/images/burger.jpg",
    match: "4b",
  },
  {
    foodName: "pizza",
    source: "/images/pizza.jpg",
    match: "5a",
  },
  {
    foodName: "pizza 2",
    source: "/images/pizza.jpg",
    match: "5b",
  },
  {
    foodName: "ice cream",
    source: "/images/icecream.jpg",
    match: "6a",
  },
  {
    foodName: "ice cream 2",
    source: "/images/icecream.jpg",
    match: "6b",
  },
  {
    foodName: "sandwich",
    source: "/images/sandwich.jpg",
    match: "7a",
  },
  {
    foodName: "sandwich 2",
    source: "/images/sandwich.jpg",
    match: "7b",
  },
  {
    foodName: "donut",
    source: "/images/donut.jpg",
    match: "8a",
  },
  {
    foodName: "donut 2",
    source: "/images/donut.jpg",
    match: "8b",
  },
].sort(() => Math.random() - 0.5);

// fisher yates algorithm only works with array of obj if you sort the array first
//
const startButton = document.querySelector(".startBtn");
const resetButton = document.querySelector(".resetBtn");
const clickSection = document.querySelector(".clickSection");
const stopWatch = document.querySelector("#stopWatch");
const cards = document.querySelector(".cards");
const endGameMsg = document.querySelector(".endGameMsg");
const endGame = document.querySelector(".endGame");
const userName = document.querySelector(".userName");
const levels = document.querySelector("#levels");
const easyScoreBoard = document.querySelector(".easyScoreBoard");
const mediumScoreBoard = document.querySelector(".mediumScoreBoard");
const hardScoreBoard = document.querySelector(".hardScoreBoard");
let level;
let selectionLevel;
let userNameValue = "";
let easyTimes = [];
let mediumTimes = [];
let hardTimes = [];
let option1 = "";
let option2 = "";
let numDelete = 0;
let seconds = 0;
let minutes = 0;
let timer;
let cardClickCounter = 0;

// shuffle with Fisher-Yates algorithm
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    const currentCard = array[i];
    const cardToSwap = array[swapIndex];
    array[i] = cardToSwap;
    array[swapIndex] = currentCard;
  }
  return array;
};

const difficultyLevel = () => {
  level = document.querySelector("#levels").value;
  if (level === "easy") {
    updateHtml(cardArrayEasy);
    selectionLevel = cardArrayEasy.length;
  } else if (level === "medium") {
    updateHtml(cardArrayMedium);
    selectionLevel = cardArrayMedium.length;
  } else {
    updateHtml(cardArrayHard);
    selectionLevel = cardArrayHard.length;
  }
};

const updateHtml = (array) => {
  cards.style.display = "flex";
  cards.innerHTML = "";
  shuffle(array);
  array.forEach((card) => {
    const cardInner = document.createElement("li");
    const image = document.createElement("img");
    const cardFront = document.createElement("li");
    const cardBack = document.createElement("li");
    const newCard = document.createElement("li");
    cardFront.setAttribute("data-value", card.match);
    image.setAttribute("src", card.source);
    newCard.append(cardInner);
    cardInner.append(cardFront);
    cardInner.append(cardBack);
    cardBack.append(image);
    newCard.classList.add("card");
    cardInner.classList.add("cardInner");
    cardFront.classList.add("cardFront");
    cardBack.classList.add("cardBack");
    cards.append(newCard);
  });
};

clickSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("arrow-right")) {
    userName.style.display = "none";
    startButton.style.visibility = "visible";
    resetButton.style.visibility = "visible";
    stopWatch.style.visibility = "visible";
    levels.style.visibility = "visible";
    userNameValue = nameInput.value;
    console.log(userNameValue);
  } else if (e.target.classList.contains("startBtn")) {
    easyScoreBoard.style.visibility = "hidden";
    mediumScoreBoard.style.visibility = "hidden";
    hardScoreBoard.style.visibility = "hidden";
    endGame.style.display = "none";
    stopWatch.textContent = "00:00:00";
    seconds = 0;
    timer = setInterval(function upTimer() {
      seconds++;

      let hour = Math.floor(seconds / 3600);

      minutes = Math.floor((seconds - hour * 3600) / 60);

      let upSecond = seconds - (hour * 3600 + minutes * 60);

      // timer for each part should only go up by 9 then go back to 0
      let h = hour < 10 ? "0" + hour : hour;
      let m = minutes < 10 ? "0" + minutes : minutes;
      let s = upSecond < 10 ? "0" + upSecond : upSecond;

      stopWatch.textContent = `${h}:${m}:${s}`;
    }, 1000);
    difficultyLevel();
    numDelete = 0;
  } else if (e.target.classList.contains("resetBtn")) {
    endGame.style.display = "none";
    clearInterval(timer);
    stopWatch.textContent = "00:00:00";
    seconds = 0;
    numDelete = 0;
    difficultyLevel();
  }
});
const cardClicks = (e) => {
  console.log(e.target);
  if (!e.target.classList.contains("cardInner")) {
    if (e.target.classList.contains("cardFront")) {
      e.target.parentNode.classList.add("flip");
      if (cardClickCounter === 0) {
        cardClickCounter++;
        option1 = e.target;
      } else if (cardClickCounter === 1) {
        cardClickCounter++;
        option2 = e.target;
        console.log(option1);
        console.log(option2);
      }
      if (cardClickCounter === 2) {
        if (
          option1.getAttribute("data-value")[1] !==
          option2.getAttribute("data-value")[1]
        ) {
          clickSection.removeEventListener("click", cardClicks);
          if (
            option1.getAttribute("data-value")[0] ===
            option2.getAttribute("data-value")[0]
          ) {
            console.log("its a match");

            setTimeout(() => {
              option1.parentNode.remove();
              option2.parentNode.remove();
              clickSection.addEventListener("click", cardClicks);
            }, "1000");

            numDelete += 2;
            cardClickCounter = 0;
          } else {
            //not a match
            setTimeout(() => {
              option1.parentNode.classList.remove("flip");
              option2.parentNode.classList.remove("flip");
              clickSection.addEventListener("click", cardClicks);
            }, "1000");

            cardClickCounter = 0;
          }
        }
      }
      cardClickCounter = 1;
      console.log(cardClickCounter);
      if (numDelete === selectionLevel) {
        // stop timer at end of game
        clearInterval(timer);
        if (level === "easy") {
          easyTimes.push({ minutes, seconds });
          let sortedEasyTimes = easyTimes.sort((a, b) => a.seconds - b.seconds);
          let easyBody = document.querySelector(".easyBody");
          easyBody.innerHTML = "";
          sortedEasyTimes.forEach((scores) => {
            const newTableRow = document.createElement("tr");
            const newNameData = document.createElement("td");
            const newScoreData = document.createElement("td");
            newNameData.setAttribute("class", "newNameData");
            newScoreData.setAttribute("class", "newScoreData");
            newNameData.textContent = userNameValue;
            const formattedSeconds = scores.seconds - minutes * 60;
            newScoreData.textContent = `00:${
              scores.minutes < 10 ? `0${scores.minutes}` : scores.minutes
            }:${
              formattedSeconds < 10
                ? `0${formattedSeconds}`
                : `${formattedSeconds}`
            }`;
            newTableRow.append(newNameData, newScoreData);
            easyBody.append(newTableRow);
            easyScoreBoard.style.visibility = "visible";
          });
        } else if (level === "medium") {
          mediumTimes.push({ minutes, seconds });
          let sortedMediumTimes = mediumTimes.sort(
            (a, b) => a.seconds - b.seconds
          );
          let mediumBody = document.querySelector(".mediumBody");
          mediumBody.innerHTML = "";
          sortedMediumTimes.forEach((scores) => {
            const newTableRow = document.createElement("tr");
            const newNameData = document.createElement("td");
            const newScoreData = document.createElement("td");
            newNameData.setAttribute("class", "newNameData");
            newScoreData.setAttribute("class", "newScoreData");
            newNameData.textContent = userNameValue;
            const formattedSeconds = scores.seconds - minutes * 60;
            newScoreData.textContent = `00:${
              scores.minutes < 10 ? `0${scores.minutes}` : scores.minutes
            }:${
              formattedSeconds < 10
                ? `0${formattedSeconds}`
                : `${formattedSeconds}`
            }`;
            newTableRow.append(newNameData, newScoreData);
            mediumBody.append(newTableRow);
            mediumScoreBoard.style.visibility = "visible";
          });
        } else {
          hardTimes.push({ minutes, seconds });
          let sortedHardTimes = hardTimes.sort((a, b) => a.seconds - b.seconds);
          let hardBody = document.querySelector(".hardBody");
          hardBody.innerHTML = "";
          sortedHardTimes.forEach((scores) => {
            const newTableRow = document.createElement("tr");
            const newNameData = document.createElement("td");
            const newScoreData = document.createElement("td");
            newNameData.setAttribute("class", "newNameData");
            newScoreData.setAttribute("class", "newScoreData");
            newNameData.textContent = userNameValue;
            const formattedSeconds = scores.seconds - minutes * 60;
            newScoreData.textContent = `00:${
              scores.minutes < 10 ? `0${scores.minutes}` : scores.minutes
            }:${
              formattedSeconds < 10
                ? `0${formattedSeconds}`
                : `${formattedSeconds}`
            }`;
            newTableRow.append(newNameData, newScoreData);
            hardBody.append(newTableRow);
            hardScoreBoard.style.visibility = "visible";
          });
        }
        endGame.style.display = "flex";
        endGameMsg.textContent = `Congratulations, ${userNameValue}! You have completed the game on ${level} mode. You
      finished with a time of ${stopWatch.textContent}`;
        cards.style.display = "none";
      }
    }
  }
};
clickSection.addEventListener("click", cardClicks);
