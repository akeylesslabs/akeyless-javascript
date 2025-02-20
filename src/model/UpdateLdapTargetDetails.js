/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UpdateLdapTargetDetails model module.
 * @module model/UpdateLdapTargetDetails
 * @version 5.0.0
 */
class UpdateLdapTargetDetails {
    /**
     * Constructs a new <code>UpdateLdapTargetDetails</code>.
     * @alias module:model/UpdateLdapTargetDetails
     * @param name {String} Target name
     */
    constructor(name) { 
        
        UpdateLdapTargetDetails.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['json'] = false;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>UpdateLdapTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateLdapTargetDetails} obj Optional instance to populate.
     * @return {module:model/UpdateLdapTargetDetails} The populated <code>UpdateLdapTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateLdapTargetDetails();

            if (data.hasOwnProperty('bind-dn')) {
                obj['bind-dn'] = ApiClient.convertToType(data['bind-dn'], 'String');
            }
            if (data.hasOwnProperty('bind-dn-password')) {
                obj['bind-dn-password'] = ApiClient.convertToType(data['bind-dn-password'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('keep-prev-version')) {
                obj['keep-prev-version'] = ApiClient.convertToType(data['keep-prev-version'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('ldap-ca-cert')) {
                obj['ldap-ca-cert'] = ApiClient.convertToType(data['ldap-ca-cert'], 'String');
            }
            if (data.hasOwnProperty('ldap-url')) {
                obj['ldap-url'] = ApiClient.convertToType(data['ldap-url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-version')) {
                obj['new-version'] = ApiClient.convertToType(data['new-version'], 'Boolean');
            }
            if (data.hasOwnProperty('protection_key')) {
                obj['protection_key'] = ApiClient.convertToType(data['protection_key'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('token-expiration')) {
                obj['token-expiration'] = ApiClient.convertToType(data['token-expiration'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateLdapTargetDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateLdapTargetDetails</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateLdapTargetDetails.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['bind-dn'] && !(typeof data['bind-dn'] === 'string' || data['bind-dn'] instanceof String)) {
            throw new Error("Expected the field `bind-dn` to be a primitive type in the JSON string but got " + data['bind-dn']);
        }
        // ensure the json data is a string
        if (data['bind-dn-password'] && !(typeof data['bind-dn-password'] === 'string' || data['bind-dn-password'] instanceof String)) {
            throw new Error("Expected the field `bind-dn-password` to be a primitive type in the JSON string but got " + data['bind-dn-password']);
        }
        // ensure the json data is a string
        if (data['keep-prev-version'] && !(typeof data['keep-prev-version'] === 'string' || data['keep-prev-version'] instanceof String)) {
            throw new Error("Expected the field `keep-prev-version` to be a primitive type in the JSON string but got " + data['keep-prev-version']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['ldap-ca-cert'] && !(typeof data['ldap-ca-cert'] === 'string' || data['ldap-ca-cert'] instanceof String)) {
            throw new Error("Expected the field `ldap-ca-cert` to be a primitive type in the JSON string but got " + data['ldap-ca-cert']);
        }
        // ensure the json data is a string
        if (data['ldap-url'] && !(typeof data['ldap-url'] === 'string' || data['ldap-url'] instanceof String)) {
            throw new Error("Expected the field `ldap-url` to be a primitive type in the JSON string but got " + data['ldap-url']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['protection_key'] && !(typeof data['protection_key'] === 'string' || data['protection_key'] instanceof String)) {
            throw new Error("Expected the field `protection_key` to be a primitive type in the JSON string but got " + data['protection_key']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['token-expiration'] && !(typeof data['token-expiration'] === 'string' || data['token-expiration'] instanceof String)) {
            throw new Error("Expected the field `token-expiration` to be a primitive type in the JSON string but got " + data['token-expiration']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

UpdateLdapTargetDetails.RequiredProperties = ["name"];

/**
 * @member {String} bind-dn
 */
UpdateLdapTargetDetails.prototype['bind-dn'] = undefined;

/**
 * @member {String} bind-dn-password
 */
UpdateLdapTargetDetails.prototype['bind-dn-password'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateLdapTargetDetails.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
UpdateLdapTargetDetails.prototype['keep-prev-version'] = undefined;

/**
 * @member {String} key
 */
UpdateLdapTargetDetails.prototype['key'] = undefined;

/**
 * @member {String} ldap-ca-cert
 */
UpdateLdapTargetDetails.prototype['ldap-ca-cert'] = undefined;

/**
 * @member {String} ldap-url
 */
UpdateLdapTargetDetails.prototype['ldap-url'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateLdapTargetDetails.prototype['name'] = undefined;

/**
 * Deprecated
 * @member {Boolean} new-version
 */
UpdateLdapTargetDetails.prototype['new-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} protection_key
 */
UpdateLdapTargetDetails.prototype['protection_key'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateLdapTargetDetails.prototype['token'] = undefined;

/**
 * @member {String} token-expiration
 */
UpdateLdapTargetDetails.prototype['token-expiration'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateLdapTargetDetails.prototype['uid-token'] = undefined;






export default UpdateLdapTargetDetails;

