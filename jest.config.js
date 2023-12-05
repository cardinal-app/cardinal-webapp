/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transformIgnorePatterns: [
    'node_modules/(?!' +
    [
      'node-fetch',
      'fetch-blob',
      'data-uri-to-buffer',
      'jest-runtime',
      'formdata-polyfill'
    ].join('|') +
    ')',
  ],
};
