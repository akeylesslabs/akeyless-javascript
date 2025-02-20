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
 * The CreateAuthMethodCertOutput model module.
 * @module model/CreateAuthMethodCertOutput
 * @version 5.0.0
 */
class CreateAuthMethodCertOutput {
    /**
     * Constructs a new <code>CreateAuthMethodCertOutput</code>.
     * @alias module:model/CreateAuthMethodCertOutput
     */
    constructor() { 
        
        CreateAuthMethodCertOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateAuthMethodCertOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodCertOutput} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodCertOutput} The populated <code>CreateAuthMethodCertOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodCertOutput();

            if (data.hasOwnProperty('access_id')) {
                obj['access_id'] = ApiClient.convertToType(data['access_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateAuthMethodCertOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateAuthMethodCertOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['access_id'] && !(typeof data['access_id'] === 'string' || data['access_id'] instanceof String)) {
            throw new Error("Expected the field `access_id` to be a primitive type in the JSON string but got " + data['access_id']);
        }

        return true;
    }


}



/**
 * @member {String} access_id
 */
CreateAuthMethodCertOutput.prototype['access_id'] = undefined;






export default CreateAuthMethodCertOutput;

