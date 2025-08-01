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
 * The RequestAccess model module.
 * @module model/RequestAccess
 * @version 5.0.6
 */
class RequestAccess {
    /**
     * Constructs a new <code>RequestAccess</code>.
     * @alias module:model/RequestAccess
     * @param capability {Array.<String>} List of the required capabilities options: [read, update, delete]
     * @param name {String} Item name
     * @param type {String} Item type
     */
    constructor(capability, name, type) { 
        
        RequestAccess.initialize(this, capability, name, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, capability, name, type) { 
        obj['capability'] = capability;
        obj['json'] = false;
        obj['name'] = name;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>RequestAccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestAccess} obj Optional instance to populate.
     * @return {module:model/RequestAccess} The populated <code>RequestAccess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestAccess();

            if (data.hasOwnProperty('capability')) {
                obj['capability'] = ApiClient.convertToType(data['capability'], ['String']);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RequestAccess</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RequestAccess</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RequestAccess.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['capability'])) {
            throw new Error("Expected the field `capability` to be an array in the JSON data but got " + data['capability']);
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

RequestAccess.RequiredProperties = ["capability", "name", "type"];

/**
 * List of the required capabilities options: [read, update, delete]
 * @member {Array.<String>} capability
 */
RequestAccess.prototype['capability'] = undefined;

/**
 * Deprecated - use description
 * @member {String} comment
 */
RequestAccess.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
RequestAccess.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
RequestAccess.prototype['json'] = false;

/**
 * Item name
 * @member {String} name
 */
RequestAccess.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RequestAccess.prototype['token'] = undefined;

/**
 * Item type
 * @member {String} type
 */
RequestAccess.prototype['type'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RequestAccess.prototype['uid-token'] = undefined;






export default RequestAccess;

