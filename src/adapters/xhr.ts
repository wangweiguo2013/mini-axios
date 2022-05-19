export const xhrAdapter = (config) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.addEventListener('loadend', function (e) {
            resolve({ data: JSON.parse(e.target.response) })
        })
        xhr.addEventListener('error', function (error) {
            reject(error)
        })
        xhr.open('GET', config.url)
        xhr.send()
    })
}
