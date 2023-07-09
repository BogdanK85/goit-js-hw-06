const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener('input', handlerEvent => {
    if (textInput.value === "") {
    textOutput.textContent = "Anonymous"
} else {
        textOutput.textContent = handlerEvent.currentTarget.value
    }
});