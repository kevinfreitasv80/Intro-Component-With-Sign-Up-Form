const form = document.querySelector("form");
const send = document.getElementById("send");
const email = document.getElementById("emailInput");
const spanEmail = document.getElementById("spanEmail");
const lastName = document.getElementById("lastNameInput");
const password = document.getElementById("passwordInput");
const firstName = document.getElementById("firstNameInput");
const spanLastName = document.getElementById("spanLastName");
const spanPassword = document.getElementById("spanPassword");
const spanFirstName = document.getElementById("spanFirstName");

const errorInput = (val1, val2) => {
    if (!val1.value) {
        val2.style.display = "flex";
        val1.parentNode.classList.add("error");
        valid = false;
    }else{
        val2.style.display = "none";
        val1.parentNode.classList[1] === "error" ? val1.parentNode.classList.remove("error") : undefined;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    errorInput(firstName, spanFirstName);
    errorInput(lastName, spanLastName);
    errorInput(email, spanEmail);
    errorInput(password, spanPassword);
    
    return valid;
});