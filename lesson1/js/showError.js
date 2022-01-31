export default function showError(formType) {
    const result = document.getElementById(`${formType}_result`)
    result.style.color = "red"
    result.innerHTML = "Please fill out all the input fields"
}