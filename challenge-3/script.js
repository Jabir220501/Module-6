// Add counter and reset counter on hover
let counterOutput = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const resetCounter = document.getElementById("reset");
let counter = 1;
increaseBtn.addEventListener("click", () => {
  counterOutput.innerHTML = counter++;
});

resetCounter.addEventListener("mouseover", () => {
  counterOutput.innerHTML = counter = 0;
});

// If you copy the text you get a responds
const copyText = () => {
  copied.innerHTML = "You have copied me";
};

// Button that shows error if image is not load
const errorBtn = () => {
  alert("The image value could not be loaded.");
};

// You can see the value you have filled in the input field
const fieldValue = document.getElementById("input");
const inputValue = document.getElementById("inputValue");
fieldValue.addEventListener("keyup", () => {
  inputValue.innerHTML = fieldValue.value;
});

// Hover to change the color of the button
const hoverToChangeColor = document.getElementById("hoverToChangeColor");
hoverToChangeColor.addEventListener("mouseover", () => {
  hoverToChangeColor.style.background = "beige";
});

// Click on enter to do something
const key = document.getElementById("key");
key.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.target.value = "You have clicked on enter";
  }
});

// Clicking Game
const clickingGameBtn = document.getElementById("clickingGame");
const gameCounterOutput = document.getElementById("gameCounter");
const timer = document.getElementById("timer");
let clicks = 0;
let defaultTimer = 0;
let isPlaying = false;

clickingGameBtn.addEventListener("click", () => {
  const startTimer = () => {
    game = setInterval(decreaseTimer, 1000);
  };

  const decreaseTimer = () => {
    if (isPlaying == true) {
      if (defaultTimer > 0) {
        defaultTimer = defaultTimer + 1000;
      } else {
        isPlaying = false;
        clearInterval(game);
      }
    } else {
      startTimer();
    }
    timer.innerHTML = defaultTimer / 1000 + "s";
    gameCounterOutput.innerHTML = clicks + "x";
  };
  if (isPlaying == false) {
    isPlaying = true;
    defaultTimer = 1000;
    clicks = 0;
    startTimer();
  } else {
    if (clicks < 10) {
      clicks = clicks + 1;
      gameCounterOutput.innerHTML = clicks + "x";
    } else {
      isPlaying = false;
      timer.innerHTML = "0s";
      gameCounterOutput.innerHTML = "0x";
      clearInterval(game);
      console.log("finish");
    }
    console.log(defaultTimer);
  }
});

// Stopwatch
const buttonStart = document.getElementById("start_timer");
const buttonStop = document.getElementById("stop_timer");
const outputTens = document.getElementById("tens");
const outputSeconds = document.getElementById("seconds");
let seconds = 00;
let tens = 00;
let int = null;

const startTimer = () => {
  tens++;

  if (tens > 100) {
    tens = 00;
    seconds++
  }
  outputTens.innerHTML = tens
  outputSeconds.innerHTML = seconds
};

const stopTimer = () => {
    clearInterval(int);
}

buttonStart.addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(startTimer, 10);
});

buttonStop.addEventListener("click", () => {
  clearInterval(int);
})

