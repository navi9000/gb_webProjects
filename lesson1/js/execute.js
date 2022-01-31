const savedModules = {}

export default function execute(name, ...args) {
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