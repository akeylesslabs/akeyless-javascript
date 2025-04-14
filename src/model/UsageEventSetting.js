/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UsageEventSetting model module.
 * @module model/UsageEventSetting
 * @version 5.0.3
 */
class UsageEventSetting {
    /**
     * Constructs a new <code>UsageEventSetting</code>.
     * @alias module:model/UsageEventSetting
     */
    constructor() { 
        
        UsageEventSetting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UsageEventSetting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsageEventSetting} obj Optional instance to populate.
     * @return {module:model/UsageEventSetting} The populated <code>UsageEventSetting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsageEventSetting();

            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'Boolean');
            }
            if (data.hasOwnProperty('enable_time')) {
                obj['enable_time'] = ApiClient.convertToType(data['enable_time'], 'Date');
            }
            if (data.hasOwnProperty('interval_by_days')) {
                obj['interval_by_days'] = ApiClient.convertToType(data['interval_by_days'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsageEventSetting</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsageEventSetting</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} enable
 */
UsageEventSetting.prototype['enable'] = undefined;

/**
 * @member {Date} enable_time
 */
UsageEventSetting.prototype['enable_time'] = undefined;

/**
 * @member {Number} interval_by_days
 */
UsageEventSetting.prototype['interval_by_days'] = undefined;






export default UsageEventSetting;

