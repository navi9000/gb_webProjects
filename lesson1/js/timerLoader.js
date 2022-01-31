import execute from "./execute.js"

export default function timerLoader() {
    const div = document.createElement('div')
    div.id = 'timer'
    div.innerHTML = `
    <form id="timer_form">
    <label>
    <p>Timer</p>
    <input type="number" name="minutes" min="0" max="59" step="1">
    :
    <input type="number" name="seconds" min="0" max="59" step="1">
    </label>
    <br><br>
    <button ty="submit" id="start_timer">Start</button><button type="submit" id="stop_timer">Stop</button>
    </form>
    <p id="timer_result"></p>
    `
    document.body.appendChild(div)

    execute('addListenersToButtons', '#timer_form button', 'timerButtonHandler')
}