function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls > input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');



const firstBoxSize = 30
let newBoxes = [];

btnCreate.addEventListener('click', () => {
  createBoxes(inputRef.value)
});

btnDestroy.addEventListener('click', () => {

  newBoxes = [];
  boxesRef.innerHTML = '';

  // ** Неживая коллекция **

  // const array = boxesRef.querySelectorAll('div');
  // console.log(array)
  // array.forEach(element => {
  //   element.remove();
  // });

  // console.log(array);

  // console.log(boxesRef.children);
  // console.log(boxesRef.querySelectorAll('div'));


  // ** Неживая коллекция **

  // boxesRef.querySelectorAll('div').forEach(element => {
  //   element.remove();
  // });
  
  // console.log(boxesRef.children);
  // console.log(boxesRef.querySelectorAll('div'));



  // ** Живая коллекция **

  // const array = boxesRef.children;
  // console.log(array)
  // for (const element of array) {
  //   console.log(element);
  //   element.remove();
  // };
  // console.log(array)

  // console.log(boxesRef.children);
  // console.log(boxesRef.querySelectorAll('div'));


  // ** Живая коллекция **

  // console.log(boxesRef);

  // while (boxesRef.firstChild) {
  //   console.log(boxesRef.firstChild);
  // boxesRef.removeChild(boxesRef.firstChild);
  // }

  // console.log(boxesRef.children);
  // console.log(boxesRef.querySelectorAll('div'));
  
  


  

  // boxesRef.innerHTML = '';
});


// var div_list = document.querySelectorAll('div'); // returns NodeList
// var div_array = Array.prototype.slice.call(div_list)


// ** Добавление через "append" **

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


// ** Добавление через "innerHTML" **

// function createBoxes(amount) {
//   for (let i = 0; i < amount; i += 1) {
//     const element = document.createElement('div');
//     element.style.width = `${firstBoxSize + i * 10}px`;
//     element.style.height = `${firstBoxSize + i * 10}px`;
//     element.style.backgroundColor = getRandomHexColor();

//     newBoxes.push(element);
//   }

//   let markup = "";
//   newBoxes.forEach(element => {
//     markup += element.outerHTML
//   });

//   boxesRef.innerHTML = markup;
// }




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