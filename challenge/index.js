const form = document.querySelector('form')
const fields = form.querySelectorAll('input')
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
  field.addEventListener("invalid", () => {
    field.setAttribute("aria-invalid", "true");
  });
  field.addEventListener("input", () => {
    field.setAttribute("aria-invalid", "false");
  });
})


// 
// fields.forEach((field) => {
//   field.setAttribute('aria-invalid', 'false')
//   field.addEventListener('blur', () => {
//       const isValid = field.checkValidity()
//       if (isValid) {
//           field.setAttribute('aria-invalid', 'false')
//         }else{
//             field.setAttribute('aria-invalid', 'true')
//         }
//     })
// })
