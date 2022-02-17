import execute from "./execute.js"

export default function homeLoader() {
    const form = document.getElementById('calc_form')
    execute('formSubmitHandler', form, 'showResult', 'date_one', 'date_two')
    execute('addListenersToButtons', 'nav button', 'navButtonHandler')
}