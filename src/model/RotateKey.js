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
 * The RotateKey model module.
 * @module model/RotateKey
 * @version 2.16.2
 */
class RotateKey {
    /**
     * Constructs a new <code>RotateKey</code>.
     * rotateKey is a command that rotates an existing key, creating a new version. [Deprecated: Use command update-rotation-settings] of it.
     * @alias module:model/RotateKey
     * @param name {String} Key name
     */
    constructor(name) { 
        
        RotateKey.initialize(this, name);
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
     * Constructs a <code>RotateKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotateKey} obj Optional instance to populate.
     * @return {module:model/RotateKey} The populated <code>RotateKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotateKey();

            if (data.hasOwnProperty('auto-rotate')) {
                obj['auto-rotate'] = ApiClient.convertToType(data['auto-rotate'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
 * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation
 * @member {String} auto-rotate
 */
RotateKey.prototype['auto-rotate'] = undefined;

/**
 * Key name
 * @member {String} name
 */
RotateKey.prototype['name'] = undefined;

/**
 * The number of days to wait between every automatic key rotation (7-365)
 * @member {String} rotation-interval
 */
RotateKey.prototype['rotation-interval'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RotateKey.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RotateKey.prototype['uid-token'] = undefined;






export default RotateKey;

