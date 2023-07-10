const formElem = document.querySelector(".login-form");

formElem.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const userEmail = formElem.elements.email;
    const userPassword = formElem.elements.password;
    
    if (userEmail.value === "" || userPassword.value === "") {
        alert("Усі поля повинні бути заповнені!")
        return;
    }

    const dataLogin = {
        email: userEmail.value,
        password: userPassword.value,
    }

    console.log(dataLogin);
    formElem.reset();
}