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
 * The EsmGetSecretOutput model module.
 * @module model/EsmGetSecretOutput
 * @version 3.3.4
 */
class EsmGetSecretOutput {
    /**
     * Constructs a new <code>EsmGetSecretOutput</code>.
     * @alias module:model/EsmGetSecretOutput
     */
    constructor() { 
        
        EsmGetSecretOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EsmGetSecretOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EsmGetSecretOutput} obj Optional instance to populate.
     * @return {module:model/EsmGetSecretOutput} The populated <code>EsmGetSecretOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EsmGetSecretOutput();

            if (data.hasOwnProperty('binary_value')) {
                obj['binary_value'] = ApiClient.convertToType(data['binary_value'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} binary_value
 */
EsmGetSecretOutput.prototype['binary_value'] = undefined;

/**
 * @member {Object} metadata
 */
EsmGetSecretOutput.prototype['metadata'] = undefined;

/**
 * @member {String} value
 */
EsmGetSecretOutput.prototype['value'] = undefined;






export default EsmGetSecretOutput;

