let crashCounter = 0;
let crashCarCounter = 0;

for (i = 0; i < 5; i++) {
  let img = document.createElement("img");
  img.src = "assets/img/tree.jpg";
  img.className = "tree";
  img.style.left = Math.random(80) * 80 + "%";
  img.style.top = Math.random(80) * 80 + "%";
  document.getElementById("container").appendChild(img);
}

let car = document.querySelector(".car");
car.style.top = 0;
car.style.left = 0;

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
  }

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
        car.getBoundingClientRect().top >
          trees[i].getBoundingClientRect().bottom
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
        crashCounterOutput()
        return true;
      }
    }
    return overlap;
  }
};

const crashCounterOutput = () => {
    document.getElementById("crashCounter").innerHTML = crashCounter
    console.log(crashCounter)
}

