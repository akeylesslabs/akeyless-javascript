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
 * The UpdateRotationSettings model module.
 * @module model/UpdateRotationSettings
 * @version 4.2.0
 */
class UpdateRotationSettings {
    /**
     * Constructs a new <code>UpdateRotationSettings</code>.
     * updateRotationSettings is a command that updates rotations settings of an existing key
     * @alias module:model/UpdateRotationSettings
     * @param autoRotate {Boolean} Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation
     * @param name {String} Key name
     */
    constructor(autoRotate, name) { 
        
        UpdateRotationSettings.initialize(this, autoRotate, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, autoRotate, name) { 
        obj['auto-rotate'] = autoRotate;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>UpdateRotationSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRotationSettings} obj Optional instance to populate.
     * @return {module:model/UpdateRotationSettings} The populated <code>UpdateRotationSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRotationSettings();

            if (data.hasOwnProperty('auto-rotate')) {
                obj['auto-rotate'] = ApiClient.convertToType(data['auto-rotate'], 'Boolean');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('rotation-interval')) {
                obj['rotation-interval'] = ApiClient.convertToType(data['rotation-interval'], 'Number');
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
 * @member {Boolean} auto-rotate
 */
UpdateRotationSettings.prototype['auto-rotate'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateRotationSettings.prototype['json'] = false;

/**
 * Key name
 * @member {String} name
 */
UpdateRotationSettings.prototype['name'] = undefined;

/**
 * The number of days to wait between every automatic key rotation (7-365)
 * @member {Number} rotation-interval
 */
UpdateRotationSettings.prototype['rotation-interval'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateRotationSettings.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateRotationSettings.prototype['uid-token'] = undefined;






export default UpdateRotationSettings;

