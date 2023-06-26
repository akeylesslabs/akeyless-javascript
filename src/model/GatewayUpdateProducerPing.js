/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GatewayUpdateProducerPing model module.
 * @module model/GatewayUpdateProducerPing
 * @version 3.3.10
 */
class GatewayUpdateProducerPing {
    /**
     * Constructs a new <code>GatewayUpdateProducerPing</code>.
     * gatewayUpdateProducerPing is a command that updates Ping producer
     * @alias module:model/GatewayUpdateProducerPing
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayUpdateProducerPing.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GatewayUpdateProducerPing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerPing} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerPing} The populated <code>GatewayUpdateProducerPing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerPing();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('ping-administrative-port')) {
                obj['ping-administrative-port'] = ApiClient.convertToType(data['ping-administrative-port'], 'String');
            }
            if (data.hasOwnProperty('ping-atm-id')) {
                obj['ping-atm-id'] = ApiClient.convertToType(data['ping-atm-id'], 'String');
            }
            if (data.hasOwnProperty('ping-authorization-port')) {
                obj['ping-authorization-port'] = ApiClient.convertToType(data['ping-authorization-port'], 'String');
            }
            if (data.hasOwnProperty('ping-cert-subject-dn')) {
                obj['ping-cert-subject-dn'] = ApiClient.convertToType(data['ping-cert-subject-dn'], 'String');
            }
            if (data.hasOwnProperty('ping-client-authentication-type')) {
                obj['ping-client-authentication-type'] = ApiClient.convertToType(data['ping-client-authentication-type'], 'String');
            }
            if (data.hasOwnProperty('ping-enforce-replay-prevention')) {
                obj['ping-enforce-replay-prevention'] = ApiClient.convertToType(data['ping-enforce-replay-prevention'], 'String');
            }
            if (data.hasOwnProperty('ping-grant-types')) {
                obj['ping-grant-types'] = ApiClient.convertToType(data['ping-grant-types'], ['String']);
            }
            if (data.hasOwnProperty('ping-issuer-dn')) {
                obj['ping-issuer-dn'] = ApiClient.convertToType(data['ping-issuer-dn'], 'String');
            }
            if (data.hasOwnProperty('ping-jwks')) {
                obj['ping-jwks'] = ApiClient.convertToType(data['ping-jwks'], 'String');
            }
            if (data.hasOwnProperty('ping-jwks-url')) {
                obj['ping-jwks-url'] = ApiClient.convertToType(data['ping-jwks-url'], 'String');
            }
            if (data.hasOwnProperty('ping-password')) {
                obj['ping-password'] = ApiClient.convertToType(data['ping-password'], 'String');
            }
            if (data.hasOwnProperty('ping-privileged-user')) {
                obj['ping-privileged-user'] = ApiClient.convertToType(data['ping-privileged-user'], 'String');
            }
            if (data.hasOwnProperty('ping-redirect-uris')) {
                obj['ping-redirect-uris'] = ApiClient.convertToType(data['ping-redirect-uris'], ['String']);
            }
            if (data.hasOwnProperty('ping-restricted-scopes')) {
                obj['ping-restricted-scopes'] = ApiClient.convertToType(data['ping-restricted-scopes'], ['String']);
            }
            if (data.hasOwnProperty('ping-signing-algo')) {
                obj['ping-signing-algo'] = ApiClient.convertToType(data['ping-signing-algo'], 'String');
            }
            if (data.hasOwnProperty('ping-url')) {
                obj['ping-url'] = ApiClient.convertToType(data['ping-url'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user-ttl')) {
                obj['user-ttl'] = ApiClient.convertToType(data['user-ttl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
GatewayUpdateProducerPing.prototype['delete_protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateProducerPing.prototype['json'] = false;

/**
 * Producer name
 * @member {String} name
 */
GatewayUpdateProducerPing.prototype['name'] = undefined;

/**
 * Producer New name
 * @member {String} new-name
 */
GatewayUpdateProducerPing.prototype['new-name'] = undefined;

/**
 * Ping Federate administrative port
 * @member {String} ping-administrative-port
 * @default '9999'
 */
GatewayUpdateProducerPing.prototype['ping-administrative-port'] = '9999';

/**
 * Set a specific Access Token Management (ATM) instance for the created OAuth Client by providing the ATM Id. If no explicit value is given, the default pingfederate server ATM will be set.
 * @member {String} ping-atm-id
 */
GatewayUpdateProducerPing.prototype['ping-atm-id'] = undefined;

/**
 * Ping Federate authorization port
 * @member {String} ping-authorization-port
 * @default '9031'
 */
GatewayUpdateProducerPing.prototype['ping-authorization-port'] = '9031';

/**
 * The subject DN of the client certificate. If no explicit value is given, the producer will create CA certificate and matched client certificate and return it as value. Used in conjunction with ping-issuer-dn (relevant for CLIENT_TLS_CERTIFICATE authentication method)
 * @member {String} ping-cert-subject-dn
 */
GatewayUpdateProducerPing.prototype['ping-cert-subject-dn'] = undefined;

/**
 * OAuth Client Authentication Type [CLIENT_SECRET, PRIVATE_KEY_JWT, CLIENT_TLS_CERTIFICATE]
 * @member {String} ping-client-authentication-type
 * @default 'CLIENT_SECRET'
 */
GatewayUpdateProducerPing.prototype['ping-client-authentication-type'] = 'CLIENT_SECRET';

/**
 * Determines whether PingFederate requires a unique signed JWT from the client for each action (relevant for PRIVATE_KEY_JWT authentication method) [true/false]
 * @member {String} ping-enforce-replay-prevention
 * @default 'false'
 */
GatewayUpdateProducerPing.prototype['ping-enforce-replay-prevention'] = 'false';

/**
 * List of OAuth client grant types [IMPLICIT, AUTHORIZATION_CODE, CLIENT_CREDENTIALS, TOKEN_EXCHANGE, REFRESH_TOKEN, ASSERTION_GRANTS, PASSWORD, RESOURCE_OWNER_CREDENTIALS]. If no explicit value is given, AUTHORIZATION_CODE will be selected as default.
 * @member {Array.<String>} ping-grant-types
 */
GatewayUpdateProducerPing.prototype['ping-grant-types'] = undefined;

/**
 * Issuer DN of trusted CA certificate that imported into Ping Federate server. You may select \\\"Trust Any\\\" to trust all the existing issuers in Ping Federate server. Used in conjunction with ping-cert-subject-dn (relevant for CLIENT_TLS_CERTIFICATE authentication method)
 * @member {String} ping-issuer-dn
 */
GatewayUpdateProducerPing.prototype['ping-issuer-dn'] = undefined;

/**
 * Base64-encoded JSON Web Key Set (JWKS). If no explicit value is given, the producer will create JWKs and matched signed JWT (Sign Algo: RS256) and return it as value (relevant for PRIVATE_KEY_JWT authentication method)
 * @member {String} ping-jwks
 */
GatewayUpdateProducerPing.prototype['ping-jwks'] = undefined;

/**
 * The URL of the JSON Web Key Set (JWKS). If no explicit value is given, the producer will create JWKs and matched signed JWT and return it as value (relevant for PRIVATE_KEY_JWT authentication method)
 * @member {String} ping-jwks-url
 */
GatewayUpdateProducerPing.prototype['ping-jwks-url'] = undefined;

/**
 * Ping Federate privileged user password
 * @member {String} ping-password
 */
GatewayUpdateProducerPing.prototype['ping-password'] = undefined;

/**
 * Ping Federate privileged user
 * @member {String} ping-privileged-user
 */
GatewayUpdateProducerPing.prototype['ping-privileged-user'] = undefined;

/**
 * List of URIs to which the OAuth authorization server may redirect the resource owner's user agent after authorization is obtained. At least one redirection URI is required for the AUTHORIZATION_CODE and IMPLICIT grant types.
 * @member {Array.<String>} ping-redirect-uris
 */
GatewayUpdateProducerPing.prototype['ping-redirect-uris'] = undefined;

/**
 * Limit the OAuth client to specific scopes list
 * @member {Array.<String>} ping-restricted-scopes
 */
GatewayUpdateProducerPing.prototype['ping-restricted-scopes'] = undefined;

/**
 * The signing algorithm that the client must use to sign its request objects [RS256,RS384,RS512,ES256,ES384,ES512,PS256,PS384,PS512] If no explicit value is given, the client can use any of the supported signing algorithms (relevant for PRIVATE_KEY_JWT authentication method)
 * @member {String} ping-signing-algo
 */
GatewayUpdateProducerPing.prototype['ping-signing-algo'] = undefined;

/**
 * Ping URL
 * @member {String} ping-url
 */
GatewayUpdateProducerPing.prototype['ping-url'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayUpdateProducerPing.prototype['producer-encryption-key-name'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerPing.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerPing.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerPing.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerPing.prototype['uid-token'] = undefined;

/**
 * The time from dynamic secret creation to expiration.
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerPing.prototype['user-ttl'] = '60m';






export default GatewayUpdateProducerPing;

