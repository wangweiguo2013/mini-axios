function Axios(config) {}

Axios.prototype.get = () => {
    console.log('get')
}

Axios.prototype.post = () => {
    console.log('post')
}
Axios.prototype.put = () => {
    console.log('put')
}
Axios.prototype.patch = () => {
    console.log('patch')
}
Axios.prototype.delete = () => {
    console.log('delete')
}
Axios.prototype.head = () => {
    console.log('head')
}
Axios.prototype.options = () => {
    console.log('head')
}
Axios.prototype.request = () => {
    console.log('request')
    return new Promise((resolve) => {
        resolve({})
    })
}
export default Axios
