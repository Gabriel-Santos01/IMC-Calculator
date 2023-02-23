import { Modal } from './assets/js modules/modal.js'

const form = document.querySelector('.calculator')
const error = document.querySelector('.error')
let inputWeight = document.getElementById('weight')
let inputHeight = document.getElementById('height')

form.onsubmit = event => {
  event.preventDefault()

  let weight = inputWeight.value
  let height = inputHeight.value

  let inner = calcIMC(weight, height)

  Modal.result.innerText = `Seu IMC é ${inner}`

  inputValidate(weight, height)
  // Modal.open()
}

function calcIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

//input Validation
function inputValidate(weight, height) {
  if (isNaN(weight) || isNaN(height)) {
    error.classList.toggle('open')
  } else {
    Modal.open()
  }
}
