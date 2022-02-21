const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsRef = document.querySelector('#ingredients');


const ingredientsItems = ingredients.map(ingredient => {
  const ingredientsItemRef = document.createElement('li');

  ingredientsItemRef.textContent = ingredient;
  ingredientsItemRef.classList.add('ingredients__item');

  return ingredientsItemRef;
});


ingredientsRef.append(...ingredientsItems);