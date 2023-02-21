const form = document.querySelector('.calculator')
let closeBtn = document.getElementById('closeBtn')
let inputWeigth = document.getElementById('weight')
let inputHeigth = document.getElementById('height')
let button = document.getElementById('button')
let result = document.getElementById('result')
let modal = document.querySelector('.modal')

form.onsubmit = event => {
  event.preventDefault()

  let weigth = inputWeigth.value
  let heigth = inputHeigth.value

  let inner = calcIMC(weigth, heigth)

  result.innerText = `Seu IMC é ${inner}`

  modal.classList.add('open')

  modalToggle()
}

function modalToggle() {
  button.addEventListener('click', e => {
    modal.classList.toggle('open')
    console.log('colocou')
  })

  closeBtn.addEventListener('click', e => {
    modal.classList.remove('open')
    console.log('tirou')
  })
}

function calcIMC(weight, heigth) {
  return (weight / (heigth / 100) ** 2).toFixed(2)
}
