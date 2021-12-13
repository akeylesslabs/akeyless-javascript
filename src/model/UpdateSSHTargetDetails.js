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
 * The UpdateSSHTargetDetails model module.
 * @module model/UpdateSSHTargetDetails
 * @version 2.5.19
 */
class UpdateSSHTargetDetails {
    /**
     * Constructs a new <code>UpdateSSHTargetDetails</code>.
     * @alias module:model/UpdateSSHTargetDetails
     * @param name {String} Target name
     */
    constructor(name) { 
        
        UpdateSSHTargetDetails.initialize(this, name);
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
     * Constructs a <code>UpdateSSHTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateSSHTargetDetails} obj Optional instance to populate.
     * @return {module:model/UpdateSSHTargetDetails} The populated <code>UpdateSSHTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateSSHTargetDetails();

            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-version')) {
                obj['new-version'] = ApiClient.convertToType(data['new-version'], 'Boolean');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
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
            if (data.hasOwnProperty('protection_key')) {
                obj['protection_key'] = ApiClient.convertToType(data['protection_key'], 'String');
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
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} host
 */
UpdateSSHTargetDetails.prototype['host'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateSSHTargetDetails.prototype['name'] = undefined;

/**
 * Whether to create a new version of not
 * @member {Boolean} new-version
 * @default false
 */
UpdateSSHTargetDetails.prototype['new-version'] = false;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
UpdateSSHTargetDetails.prototype['password'] = undefined;

/**
 * @member {String} port
 */
UpdateSSHTargetDetails.prototype['port'] = undefined;

/**
 * @member {String} private-key
 */
UpdateSSHTargetDetails.prototype['private-key'] = undefined;

/**
 * @member {String} private-key-password
 */
UpdateSSHTargetDetails.prototype['private-key-password'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} protection_key
 */
UpdateSSHTargetDetails.prototype['protection_key'] = undefined;

/**
 * @member {String} ssh-password
 */
UpdateSSHTargetDetails.prototype['ssh-password'] = undefined;

/**
 * @member {String} ssh-username
 */
UpdateSSHTargetDetails.prototype['ssh-username'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateSSHTargetDetails.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateSSHTargetDetails.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
UpdateSSHTargetDetails.prototype['username'] = undefined;






export default UpdateSSHTargetDetails;

