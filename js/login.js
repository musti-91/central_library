const USER_INFO_KEY = "user_info"

// get elements
const email = document.getElementById("input_email")
const password = document.getElementById("input_password")
const confirmationPassword = document.getElementById("input_password_confirmation")
const selectRole = document.getElementById("select_role")

const errorEmail = document.getElementById("error_email")
const errorPassword = document.getElementById("error_password")
const errorConfirmPassword = document.getElementById("error_password_confirmation")
const errorRole = document.getElementById("error_role")

const form = document.getElementById("register_form")

// add event listener
form.addEventListener("submit", (e) => {
  e.preventDefault()
  let errors = false
  // check email
  if (email.value === "") {
    errorEmail.innerHTML = "Email is required"
    errors = true
  } else if (email.value.indexOf("@") === -1) {
    errorEmail.innerHTML = "Email must contain @"
    errors = true
  } else if (email.value.indexOf("@uokirkuk.edu.iq") === -1) {
    errorEmail.innerHTML = "Not allowed"
    errors = true
  } else {
    errorEmail.innerHTML = ""
  }

  // check password
  if (password.value === "") {
    errorPassword.innerHTML = "Password is required"
    errors = true
  } else if (password.value.length < 8) {
    errorPassword.innerHTML = "Password must be at least 8 characters"
    errors = true
  } else {
    errorPassword.innerHTML = ""
  }

  // check confirmation password
  if (confirmationPassword.value === "") {
    errorConfirmPassword.innerHTML = "Confirmation password is required"
    errors = true
  } else {
    errorConfirmPassword.innerHTML = ""
  }

  // check role
  if (selectRole.value === "") {
    errorRole.innerHTML = "Role is required"
    errors = true
  } else {
    errorRole.innerHTML = ""
  }

  if (!errors) {
    if (password.value !== confirmationPassword.value) {
      errorConfirmPassword.innerHTML = "Password and confirmation password must be the same"
      e.preventDefault()
    } else {
      errorConfirmPassword.innerHTML = ""
      login(email.value, password.value, selectRole.value)
    }
  }
})

function login(email, password, role) {
  // clear the fields
  clearFields()

  // set user info in local storage
  localStorage.setItem(USER_INFO_KEY, JSON.stringify({ email, role }))
  // redirect to dashboard
  window.location.href = "../index.html"
}

function clearFields() {
  email.value = ""
  password.value = ""
  confirmationPassword.value = ""
  selectRole.value = ""
}
