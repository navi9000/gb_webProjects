export default function buildCard(header, content, type) {
    const card = document.createElement('div')
    card.classList = 'card'
    const h2 = document.createElement('h2')
    h2.classList = 'card_header'
    h2.innerHTML = header
    card.appendChild(h2)
    const htmlContent = document.createElement(type)
    htmlContent.src = content
    if (type === 'img') {
        htmlContent.classList = 'card_img'
        htmlContent.alt = header
    } else if (type === 'audio') {
        htmlContent.classList = 'card_audio'
        htmlContent.controls = true
    } else if (type === 'video') {
        htmlContent.classList = 'card_video'
        htmlContent.controls = true
    }

    card.appendChild(htmlContent)
    return card
}