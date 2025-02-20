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
 * The DynamicSecretDeleteOutput model module.
 * @module model/DynamicSecretDeleteOutput
 * @version 5.0.0
 */
class DynamicSecretDeleteOutput {
    /**
     * Constructs a new <code>DynamicSecretDeleteOutput</code>.
     * @alias module:model/DynamicSecretDeleteOutput
     */
    constructor() { 
        
        DynamicSecretDeleteOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DynamicSecretDeleteOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretDeleteOutput} obj Optional instance to populate.
     * @return {module:model/DynamicSecretDeleteOutput} The populated <code>DynamicSecretDeleteOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretDeleteOutput();

            if (data.hasOwnProperty('dynamic_secret_name')) {
                obj['dynamic_secret_name'] = ApiClient.convertToType(data['dynamic_secret_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DynamicSecretDeleteOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DynamicSecretDeleteOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['dynamic_secret_name'] && !(typeof data['dynamic_secret_name'] === 'string' || data['dynamic_secret_name'] instanceof String)) {
            throw new Error("Expected the field `dynamic_secret_name` to be a primitive type in the JSON string but got " + data['dynamic_secret_name']);
        }

        return true;
    }


}



/**
 * @member {String} dynamic_secret_name
 */
DynamicSecretDeleteOutput.prototype['dynamic_secret_name'] = undefined;






export default DynamicSecretDeleteOutput;

