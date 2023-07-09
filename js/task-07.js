const inputControler = document.querySelector("#font-size-control")
const spanText = document.querySelector("#text")
inputControler.addEventListener('input', sizeRemover)

function sizeRemover(event) {
    spanText.style.fontSize = `${event.target.value}px`
}