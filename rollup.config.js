import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import alias from 'rollup-plugin-alias';
import multiEntry from 'rollup-plugin-multi-entry';

export default [
  {
    input: 'index.ts',
    output: [
      {
        file: 'build/index.js',
        format: 'cjs',
      },
      {
        file: 'build/index.es.js',
        format: 'esm',
      },
    ],
    plugins: [
      alias({
        applicationRoot: `${__dirname}`,
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
    ],
  },
  {
    input: ['index.ts', '**/*.tsx'],
    output: [
      {
        dir: 'build',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    preserveModules: true,
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      multiEntry(),
    ],
  },
];
