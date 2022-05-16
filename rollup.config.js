import typescript from '@rollup/plugin-typescript'

export default {
    input: './src/index.ts',
    output: [
        {
            format: 'cjs',
            file: 'lib/mini-axios.cjs.js'
        },
        {
            format: 'es',
            file: 'lib/mini-axios.esm.js'
        }
    ],
    plugins: [typescript()]
}
