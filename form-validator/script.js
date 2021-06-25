const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show Error Message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector("small");
    small.innerHTML = message;
}

// Show Success OutLine
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Check function is valid or not
function checkEmail(input) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    // return String(email).search (filter) != -1;
    if (filter.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, `Invalid Email`);
    }
}

//  validate input is empty
function checkValid(inputArr) {
    inputArr.forEach((input) => {
         if (input.value.trim() === "") {
            showError(input, `${input.name} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// check input length
function checkLength(input, minLen, maxLen) {
    if (input.value.length < minLen) {
        showError(input, `${input.name} must be at least ${minLen} characters.`);
    } else if (input.value.length > maxLen) {
        showError(input, `${input.name} must less than ${maxLen} character`);
    } else {
        showSuccess(input);
    }
}

// Event Listners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkValid([username, email, password, password2]);
    checkLength(username, 5, 10);
    checkLength(password, 6, 15);
    checkEmail(email);

    if (password.value === password2.value) {
        showSuccess(password2);
    } else {
        showError(password2, "Password doesn't match")
    }
});