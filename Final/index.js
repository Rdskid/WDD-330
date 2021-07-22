import { shuffle } from "./shuffle.js";

let card = document.getElementsByClassName("card");
let cards = [...card];

const deck = document.getElementById("card-deck");

let moves = 0;
let counter = document.querySelector(".moves");

const stars = document.querySelectorAll(".fa-star");

let matchedCard = document.getElementsByClassName("match");

let starsList = document.querySelectorAll(".star li");

let closeicon = document.querySelector(".close");

let modal = document.getElementById("popup1");

let restart = document.getElementById(".fa fa-repeat");

// if (restart) {
//   console.log("it works");
//   restart.addEventListener("click", startGame());
// }

var openedCards = [];

var displayCard = function () {
  this.classList.toggle("open");
  this.classList.toggle("show");
  this.classList.toggle("disabled");
};

document.body.onload = startGame();

function startGame() {
  openedCards = [];

  // shuffle deck
  cards = shuffle(cards);

  for (var i = 0; i < cards.length; i++) {
    deck.innerHTML = "";
    [].forEach.call(cards, function (item) {
      deck.appendChild(item);
    });
    cards[i].classList.remove("show", "open", "match", "disabled");
  }
  // reset moves
  moves = 0;
  counter.innerHTML = moves;
  // reset rating
  for (var i = 0; i < stars.length; i++) {
    stars[i].style.color = "#FFD700";
    stars[i].style.visibility = "visible";
  }
  //reset timer
  second = 0;
  minute = 0;
  hour = 0;
  var timer = document.querySelector(".timer");
  timer.innerHTML = "0 mins 0 secs";
  clearInterval(interval);
}

//open cards and check for match

function cardOpen() {
  openedCards.push(this);
  var len = openedCards.length;
  if (len === 2) {
    moveCounter();
    if (openedCards[0].type === openedCards[1].type) {
      matched();
    } else {
      unmatched();
    }
  }
}

//secondary part to track cards.

function matched() {
  openedCards[0].classList.add("match");
  openedCards[1].classList.add("match");
  openedCards[0].classList.remove("show", "open");
  openedCards[1].classList.remove("show", "open");
  openedCards = [];
}

function unmatched() {
  openedCards[0].classList.add("unmatched");
  openedCards[1].classList.add("unmatched");
  disable();
  setTimeout(function () {
    openedCards[0].classList.remove("show", "open", "unmatched");
    openedCards[1].classList.remove("show", "open", "unmatched");
    enable();
    openedCards = [];
  }, 1100);
}
//disable cards
function disable() {
  Array.prototype.filter.call(cards, function (card) {
    card.classList.add("disabled");
  });
}
//enable missed cards again

function enable() {
  Array.prototype.filter.call(cards, function (card) {
    card.classList.remove("disabled");
    for (var i = 0; i < matchedCard.length; i++) {
      matchedCard[i].classList.add("disabled");
    }
  });
}

//counter
function moveCounter() {
  moves++;
  counter.innerHTML = moves;
  if (moves == 1) {
    second = 0;
    minute = 0;
    hour = 0;
    startTimer();
  }

  //rating moves
  if (moves > 8 && moves < 12) {
    for (i = 0; i < 3; i++) {
      if (i > 1) {
        stars[i].style.visibility = "collapse";
      }
    }
  } else if (moves > 13) {
    for (i = 0; i < 3; i++) {
      if (i > 0) {
        stars[i].style.visibility = "collapse";
      }
    }
  }
}

//timer

var second = 0,
  minute = 0,
  hour = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer() {
  interval = setInterval(function () {
    timer.innerHTML = minute + "mins " + second + "secs";
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
}

function congradulations() {
  if (matchedCard.length == 16) {
    clearInterval(interval);
    let finalTime = timer.innerHTML;
    modal.classList.add("show");
    var starRating = document.querySelector(".stars").innerHTML;
    document.getElementById("finalMove").innerHTML = moves;
    document.getElementById("starRating").innerHTML = starRating;
    document.getElementById("totalTime").innerHTML = finalTime;
    closeModal();
  }
}

function closeModal() {
  closeicon.addEventListener("click", function (e) {
    modal.classList.remove("show");
    startGame();
  });
}

// function playAgain() {
//   modal.classList.remove("show");
//   startGame();
// }

//listeners
for (var i = 0; i < cards.length; i++) {
  card = cards[i];
  card.addEventListener("click", displayCard);
  card.addEventListener("click", cardOpen);
  card.addEventListener("click", congradulations);
}
