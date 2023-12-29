const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";
const input = form.elements.email;
const textarea = form.elements.message;

form.addEventListener("input", () => {
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    const data = {
        email: email,
        message: message
    }
    localStorage.setItem(localStorageKey, JSON.stringify(data));
});
document.addEventListener("DOMContentLoaded", () => {
    const savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        textarea.value = parsedData.email;
        input.value = parsedData.message;
    }
    })

function formValidation(event) {
    event.preventDefault();

    const form = event.target;
    const email = input.value.trim();
    const message = textarea.value.trim();

    const data = {
        email: email,
        message: message
    }

    if (email === "" || message === "") {
        alert("Please enter your email and message")
    } else {
        console.log(data)
        localStorage.removeItem(localStorageKey);
        form.reset();
    }
}
form.addEventListener('submit', formValidation);
