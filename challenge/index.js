const form = document.querySelector('form')
const fields = form.querySelectorAll('input, textarea')
form.setAttribute('novalidate', '')

form.addEventListener('submit', (event) => {
  const allValid = form.checkValidity()
  if (!allValid) {
    event.preventDefault()
  }
})

fields.forEach((field) => {
  // set all fields to invalid at start
  field.setAttribute('aria-invalid', 'false')
  field.addEventListener('invalid', () => {
    field.setAttribute('aria-invalid', 'true')
  })
  field.addEventListener('input', () => {
    field.setAttribute('aria-invalid', 'false')
  })
})

fields.forEach((field) => {
  const feedback = document.createElement('p')
  const id = field.id + 'Error'
  feedback.setAttribute('id', id)
  const prevIds = field.getAttribute('aria-describedby')
  const describedBy = prevIds + ' ' + id
  field.setAttribute('aria-describedBy', describedBy)
  field.after(feedback)

  field.addEventListener('invalid', () => {
    const message = field.validationMessage
    feedback.textContent = message
  })
  field.addEventListener('input', () => {
    field.setAttribute('aria-invalid', 'false')
    feedback.textContent = ''
  })
})
