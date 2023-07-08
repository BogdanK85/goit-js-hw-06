function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//const colorElem = document.querySelector(".color")
const btnChangeColor = document.querySelector(".change-color")

btnChangeColor.addEventListener('click', onChangeColorClick);

function onChangeColorClick(event) {
  const diferentColor = getRandomHexColor()
  document.body.style.backgroundColor = diferentColor
}
//btnChangeColor.insertAdjacentHTML('beforeend', colorElem)