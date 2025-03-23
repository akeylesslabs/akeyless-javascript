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
 * The APIKeyAccessRules model module.
 * @module model/APIKeyAccessRules
 * @version 5.0.1
 */
class APIKeyAccessRules {
    /**
     * Constructs a new <code>APIKeyAccessRules</code>.
     * @alias module:model/APIKeyAccessRules
     */
    constructor() { 
        
        APIKeyAccessRules.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>APIKeyAccessRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIKeyAccessRules} obj Optional instance to populate.
     * @return {module:model/APIKeyAccessRules} The populated <code>APIKeyAccessRules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new APIKeyAccessRules();

            if (data.hasOwnProperty('alg')) {
                obj['alg'] = ApiClient.convertToType(data['alg'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('modification_date')) {
                obj['modification_date'] = ApiClient.convertToType(data['modification_date'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>APIKeyAccessRules</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>APIKeyAccessRules</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['alg'] && !(typeof data['alg'] === 'string' || data['alg'] instanceof String)) {
            throw new Error("Expected the field `alg` to be a primitive type in the JSON string but got " + data['alg']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }

        return true;
    }


}



/**
 * @member {String} alg
 */
APIKeyAccessRules.prototype['alg'] = undefined;

/**
 * The public key value of the API-key.
 * @member {String} key
 */
APIKeyAccessRules.prototype['key'] = undefined;

/**
 * @member {Date} modification_date
 */
APIKeyAccessRules.prototype['modification_date'] = undefined;






export default APIKeyAccessRules;

