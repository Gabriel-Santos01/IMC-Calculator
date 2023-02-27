export const Error = {
  element: document.querySelector('.error'),
  open() {
    Error.element.classList.add('open')
  },
  close() {
    Error.element.classList.remove('open')
  }
}
