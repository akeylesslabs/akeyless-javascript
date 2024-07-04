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
 * The AuthMethodCreateOIDC model module.
 * @module model/AuthMethodCreateOIDC
 * @version 4.2.0
 */
class AuthMethodCreateOIDC {
    /**
     * Constructs a new <code>AuthMethodCreateOIDC</code>.
     * authMethodCreateOIDC is a command that creates a new auth method that will be available to authenticate using OIDC.
     * @alias module:model/AuthMethodCreateOIDC
     * @param name {String} Auth Method name
     * @param uniqueIdentifier {String} A unique identifier (ID) value should be configured for OIDC, OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
     */
    constructor(name, uniqueIdentifier) { 
        
        AuthMethodCreateOIDC.initialize(this, name, uniqueIdentifier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, uniqueIdentifier) { 
        obj['name'] = name;
        obj['unique-identifier'] = uniqueIdentifier;
    }

    /**
     * Constructs a <code>AuthMethodCreateOIDC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthMethodCreateOIDC} obj Optional instance to populate.
     * @return {module:model/AuthMethodCreateOIDC} The populated <code>AuthMethodCreateOIDC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthMethodCreateOIDC();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('allowed-redirect-uri')) {
                obj['allowed-redirect-uri'] = ApiClient.convertToType(data['allowed-redirect-uri'], ['String']);
            }
            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], 'String');
            }
            if (data.hasOwnProperty('audit-logs-claims')) {
                obj['audit-logs-claims'] = ApiClient.convertToType(data['audit-logs-claims'], ['String']);
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('client-id')) {
                obj['client-id'] = ApiClient.convertToType(data['client-id'], 'String');
            }
            if (data.hasOwnProperty('client-secret')) {
                obj['client-secret'] = ApiClient.convertToType(data['client-secret'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('force-sub-claims')) {
                obj['force-sub-claims'] = ApiClient.convertToType(data['force-sub-claims'], 'Boolean');
            }
            if (data.hasOwnProperty('gw-bound-ips')) {
                obj['gw-bound-ips'] = ApiClient.convertToType(data['gw-bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('jwt-ttl')) {
                obj['jwt-ttl'] = ApiClient.convertToType(data['jwt-ttl'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('product-type')) {
                obj['product-type'] = ApiClient.convertToType(data['product-type'], ['String']);
            }
            if (data.hasOwnProperty('required-scopes')) {
                obj['required-scopes'] = ApiClient.convertToType(data['required-scopes'], ['String']);
            }
            if (data.hasOwnProperty('required-scopes-prefix')) {
                obj['required-scopes-prefix'] = ApiClient.convertToType(data['required-scopes-prefix'], 'String');
            }
            if (data.hasOwnProperty('subclaims-delimiters')) {
                obj['subclaims-delimiters'] = ApiClient.convertToType(data['subclaims-delimiters'], ['String']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('unique-identifier')) {
                obj['unique-identifier'] = ApiClient.convertToType(data['unique-identifier'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
AuthMethodCreateOIDC.prototype['access-expires'] = 0;

/**
 * Allowed redirect URIs after the authentication
 * @member {Array.<String>} allowed-redirect-uri
 */
AuthMethodCreateOIDC.prototype['allowed-redirect-uri'] = undefined;

/**
 * Audience claim to be used as part of the authentication flow. In case set, it must match the one configured on the Identity Provider's Application
 * @member {String} audience
 */
AuthMethodCreateOIDC.prototype['audience'] = undefined;

/**
 * Subclaims to include in audit logs, e.g \"--audit-logs-claims email --audit-logs-claims username\"
 * @member {Array.<String>} audit-logs-claims
 */
AuthMethodCreateOIDC.prototype['audit-logs-claims'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
AuthMethodCreateOIDC.prototype['bound-ips'] = undefined;

/**
 * Client ID
 * @member {String} client-id
 */
AuthMethodCreateOIDC.prototype['client-id'] = undefined;

/**
 * Client Secret
 * @member {String} client-secret
 */
AuthMethodCreateOIDC.prototype['client-secret'] = undefined;

/**
 * Auth Method description
 * @member {String} description
 */
AuthMethodCreateOIDC.prototype['description'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
AuthMethodCreateOIDC.prototype['force-sub-claims'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
AuthMethodCreateOIDC.prototype['gw-bound-ips'] = undefined;

/**
 * Issuer URL
 * @member {String} issuer
 */
AuthMethodCreateOIDC.prototype['issuer'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
AuthMethodCreateOIDC.prototype['json'] = false;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
AuthMethodCreateOIDC.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
AuthMethodCreateOIDC.prototype['name'] = undefined;

/**
 * Choose the relevant product type for the auth method [sm, sra, pm, dp, ca]
 * @member {Array.<String>} product-type
 */
AuthMethodCreateOIDC.prototype['product-type'] = undefined;

/**
 * RequiredScopes is a list of required scopes that the oidc method will request from the oidc provider and the user must approve
 * @member {Array.<String>} required-scopes
 */
AuthMethodCreateOIDC.prototype['required-scopes'] = undefined;

/**
 * RequiredScopesPrefix is a a prefix to add to all required-scopes when requesting them from the oidc server (for example, azures' Application ID URI)
 * @member {String} required-scopes-prefix
 */
AuthMethodCreateOIDC.prototype['required-scopes-prefix'] = undefined;

/**
 * A list of additional sub claims delimiters (relevant only for SAML, OIDC, OAuth2/JWT)
 * @member {Array.<String>} subclaims-delimiters
 */
AuthMethodCreateOIDC.prototype['subclaims-delimiters'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
AuthMethodCreateOIDC.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
AuthMethodCreateOIDC.prototype['uid-token'] = undefined;

/**
 * A unique identifier (ID) value should be configured for OIDC, OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
 * @member {String} unique-identifier
 */
AuthMethodCreateOIDC.prototype['unique-identifier'] = undefined;






export default AuthMethodCreateOIDC;

