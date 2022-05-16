export const bind = (fn, thisArg, ...args) => {
    return function () {
        fn.call(thisArg, ...args)
    }
}

export const extend = (a, b) => {
    // function 是否需要 bind this ?
    Object.entries(b).forEach(([key, val]) => {
        a[key] = val
    })
}
