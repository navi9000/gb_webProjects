export default function navButtonHandler(id) {
    try {
        const blockToLoad = document.querySelector(`body > div#${id}`)
        const blocksToHide = [...document.querySelectorAll('body > div')].filter(el => el.id !== id)
        blocksToHide.forEach(el => el.style.display = 'none')
        blockToLoad.style.display = 'block'
    } catch {
        import(`./${id}Loader.js`)
        .then(response => {
            response.default()
            navButtonHandler(id)
        })
        .catch(error => {console.log(error)})
    }
}