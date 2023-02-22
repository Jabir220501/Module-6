const container = document.getElementById("container");
const sprite = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

console.table(sprite);

const colors = {
  0: "grey",
  1: "#111",
  2: "#4f4f4f",
};

console.table(colors);

for (let i = 0; i < sprite.length; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
  for (let j = 0; j < sprite[i].length; j++) {
    const block = document.createElement("div");
    block.className = `block r${i}`;
    div.appendChild(block);
    block.style.backgroundColor = colors[sprite[i][j]];
  }
}

