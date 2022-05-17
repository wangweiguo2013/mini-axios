import axios from '../../lib/mini-axios.esm.js'

console.log('axios', axios)
window.axios = axios

const p = axios({ bar: 'bar' })
console.log(p)

const p1 = axios.request({ foo: 'foo' })
console.log(p1)
