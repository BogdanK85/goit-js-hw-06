const validInput = document.querySelector('#validation-input');
validInput.addEventListener('blur', inputBlurHandler)

function inputBlurHandler(event) {
    const sumElements = event.target.value.length
    const maxSumElements = validInput.getAttribute("data-length")
    validInput.classList.remove("invalid");
    validInput.classList.remove("valid")
    if (sumElements > 0) {
        if (sumElements != maxSumElements) {
        validInput.classList.add("invalid")
            return;
        } 
        validInput.classList.add("valid")
    }
}