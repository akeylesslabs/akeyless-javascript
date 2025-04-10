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
 * The DeriveKeyOutput model module.
 * @module model/DeriveKeyOutput
 * @version 5.0.2
 */
class DeriveKeyOutput {
    /**
     * Constructs a new <code>DeriveKeyOutput</code>.
     * @alias module:model/DeriveKeyOutput
     */
    constructor() { 
        
        DeriveKeyOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeriveKeyOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeriveKeyOutput} obj Optional instance to populate.
     * @return {module:model/DeriveKeyOutput} The populated <code>DeriveKeyOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeriveKeyOutput();

            if (data.hasOwnProperty('Key')) {
                obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
            }
            if (data.hasOwnProperty('Salt')) {
                obj['Salt'] = ApiClient.convertToType(data['Salt'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeriveKeyOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeriveKeyOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Key'] && !(typeof data['Key'] === 'string' || data['Key'] instanceof String)) {
            throw new Error("Expected the field `Key` to be a primitive type in the JSON string but got " + data['Key']);
        }
        // ensure the json data is a string
        if (data['Salt'] && !(typeof data['Salt'] === 'string' || data['Salt'] instanceof String)) {
            throw new Error("Expected the field `Salt` to be a primitive type in the JSON string but got " + data['Salt']);
        }

        return true;
    }


}



/**
 * @member {String} Key
 */
DeriveKeyOutput.prototype['Key'] = undefined;

/**
 * @member {String} Salt
 */
DeriveKeyOutput.prototype['Salt'] = undefined;






export default DeriveKeyOutput;

