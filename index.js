const submitBtn = document.getElementById('submit-btn')
const email = document.getElementById('email')
const emailError = document.getElementById('email-error')
const password = document.getElementById('password')
const passwordError = document.getElementById('password-error')
const success = document.getElementById('success')

// Initial state
let emailValid=false
let passwordValid = false
emailError.style.display = "block"
passwordError.style.display = "block"
success.style.display = "none"

email.addEventListener('input', handleEmailChange)

function isEmailValid(email) {
    return email?.trim().length>3 && email.includes('@') && email.includes('.')
}

function handleEmailChange(e) {
    const { name, value } = e.target
    if(isEmailValid(value)) {
        emailError.style.display = "none"
        emailValid = true
        if (passwordValid) {
            success.style.display = "block"
        } else {
            success.style.display = "none"
        }
    } else {
        emailError.style.display = "block"
        emailValid = false
        success.style.display = "none"
    }
}

function isPasswordValid(password) {
    return password?.trim().length>8
}

password.addEventListener('input', handlePasswordChange)

function handlePasswordChange(e) {
    const {name,value} = e.target
    if(isPasswordValid(value)) {
        passwordError.style.display = "none"
        passwordValid = true
        if (emailValid) {
            success.style.display = "block"
        } else {
            success.style.display = "none"
        }
    } else {
        passwordError.style.display = "block"
        passwordValid = false
        success.style.display = "none"
    }
}

submitBtn.addEventListener('click', handleSubmit)
function handleSubmit(e) {
    e.preventDefault()
    if (!emailValid || !passwordValid) {
        alert("Please enter a valid email and password")
        return
    }
    const response = confirm("Are you sure you want to submit this form?")
    if (response) {
        alert("Successful signup!")
    }
    // reset to initial state of the form
    email.value = ""
    password.value = ""
    emailValid = false
    passwordValid = false
    emailError.style.display = "block"
    passwordError.style.display = "block"
    success.style.display = "none"
}




