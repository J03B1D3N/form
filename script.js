const submit = document.getElementById("submit")
const password = document.getElementById("password")
const confirmPass = document.getElementById("passConfirm")
const form = document.getElementById("form")
const passMatch = document.getElementById("passMatchCheck")





const check = function() {
        if (password.value == confirmPass.value) {
          confirmPass.setCustomValidity("")
          passMatch.innerHTML = "Slaptažodžiai sutampa!"
        } else {
            confirmPass.setCustomValidity("Invalid field")
            passMatch.innerHTML = "Slaptažodžiai nesutampa!"
        }
      }

