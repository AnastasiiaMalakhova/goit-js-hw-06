// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('ul')
console.log(ingredientsList);

const ingredientsItem = ingredients.map(option => {

  const createIngredient = document.createElement('li')
  console.log(createIngredient);
  
  createIngredient.classList.add('item');

  createIngredient.textContent = option;

  return createIngredient
});

ingredientsList.append(...ingredientsItem)
