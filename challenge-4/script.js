const container = document.getElementById("container");
const sprite = [
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 1, 1],
  [0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 1, 0]
];

console.table(sprite[1])

const colors = {
  0: "grey",
  1: "black"
};

console.table(colors)

const height = window.innerHeight * 1.7;

for (let i = 0; i < height; i++) {
  const block = document.createElement("div");
  block.className = `block i${i}`;
  container.appendChild(block);
}

// Calculate the starting row and column for the sprite
let startRow = 690
let startCol = 699

// Loop through the sprite array and create the grid layout
for (let i = 0; i < sprite.length; i++) {
  startRow = startRow + 1;
  const row = document.querySelector(`.i${startRow}`)

  if(colors[0] == "grey"){
    row.style.background= "grey"
  }

}
