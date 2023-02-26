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
 * The UpdateWindowsTarget model module.
 * @module model/UpdateWindowsTarget
 * @version 3.2.6
 */
class UpdateWindowsTarget {
    /**
     * Constructs a new <code>UpdateWindowsTarget</code>.
     * @alias module:model/UpdateWindowsTarget
     * @param name {String} Target name
     */
    constructor(name) { 
        
        UpdateWindowsTarget.initialize(this, name);
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
     * Constructs a <code>UpdateWindowsTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateWindowsTarget} obj Optional instance to populate.
     * @return {module:model/UpdateWindowsTarget} The populated <code>UpdateWindowsTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateWindowsTarget();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
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
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('rdp-port')) {
                obj['rdp-port'] = ApiClient.convertToType(data['rdp-port'], 'String');
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
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Deprecated - use description
 * @member {String} comment
 */
UpdateWindowsTarget.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
UpdateWindowsTarget.prototype['description'] = undefined;

/**
 * Server hostname
 * @member {String} hostname
 */
UpdateWindowsTarget.prototype['hostname'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateWindowsTarget.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
UpdateWindowsTarget.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateWindowsTarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateWindowsTarget.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
UpdateWindowsTarget.prototype['new-name'] = undefined;

/**
 * The privileged user password
 * @member {String} password
 */
UpdateWindowsTarget.prototype['password'] = undefined;

/**
 * Server port for RDP (Remote Desktop Protocol)
 * @member {String} rdp-port
 * @default '3389'
 */
UpdateWindowsTarget.prototype['rdp-port'] = '3389';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateWindowsTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateWindowsTarget.prototype['uid-token'] = undefined;

/**
 * Deprecated
 * @member {Boolean} update-version
 */
UpdateWindowsTarget.prototype['update-version'] = undefined;

/**
 * Privileged username
 * @member {String} username
 */
UpdateWindowsTarget.prototype['username'] = undefined;






export default UpdateWindowsTarget;

