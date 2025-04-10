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
 * The ListSharedItems model module.
 * @module model/ListSharedItems
 * @version 5.0.2
 */
class ListSharedItems {
    /**
     * Constructs a new <code>ListSharedItems</code>.
     * listSharedItems is a command to list all the items been shared
     * @alias module:model/ListSharedItems
     */
    constructor() { 
        
        ListSharedItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['accessibility'] = 'regular';
        obj['json'] = false;
    }

    /**
     * Constructs a <code>ListSharedItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSharedItems} obj Optional instance to populate.
     * @return {module:model/ListSharedItems} The populated <code>ListSharedItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListSharedItems();

            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListSharedItems</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListSharedItems</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['accessibility'] && !(typeof data['accessibility'] === 'string' || data['accessibility'] instanceof String)) {
            throw new Error("Expected the field `accessibility` to be a primitive type in the JSON string but got " + data['accessibility']);
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



/**
 * for personal password manager
 * @member {String} accessibility
 * @default 'regular'
 */
ListSharedItems.prototype['accessibility'] = 'regular';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
ListSharedItems.prototype['json'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
ListSharedItems.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
ListSharedItems.prototype['uid-token'] = undefined;






export default ListSharedItems;

