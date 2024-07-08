## Frontend Mentor - Contact Form Solution

This is a solution to the [Contact Form Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- Complete the form and see a success message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form using only their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot of the Contact Form](./screenshot.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/Binduvarsha23/contactForm)
- Live Site URL: [Live Demo](https://binduvarsha23.github.io/contactForm/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I Learned

During this project, I improved my skills in:

- Form validation using JavaScript
- Creating accessible forms
- Implementing responsive designs
- Handling hover and focus states for better user experience

Here is a sample of the code I'm particularly proud of:

```html
<div class="contact-form">
    <h1>Contact us</h1>
    <div class="form-row">
        <div class="form-group">
            <p>First Name<span> *</span></p>
            <input type="text" name="first-name" id="first-name" value="" class="in"/>
            <p class="required">This field is required</p>
        </div>
        <div class="form-group">
            <p>Last Name<span> *</span></p>
            <input type="text" name="last-name" id="last-name" value="" class="in"/>
            <p class="required">This field is required</p>
        </div>
    </div>
    <div class="Add">
        <p>Email address <span> *</span></p>
        <input type="text" name="email" id="email" value=""/>
        <p class="required">Please enter a valid email address</p>
    </div>
    <p>Query Type <span> *</span></p>
    <div class="radio in">
        <div class="radio1">
            <input type="radio" name="query-type" id="general-enquiry" value="general-enquiry"/>
            <label for="general-enquiry">General Enquiry</label>
        </div>
        <div class="radio2">
            <input type="radio" name="query-type" id="support-request" value="support-request"/>
            <label for="support-request">Support Request</label>
        </div>
    </div>
    <p class="required">Please select a query type</p>
    <p>Message <span> *</span></p>
    <textarea id="textarea"></textarea>
    <p class="required">This field is required</p>
    <div class="checkBox">
        <input type="checkbox" id="consent"/>
        <label for="consent"> I consent to being contacted by the team <span> *</span></label>
    </div>  
    <p id="required" class="required">To submit this form, please consent to being contacted</p>      
    <input id="button" type="submit" value="Submit">
</div>
<div class="success-message">
    <p>✔ Message Sent!</p>
    <p>Thanks for completing the form. We'll be in touch soon!</p>
</div>
```

```css
/* Sample CSS for the Contact Form */
body {
  font-family: 'Karla', sans-serif;
  background-color: hsl(148, 38%, 91%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
}

.contact-form {
  border-radius: 10px;
  width: 60vh;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
}

.success-message {
  display: none;
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #003300;
  color: white;
  border-radius: 5px;
  text-align: left;
  z-index: 1000;
}
```

```javascript
/* JavaScript for handling form submission and validation */
document.querySelector("#button").addEventListener('click', (event) => {
    event.preventDefault();
    let firstName = document.querySelector("#first-name").value.trim();
    let lastName = document.querySelector("#last-name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let queryType = document.querySelector('input[name="query-type"]:checked');
    let message = document.querySelector("#textarea").value.trim();
    let consent = document.querySelector("#consent").checked;

    // Clear previous errors and custom styles
    document.querySelectorAll(".required").forEach(el => el.style.display = 'none');
    document.querySelectorAll("input, textarea").forEach(el => el.style.borderColor = "");

    // Validating each field
    let hasError = false;

    if (firstName === '') {
        document.querySelector("#first-name + .required").style.display = 'block';
        document.querySelector("#first-name").style.borderColor = "hsl(0, 66%, 54%)";
        hasError = true;
    }

    if (lastName === '') {
        document.querySelector("#last-name + .required").style.display = 'block';
        document.querySelector("#last-name").style.borderColor = "hsl(0, 66%, 54%)";
        hasError = true;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailRegex.test(email)) {
        document.querySelector("#email + .required").style.display = 'block';
        document.querySelector("#email").style.borderColor = "hsl(0, 66%, 54%)";
        hasError = true;
    }

    if (!queryType) {
        document.querySelector(".radio + .required").style.display = 'block';
        document.querySelector(".radio").style.borderColor = "hsl(0, 66%, 54%)";
        hasError = true;
    }

    if (message === '') {
        document.querySelector("#textarea + .required").style.display = 'block';
        document.querySelector("#textarea").style.borderColor = "hsl(0, 66%, 54%)";
        hasError = true;
    }

    if (!consent) {
        document.querySelector("#required").style.display = 'block';
        hasError = true;
    }

    if (!hasError) {
        // Show success message
        document.querySelector(".success-message").style.display = 'block';

        // Clear form fields
        document.querySelector("#first-name").value = '';
        document.querySelector("#last-name").value = '';
        document.querySelector("#email").value = '';
        document.querySelector("#textarea").value = '';
        document.querySelectorAll('input[name="query-type"]').forEach(el => el.checked = false);
        document.querySelector("#consent").checked = false;

        // Clear custom styles
        document.querySelectorAll("input, textarea").forEach(el => el.style.borderColor = "");
        document.querySelector(".radio").style.borderColor = "#ccc";
    }
});
```

### Continued Development

In future projects, I plan to focus on:

- Enhancing form accessibility further
- Implementing more advanced form validation techniques
- Improving my knowledge of front-end frameworks

### Useful Resources

- [MDN Web Docs - Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - This helped me understand the principles of form validation.
- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This is a great resource for understanding Flexbox.

## Author

- Frontend Mentor - [@Binduvarsha23](https://www.frontendmentor.io/profile/Binduvarsha23)
- GitHub - [Binduvarsha23](https://github.com/Binduvarsha23)

## Acknowledgments

I would like to thank the Frontend Mentor community for their support and feedback.
