import axios from '../../lib/mini-axios.esm.js'

console.log('axios', axios)
window.axios = axios

const request = axios.request('https://api.github.com/users/wangweiguo2013')
request.then((data) => {
    console.log(data)
})
