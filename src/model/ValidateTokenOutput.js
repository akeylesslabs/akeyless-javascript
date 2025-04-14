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
 * The ValidateTokenOutput model module.
 * @module model/ValidateTokenOutput
 * @version 5.0.3
 */
class ValidateTokenOutput {
    /**
     * Constructs a new <code>ValidateTokenOutput</code>.
     * @alias module:model/ValidateTokenOutput
     */
    constructor() { 
        
        ValidateTokenOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValidateTokenOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidateTokenOutput} obj Optional instance to populate.
     * @return {module:model/ValidateTokenOutput} The populated <code>ValidateTokenOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidateTokenOutput();

            if (data.hasOwnProperty('expiration')) {
                obj['expiration'] = ApiClient.convertToType(data['expiration'], 'String');
            }
            if (data.hasOwnProperty('is_valid')) {
                obj['is_valid'] = ApiClient.convertToType(data['is_valid'], 'Boolean');
            }
            if (data.hasOwnProperty('last_rotate')) {
                obj['last_rotate'] = ApiClient.convertToType(data['last_rotate'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ValidateTokenOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ValidateTokenOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['expiration'] && !(typeof data['expiration'] === 'string' || data['expiration'] instanceof String)) {
            throw new Error("Expected the field `expiration` to be a primitive type in the JSON string but got " + data['expiration']);
        }
        // ensure the json data is a string
        if (data['last_rotate'] && !(typeof data['last_rotate'] === 'string' || data['last_rotate'] instanceof String)) {
            throw new Error("Expected the field `last_rotate` to be a primitive type in the JSON string but got " + data['last_rotate']);
        }
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }

        return true;
    }


}



/**
 * @member {String} expiration
 */
ValidateTokenOutput.prototype['expiration'] = undefined;

/**
 * @member {Boolean} is_valid
 */
ValidateTokenOutput.prototype['is_valid'] = undefined;

/**
 * @member {String} last_rotate
 */
ValidateTokenOutput.prototype['last_rotate'] = undefined;

/**
 * @member {String} reason
 */
ValidateTokenOutput.prototype['reason'] = undefined;

/**
 * @member {Number} ttl
 */
ValidateTokenOutput.prototype['ttl'] = undefined;






export default ValidateTokenOutput;

