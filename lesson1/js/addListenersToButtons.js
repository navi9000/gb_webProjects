import execute from "./execute.js"

export default function addListenersToButtons(selector, handlerName) {
    const buttons = document.querySelectorAll(selector)
    buttons.forEach(btn => btn.addEventListener('click', e => {
        e.preventDefault()
        execute(handlerName, e.target.id.split('_')[0])
    }))
}