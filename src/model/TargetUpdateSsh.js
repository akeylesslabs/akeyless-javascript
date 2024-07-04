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
 * The TargetUpdateSsh model module.
 * @module model/TargetUpdateSsh
 * @version 4.2.0
 */
class TargetUpdateSsh {
    /**
     * Constructs a new <code>TargetUpdateSsh</code>.
     * targetUpdateSsh is a command that updates an existing ssh target
     * @alias module:model/TargetUpdateSsh
     * @param name {String} Target name
     */
    constructor(name) { 
        
        TargetUpdateSsh.initialize(this, name);
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
     * Constructs a <code>TargetUpdateSsh</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetUpdateSsh} obj Optional instance to populate.
     * @return {module:model/TargetUpdateSsh} The populated <code>TargetUpdateSsh</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetUpdateSsh();

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
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
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
        }
        return obj;
    }


}

/**
 * Description of the object
 * @member {String} description
 */
TargetUpdateSsh.prototype['description'] = undefined;

/**
 * SSH host name
 * @member {String} host
 */
TargetUpdateSsh.prototype['host'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetUpdateSsh.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
TargetUpdateSsh.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetUpdateSsh.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetUpdateSsh.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetUpdateSsh.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
TargetUpdateSsh.prototype['new-name'] = undefined;

/**
 * SSH port
 * @member {String} port
 * @default '22'
 */
TargetUpdateSsh.prototype['port'] = '22';

/**
 * SSH private key
 * @member {String} private-key
 */
TargetUpdateSsh.prototype['private-key'] = undefined;

/**
 * SSH private key password
 * @member {String} private-key-password
 */
TargetUpdateSsh.prototype['private-key-password'] = undefined;

/**
 * SSH password to rotate
 * @member {String} ssh-password
 */
TargetUpdateSsh.prototype['ssh-password'] = undefined;

/**
 * SSH username
 * @member {String} ssh-username
 */
TargetUpdateSsh.prototype['ssh-username'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetUpdateSsh.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetUpdateSsh.prototype['uid-token'] = undefined;






export default TargetUpdateSsh;

