let radio1 = document.querySelector(".radio1");
let radio2 = document.querySelector(".radio2");
let r1 = document.querySelector("#general-enquiry");
let r2 = document.querySelector("#support-request");

r1.addEventListener("click", () => {
    radio1.style.backgroundColor = "hsl(148, 38%, 91%)";
    radio1.style.borderColor = "hsl(169, 82%, 27%)"; 
    radio2.style.backgroundColor = "white";
    radio2.style.borderColor = "#ccc";
});

r2.addEventListener("click", () => {
    radio2.style.backgroundColor = "hsl(148, 38%, 91%)";
    radio2.style.borderColor = "hsl(169, 82%, 27%)";
    radio1.style.backgroundColor = "white";
    radio1.style.borderColor = "#ccc";
});

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
        radio1.style.backgroundColor = "white";
        radio1.style.borderColor = "#ccc";
        radio2.style.backgroundColor = "white";
        radio2.style.borderColor = "#ccc";
    }
});