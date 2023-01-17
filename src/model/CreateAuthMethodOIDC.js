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
 * The CreateAuthMethodOIDC model module.
 * @module model/CreateAuthMethodOIDC
 * @version 3.1.2
 */
class CreateAuthMethodOIDC {
    /**
     * Constructs a new <code>CreateAuthMethodOIDC</code>.
     * createAuthMethodOIDC is a command that creates a new auth method that will be available to authenticate using OIDC.
     * @alias module:model/CreateAuthMethodOIDC
     * @param name {String} Auth Method name
     * @param uniqueIdentifier {String} A unique identifier (ID) value should be configured for OIDC, OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
     */
    constructor(name, uniqueIdentifier) { 
        
        CreateAuthMethodOIDC.initialize(this, name, uniqueIdentifier);
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
     * Constructs a <code>CreateAuthMethodOIDC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodOIDC} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodOIDC} The populated <code>CreateAuthMethodOIDC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodOIDC();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('allowed-redirect-uri')) {
                obj['allowed-redirect-uri'] = ApiClient.convertToType(data['allowed-redirect-uri'], ['String']);
            }
            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], 'String');
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
            if (data.hasOwnProperty('required-scopes')) {
                obj['required-scopes'] = ApiClient.convertToType(data['required-scopes'], ['String']);
            }
            if (data.hasOwnProperty('required-scopes-prefix')) {
                obj['required-scopes-prefix'] = ApiClient.convertToType(data['required-scopes-prefix'], 'String');
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
CreateAuthMethodOIDC.prototype['access-expires'] = 0;

/**
 * Allowed redirect URIs after the authentication
 * @member {Array.<String>} allowed-redirect-uri
 */
CreateAuthMethodOIDC.prototype['allowed-redirect-uri'] = undefined;

/**
 * Audience claim to be used as part of the authentication flow. In case set, it must match the one configured on the Identity Provider's Application
 * @member {String} audience
 */
CreateAuthMethodOIDC.prototype['audience'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
CreateAuthMethodOIDC.prototype['bound-ips'] = undefined;

/**
 * Client ID
 * @member {String} client-id
 */
CreateAuthMethodOIDC.prototype['client-id'] = undefined;

/**
 * Client Secret
 * @member {String} client-secret
 */
CreateAuthMethodOIDC.prototype['client-secret'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
CreateAuthMethodOIDC.prototype['force-sub-claims'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
CreateAuthMethodOIDC.prototype['gw-bound-ips'] = undefined;

/**
 * Issuer URL
 * @member {String} issuer
 */
CreateAuthMethodOIDC.prototype['issuer'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
CreateAuthMethodOIDC.prototype['json'] = undefined;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 */
CreateAuthMethodOIDC.prototype['jwt-ttl'] = undefined;

/**
 * Auth Method name
 * @member {String} name
 */
CreateAuthMethodOIDC.prototype['name'] = undefined;

/**
 * RequiredScopes is a list of required scopes that the oidc method will request from the oidc provider and the user must approve
 * @member {Array.<String>} required-scopes
 */
CreateAuthMethodOIDC.prototype['required-scopes'] = undefined;

/**
 * RequiredScopesPrefix is a a prefix to add to all required-scopes when requesting them from the oidc server (for example, azures' Application ID URI)
 * @member {String} required-scopes-prefix
 */
CreateAuthMethodOIDC.prototype['required-scopes-prefix'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateAuthMethodOIDC.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateAuthMethodOIDC.prototype['uid-token'] = undefined;

/**
 * A unique identifier (ID) value should be configured for OIDC, OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
 * @member {String} unique-identifier
 */
CreateAuthMethodOIDC.prototype['unique-identifier'] = undefined;






export default CreateAuthMethodOIDC;

