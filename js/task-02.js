const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const ingredientsItem = document.createElement('li');
// console.log(ingredientsItem);

ingredients.forEach((item) => {
  const ingredientsItemRef = document.createElement('li');
  // console.log(ingredientsItemRef);
  ingredientsItemRef.textContent = item;
  ingredientsItemRef.classList.add('ingredients__item');
  console.log(ingredientsItemRef);

})

// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.