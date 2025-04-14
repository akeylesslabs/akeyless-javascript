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
 * The CreateGroupOutput model module.
 * @module model/CreateGroupOutput
 * @version 5.0.3
 */
class CreateGroupOutput {
    /**
     * Constructs a new <code>CreateGroupOutput</code>.
     * @alias module:model/CreateGroupOutput
     */
    constructor() { 
        
        CreateGroupOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateGroupOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateGroupOutput} obj Optional instance to populate.
     * @return {module:model/CreateGroupOutput} The populated <code>CreateGroupOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateGroupOutput();

            if (data.hasOwnProperty('group_alias')) {
                obj['group_alias'] = ApiClient.convertToType(data['group_alias'], 'String');
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
     * Validates the JSON data with respect to <code>CreateGroupOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateGroupOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['group_alias'] && !(typeof data['group_alias'] === 'string' || data['group_alias'] instanceof String)) {
            throw new Error("Expected the field `group_alias` to be a primitive type in the JSON string but got " + data['group_alias']);
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
 * @member {String} group_alias
 */
CreateGroupOutput.prototype['group_alias'] = undefined;

/**
 * @member {String} id
 */
CreateGroupOutput.prototype['id'] = undefined;

/**
 * @member {String} name
 */
CreateGroupOutput.prototype['name'] = undefined;






export default CreateGroupOutput;

