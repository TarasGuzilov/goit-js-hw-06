function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls > input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');



const firstBoxSize = 30
const newBoxes = [];

btnCreate.addEventListener('click', () => {
  createBoxes(inputRef.value)
});

btnDestroy.addEventListener('click', () => {
  const array = boxesRef.querySelectorAll('div');
  array.forEach(element => {
    element.remove();
  
  });
  
  // boxesRef.textContent = '';
});


function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    element.style.width = `${firstBoxSize + i * 10}px`;
    element.style.height = `${firstBoxSize + i * 10}px`;
    element.style.backgroundColor = getRandomHexColor();
    newBoxes.push(element);
  }
  
  boxesRef.append(...newBoxes);
  
}


/* <body>
    <p><a href="index.html">Go back</a></p>

    <div id="controls">
      <input type="number" min="1" max="100" step="1" />
      <button type="button" data-create>Create</button>
      <button type="button" data-destroy>Destroy</button>
    </div>

    <div id="boxes"></div>

    <script src="js/task-10.js" type="module"></script>
  </body> */