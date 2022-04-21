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
 * The UpdateAuthMethodLDAP model module.
 * @module model/UpdateAuthMethodLDAP
 * @version 2.16.3
 */
class UpdateAuthMethodLDAP {
    /**
     * Constructs a new <code>UpdateAuthMethodLDAP</code>.
     * updateAuthMethodLDAP is a command that updates a new auth method that will be able to authenticate using LDAP.
     * @alias module:model/UpdateAuthMethodLDAP
     * @param name {String} Auth Method name
     */
    constructor(name) { 
        
        UpdateAuthMethodLDAP.initialize(this, name);
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
     * Constructs a <code>UpdateAuthMethodLDAP</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAuthMethodLDAP} obj Optional instance to populate.
     * @return {module:model/UpdateAuthMethodLDAP} The populated <code>UpdateAuthMethodLDAP</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAuthMethodLDAP();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('force-sub-claims')) {
                obj['force-sub-claims'] = ApiClient.convertToType(data['force-sub-claims'], 'Boolean');
            }
            if (data.hasOwnProperty('jwt-ttl')) {
                obj['jwt-ttl'] = ApiClient.convertToType(data['jwt-ttl'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('public-key-data')) {
                obj['public-key-data'] = ApiClient.convertToType(data['public-key-data'], 'String');
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
UpdateAuthMethodLDAP.prototype['access-expires'] = 0;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
UpdateAuthMethodLDAP.prototype['bound-ips'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
UpdateAuthMethodLDAP.prototype['force-sub-claims'] = undefined;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
UpdateAuthMethodLDAP.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
UpdateAuthMethodLDAP.prototype['name'] = undefined;

/**
 * Auth Method new name
 * @member {String} new-name
 */
UpdateAuthMethodLDAP.prototype['new-name'] = undefined;

/**
 * A public key generated for LDAP authentication method on Akeyless in base64 format [RSA2048]
 * @member {String} public-key-data
 */
UpdateAuthMethodLDAP.prototype['public-key-data'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateAuthMethodLDAP.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateAuthMethodLDAP.prototype['uid-token'] = undefined;

/**
 * A unique identifier (ID) value should be configured for OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
 * @member {String} unique-identifier
 */
UpdateAuthMethodLDAP.prototype['unique-identifier'] = undefined;






export default UpdateAuthMethodLDAP;

