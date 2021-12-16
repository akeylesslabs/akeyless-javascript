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
 * The UpdateAuthMethodOAuth2 model module.
 * @module model/UpdateAuthMethodOAuth2
 * @version 2.5.22
 */
class UpdateAuthMethodOAuth2 {
    /**
     * Constructs a new <code>UpdateAuthMethodOAuth2</code>.
     * updateAuthMethodOAuth2 is a command that updates a new auth method that will be able to authenticate using Oauth2.
     * @alias module:model/UpdateAuthMethodOAuth2
     * @param jwksUri {String} The URL to the JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server.
     * @param name {String} Auth Method name
     * @param uniqueIdentifier {String} A unique identifier (ID) value should be configured for OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
     */
    constructor(jwksUri, name, uniqueIdentifier) { 
        
        UpdateAuthMethodOAuth2.initialize(this, jwksUri, name, uniqueIdentifier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, jwksUri, name, uniqueIdentifier) { 
        obj['jwks-uri'] = jwksUri;
        obj['name'] = name;
        obj['unique-identifier'] = uniqueIdentifier;
    }

    /**
     * Constructs a <code>UpdateAuthMethodOAuth2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAuthMethodOAuth2} obj Optional instance to populate.
     * @return {module:model/UpdateAuthMethodOAuth2} The populated <code>UpdateAuthMethodOAuth2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAuthMethodOAuth2();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], 'String');
            }
            if (data.hasOwnProperty('bound-client-ids')) {
                obj['bound-client-ids'] = ApiClient.convertToType(data['bound-client-ids'], ['String']);
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('force-sub-claims')) {
                obj['force-sub-claims'] = ApiClient.convertToType(data['force-sub-claims'], 'Boolean');
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
            if (data.hasOwnProperty('jwks-uri')) {
                obj['jwks-uri'] = ApiClient.convertToType(data['jwks-uri'], 'String');
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
UpdateAuthMethodOAuth2.prototype['access-expires'] = 0;

/**
 * The audience in the JWT
 * @member {String} audience
 */
UpdateAuthMethodOAuth2.prototype['audience'] = undefined;

/**
 * The clients ids that the access is restricted to
 * @member {Array.<String>} bound-client-ids
 */
UpdateAuthMethodOAuth2.prototype['bound-client-ids'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
UpdateAuthMethodOAuth2.prototype['bound-ips'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
UpdateAuthMethodOAuth2.prototype['force-sub-claims'] = undefined;

/**
 * Issuer URL
 * @member {String} issuer
 */
UpdateAuthMethodOAuth2.prototype['issuer'] = undefined;

/**
 * The URL to the JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server.
 * @member {String} jwks-uri
 */
UpdateAuthMethodOAuth2.prototype['jwks-uri'] = undefined;

/**
 * Auth Method name
 * @member {String} name
 */
UpdateAuthMethodOAuth2.prototype['name'] = undefined;

/**
 * Auth Method new name
 * @member {String} new-name
 */
UpdateAuthMethodOAuth2.prototype['new-name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
UpdateAuthMethodOAuth2.prototype['password'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateAuthMethodOAuth2.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateAuthMethodOAuth2.prototype['uid-token'] = undefined;

/**
 * A unique identifier (ID) value should be configured for OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
 * @member {String} unique-identifier
 */
UpdateAuthMethodOAuth2.prototype['unique-identifier'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
UpdateAuthMethodOAuth2.prototype['username'] = undefined;






export default UpdateAuthMethodOAuth2;
