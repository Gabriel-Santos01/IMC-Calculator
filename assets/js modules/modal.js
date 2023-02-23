//object literals
export const Modal = {
  closeBtn: document.getElementById('closeBtn'),
  imcButton: document.getElementById('button'),
  result: document.getElementById('result'),
  modalContent: document.querySelector('.modal'),

  //metodo de função dentro de objeto podendo ser usado da seguinte forma posteriormente "Modal.open()..."
  open() {
    Modal.modalContent.classList.add('open')
  },
  close() {
    Modal.modalContent.classList.remove('open')
  }
}

Modal.closeBtn.onclick = () => {
  Modal.close()
}

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}
