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
 * The ListItems model module.
 * @module model/ListItems
 * @version 3.2.0
 */
class ListItems {
    /**
     * Constructs a new <code>ListItems</code>.
     * @alias module:model/ListItems
     */
    constructor() { 
        
        ListItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListItems} obj Optional instance to populate.
     * @return {module:model/ListItems} The populated <code>ListItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListItems();

            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ApiClient.convertToType(data['filter'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('minimal-view')) {
                obj['minimal-view'] = ApiClient.convertToType(data['minimal-view'], 'Boolean');
            }
            if (data.hasOwnProperty('pagination-token')) {
                obj['pagination-token'] = ApiClient.convertToType(data['pagination-token'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('sub_types')) {
                obj['sub_types'] = ApiClient.convertToType(data['sub_types'], ['String']);
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], ['String']);
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * for personal password manager
 * @member {String} accessibility
 * @default 'regular'
 */
ListItems.prototype['accessibility'] = 'regular';

/**
 * Filter by item name or part of it
 * @member {String} filter
 */
ListItems.prototype['filter'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
ListItems.prototype['json'] = undefined;

/**
 * @member {Boolean} minimal-view
 */
ListItems.prototype['minimal-view'] = undefined;

/**
 * Next page reference
 * @member {String} pagination-token
 */
ListItems.prototype['pagination-token'] = undefined;

/**
 * Path to folder
 * @member {String} path
 */
ListItems.prototype['path'] = undefined;

/**
 * @member {Array.<String>} sub_types
 */
ListItems.prototype['sub_types'] = undefined;

/**
 * Filter by item tag
 * @member {String} tag
 */
ListItems.prototype['tag'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
ListItems.prototype['token'] = undefined;

/**
 * The item types list of the requested items. In case it is empty, all types of items will be returned. options: [key, static-secret, dynamic-secret, classic-key]
 * @member {Array.<String>} type
 */
ListItems.prototype['type'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
ListItems.prototype['uid-token'] = undefined;






export default ListItems;

