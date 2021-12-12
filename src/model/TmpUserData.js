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
 * The TmpUserData model module.
 * @module model/TmpUserData
 * @version 2.5.15
 */
class TmpUserData {
    /**
     * Constructs a new <code>TmpUserData</code>.
     * @alias module:model/TmpUserData
     */
    constructor() { 
        
        TmpUserData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TmpUserData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TmpUserData} obj Optional instance to populate.
     * @return {module:model/TmpUserData} The populated <code>TmpUserData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TmpUserData();

            if (data.hasOwnProperty('access_id')) {
                obj['access_id'] = ApiClient.convertToType(data['access_id'], 'String');
            }
            if (data.hasOwnProperty('creation_date')) {
                obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
            }
            if (data.hasOwnProperty('custom_ttl')) {
                obj['custom_ttl'] = ApiClient.convertToType(data['custom_ttl'], 'Number');
            }
            if (data.hasOwnProperty('dynamic_secret_type')) {
                obj['dynamic_secret_type'] = ApiClient.convertToType(data['dynamic_secret_type'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('sub_claims')) {
                obj['sub_claims'] = ApiClient.convertToType(data['sub_claims'], {'String': ['String']});
            }
        }
        return obj;
    }


}

/**
 * @member {String} access_id
 */
TmpUserData.prototype['access_id'] = undefined;

/**
 * @member {Date} creation_date
 */
TmpUserData.prototype['creation_date'] = undefined;

/**
 * @member {Number} custom_ttl
 */
TmpUserData.prototype['custom_ttl'] = undefined;

/**
 * @member {String} dynamic_secret_type
 */
TmpUserData.prototype['dynamic_secret_type'] = undefined;

/**
 * @member {String} host
 */
TmpUserData.prototype['host'] = undefined;

/**
 * @member {String} id
 */
TmpUserData.prototype['id'] = undefined;

/**
 * @member {Object.<String, Array.<String>>} sub_claims
 */
TmpUserData.prototype['sub_claims'] = undefined;






export default TmpUserData;

