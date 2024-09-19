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
 * The DynamicSecretUpdateGoogleWorkspace model module.
 * @module model/DynamicSecretUpdateGoogleWorkspace
 * @version 4.2.4
 */
class DynamicSecretUpdateGoogleWorkspace {
    /**
     * Constructs a new <code>DynamicSecretUpdateGoogleWorkspace</code>.
     * dynamicSecretUpdateGoogleWorkspace is a command that updates a Google Workspace dynamic secret
     * @alias module:model/DynamicSecretUpdateGoogleWorkspace
     * @param accessMode {String} 
     * @param adminEmail {String} Admin user email
     * @param name {String} Dynamic secret name
     */
    constructor(accessMode, adminEmail, name) { 
        
        DynamicSecretUpdateGoogleWorkspace.initialize(this, accessMode, adminEmail, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accessMode, adminEmail, name) { 
        obj['access-mode'] = accessMode;
        obj['admin-email'] = adminEmail;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>DynamicSecretUpdateGoogleWorkspace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretUpdateGoogleWorkspace} obj Optional instance to populate.
     * @return {module:model/DynamicSecretUpdateGoogleWorkspace} The populated <code>DynamicSecretUpdateGoogleWorkspace</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretUpdateGoogleWorkspace();

            if (data.hasOwnProperty('access-mode')) {
                obj['access-mode'] = ApiClient.convertToType(data['access-mode'], 'String');
            }
            if (data.hasOwnProperty('admin-email')) {
                obj['admin-email'] = ApiClient.convertToType(data['admin-email'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('gcp-key')) {
                obj['gcp-key'] = ApiClient.convertToType(data['gcp-key'], 'String');
            }
            if (data.hasOwnProperty('group-email')) {
                obj['group-email'] = ApiClient.convertToType(data['group-email'], 'String');
            }
            if (data.hasOwnProperty('group-role')) {
                obj['group-role'] = ApiClient.convertToType(data['group-role'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('role-name')) {
                obj['role-name'] = ApiClient.convertToType(data['role-name'], 'String');
            }
            if (data.hasOwnProperty('role-scope')) {
                obj['role-scope'] = ApiClient.convertToType(data['role-scope'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-url')) {
                obj['secure-access-url'] = ApiClient.convertToType(data['secure-access-url'], 'String');
            }
            if (data.hasOwnProperty('secure-access-web')) {
                obj['secure-access-web'] = ApiClient.convertToType(data['secure-access-web'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-browsing')) {
                obj['secure-access-web-browsing'] = ApiClient.convertToType(data['secure-access-web-browsing'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-proxy')) {
                obj['secure-access-web-proxy'] = ApiClient.convertToType(data['secure-access-web-proxy'], 'Boolean');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user-ttl')) {
                obj['user-ttl'] = ApiClient.convertToType(data['user-ttl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} access-mode
 */
DynamicSecretUpdateGoogleWorkspace.prototype['access-mode'] = undefined;

/**
 * Admin user email
 * @member {String} admin-email
 */
DynamicSecretUpdateGoogleWorkspace.prototype['admin-email'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
DynamicSecretUpdateGoogleWorkspace.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretUpdateGoogleWorkspace.prototype['description'] = undefined;

/**
 * Base64-encoded service account private key text
 * @member {String} gcp-key
 */
DynamicSecretUpdateGoogleWorkspace.prototype['gcp-key'] = undefined;

/**
 * A group email, relevant only for group access-mode
 * @member {String} group-email
 */
DynamicSecretUpdateGoogleWorkspace.prototype['group-email'] = undefined;

/**
 * @member {String} group-role
 */
DynamicSecretUpdateGoogleWorkspace.prototype['group-role'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretUpdateGoogleWorkspace.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretUpdateGoogleWorkspace.prototype['name'] = undefined;

/**
 * Dynamic secret name
 * @member {String} new-name
 */
DynamicSecretUpdateGoogleWorkspace.prototype['new-name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
DynamicSecretUpdateGoogleWorkspace.prototype['producer-encryption-key-name'] = undefined;

/**
 * Name of the admin role to assign to the user, relevant only for role access-mode
 * @member {String} role-name
 */
DynamicSecretUpdateGoogleWorkspace.prototype['role-name'] = undefined;

/**
 * @member {String} role-scope
 */
DynamicSecretUpdateGoogleWorkspace.prototype['role-scope'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
DynamicSecretUpdateGoogleWorkspace.prototype['secure-access-enable'] = undefined;

/**
 * Destination URL to inject secrets
 * @member {String} secure-access-url
 */
DynamicSecretUpdateGoogleWorkspace.prototype['secure-access-url'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default true
 */
DynamicSecretUpdateGoogleWorkspace.prototype['secure-access-web'] = true;

/**
 * Secure browser via Akeyless Web Access Bastion
 * @member {Boolean} secure-access-web-browsing
 * @default false
 */
DynamicSecretUpdateGoogleWorkspace.prototype['secure-access-web-browsing'] = false;

/**
 * Web-Proxy via Akeyless Web Access Bastion
 * @member {Boolean} secure-access-web-proxy
 * @default false
 */
DynamicSecretUpdateGoogleWorkspace.prototype['secure-access-web-proxy'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretUpdateGoogleWorkspace.prototype['tags'] = undefined;

/**
 * Name of existing target to use in dynamic secret creation
 * @member {String} target-name
 */
DynamicSecretUpdateGoogleWorkspace.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretUpdateGoogleWorkspace.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretUpdateGoogleWorkspace.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
DynamicSecretUpdateGoogleWorkspace.prototype['user-ttl'] = '60m';






export default DynamicSecretUpdateGoogleWorkspace;

