// Car 1 Counter
let crashCounter = 0;
let crashCarCounter = 0;

// Car 2 Counter
let crashCounter2 = 0;
let crashCarCounter2 = 0;

// Image random
for (i = 0; i < 5; i++) {
  let img = document.createElement("img");
  img.src = "assets/img/tree.jpg";
  img.className = "tree";
  img.style.left = Math.random(80) * 80 + "%";
  img.style.top = Math.random(80) * 80 + "%";
  document.getElementById("container").appendChild(img);
}

// Car 1
let car = document.querySelector(".car");
car.style.top = 0;
car.style.left = 0;

// Car 2
let car2 = document.querySelector(".car2");
car2.style.top = 0;
car2.style.right = 0;

// Car moving when pressing on key
document.body.onkeydown = (event) => {
  let e = event.keyCode;
  switch (e) {
    case 40: //down
      car.style.transform = "rotate(90deg)";
      car.style.top = parseInt(car.style.top) + 5 + "px";
      if (crash() == true) {
        car.style.top = parseInt(car.style.top) + 5 + "px";
      }
      break;
    case 37: // left
      car.style.transform = "rotate(180deg)";
      car.style.left = parseInt(car.style.left) - 5 + "px";
      if (crash() == true) {
        car.style.top = parseInt(car.style.left) + 5 + "px";
      }
      break;
    case 39: // right
      car.style.transform = "rotate(0deg)";
      car.style.left = parseInt(car.style.left) + 5 + "px";
      if (crash() == true) {
        car.style.top = parseInt(car.style.left) - 5 + "px";
      }
      break;
    case 38: // top
      car.style.transform = "rotate(-90deg)";
      car.style.top = parseInt(car.style.top) - 5 + "px";
      if (crash() == true) {
        car.style.top = parseInt(car.style.top) - 5 + "px";
      }
      break;

    // Car 2
    case 83: //Down
      car2.style.transform = "rotate(90deg)";
      car2.style.top = parseInt(car2.style.top) + 5 + "px";
      if (crash2() == true) {
        car2.style.top = parseInt(car2.style.top) + 5 + "px";
      }
      break;
    case 65: // Left
      car2.style.transform = "rotate(180deg)";
      car2.style.right = parseInt(car2.style.right) + 5 + "px";
      if (crash2() == true) {
        car2.style.top = parseInt(car2.style.right) + 5 + "px";
      }
      break;
    case 68: // Right
      car2.style.transform = "rotate(0deg)";
      car2.style.right = parseInt(car2.style.right) - 5 + "px";
      if (crash2() == true) {
        car2.style.top = parseInt(car2.style.right) - 5 + "px";
      }
      break;
    case 87: // Top
      car2.style.transform = "rotate(-90deg)";
      car2.style.top = parseInt(car2.style.top) - 5 + "px";
      if (crash2() == true) {
        car2.style.top = parseInt(car2.style.top) - 5 + "px";
      }
      break;
  }
};
// If car 1 crashes then add +1 to crashCounter and spawn somewhere else
function crash() {
  trees = document.getElementsByClassName("tree");
  let overlap = false;
  for (i = 0; i < trees.length; i++) {
    overlap = !(
      car.getBoundingClientRect().right <
        trees[i].getBoundingClientRect().left ||
      car.getBoundingClientRect().left >
        trees[i].getBoundingClientRect().right ||
      car.getBoundingClientRect().bottom <
        trees[i].getBoundingClientRect().top ||
      car.getBoundingClientRect().top > trees[i].getBoundingClientRect().bottom
    );
    if (overlap) {
      crashCounter += 1;
      crashCarCounter += 1;

      let crashedCar = [
        "assets/img/car.png",
        "assets/img/Daco_652849.png",
        "assets/img/car.png",
        "assets/img/Daco_652849.png",
        "assets/img/car.png",
      ];

      for (i = 0; i < crashedCar.length; i++) {
        if (crashCarCounter > crashedCar.length - 1) {
          crashCarCounter = 0;
          crashCarCounter += 1;
        }
        car.setAttribute("src", crashedCar[crashCarCounter]);
      }
      crashCounterOutput();
      return true;
    }
  }
  return overlap;
}

// If car 2 crashes then add +1 to crashCounter and spawn somewhere else
function crash2() {
  trees = document.getElementsByClassName("tree");
  let overlap = false;
  for (i = 0; i < trees.length; i++) {
    overlap = !(
      car2.getBoundingClientRect().right <
        trees[i].getBoundingClientRect().left ||
      car2.getBoundingClientRect().left >
        trees[i].getBoundingClientRect().right ||
      car2.getBoundingClientRect().bottom <
        trees[i].getBoundingClientRect().top ||
      car2.getBoundingClientRect().top > trees[i].getBoundingClientRect().bottom
    );
    if (overlap) {
      crashCounter2 += 1;
      crashCarCounter2 += 1;

      let crashedCar2 = [
        "assets/img/car.png",
        "assets/img/Daco_652849.png",
        "assets/img/car.png",
        "assets/img/Daco_652849.png",
        "assets/img/car.png",
      ];

      for (i = 0; i < crashedCar2.length; i++) {
        if (crashCarCounter2 > crashedCar2.length - 1) {
          crashCarCounter2 = 0;
          crashCarCounter2 += 1;
        }
        car2.setAttribute("src", crashedCar2[crashCarCounter2]);
      }
      crashCounterOutput2();
      return true;
    }
  }
  return overlap;
}

function carCrash() {
  
}

const crashCounterOutput = () => {
  document.getElementById("crashCounter").innerHTML = crashCounter;
  console.log(crashCounter);
};

const crashCounterOutput2 = () => {
  document.getElementById("crashCounter2").innerHTML = crashCounter2;
  console.log(crashCounter2);
};
