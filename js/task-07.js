const inputControler = document.querySelector("#font-size-control")
const spanText = document.querySelector("#text")
inputControler.addEventListener('input', sizeRemover)

spanText.style.fontSize = `${inputControler.value}px`
function sizeRemover(event) {
    spanText.style.fontSize = `${event.target.value}px`
}