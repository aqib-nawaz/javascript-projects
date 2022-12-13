const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



const getInputField = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)

}

const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message
    console.log(input)

}


const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// fucntion to check all the input field have some values
const inputRequired = (inputFieldArray) => {

    inputFieldArray.forEach(input => {
        if (input.value === '') {
            showError(input, `${getInputField(input)} is required`)

        } else {
            showSuccess(input)
        }
    })
}


const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${getInputField(input)} should at-least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getInputField(input)} should be less than ${max} characters`)
    } else {
        showSuccess(input)
    }
}



const isPasswordMatch = (input1, input2) => {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords don't match")
    }
}


const isEmailValid = (input) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `Please provide a valid email`)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    inputRequired([username, email, password, password2])
    checkLength(username, 3, 10)
    checkLength(password, 6, 10)
    isEmailValid(email)
    isPasswordMatch(password, password2)

})
