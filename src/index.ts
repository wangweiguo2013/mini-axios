import Axios from './Axios'
import { bind, extend } from './util'
const defaultConfig = {}

const axios = createInstance(defaultConfig)

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
