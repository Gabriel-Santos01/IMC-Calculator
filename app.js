const form = document.querySelector('.calculator')
const error = document.querySelector('.error')
let inputWeight = document.getElementById('weight')
let inputHeight = document.getElementById('height')

//object literls
const Modal = {
  closeBtn: document.getElementById('closeBtn'),
  imcButton: document.getElementById('button'),
  result: document.getElementById('result'),
  modalContent: document.querySelector('.modal'),

  //metodo de função dentro de objeto podendo ser usado da seguinte forma posteriormente "Modal.open()..."
  open() {
    Modal.modalContent.classList.add('open')
  }
}

form.onsubmit = event => {
  event.preventDefault()

  let weight = inputWeight.value
  let height = inputHeight.value

  let inner = calcIMC(weight, height)

  result.innerText = `Seu IMC é ${inner}`

  Modal.modalContent.classList.add('open')

  modalSwitch()
  inputValidate(weight, height)
}

function modalSwitch() {
  Modal.imcButton.addEventListener('click', e => {
    Modal.modalContent.classList.toggle('open')
  })

  Modal.closeBtn.addEventListener('click', e => {
    Modal.modalContent.classList.remove('open')
    error.classList.remove('open')
  })
}

function calcIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

function inputValidate(weight, height) {
  if (isNaN(weight) || isNaN(height)) {
    error.classList.toggle('open')
  }
}
