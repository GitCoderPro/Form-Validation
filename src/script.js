let inputs = document.querySelectorAll("input")
let p = document.createElement("p")
let p1 = document.createElement("p1")
let Form = document.querySelector("Form")

p.textContent = "This field is required"
p1.textContent = "This field is required"

p.style.color = "red"
p1.style.color = "red"

const formValidation = (event) => {
    if (inputs[0].value == "") {
        document.querySelector("#name-field").appendChild(p)
        event.preventDefault()
    } else {
        document.querySelector("#name-field p").remove()
    }
    if (inputs[1].value == "") {
        document.querySelector("#email-field").appendChild(p1)
        event.preventDefault()
    } else {
        document.querySelector("#email-field p1").remove()
    }
}

Form.addEventListener("submit", formValidation)

document.querySelector("#name").addEventListener("input", formValidation)
document.querySelector("#email").addEventListener("input", formValidation)