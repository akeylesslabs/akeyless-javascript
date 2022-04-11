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
 * The SraInfo model module.
 * @module model/SraInfo
 * @version 2.15.32
 */
class SraInfo {
    /**
     * Constructs a new <code>SraInfo</code>.
     * @alias module:model/SraInfo
     */
    constructor() { 
        
        SraInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SraInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SraInfo} obj Optional instance to populate.
     * @return {module:model/SraInfo} The populated <code>SraInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SraInfo();

            if (data.hasOwnProperty('package')) {
                obj['package'] = ApiClient.convertToType(data['package'], 'String');
            }
            if (data.hasOwnProperty('tier')) {
                obj['tier'] = ApiClient.convertToType(data['tier'], 'String');
            }
            if (data.hasOwnProperty('user_type')) {
                obj['user_type'] = ApiClient.convertToType(data['user_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} package
 */
SraInfo.prototype['package'] = undefined;

/**
 * @member {String} tier
 */
SraInfo.prototype['tier'] = undefined;

/**
 * @member {String} user_type
 */
SraInfo.prototype['user_type'] = undefined;






export default SraInfo;

