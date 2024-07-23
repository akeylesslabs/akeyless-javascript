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
 * The TargetCreateLdap model module.
 * @module model/TargetCreateLdap
 * @version 4.2.1
 */
class TargetCreateLdap {
    /**
     * Constructs a new <code>TargetCreateLdap</code>.
     * targetCreateLdap is a command that creates a new ldap target
     * @alias module:model/TargetCreateLdap
     * @param bindDn {String} Bind DN
     * @param bindDnPassword {String} Bind DN Password
     * @param ldapUrl {String} LDAP Server URL
     * @param name {String} Target name
     */
    constructor(bindDn, bindDnPassword, ldapUrl, name) { 
        
        TargetCreateLdap.initialize(this, bindDn, bindDnPassword, ldapUrl, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bindDn, bindDnPassword, ldapUrl, name) { 
        obj['bind-dn'] = bindDn;
        obj['bind-dn-password'] = bindDnPassword;
        obj['ldap-url'] = ldapUrl;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>TargetCreateLdap</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetCreateLdap} obj Optional instance to populate.
     * @return {module:model/TargetCreateLdap} The populated <code>TargetCreateLdap</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetCreateLdap();

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


}

/**
 * Bind DN
 * @member {String} bind-dn
 */
TargetCreateLdap.prototype['bind-dn'] = undefined;

/**
 * Bind DN Password
 * @member {String} bind-dn-password
 */
TargetCreateLdap.prototype['bind-dn-password'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
TargetCreateLdap.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetCreateLdap.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetCreateLdap.prototype['key'] = undefined;

/**
 * CA Certificate File Content
 * @member {String} ldap-ca-cert
 */
TargetCreateLdap.prototype['ldap-ca-cert'] = undefined;

/**
 * LDAP Server URL
 * @member {String} ldap-url
 */
TargetCreateLdap.prototype['ldap-url'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetCreateLdap.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetCreateLdap.prototype['name'] = undefined;

/**
 * Set Ldap server type, Options:[OpenLDAP, ActiveDirectory]. Default is OpenLDAP
 * @member {String} server-type
 * @default 'OpenLDAP'
 */
TargetCreateLdap.prototype['server-type'] = 'OpenLDAP';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetCreateLdap.prototype['token'] = undefined;

/**
 * Token expiration
 * @member {String} token-expiration
 */
TargetCreateLdap.prototype['token-expiration'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetCreateLdap.prototype['uid-token'] = undefined;






export default TargetCreateLdap;

