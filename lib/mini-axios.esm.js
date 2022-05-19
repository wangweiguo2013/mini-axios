const xhrAdapter = (config) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('loadend', function (e) {
            resolve({ data: JSON.parse(e.target.response) });
        });
        xhr.addEventListener('error', function (error) {
            reject(error);
        });
        xhr.open('GET', config.url);
        xhr.send();
    });
};

const defaults = {
    headers: {},
    timeout: 0,
    adapter: getDefaultAdapter()
};
function getDefaultAdapter() {
    let adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
        adapter = xhrAdapter;
    }
    return adapter;
}

class InterceptorManager {
    constructor() {
        this.handlers = [];
    }
    use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: (options === null || options === void 0 ? void 0 : options.synchronous) || false,
            runWhen: (options === null || options === void 0 ? void 0 : options.runWhen) || null
        });
    }
    eject(id) {
        if (this.handlers[id]) {
            this.handlers[id] = null;
        }
    }
    clear() {
        this.handlers = [];
    }
    forEach(fn) {
        this.handlers.forEach((h) => {
            if (h !== null) {
                fn(h);
            }
        });
    }
}

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
Axios.prototype.request = (url) => {
    const adapter = defaults.adapter;
    const config = { url };
    console.log('request', url);
    return adapter(config);
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

export { axios as default };
