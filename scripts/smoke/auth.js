// @ts-check
'use strict';

const { authenticate, newApi, run } = require('./client');

run('auth', async () => {
  await authenticate(newApi());
});
