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
 * The SmInfo model module.
 * @module model/SmInfo
 * @version 2.15.32
 */
class SmInfo {
    /**
     * Constructs a new <code>SmInfo</code>.
     * @alias module:model/SmInfo
     */
    constructor() { 
        
        SmInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SmInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SmInfo} obj Optional instance to populate.
     * @return {module:model/SmInfo} The populated <code>SmInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmInfo();

            if (data.hasOwnProperty('package')) {
                obj['package'] = ApiClient.convertToType(data['package'], 'String');
            }
            if (data.hasOwnProperty('tier')) {
                obj['tier'] = ApiClient.convertToType(data['tier'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} package
 */
SmInfo.prototype['package'] = undefined;

/**
 * @member {String} tier
 */
SmInfo.prototype['tier'] = undefined;






export default SmInfo;

