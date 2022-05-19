import { xhrAdapter } from '../adapters/xhr'

const defaults = {
    headers: {},
    timeout: 0,
    adapter: getDefaultAdapter()
}
function getDefaultAdapter() {
    let adapter
    if (typeof XMLHttpRequest !== 'undefined') {
        adapter = xhrAdapter
    }
    return adapter
}

export default defaults
