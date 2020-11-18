const assert = require('assert');
const akl = require('../../src');
const promisify = require('util').promisify;

describe.only('SDK', () => {
    const client = new akl.ApiClient();
    client.basePath = process.env.AKEYLESS_TEST_HOST;
    const api = new akl.V2Api(client);
    
    const email = process.env.AKEYLESS_TEST_ADMIN_EMAIL;
    const password = process.env.AKEYLESS_TEST_ADMIN_PASSWORD;
    const ts = new Date().getTime();

    const auth = promisify(api.auth).bind(api);
    const createAuthMethodUniversalIdentity = promisify(api.createAuthMethodUniversalIdentity).bind(api);
    const uidGenerateToken = promisify(api.uidGenerateToken).bind(api);
    const uidListChildren = promisify(api.uidListChildren).bind(api);
    const uidCreateChildToken = promisify(api.uidCreateChildToken).bind(api);
    const uidRotateToken = promisify(api.uidRotateToken).bind(api);
    const uidRevokeToken = promisify(api.uidRevokeToken).bind(api);

    describe('universal identity', () => {
        let token = '';
        let uidToken = '';
        let childToken = '';

        it('should authenticate using email/password', () => {
            const body = akl.Auth.constructFromObject({
                'admin-email': email,
                'admin-password': password,
            })
            return auth({body}).then(data => token = data.token)
        })

        it('should create uid auth method', () => {
            const body = akl.CreateAuthMethodUniversalIdentity.constructFromObject({
                name: `js-uid-${ts}`,
                token,
            });
            return createAuthMethodUniversalIdentity({body})
        })

        it('should generate token', () => {
            const body = akl.UidGenerateToken.constructFromObject({
                'auth-method-name': `js-uid-${ts}`,
                token,
            });
            return uidGenerateToken({body}).then(data => uidToken = data.token);
        })

        it('should list children using admin token', () => {
            const body = akl.UidListChildren.constructFromObject({
                'auth-method-name': `js-uid-${ts}`,
                token,
            })
            return uidListChildren({body}).then(data => {
                const count = data['number_of_tokens'];
                assert.strictEqual(count, 1);
            })
        })

        it('should create child token', () => {
            const body = akl.UidCreateChildToken.constructFromObject({
                'uid-token': uidToken,
            })
            return uidCreateChildToken({body}).then(data => {
                childToken = data.token
            })
        })

        it('should list children using uid token', () => {
            const body = akl.UidListChildren.constructFromObject({
                'uid-token': uidToken,
            })
            return uidListChildren({body}).then(data => {
                const count = data['number_of_tokens'];
                assert.strictEqual(count, 2);
            })
        })

        it('should rotate child token', () => {
            const body = akl.UidRotateToken.constructFromObject({
                'uid-token': childToken,
            })
            return uidRotateToken({body}).then(data => {
                childToken = data.token
            })
        })

        it('should list children using child token', () => {
            const body = akl.UidListChildren.constructFromObject({
                'uid-token': childToken,
            })
            return uidListChildren({body}).then(data => {
                const count = data['number_of_tokens'];
                assert.strictEqual(count, 1);
            })
        })

        it('should revoke parent uid token using revokeSelf', () => {
            const body = akl.UidRevokeToken.constructFromObject({
                token,
                'revoke-type': 'revokeSelf',
                'revoke-token': uidToken,
                'auth-method-name': `js-uid-${ts}`
            })
            return uidRevokeToken({body})
        })

        it('should revoke child token using revokeAll', () => {
            const body = akl.UidRevokeToken.constructFromObject({
                token,
                'revoke-type': 'revokeAll',
                'revoke-token': childToken,
                'auth-method-name': `js-uid-${ts}`
            })
            return uidRevokeToken({body})
        })
    }).timeout(30*1000)
});
