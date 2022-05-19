import Axios from './Axios'
import defaults from './defaults'
import { bind, extend } from './util'

const axios = createInstance(defaults)

function createInstance(config) {
    const context = new Axios(config)
    const instance: any = bind(Axios.prototype.request, context)
    extend(instance, Axios.prototype)
    extend(instance, context)
    instance.create = function (config) {
        return createInstance(config)
    }
    return instance
}

export default axios
