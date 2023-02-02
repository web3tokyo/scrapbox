function loadScript(url) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = url
        script.onload = resolve
        document.body.appendChild(script)
    })
}
  
async function loadAllScripts(urls) {
    for (let url of urls) {
        await loadScript(url)
    }
}

window.onload = function() {
    console.log('Load scripts')
    const args = {}
    document.location.search.substring(1).split('&').forEach((s) => {
        const [name, value] = s.split('=')
        args[name] = decodeURIComponent(value)
    })
    const codelist = args['code']
    if (codelist) {
        const urls = codelist.split(/,/)
        console.log(urls)
        loadAllScripts(urls)
    }
}
