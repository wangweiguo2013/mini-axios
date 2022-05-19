'use strict';

function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    };
}
Axios.prototype.get = () => {
    console.log('get');
};
Axios.prototype.post = () => {
    console.log('post');
};
Axios.prototype.put = () => {
    console.log('put');
};
Axios.prototype.patch = () => {
    console.log('patch');
};
Axios.prototype.delete = () => {
    console.log('delete');
};
Axios.prototype.head = () => {
    console.log('head');
};
Axios.prototype.options = () => {
    console.log('head');
};
Axios.prototype.request = () => {
    console.log('request');
    return new Promise((resolve) => {
        resolve({ data: 1 });
    });
};

const defaults = {
    headers: {},
    timeout: 0
};

const bind = (fn, thisArg, ...args) => {
    return function () {
        return fn.call(thisArg, ...args);
    };
};
const extend = (a, b) => {
    // function 是否需要 bind this ?
    Object.entries(b).forEach(([key, val]) => {
        a[key] = val;
    });
};

const axios = createInstance(defaults);
function createInstance(config) {
    const context = new Axios(config);
    const instance = bind(Axios.prototype.request, context);
    extend(instance, Axios.prototype);
    extend(instance, context);
    instance.create = function (config) {
        return createInstance(config);
    };
    return instance;
}

module.exports = axios;
