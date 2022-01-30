import execute from "./execute.js"

const form = document.getElementById('calc_form')

form.onsubmit = e => {
    e.preventDefault()
    const formData = new FormData(form)
    const dateOne = formData.get('date_one')
    const dateTwo = formData.get('date_two')
    if (!dateOne || !dateTwo) {
        execute('showError')
    } else {
        execute('showResult', dateOne, dateTwo)
    }
}