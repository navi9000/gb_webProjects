import execute from "./execute.js"

const inputs = document.querySelectorAll('#timer_form input')
let timer = null
const audio = new Audio('../audio/1.mp3')

function launch() {
    if ([...inputs].some(input => input.value === '')) execute('showError', 'timer')
    else {
        document.getElementById('timer_result').innerHTML = ''
        if (!(Number(inputs[0].value) === 0 && Number(inputs[1].value) === 0)) {
            timer = setInterval(() => {
                let minutes = Number(inputs[0].value)
                let seconds = Number(inputs[1].value)
                if (seconds === 0) {
                    inputs[0].value = minutes - 1
                    inputs[1].value = 59
                } else {
                    inputs[1].value = seconds > 10 ? seconds - 1 : '0' + (seconds - 1)
                    if (minutes === 0 && seconds === 1) {
                        clearInterval(timer)
                        console.log('ok')
                        audio.play()
                    }
                }
            }, 1000)
        }
    }
}

function arrest() {
    if (timer) clearInterval(timer)
}

export default function timerButtonHandler(type) {
    if (type === 'start') launch()
    else arrest()

    window.addEventListener('beforeunload', () => {
        arrest()
    })
}