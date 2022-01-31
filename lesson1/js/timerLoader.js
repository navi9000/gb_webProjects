export default function timerLoader() {
    const div = document.createElement('div')
    div.id = 'timer'
    div.innerHTML = `
    <form id="timer_form">
    <label>
    <p>Set timer</p>
    <input type="number" name="minutes" min="0" max="60" step="1">
    :
    <input type="number" name="seconds" min="0" max="60" step="1">
    </label>
    <br><br>
    <button ty="submit" id="start_timer">Start</button><button type="submit" id="stop_timer">Stop</button>
    </form>
    `
    document.body.appendChild(div)

    const buttons = document.querySelectorAll()

}