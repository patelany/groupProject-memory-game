"use strict";

const cardArray = [
  {
    foodName: "pasta",
    cardNumber: 0,
    source: "/images/pasta.jpg",
  },
  {
    foodName: "burger",
    cardNumber: 1,
    source: "/images/burger.jpg",
  },
  {
    foodName: "taco",
    cardNumber: 2,
    source: "/images/taco.jpg",
  },
  {
    foodName: "pizza",
    cardNumber: 3,
    source: "/images/pizza.jpg",
  },
  {
    foodName: "pierogies",
    cardNumber: 4,
    source: "/images/pierogies.jpg",
  },
  {
    foodName: "ice cream",
    cardNumber: 5,
    source: "/images/icecream.jpg",
  },
  {
    foodName: "pasta 2",
    cardNumber: 6,
    source: "/images/pasta.jpg",
  },
  {
    foodName: "burger 2",
    cardNumber: 7,
    source: "/images/burger.jpg",
  },
  {
    foodName: "taco 2",
    cardNumber: 8,
    source: "/images/taco.jpg",
  },
  {
    foodName: "pizza 2",
    cardNumber: 9,
    source: "/images/pizza.jpg",
  },
  {
    foodName: "pierogies 2",
    cardNumber: 10,
    source: "/images/pierogies.jpg",
  },
  {
    foodName: "ice cream 2",
    cardNumber: 11,
    source: "/images/icecream.jpg",
  },
];

const startButton = document.querySelector(".startBtn");
const resetButton = document.querySelector(".resetBtn");
const clickSection = document.querySelector(".clickSection");
const stopWatch = document.querySelector("#stopWatch");
const cards = document.querySelector(".cards");
let option1 = "";
let option2 = "";

let seconds = 0;
let timer;
let cardClickCounter = 0;
let isDisabled = false;

clickSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("startBtn")) {
    timer = setInterval(function upTimer() {
      seconds++;

      let hour = Math.floor(seconds / 3600);

      let minute = Math.floor((seconds - hour * 3600) / 60);

      let upSecond = seconds - (hour * 3600 + minute * 60);

      // timer for each part should only go up by 9 then go back to 0
      let h = hour < 10 ? "0" + hour : hour;
      let m = minute < 10 ? "0" + minute : minute;
      let s = upSecond < 10 ? "0" + upSecond : upSecond;

      stopWatch.textContent = `${h}:${m}:${s}`;
    }, 1000);
    updateHtml();
  } else if (e.target.classList.contains("resetBtn")) {
    clearInterval(timer);
    stopWatch.textContent = "00:00:00";
    seconds = 0;
  } else if (e.target.classList.contains("cardFront")) {
    e.target.parentNode.classList.add("flip");

    if (cardClickCounter === 0) {
      cardClickCounter++;
      option1 = e.target.getAttribute("data-value");
    } else {
      option2 = e.target.getAttribute("data-value");
      console.log(option1);
      console.log(option2);
      if (option1 === option2) {
        console.log("its a match");
      } else {
        console.log("doesn't match");
      }
      cardClickCounter = 0;
    }
  }
  console.log(e.target);
});

const updateHtml = () => {
  cards.innerHTML = "";
  cardArray.forEach((card) => {
    const newCard = document.createElement("li");
    const cardInner = document.createElement("li");
    const image = document.createElement("img");
    const cardFront = document.createElement("li");
    const cardBack = document.createElement("li");

    cardFront.setAttribute("data-value", card.source);
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

const matchCards = () => {};
