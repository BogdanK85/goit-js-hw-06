let counterValue = 0;
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const valueElem = document.querySelector('#value');

buttonDecrement.addEventListener('click', () => {
    counterValue -= 1;
    valueElem.textContent = counterValue;
});

buttonIncrement.addEventListener('click', () => {
    counterValue += 1;
    valueElem.textContent = counterValue;
});