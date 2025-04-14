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
 * The UpdateGroup model module.
 * @module model/UpdateGroup
 * @version 5.0.3
 */
class UpdateGroup {
    /**
     * Constructs a new <code>UpdateGroup</code>.
     * @alias module:model/UpdateGroup
     * @param groupAlias {String} A short group alias
     * @param name {String} Group name
     */
    constructor(groupAlias, name) { 
        
        UpdateGroup.initialize(this, groupAlias, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, groupAlias, name) { 
        obj['group-alias'] = groupAlias;
        obj['json'] = false;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>UpdateGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateGroup} obj Optional instance to populate.
     * @return {module:model/UpdateGroup} The populated <code>UpdateGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateGroup();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('group-alias')) {
                obj['group-alias'] = ApiClient.convertToType(data['group-alias'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user-assignment')) {
                obj['user-assignment'] = ApiClient.convertToType(data['user-assignment'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateGroup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateGroup</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateGroup.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['group-alias'] && !(typeof data['group-alias'] === 'string' || data['group-alias'] instanceof String)) {
            throw new Error("Expected the field `group-alias` to be a primitive type in the JSON string but got " + data['group-alias']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['new-name'] && !(typeof data['new-name'] === 'string' || data['new-name'] instanceof String)) {
            throw new Error("Expected the field `new-name` to be a primitive type in the JSON string but got " + data['new-name']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }
        // ensure the json data is a string
        if (data['user-assignment'] && !(typeof data['user-assignment'] === 'string' || data['user-assignment'] instanceof String)) {
            throw new Error("Expected the field `user-assignment` to be a primitive type in the JSON string but got " + data['user-assignment']);
        }

        return true;
    }


}

UpdateGroup.RequiredProperties = ["group-alias", "name"];

/**
 * Description of the object
 * @member {String} description
 */
UpdateGroup.prototype['description'] = undefined;

/**
 * A short group alias
 * @member {String} group-alias
 */
UpdateGroup.prototype['group-alias'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateGroup.prototype['json'] = false;

/**
 * Group name
 * @member {String} name
 */
UpdateGroup.prototype['name'] = undefined;

/**
 * Group new name
 * @member {String} new-name
 */
UpdateGroup.prototype['new-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateGroup.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateGroup.prototype['uid-token'] = undefined;

/**
 * A json string defining the access permission assignment for this client
 * @member {String} user-assignment
 */
UpdateGroup.prototype['user-assignment'] = undefined;






export default UpdateGroup;

