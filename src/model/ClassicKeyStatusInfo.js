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
 * The ClassicKeyStatusInfo model module.
 * @module model/ClassicKeyStatusInfo
 * @version 3.3.17
 */
class ClassicKeyStatusInfo {
    /**
     * Constructs a new <code>ClassicKeyStatusInfo</code>.
     * @alias module:model/ClassicKeyStatusInfo
     */
    constructor() { 
        
        ClassicKeyStatusInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClassicKeyStatusInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClassicKeyStatusInfo} obj Optional instance to populate.
     * @return {module:model/ClassicKeyStatusInfo} The populated <code>ClassicKeyStatusInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClassicKeyStatusInfo();

            if (data.hasOwnProperty('error_date')) {
                obj['error_date'] = ApiClient.convertToType(data['error_date'], 'Date');
            }
            if (data.hasOwnProperty('last_error')) {
                obj['last_error'] = ApiClient.convertToType(data['last_error'], 'String');
            }
            if (data.hasOwnProperty('last_status')) {
                obj['last_status'] = ApiClient.convertToType(data['last_status'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} error_date
 */
ClassicKeyStatusInfo.prototype['error_date'] = undefined;

/**
 * @member {String} last_error
 */
ClassicKeyStatusInfo.prototype['last_error'] = undefined;

/**
 * ClassicKeyTargetStatus defines status of classic key target
 * @member {String} last_status
 */
ClassicKeyStatusInfo.prototype['last_status'] = undefined;

/**
 * @member {Number} version
 */
ClassicKeyStatusInfo.prototype['version'] = undefined;






export default ClassicKeyStatusInfo;

