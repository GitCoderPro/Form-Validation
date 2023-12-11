let inputs = document.querySelectorAll("input")
let p = document.createElement("p")
let p1 = document.createElement("p")
let Form = document.querySelector("form")

p.textContent = "This field is required"
p1.textContent = "This field is required"

p1.id = "ID"
p.style.color = "red"
p1.style.color = "red"

const formValidation = (event) => {
    if (inputs[0].value == "") {
        if (!document.querySelector("#name-field p")) {
            document.querySelector("#name-field").appendChild(p)
        }
        event.preventDefault()
    } else {
        let errorMessage = document.querySelector("#name-field p")
        if (errorMessage) {
            errorMessage.remove()
        }
    }
    if (inputs[1].value == "") {
        if (!document.querySelector("#email-field #ID")) {
            document.querySelector("#email-field").appendChild(p1)
        }
        event.preventDefault()
    } else {
        let errorMessage = document.querySelector("#email-field #ID")
        if (errorMessage) {
            errorMessage.remove()
        }
    }
}

Form.addEventListener("submit", formValidation)

document.querySelector("#name").addEventListener("input", formValidation)
document.querySelector("#email").addEventListener("input", formValidation)