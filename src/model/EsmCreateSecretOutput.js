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
 * The EsmCreateSecretOutput model module.
 * @module model/EsmCreateSecretOutput
 * @version 5.0.0
 */
class EsmCreateSecretOutput {
    /**
     * Constructs a new <code>EsmCreateSecretOutput</code>.
     * @alias module:model/EsmCreateSecretOutput
     */
    constructor() { 
        
        EsmCreateSecretOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EsmCreateSecretOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EsmCreateSecretOutput} obj Optional instance to populate.
     * @return {module:model/EsmCreateSecretOutput} The populated <code>EsmCreateSecretOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EsmCreateSecretOutput();

            if (data.hasOwnProperty('secret_id')) {
                obj['secret_id'] = ApiClient.convertToType(data['secret_id'], 'String');
            }
            if (data.hasOwnProperty('version_id')) {
                obj['version_id'] = ApiClient.convertToType(data['version_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EsmCreateSecretOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EsmCreateSecretOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['secret_id'] && !(typeof data['secret_id'] === 'string' || data['secret_id'] instanceof String)) {
            throw new Error("Expected the field `secret_id` to be a primitive type in the JSON string but got " + data['secret_id']);
        }
        // ensure the json data is a string
        if (data['version_id'] && !(typeof data['version_id'] === 'string' || data['version_id'] instanceof String)) {
            throw new Error("Expected the field `version_id` to be a primitive type in the JSON string but got " + data['version_id']);
        }

        return true;
    }


}



/**
 * @member {String} secret_id
 */
EsmCreateSecretOutput.prototype['secret_id'] = undefined;

/**
 * @member {String} version_id
 */
EsmCreateSecretOutput.prototype['version_id'] = undefined;






export default EsmCreateSecretOutput;

