import execute from "./execute.js"

export default function formSubmitHandler(form, formHandler, ...args) {
    form.onsubmit = e => {
        e.preventDefault()
        const formData = new FormData(form)
        const formValues = args.map(arg => formData.get(arg))
        if (formValues.some(el => el === '')) {
            execute('showError', form.id.slice(0, -5))
        } else {
            execute(formHandler, ...formValues)
        }
    }
}