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
 * The UscGetSecretOutput model module.
 * @module model/UscGetSecretOutput
 * @version 4.2.1
 */
class UscGetSecretOutput {
    /**
     * Constructs a new <code>UscGetSecretOutput</code>.
     * @alias module:model/UscGetSecretOutput
     */
    constructor() { 
        
        UscGetSecretOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UscGetSecretOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UscGetSecretOutput} obj Optional instance to populate.
     * @return {module:model/UscGetSecretOutput} The populated <code>UscGetSecretOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UscGetSecretOutput();

            if (data.hasOwnProperty('binary_value')) {
                obj['binary_value'] = ApiClient.convertToType(data['binary_value'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
UscGetSecretOutput.prototype['binary_value'] = undefined;

/**
 * @member {Object} metadata
 */
UscGetSecretOutput.prototype['metadata'] = undefined;

/**
 * @member {String} name
 */
UscGetSecretOutput.prototype['name'] = undefined;

/**
 * @member {String} value
 */
UscGetSecretOutput.prototype['value'] = undefined;






export default UscGetSecretOutput;

