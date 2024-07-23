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
 * The AuthMethodCreateLdap model module.
 * @module model/AuthMethodCreateLdap
 * @version 4.2.1
 */
class AuthMethodCreateLdap {
    /**
     * Constructs a new <code>AuthMethodCreateLdap</code>.
     * authMethodCreateLdap is a command that creates a new auth method that will be able to authenticate using LDAP.
     * @alias module:model/AuthMethodCreateLdap
     * @param name {String} Auth Method name
     */
    constructor(name) { 
        
        AuthMethodCreateLdap.initialize(this, name);
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
     * Constructs a <code>AuthMethodCreateLdap</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthMethodCreateLdap} obj Optional instance to populate.
     * @return {module:model/AuthMethodCreateLdap} The populated <code>AuthMethodCreateLdap</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthMethodCreateLdap();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('audit-logs-claims')) {
                obj['audit-logs-claims'] = ApiClient.convertToType(data['audit-logs-claims'], ['String']);
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('force-sub-claims')) {
                obj['force-sub-claims'] = ApiClient.convertToType(data['force-sub-claims'], 'Boolean');
            }
            if (data.hasOwnProperty('gen-key')) {
                obj['gen-key'] = ApiClient.convertToType(data['gen-key'], 'String');
            }
            if (data.hasOwnProperty('gw-bound-ips')) {
                obj['gw-bound-ips'] = ApiClient.convertToType(data['gw-bound-ips'], ['String']);
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
AuthMethodCreateLdap.prototype['access-expires'] = 0;

/**
 * Subclaims to include in audit logs, e.g \"--audit-logs-claims email --audit-logs-claims username\"
 * @member {Array.<String>} audit-logs-claims
 */
AuthMethodCreateLdap.prototype['audit-logs-claims'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
AuthMethodCreateLdap.prototype['bound-ips'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
AuthMethodCreateLdap.prototype['delete_protection'] = undefined;

/**
 * Auth Method description
 * @member {String} description
 */
AuthMethodCreateLdap.prototype['description'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
AuthMethodCreateLdap.prototype['force-sub-claims'] = undefined;

/**
 * Automatically generate key-pair for LDAP configuration. If set to false, a public key needs to be provided [true/false]
 * @member {String} gen-key
 * @default 'true'
 */
AuthMethodCreateLdap.prototype['gen-key'] = 'true';

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
AuthMethodCreateLdap.prototype['gw-bound-ips'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
AuthMethodCreateLdap.prototype['json'] = false;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
AuthMethodCreateLdap.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
AuthMethodCreateLdap.prototype['name'] = undefined;

/**
 * Choose the relevant product type for the auth method [sm, sra, pm, dp, ca]
 * @member {Array.<String>} product-type
 */
AuthMethodCreateLdap.prototype['product-type'] = undefined;

/**
 * A public key generated for LDAP authentication method on Akeyless in base64 or PEM format [RSA2048]
 * @member {String} public-key-data
 */
AuthMethodCreateLdap.prototype['public-key-data'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
AuthMethodCreateLdap.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
AuthMethodCreateLdap.prototype['uid-token'] = undefined;

/**
 * A unique identifier (ID) value should be configured for OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
 * @member {String} unique-identifier
 * @default 'users'
 */
AuthMethodCreateLdap.prototype['unique-identifier'] = 'users';






export default AuthMethodCreateLdap;

