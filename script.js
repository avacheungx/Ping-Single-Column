const email= document.getElementByID("email");
const emailInput=document.getElementById("email");
const emailValue = emailInput.ariaValueMax.trim();
const regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

document.getElementById('subscription-form').addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailValue === ''){
        errorMessage.textContent="Whoops! It looks like you forgot to add your email";
        emailInput.style.borderColor="red";

    }

    else if (!regex.test(emailValue)){
        errorMessage.textContent="Please provide a valid emial address";
        emailInput.style.borderColor="red";
    }
    else{
        errorMessage.textContent='';
        emailInput.style.borderColor='hsl(223, 100%, 88%)';
        alert("Thank you for subscribing!");
    }
});
