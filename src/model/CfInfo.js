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
 * The CfInfo model module.
 * @module model/CfInfo
 * @version 3.5.4
 */
class CfInfo {
    /**
     * Constructs a new <code>CfInfo</code>.
     * @alias module:model/CfInfo
     */
    constructor() { 
        
        CfInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CfInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CfInfo} obj Optional instance to populate.
     * @return {module:model/CfInfo} The populated <code>CfInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CfInfo();

            if (data.hasOwnProperty('cf_name')) {
                obj['cf_name'] = ApiClient.convertToType(data['cf_name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} cf_name
 */
CfInfo.prototype['cf_name'] = undefined;

/**
 * @member {String} description
 */
CfInfo.prototype['description'] = undefined;

/**
 * @member {String} hash
 */
CfInfo.prototype['hash'] = undefined;

/**
 * @member {String} id
 */
CfInfo.prototype['id'] = undefined;






export default CfInfo;

