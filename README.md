# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot
<img width="1514" alt="Screenshot 2024-08-01 at 1 36 43 PM" src="https://github.com/user-attachments/assets/5ee1a5e9-27e9-41b5-a047-f2623cfc0a80">
<img width="1515" alt="Screenshot 2024-08-01 at 1 37 19 PM" src="https://github.com/user-attachments/assets/83120223-0589-4472-9465-da20eed49636">
<img width="1513" alt="Screenshot 2024-08-01 at 1 36 56 PM" src="https://github.com/user-attachments/assets/3f43ea6a-974b-4c32-9f92-bcbe59aba271">


### Links

- Solution URL: https://github.com/avacheungx/Ping-Single-Column
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
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
```


### Continued development

* javascript form validation basics
* responsive design for phone screen size
