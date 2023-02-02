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
 * The ListRoles model module.
 * @module model/ListRoles
 * @version 3.2.3
 */
class ListRoles {
    /**
     * Constructs a new <code>ListRoles</code>.
     * @alias module:model/ListRoles
     */
    constructor() { 
        
        ListRoles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListRoles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListRoles} obj Optional instance to populate.
     * @return {module:model/ListRoles} The populated <code>ListRoles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListRoles();

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ApiClient.convertToType(data['filter'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('pagination-token')) {
                obj['pagination-token'] = ApiClient.convertToType(data['pagination-token'], 'String');
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


}

/**
 * Filter by item name or part of it
 * @member {String} filter
 */
ListRoles.prototype['filter'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
ListRoles.prototype['json'] = undefined;

/**
 * Next page reference
 * @member {String} pagination-token
 */
ListRoles.prototype['pagination-token'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
ListRoles.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
ListRoles.prototype['uid-token'] = undefined;






export default ListRoles;

