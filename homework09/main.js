/* Зробіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір. Квадрати мають розташовуватись по 5 в ряд.
Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks();
Advanced
Зробіть так, щоб квадрати змінювали колір раз на секунду. Щоб квадрати з'явились на сторінці та почали змінюватись,
необхідно викликати функцію generateBlocksInterval();
*/

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  function generateBlocks() {
    const container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);
  
    for (let i = 0; i < 25; i++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.style.backgroundColor = getRandomColor();
      container.appendChild(block);
    }
  }
  
  function generateBlocksInterval() {
    generateBlocks();
    setInterval(() => {
      const blocks = document.querySelectorAll(".block");
      blocks.forEach((block) => {
        block.style.backgroundColor = getRandomColor();
      });
    }, 1000);
  }
  
  generateBlocksInterval();
  