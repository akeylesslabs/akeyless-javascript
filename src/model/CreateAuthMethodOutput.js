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
 * The CreateAuthMethodOutput model module.
 * @module model/CreateAuthMethodOutput
 * @version 5.0.1
 */
class CreateAuthMethodOutput {
    /**
     * Constructs a new <code>CreateAuthMethodOutput</code>.
     * @alias module:model/CreateAuthMethodOutput
     */
    constructor() { 
        
        CreateAuthMethodOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateAuthMethodOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodOutput} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodOutput} The populated <code>CreateAuthMethodOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodOutput();

            if (data.hasOwnProperty('access_id')) {
                obj['access_id'] = ApiClient.convertToType(data['access_id'], 'String');
            }
            if (data.hasOwnProperty('access_key')) {
                obj['access_key'] = ApiClient.convertToType(data['access_key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateAuthMethodOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateAuthMethodOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['access_id'] && !(typeof data['access_id'] === 'string' || data['access_id'] instanceof String)) {
            throw new Error("Expected the field `access_id` to be a primitive type in the JSON string but got " + data['access_id']);
        }
        // ensure the json data is a string
        if (data['access_key'] && !(typeof data['access_key'] === 'string' || data['access_key'] instanceof String)) {
            throw new Error("Expected the field `access_key` to be a primitive type in the JSON string but got " + data['access_key']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {String} access_id
 */
CreateAuthMethodOutput.prototype['access_id'] = undefined;

/**
 * @member {String} access_key
 */
CreateAuthMethodOutput.prototype['access_key'] = undefined;

/**
 * @member {String} name
 */
CreateAuthMethodOutput.prototype['name'] = undefined;






export default CreateAuthMethodOutput;

