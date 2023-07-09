const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const dishElementsArr = ingredients.map((ingredient) => {
  const li = document.createElement('li');
  li.textContent = `${ingredient}`
  li.classList.add('item');
  console.log(li);

  return li;
})

const ulElementsArr = document.querySelector('ul');
ulElementsArr.append(...dishElementsArr)

console.log(ulElementsArr);