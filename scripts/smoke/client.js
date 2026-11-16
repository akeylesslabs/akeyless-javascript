// @ts-check
'use strict';

const akeyless = require('../../dist');

const DEFAULT_API_URL = 'https://api.akeyless.io';

/**
 * @param {string} name
 * @returns {string}
 */
function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`environment variable ${name} is required`);
  }
  return value;
}

function newApi() {
  const client = new akeyless.ApiClient(process.env.AKEYLESS_API_URL || DEFAULT_API_URL);
  return new akeyless.V2Api(client);
}

/**
 * @param {InstanceType<typeof akeyless.V2Api>} api
 * @returns {Promise<string>}
 */
async function authenticate(api) {
  const body = akeyless.Auth.constructFromObject({
    'access-id': requireEnv('AKEYLESS_ACCESS_ID'),
    'access-key': requireEnv('AKEYLESS_ACCESS_KEY'),
    'access-type': 'access_key',
  });
  const out = await api.auth(body);
  const token = out && out.token;
  if (typeof token !== 'string' || token === '') {
    throw new Error('auth response did not include a token');
  }
  return token;
}

// superagent errors carry the original request, including the access key in
// its body, so only the status and the server's error message are reported.
/**
 * @param {any} err
 * @returns {string}
 */
function describeError(err) {
  const status = err && err.status ? `HTTP ${err.status}: ` : '';
  const body = err && err.response && err.response.body;
  const serverMessage = body && typeof body.error === 'string' ? body.error : '';
  return status + (serverMessage || (err && err.message) || String(err));
}

/**
 * @param {string} name
 * @param {() => Promise<void>} fn
 */
function run(name, fn) {
  fn().then(
    () => console.log(`${name}: ok`),
    (err) => {
      console.error(`${name}: failed: ${describeError(err)}`);
      process.exitCode = 1;
    },
  );
}

module.exports = { akeyless, authenticate, newApi, requireEnv, run };
