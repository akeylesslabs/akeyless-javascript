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
 * The UpdateSSHTarget model module.
 * @module model/UpdateSSHTarget
 * @version 3.3.8
 */
class UpdateSSHTarget {
    /**
     * Constructs a new <code>UpdateSSHTarget</code>.
     * @alias module:model/UpdateSSHTarget
     * @param name {String} Target name
     */
    constructor(name) { 
        
        UpdateSSHTarget.initialize(this, name);
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
     * Constructs a <code>UpdateSSHTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateSSHTarget} obj Optional instance to populate.
     * @return {module:model/UpdateSSHTarget} The populated <code>UpdateSSHTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateSSHTarget();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'String');
            }
            if (data.hasOwnProperty('private-key')) {
                obj['private-key'] = ApiClient.convertToType(data['private-key'], 'String');
            }
            if (data.hasOwnProperty('private-key-password')) {
                obj['private-key-password'] = ApiClient.convertToType(data['private-key-password'], 'String');
            }
            if (data.hasOwnProperty('ssh-password')) {
                obj['ssh-password'] = ApiClient.convertToType(data['ssh-password'], 'String');
            }
            if (data.hasOwnProperty('ssh-username')) {
                obj['ssh-username'] = ApiClient.convertToType(data['ssh-username'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('update-version')) {
                obj['update-version'] = ApiClient.convertToType(data['update-version'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Deprecated - use description
 * @member {String} comment
 */
UpdateSSHTarget.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
UpdateSSHTarget.prototype['description'] = undefined;

/**
 * SSH host name
 * @member {String} host
 */
UpdateSSHTarget.prototype['host'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateSSHTarget.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
UpdateSSHTarget.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateSSHTarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateSSHTarget.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
UpdateSSHTarget.prototype['new-name'] = undefined;

/**
 * SSH port
 * @member {String} port
 * @default '22'
 */
UpdateSSHTarget.prototype['port'] = '22';

/**
 * SSH private key
 * @member {String} private-key
 */
UpdateSSHTarget.prototype['private-key'] = undefined;

/**
 * SSH private key password
 * @member {String} private-key-password
 */
UpdateSSHTarget.prototype['private-key-password'] = undefined;

/**
 * SSH password to rotate
 * @member {String} ssh-password
 */
UpdateSSHTarget.prototype['ssh-password'] = undefined;

/**
 * SSH username
 * @member {String} ssh-username
 */
UpdateSSHTarget.prototype['ssh-username'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateSSHTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateSSHTarget.prototype['uid-token'] = undefined;

/**
 * Deprecated
 * @member {Boolean} update-version
 */
UpdateSSHTarget.prototype['update-version'] = undefined;






export default UpdateSSHTarget;

