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
 * The CreateSSHTarget model module.
 * @module model/CreateSSHTarget
 * @version 4.2.5
 */
class CreateSSHTarget {
    /**
     * Constructs a new <code>CreateSSHTarget</code>.
     * createSSHTarget is a command that creates a new target. [Deprecated: Use target-create-ssh command]
     * @alias module:model/CreateSSHTarget
     * @param name {String} Target name
     */
    constructor(name) { 
        
        CreateSSHTarget.initialize(this, name);
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
     * Constructs a <code>CreateSSHTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSSHTarget} obj Optional instance to populate.
     * @return {module:model/CreateSSHTarget} The populated <code>CreateSSHTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSSHTarget();

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
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
        }
        return obj;
    }


}

/**
 * Deprecated - use description
 * @member {String} comment
 */
CreateSSHTarget.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateSSHTarget.prototype['description'] = undefined;

/**
 * SSH host name
 * @member {String} host
 */
CreateSSHTarget.prototype['host'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateSSHTarget.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateSSHTarget.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
CreateSSHTarget.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
CreateSSHTarget.prototype['name'] = undefined;

/**
 * SSH port
 * @member {String} port
 * @default '22'
 */
CreateSSHTarget.prototype['port'] = '22';

/**
 * SSH private key
 * @member {String} private-key
 */
CreateSSHTarget.prototype['private-key'] = undefined;

/**
 * SSH private key password
 * @member {String} private-key-password
 */
CreateSSHTarget.prototype['private-key-password'] = undefined;

/**
 * SSH password to rotate
 * @member {String} ssh-password
 */
CreateSSHTarget.prototype['ssh-password'] = undefined;

/**
 * SSH username
 * @member {String} ssh-username
 */
CreateSSHTarget.prototype['ssh-username'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateSSHTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateSSHTarget.prototype['uid-token'] = undefined;






export default CreateSSHTarget;

