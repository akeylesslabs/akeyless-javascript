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
 * The DeleteItem model module.
 * @module model/DeleteItem
 * @version 5.0.6
 */
class DeleteItem {
    /**
     * Constructs a new <code>DeleteItem</code>.
     * @alias module:model/DeleteItem
     * @param name {String} Item name
     */
    constructor(name) { 
        
        DeleteItem.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['accessibility'] = 'regular';
        obj['delete-immediately'] = false;
        obj['delete-in-days'] = 7;
        obj['json'] = false;
        obj['name'] = name;
        obj['version'] = -1;
    }

    /**
     * Constructs a <code>DeleteItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteItem} obj Optional instance to populate.
     * @return {module:model/DeleteItem} The populated <code>DeleteItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteItem();

            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
            }
            if (data.hasOwnProperty('delete-immediately')) {
                obj['delete-immediately'] = ApiClient.convertToType(data['delete-immediately'], 'Boolean');
            }
            if (data.hasOwnProperty('delete-in-days')) {
                obj['delete-in-days'] = ApiClient.convertToType(data['delete-in-days'], 'Number');
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
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteItem</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeleteItem.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['accessibility'] && !(typeof data['accessibility'] === 'string' || data['accessibility'] instanceof String)) {
            throw new Error("Expected the field `accessibility` to be a primitive type in the JSON string but got " + data['accessibility']);
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
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

DeleteItem.RequiredProperties = ["name"];

/**
 * for personal password manager
 * @member {String} accessibility
 * @default 'regular'
 */
DeleteItem.prototype['accessibility'] = 'regular';

/**
 * When delete-in-days=-1, must be set
 * @member {Boolean} delete-immediately
 * @default false
 */
DeleteItem.prototype['delete-immediately'] = false;

/**
 * The number of days to wait before deleting the item (relevant for keys only)
 * @member {Number} delete-in-days
 * @default 7
 */
DeleteItem.prototype['delete-in-days'] = 7;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DeleteItem.prototype['json'] = false;

/**
 * Item name
 * @member {String} name
 */
DeleteItem.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DeleteItem.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DeleteItem.prototype['uid-token'] = undefined;

/**
 * The specific version you want to delete - 0=last version, -1=entire item with all versions (default)
 * @member {Number} version
 * @default -1
 */
DeleteItem.prototype['version'] = -1;






export default DeleteItem;

