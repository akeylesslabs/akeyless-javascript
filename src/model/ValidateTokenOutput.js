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
 * The ValidateTokenOutput model module.
 * @module model/ValidateTokenOutput
 * @version 2.15.24
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
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
        }
        return obj;
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
 * @member {String} reason
 */
ValidateTokenOutput.prototype['reason'] = undefined;






export default ValidateTokenOutput;

