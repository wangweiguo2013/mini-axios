function Axios(config) { }
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
Axios.prototype.request = () => {
    console.log('request');
};

const bind = (fn, thisArg, ...args) => {
    return function () {
        fn.call(thisArg, ...args);
    };
};
const extend = (a, b) => {
    // function 是否需要 bind this ?
    Object.entries(b).forEach(([key, val]) => {
        a[key] = val;
    });
};

const defaultConfig = {};
const axios = createInstance(defaultConfig);
function createInstance(config) {
    const context = new Axios(config);
    const instance = bind(Axios.prototype.request, context);
    extend(instance, Axios.prototype);
    instance.create = function (config) {
        return createInstance(config);
    };
    return instance;
}

export { axios as default };
