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
 * The PasswordExpirationInfo model module.
 * @module model/PasswordExpirationInfo
 * @version 5.0.0
 */
class PasswordExpirationInfo {
    /**
     * Constructs a new <code>PasswordExpirationInfo</code>.
     * @alias module:model/PasswordExpirationInfo
     */
    constructor() { 
        
        PasswordExpirationInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PasswordExpirationInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PasswordExpirationInfo} obj Optional instance to populate.
     * @return {module:model/PasswordExpirationInfo} The populated <code>PasswordExpirationInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PasswordExpirationInfo();

            if (data.hasOwnProperty('days_before_expire')) {
                obj['days_before_expire'] = ApiClient.convertToType(data['days_before_expire'], 'Number');
            }
            if (data.hasOwnProperty('days_before_notification')) {
                obj['days_before_notification'] = ApiClient.convertToType(data['days_before_notification'], 'Number');
            }
            if (data.hasOwnProperty('days_until_expire')) {
                obj['days_until_expire'] = ApiClient.convertToType(data['days_until_expire'], 'Number');
            }
            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PasswordExpirationInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PasswordExpirationInfo</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} days_before_expire
 */
PasswordExpirationInfo.prototype['days_before_expire'] = undefined;

/**
 * @member {Number} days_before_notification
 */
PasswordExpirationInfo.prototype['days_before_notification'] = undefined;

/**
 * r/o calculated parameter
 * @member {Number} days_until_expire
 */
PasswordExpirationInfo.prototype['days_until_expire'] = undefined;

/**
 * @member {Boolean} enable
 */
PasswordExpirationInfo.prototype['enable'] = undefined;






export default PasswordExpirationInfo;

