function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

btnChangeColor.addEventListener('click', () => {
  bodyRef.style = `background-color: ${getRandomHexColor()}`;
  colorName.textContent = getRandomHexColor();
});