function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorElemTitle = document.querySelector(".color")
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener('click', onChangeColorClick);

function onChangeColorClick(event) {
  const diferentColor = getRandomHexColor();
  colorElemTitle.textContent = diferentColor;
  document.body.style.backgroundColor = diferentColor;
}

//btnChangeColor.insertAdjacentHTML('beforeend', colorElem)