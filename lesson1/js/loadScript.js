function loadScript(...args) {
    let urls = args.length === 1 ? null : args[0]
    const callback = urls ? args[1] : args[0]

    if (urls) {
        if (typeof urls === 'string') {
            urls = [urls]
        }
        urls.forEach(url => {
            const searchElement = document.querySelector(`script[src="${url}"]`)
            if (!searchElement) {
                const script = document.createElement('script')
                script.src = url
                script.onload = callback
                document.body.appendChild(script)
            }
        })
    } else {
        const script = document.createElement('script')
        script.onload = callback
        document.body.appendChild(script)
    }
}
