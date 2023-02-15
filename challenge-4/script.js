const container = document.getElementById("container");

for (i = 0; i < 1000; i++) {
    const block = document.createElement("div")
    block.className = "block"
    container.appendChild(block)
}
