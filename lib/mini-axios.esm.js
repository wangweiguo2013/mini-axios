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

const defaultConfig = {};
const axios = createInstance(defaultConfig);
axios.create = function (config) {
    return createInstance(config);
};
function createInstance(config) {
    const context = new Axios(config);
    const instance = bind(Axios.prototype.request, context);
    return instance;
}
const bind = (fn, thisArg, ...args) => {
    return fn.apply(thisArg, ...args);
};

export { axios as default };
