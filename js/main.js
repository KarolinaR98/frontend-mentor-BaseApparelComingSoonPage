const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById("email");

const clearErrors = () => {

    const inputError = document.querySelector(".error");
    const errorMsg = document.querySelector(".error-msg");

    if(inputError){
        inputError.classList.remove("error");
        errorMsg.innerText = "";
    }
}

const validate = (e) => {

    clearErrors();

    const emailInput = document.getElementById('email');
    const errorMsg = document.querySelector(".error-msg");


    if(emailInput.value === "" || !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value))){

        emailInput.classList.add('error');
        errorMsg.innerText = "Please provide a valid email"

    }

    if(document.getElementsByClassName("error").length > 0){

        e.preventDefault();
    }
}

form.addEventListener("submit", validate);
emailInput.addEventListener("click", clearErrors);