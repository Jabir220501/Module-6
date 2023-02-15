const container = document.getElementById("container");
let height = screen.height * 2;

for (i = 0; i < height; i++) {
  const block = document.createElement("div");
  block.className = "block";
  container.appendChild(block);
}

let activities = [
  ["Work", 9],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1],
  ["Sleep", 7],
];
activities.push(['Study',2]);

console.table(activities);
console.log(activities[0][1]);
