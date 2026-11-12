// @ts-check
'use strict';

const { akeyless, authenticate, newApi, requireEnv, run } = require('./client');

run('get-secret-value', async () => {
  const name = requireEnv('AKEYLESS_SMOKE_SECRET_NAME');
  const api = newApi();
  const token = await authenticate(api);

  const body = akeyless.GetSecretValue.constructFromObject({ names: [name], token });
  /** @type {Record<string, unknown>} */
  const res = await api.getSecretValue(body);
  const value = res && res[name];
  if (typeof value !== 'string' || value === '') {
    throw new Error(`no value returned for secret ${name}`);
  }
  console.log(`get-secret-value: read ${name} (${value.length} chars)`);
});
