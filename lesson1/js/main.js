const savedModules = {}

export function execute(name, ...args) {
    try {
        savedModules[name](...args)
    } catch {
        import(`./${name}.js`)
        .then(response => {
            savedModules[name] = response.default
            savedModules[name](...args)
        })
        .catch(error => {console.log(error)})
    }
}

const form = document.getElementById('calc_form')

execute('formSubmitHandler', form, 'showResult', 'date_one', 'date_two')

const navButtons = document.querySelectorAll('nav button')
navButtons.forEach(btn => btn.addEventListener('click', e => {
    execute('navButtonHandler', e.target.id.slice(0, -7))
}))