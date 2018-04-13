import resolve from 'rollup-plugin-node-resolve';
import eslint from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import pkg from './package.json';

export default [
    {
        input: 'src/index.js',
        external: ['react', 'react-dom'],
        output: [
            { file: pkg.main, format: 'umd', name: 'reactAccessibleAccordion' },
            { file: pkg['jsnext:main'], format: 'es' },
        ],
        name: 'reactAccessibleAccordion',
        plugins: [
            resolve({
                jsnext: true,
                main: true,
                browser: true,
            }),
            eslint(),
            babel(),
            commonjs(),
            replace({
                exclude: 'node_modules/**',
                ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
            }),
        ],
    },
];
