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
 * The UscDeleteSecretOutput model module.
 * @module model/UscDeleteSecretOutput
 * @version 5.0.0
 */
class UscDeleteSecretOutput {
    /**
     * Constructs a new <code>UscDeleteSecretOutput</code>.
     * @alias module:model/UscDeleteSecretOutput
     */
    constructor() { 
        
        UscDeleteSecretOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UscDeleteSecretOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UscDeleteSecretOutput} obj Optional instance to populate.
     * @return {module:model/UscDeleteSecretOutput} The populated <code>UscDeleteSecretOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UscDeleteSecretOutput();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UscDeleteSecretOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UscDeleteSecretOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
UscDeleteSecretOutput.prototype['name'] = undefined;






export default UscDeleteSecretOutput;

