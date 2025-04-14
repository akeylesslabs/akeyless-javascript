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
 * The DetokenizeOutput model module.
 * @module model/DetokenizeOutput
 * @version 5.0.3
 */
class DetokenizeOutput {
    /**
     * Constructs a new <code>DetokenizeOutput</code>.
     * @alias module:model/DetokenizeOutput
     */
    constructor() { 
        
        DetokenizeOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DetokenizeOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DetokenizeOutput} obj Optional instance to populate.
     * @return {module:model/DetokenizeOutput} The populated <code>DetokenizeOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DetokenizeOutput();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DetokenizeOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DetokenizeOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['result'] && !(typeof data['result'] === 'string' || data['result'] instanceof String)) {
            throw new Error("Expected the field `result` to be a primitive type in the JSON string but got " + data['result']);
        }

        return true;
    }


}



/**
 * @member {String} result
 */
DetokenizeOutput.prototype['result'] = undefined;






export default DetokenizeOutput;

