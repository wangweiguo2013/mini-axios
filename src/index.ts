import Axios from "./Axios"
const defaultConfig = {}

const axios = createInstance(defaultConfig)

axios.create = function (config) {
    return createInstance(config)
}


function createInstance(config) {
    const context = new Axios(config)
    const instance = bind(Axios.prototype.request, context)
    return instance
}
const bind = (fn, thisArg, ...args) => {
    return fn.apply(thisArg, ...args)
}

export default axios

