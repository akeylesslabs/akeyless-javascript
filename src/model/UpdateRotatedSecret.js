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
 * The UpdateRotatedSecret model module.
 * @module model/UpdateRotatedSecret
 * @version 2.5.0
 */
class UpdateRotatedSecret {
    /**
     * Constructs a new <code>UpdateRotatedSecret</code>.
     * updateRotatedSecret is a command that updates rotated secret. [Deprecated: Use gateway-update-item command]
     * @alias module:model/UpdateRotatedSecret
     * @param name {String} Secret name
     */
    constructor(name) { 
        
        UpdateRotatedSecret.initialize(this, name);
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
     * Constructs a <code>UpdateRotatedSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRotatedSecret} obj Optional instance to populate.
     * @return {module:model/UpdateRotatedSecret} The populated <code>UpdateRotatedSecret</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRotatedSecret();

            if (data.hasOwnProperty('add-tag')) {
                obj['add-tag'] = ApiClient.convertToType(data['add-tag'], ['String']);
            }
            if (data.hasOwnProperty('api-id')) {
                obj['api-id'] = ApiClient.convertToType(data['api-id'], 'String');
            }
            if (data.hasOwnProperty('api-key')) {
                obj['api-key'] = ApiClient.convertToType(data['api-key'], 'String');
            }
            if (data.hasOwnProperty('auto-rotate')) {
                obj['auto-rotate'] = ApiClient.convertToType(data['auto-rotate'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-metadata')) {
                obj['new-metadata'] = ApiClient.convertToType(data['new-metadata'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('new-version')) {
                obj['new-version'] = ApiClient.convertToType(data['new-version'], 'Boolean');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('rm-tag')) {
                obj['rm-tag'] = ApiClient.convertToType(data['rm-tag'], ['String']);
            }
            if (data.hasOwnProperty('rotation-hour')) {
                obj['rotation-hour'] = ApiClient.convertToType(data['rotation-hour'], 'Number');
            }
            if (data.hasOwnProperty('rotation-interval')) {
                obj['rotation-interval'] = ApiClient.convertToType(data['rotation-interval'], 'String');
            }
            if (data.hasOwnProperty('rotator-creds-type')) {
                obj['rotator-creds-type'] = ApiClient.convertToType(data['rotator-creds-type'], 'String');
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
 * List of the new tags that will be attached to this item
 * @member {Array.<String>} add-tag
 */
UpdateRotatedSecret.prototype['add-tag'] = undefined;

/**
 * @member {String} api-id
 */
UpdateRotatedSecret.prototype['api-id'] = undefined;

/**
 * @member {String} api-key
 */
UpdateRotatedSecret.prototype['api-key'] = undefined;

/**
 * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation
 * @member {String} auto-rotate
 */
UpdateRotatedSecret.prototype['auto-rotate'] = undefined;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateRotatedSecret.prototype['key'] = undefined;

/**
 * Secret name
 * @member {String} name
 */
UpdateRotatedSecret.prototype['name'] = undefined;

/**
 * New item metadata
 * @member {String} new-metadata
 * @default 'default_metadata'
 */
UpdateRotatedSecret.prototype['new-metadata'] = 'default_metadata';

/**
 * New item name
 * @member {String} new-name
 */
UpdateRotatedSecret.prototype['new-name'] = undefined;

/**
 * Whether to create a new version of not
 * @member {Boolean} new-version
 * @default false
 */
UpdateRotatedSecret.prototype['new-version'] = false;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
UpdateRotatedSecret.prototype['password'] = undefined;

/**
 * List of the existent tags that will be removed from this item
 * @member {Array.<String>} rm-tag
 */
UpdateRotatedSecret.prototype['rm-tag'] = undefined;

/**
 * @member {Number} rotation-hour
 */
UpdateRotatedSecret.prototype['rotation-hour'] = undefined;

/**
 * The number of days to wait between every automatic key rotation (7-365)
 * @member {String} rotation-interval
 */
UpdateRotatedSecret.prototype['rotation-interval'] = undefined;

/**
 * @member {String} rotator-creds-type
 */
UpdateRotatedSecret.prototype['rotator-creds-type'] = undefined;

/**
 * @member {String} ssh-password
 */
UpdateRotatedSecret.prototype['ssh-password'] = undefined;

/**
 * @member {String} ssh-username
 */
UpdateRotatedSecret.prototype['ssh-username'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateRotatedSecret.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateRotatedSecret.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
UpdateRotatedSecret.prototype['username'] = undefined;






export default UpdateRotatedSecret;
