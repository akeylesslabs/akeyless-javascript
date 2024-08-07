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
 * The RotationSecretMaxInterval model module.
 * @module model/RotationSecretMaxInterval
 * @version 4.2.2
 */
class RotationSecretMaxInterval {
    /**
     * Constructs a new <code>RotationSecretMaxInterval</code>.
     * @alias module:model/RotationSecretMaxInterval
     */
    constructor() { 
        
        RotationSecretMaxInterval.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RotationSecretMaxInterval</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotationSecretMaxInterval} obj Optional instance to populate.
     * @return {module:model/RotationSecretMaxInterval} The populated <code>RotationSecretMaxInterval</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotationSecretMaxInterval();

            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'Boolean');
            }
            if (data.hasOwnProperty('max_interval_by_days')) {
                obj['max_interval_by_days'] = ApiClient.convertToType(data['max_interval_by_days'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} enable
 */
RotationSecretMaxInterval.prototype['enable'] = undefined;

/**
 * @member {Number} max_interval_by_days
 */
RotationSecretMaxInterval.prototype['max_interval_by_days'] = undefined;






export default RotationSecretMaxInterval;
