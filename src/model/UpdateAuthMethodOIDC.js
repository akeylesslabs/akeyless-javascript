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
 * The UpdateAuthMethodOIDC model module.
 * @module model/UpdateAuthMethodOIDC
 * @version 2.5.22
 */
class UpdateAuthMethodOIDC {
    /**
     * Constructs a new <code>UpdateAuthMethodOIDC</code>.
     * updateAuthMethodOIDC is a command that updates a new auth method that will be available to authenticate using OIDC.
     * @alias module:model/UpdateAuthMethodOIDC
     * @param name {String} Auth Method name
     * @param uniqueIdentifier {String} A unique identifier (ID) value should be configured for OIDC, OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
     */
    constructor(name, uniqueIdentifier) { 
        
        UpdateAuthMethodOIDC.initialize(this, name, uniqueIdentifier);
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
     * Constructs a <code>UpdateAuthMethodOIDC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAuthMethodOIDC} obj Optional instance to populate.
     * @return {module:model/UpdateAuthMethodOIDC} The populated <code>UpdateAuthMethodOIDC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAuthMethodOIDC();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('allowed-redirect-uri')) {
                obj['allowed-redirect-uri'] = ApiClient.convertToType(data['allowed-redirect-uri'], ['String']);
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
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
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
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
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
UpdateAuthMethodOIDC.prototype['access-expires'] = 0;

/**
 * Allowed redirect URIs after the authentication
 * @member {Array.<String>} allowed-redirect-uri
 */
UpdateAuthMethodOIDC.prototype['allowed-redirect-uri'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
UpdateAuthMethodOIDC.prototype['bound-ips'] = undefined;

/**
 * Client ID
 * @member {String} client-id
 */
UpdateAuthMethodOIDC.prototype['client-id'] = undefined;

/**
 * Client Secret
 * @member {String} client-secret
 */
UpdateAuthMethodOIDC.prototype['client-secret'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
UpdateAuthMethodOIDC.prototype['force-sub-claims'] = undefined;

/**
 * Issuer URL
 * @member {String} issuer
 */
UpdateAuthMethodOIDC.prototype['issuer'] = undefined;

/**
 * Auth Method name
 * @member {String} name
 */
UpdateAuthMethodOIDC.prototype['name'] = undefined;

/**
 * Auth Method new name
 * @member {String} new-name
 */
UpdateAuthMethodOIDC.prototype['new-name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
UpdateAuthMethodOIDC.prototype['password'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateAuthMethodOIDC.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateAuthMethodOIDC.prototype['uid-token'] = undefined;

/**
 * A unique identifier (ID) value should be configured for OIDC, OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
 * @member {String} unique-identifier
 */
UpdateAuthMethodOIDC.prototype['unique-identifier'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
UpdateAuthMethodOIDC.prototype['username'] = undefined;






export default UpdateAuthMethodOIDC;
