const result = document.getElementById('calc_result')

export default function showError() {
    result.style.color = "red"
    result.innerHTML = "Please submit two dates"
}