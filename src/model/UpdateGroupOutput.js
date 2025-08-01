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
 * The UpdateGroupOutput model module.
 * @module model/UpdateGroupOutput
 * @version 5.0.6
 */
class UpdateGroupOutput {
    /**
     * Constructs a new <code>UpdateGroupOutput</code>.
     * @alias module:model/UpdateGroupOutput
     */
    constructor() { 
        
        UpdateGroupOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateGroupOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateGroupOutput} obj Optional instance to populate.
     * @return {module:model/UpdateGroupOutput} The populated <code>UpdateGroupOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateGroupOutput();

            if (data.hasOwnProperty('group_name')) {
                obj['group_name'] = ApiClient.convertToType(data['group_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateGroupOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateGroupOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['group_name'] && !(typeof data['group_name'] === 'string' || data['group_name'] instanceof String)) {
            throw new Error("Expected the field `group_name` to be a primitive type in the JSON string but got " + data['group_name']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {String} group_name
 */
UpdateGroupOutput.prototype['group_name'] = undefined;

/**
 * @member {String} id
 */
UpdateGroupOutput.prototype['id'] = undefined;

/**
 * @member {String} name
 */
UpdateGroupOutput.prototype['name'] = undefined;






export default UpdateGroupOutput;

