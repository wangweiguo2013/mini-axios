import axios from '../../src/index'
describe('static apis', () => {
    it('should have request method helpers', function () {
        expect(typeof axios.request).toEqual('function')
        expect(typeof axios.get).toEqual('function')
        expect(typeof axios.head).toEqual('function')
        expect(typeof axios.options).toEqual('function')
        expect(typeof axios.delete).toEqual('function')
        expect(typeof axios.post).toEqual('function')
        expect(typeof axios.put).toEqual('function')
        expect(typeof axios.patch).toEqual('function')
    })
    it('should have promise method helpers', function () {
        const promise = axios('/test')

        expect(typeof promise.then).toEqual('function')
        expect(typeof promise.catch).toEqual('function')
    })
    it('should have defaults', function () {
        expect(typeof axios.defaults).toEqual('object')
        expect(typeof axios.defaults.headers).toEqual('object')
    })
})
