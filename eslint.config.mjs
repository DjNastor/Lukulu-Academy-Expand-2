import { FlatCompat } from '@eslint/eslintrc';
import { createRequire } from 'node:module';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globalIgnores } from 'eslint/config';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const compat = new FlatCompat({ baseDirectory: __dirname });
const nextVitals = require('eslint-config-next/core-web-vitals.js');
nextVitals.extends = [require.resolve('eslint-config-next'), 'plugin:@next/next/core-web-vitals'];
const nextTypescript = require('eslint-config-next/typescript.js');

const config = [
  ...compat.config(nextVitals),
  ...compat.config(nextTypescript),
  globalIgnores(['.next/**', 'node_modules/**'])
];

export default config;
