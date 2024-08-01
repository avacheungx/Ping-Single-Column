// JavaScript code for email validation
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");

const regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]{2,7})$/;

document.getElementById('subscription-form').addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting

    const emailValue = emailInput.value.trim(); // Get the email input value

    if (emailValue === ' ') {
        errorMessage.textContent = "Whoops! It looks like you forgot to add your email";
        emailInput.style.borderColor = "red";
        errorMessage.style.visibility = "visible";
    } else if (!regex.test(emailValue)) {
        errorMessage.textContent = "Please provide a valid email address";
        emailInput.style.borderColor = "red";
        emailInput.style.color="red";
        errorMessage.style.visibility = "visible";
    } else {
        errorMessage.textContent = ' ';
        emailInput.style.borderColor = 'hsl(223, 100%, 88%)';
        emailInput.style.color='hsl(223, 74%, 73%)';
        alert("Thank you for Subscribing!")
    }
});
