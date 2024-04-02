function createGrid(rows, columns) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  const itemWidth = 960 / columns;
  const itemHeight = 960 / rows;

  for (let i = 0; i < rows; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    container.appendChild(rowDiv);
    for (let j = 0; j < columns; j++) {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
      itemDiv.style.width = `${itemWidth}px`;
      itemDiv.style.height = `${itemHeight}px`; // Set height to match width
      itemDiv.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
      });
      rowDiv.appendChild(itemDiv);
    }
  }
}

const button = document.querySelector('button')
button.addEventListener('click', ()=>{
    const items = prompt('Enter how many squares you wamt on each side:');
    createGrid(items, items);
})