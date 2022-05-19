import { xhrAdapter } from './adapters/xhr'
import defaults from './defaults'
import InterceptorManager from './InterceptorManager'

function Axios(instanceConfig) {
    this.defaults = instanceConfig
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    }
}

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
Axios.prototype.request = (url) => {
    const adapter = defaults.adapter
    const config = { url }
    console.log('request', url)
    return adapter(config)
}
export default Axios
