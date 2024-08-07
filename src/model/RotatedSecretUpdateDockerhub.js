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
 * The RotatedSecretUpdateDockerhub model module.
 * @module model/RotatedSecretUpdateDockerhub
 * @version 4.2.2
 */
class RotatedSecretUpdateDockerhub {
    /**
     * Constructs a new <code>RotatedSecretUpdateDockerhub</code>.
     * @alias module:model/RotatedSecretUpdateDockerhub
     * @param name {String} Rotated secret name
     */
    constructor(name) { 
        
        RotatedSecretUpdateDockerhub.initialize(this, name);
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
     * Constructs a <code>RotatedSecretUpdateDockerhub</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotatedSecretUpdateDockerhub} obj Optional instance to populate.
     * @return {module:model/RotatedSecretUpdateDockerhub} The populated <code>RotatedSecretUpdateDockerhub</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotatedSecretUpdateDockerhub();

            if (data.hasOwnProperty('add-tag')) {
                obj['add-tag'] = ApiClient.convertToType(data['add-tag'], ['String']);
            }
            if (data.hasOwnProperty('authentication-credentials')) {
                obj['authentication-credentials'] = ApiClient.convertToType(data['authentication-credentials'], 'String');
            }
            if (data.hasOwnProperty('auto-rotate')) {
                obj['auto-rotate'] = ApiClient.convertToType(data['auto-rotate'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
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
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
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
 * List of the new tags that will be attached to this item
 * @member {Array.<String>} add-tag
 */
RotatedSecretUpdateDockerhub.prototype['add-tag'] = undefined;

/**
 * The credentials to connect with use-user-creds/use-target-creds
 * @member {String} authentication-credentials
 * @default 'use-user-creds'
 */
RotatedSecretUpdateDockerhub.prototype['authentication-credentials'] = 'use-user-creds';

/**
 * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false]
 * @member {String} auto-rotate
 */
RotatedSecretUpdateDockerhub.prototype['auto-rotate'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
RotatedSecretUpdateDockerhub.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 * @default 'default_metadata'
 */
RotatedSecretUpdateDockerhub.prototype['description'] = 'default_metadata';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
RotatedSecretUpdateDockerhub.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
RotatedSecretUpdateDockerhub.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
RotatedSecretUpdateDockerhub.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
RotatedSecretUpdateDockerhub.prototype['max-versions'] = undefined;

/**
 * Rotated secret name
 * @member {String} name
 */
RotatedSecretUpdateDockerhub.prototype['name'] = undefined;

/**
 * New item name
 * @member {String} new-name
 */
RotatedSecretUpdateDockerhub.prototype['new-name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
RotatedSecretUpdateDockerhub.prototype['password-length'] = undefined;

/**
 * List of the existent tags that will be removed from this item
 * @member {Array.<String>} rm-tag
 */
RotatedSecretUpdateDockerhub.prototype['rm-tag'] = undefined;

/**
 * The Hour of the rotation in UTC
 * @member {Number} rotation-hour
 */
RotatedSecretUpdateDockerhub.prototype['rotation-hour'] = undefined;

/**
 * The number of days to wait between every automatic key rotation (1-365)
 * @member {String} rotation-interval
 */
RotatedSecretUpdateDockerhub.prototype['rotation-interval'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RotatedSecretUpdateDockerhub.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RotatedSecretUpdateDockerhub.prototype['uid-token'] = undefined;






export default RotatedSecretUpdateDockerhub;

