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
 * The TargetUpdateLdap model module.
 * @module model/TargetUpdateLdap
 * @version 5.0.2
 */
class TargetUpdateLdap {
    /**
     * Constructs a new <code>TargetUpdateLdap</code>.
     * targetUpdateLdap is a command that updates an existing ldap target
     * @alias module:model/TargetUpdateLdap
     * @param bindDn {String} Bind DN
     * @param bindDnPassword {String} Bind DN Password
     * @param ldapUrl {String} LDAP Server URL
     * @param name {String} Target name
     */
    constructor(bindDn, bindDnPassword, ldapUrl, name) { 
        
        TargetUpdateLdap.initialize(this, bindDn, bindDnPassword, ldapUrl, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bindDn, bindDnPassword, ldapUrl, name) { 
        obj['bind-dn'] = bindDn;
        obj['bind-dn-password'] = bindDnPassword;
        obj['json'] = false;
        obj['ldap-url'] = ldapUrl;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>TargetUpdateLdap</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetUpdateLdap} obj Optional instance to populate.
     * @return {module:model/TargetUpdateLdap} The populated <code>TargetUpdateLdap</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetUpdateLdap();

            if (data.hasOwnProperty('bind-dn')) {
                obj['bind-dn'] = ApiClient.convertToType(data['bind-dn'], 'String');
            }
            if (data.hasOwnProperty('bind-dn-password')) {
                obj['bind-dn-password'] = ApiClient.convertToType(data['bind-dn-password'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('server-type')) {
                obj['server-type'] = ApiClient.convertToType(data['server-type'], 'String');
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
     * Validates the JSON data with respect to <code>TargetUpdateLdap</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TargetUpdateLdap</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TargetUpdateLdap.RequiredProperties) {
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
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
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
        if (data['max-versions'] && !(typeof data['max-versions'] === 'string' || data['max-versions'] instanceof String)) {
            throw new Error("Expected the field `max-versions` to be a primitive type in the JSON string but got " + data['max-versions']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['new-name'] && !(typeof data['new-name'] === 'string' || data['new-name'] instanceof String)) {
            throw new Error("Expected the field `new-name` to be a primitive type in the JSON string but got " + data['new-name']);
        }
        // ensure the json data is a string
        if (data['server-type'] && !(typeof data['server-type'] === 'string' || data['server-type'] instanceof String)) {
            throw new Error("Expected the field `server-type` to be a primitive type in the JSON string but got " + data['server-type']);
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

TargetUpdateLdap.RequiredProperties = ["bind-dn", "bind-dn-password", "ldap-url", "name"];

/**
 * Bind DN
 * @member {String} bind-dn
 */
TargetUpdateLdap.prototype['bind-dn'] = undefined;

/**
 * Bind DN Password
 * @member {String} bind-dn-password
 */
TargetUpdateLdap.prototype['bind-dn-password'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
TargetUpdateLdap.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetUpdateLdap.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
TargetUpdateLdap.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetUpdateLdap.prototype['key'] = undefined;

/**
 * CA Certificate File Content
 * @member {String} ldap-ca-cert
 */
TargetUpdateLdap.prototype['ldap-ca-cert'] = undefined;

/**
 * LDAP Server URL
 * @member {String} ldap-url
 */
TargetUpdateLdap.prototype['ldap-url'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetUpdateLdap.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetUpdateLdap.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
TargetUpdateLdap.prototype['new-name'] = undefined;

/**
 * Set Ldap server type, Options:[OpenLDAP, ActiveDirectory]
 * @member {String} server-type
 */
TargetUpdateLdap.prototype['server-type'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetUpdateLdap.prototype['token'] = undefined;

/**
 * Token expiration
 * @member {String} token-expiration
 */
TargetUpdateLdap.prototype['token-expiration'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetUpdateLdap.prototype['uid-token'] = undefined;






export default TargetUpdateLdap;

