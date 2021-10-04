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
 * The CreateLdapTarget model module.
 * @module model/CreateLdapTarget
 * @version 2.5.9
 */
class CreateLdapTarget {
    /**
     * Constructs a new <code>CreateLdapTarget</code>.
     * @alias module:model/CreateLdapTarget
     * @param accessId {String} Access ID
     * @param ldapUrl {String} LDAP Server URL
     * @param name {String} Target name
     * @param userDn {String} User DN
     */
    constructor(accessId, ldapUrl, name, userDn) { 
        
        CreateLdapTarget.initialize(this, accessId, ldapUrl, name, userDn);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accessId, ldapUrl, name, userDn) { 
        obj['access-id'] = accessId;
        obj['ldap-url'] = ldapUrl;
        obj['name'] = name;
        obj['user-dn'] = userDn;
    }

    /**
     * Constructs a <code>CreateLdapTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLdapTarget} obj Optional instance to populate.
     * @return {module:model/CreateLdapTarget} The populated <code>CreateLdapTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateLdapTarget();

            if (data.hasOwnProperty('access-id')) {
                obj['access-id'] = ApiClient.convertToType(data['access-id'], 'String');
            }
            if (data.hasOwnProperty('bind-dn')) {
                obj['bind-dn'] = ApiClient.convertToType(data['bind-dn'], 'String');
            }
            if (data.hasOwnProperty('bind-dn-password')) {
                obj['bind-dn-password'] = ApiClient.convertToType(data['bind-dn-password'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('enable-anonym-search')) {
                obj['enable-anonym-search'] = ApiClient.convertToType(data['enable-anonym-search'], 'Boolean');
            }
            if (data.hasOwnProperty('group-attribute')) {
                obj['group-attribute'] = ApiClient.convertToType(data['group-attribute'], 'String');
            }
            if (data.hasOwnProperty('group-dn')) {
                obj['group-dn'] = ApiClient.convertToType(data['group-dn'], 'String');
            }
            if (data.hasOwnProperty('group-filter')) {
                obj['group-filter'] = ApiClient.convertToType(data['group-filter'], 'String');
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
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('private-key')) {
                obj['private-key'] = ApiClient.convertToType(data['private-key'], 'String');
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
            if (data.hasOwnProperty('user-attribute')) {
                obj['user-attribute'] = ApiClient.convertToType(data['user-attribute'], 'String');
            }
            if (data.hasOwnProperty('user-dn')) {
                obj['user-dn'] = ApiClient.convertToType(data['user-dn'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Access ID
 * @member {String} access-id
 */
CreateLdapTarget.prototype['access-id'] = undefined;

/**
 * Bind DN
 * @member {String} bind-dn
 */
CreateLdapTarget.prototype['bind-dn'] = undefined;

/**
 * Bind DN Password
 * @member {String} bind-dn-password
 */
CreateLdapTarget.prototype['bind-dn-password'] = undefined;

/**
 * Comment about the target
 * @member {String} comment
 */
CreateLdapTarget.prototype['comment'] = undefined;

/**
 * EnableAnonymousSearch
 * @member {Boolean} enable-anonym-search
 */
CreateLdapTarget.prototype['enable-anonym-search'] = undefined;

/**
 * Group attribute
 * @member {String} group-attribute
 */
CreateLdapTarget.prototype['group-attribute'] = undefined;

/**
 * Group DN
 * @member {String} group-dn
 */
CreateLdapTarget.prototype['group-dn'] = undefined;

/**
 * Group attribute
 * @member {String} group-filter
 */
CreateLdapTarget.prototype['group-filter'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateLdapTarget.prototype['key'] = undefined;

/**
 * CA Certificate File Content
 * @member {String} ldap-ca-cert
 */
CreateLdapTarget.prototype['ldap-ca-cert'] = undefined;

/**
 * LDAP Server URL
 * @member {String} ldap-url
 */
CreateLdapTarget.prototype['ldap-url'] = undefined;

/**
 * Target name
 * @member {String} name
 */
CreateLdapTarget.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
CreateLdapTarget.prototype['password'] = undefined;

/**
 * Base64-encoded ldap private key text
 * @member {String} private-key
 */
CreateLdapTarget.prototype['private-key'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateLdapTarget.prototype['token'] = undefined;

/**
 * Token expiration
 * @member {String} token-expiration
 */
CreateLdapTarget.prototype['token-expiration'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateLdapTarget.prototype['uid-token'] = undefined;

/**
 * User Attribute
 * @member {String} user-attribute
 */
CreateLdapTarget.prototype['user-attribute'] = undefined;

/**
 * User DN
 * @member {String} user-dn
 */
CreateLdapTarget.prototype['user-dn'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
CreateLdapTarget.prototype['username'] = undefined;






export default CreateLdapTarget;

