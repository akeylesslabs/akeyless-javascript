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
 * The ListGroups model module.
 * @module model/ListGroups
 * @version 3.3.17
 */
class ListGroups {
    /**
     * Constructs a new <code>ListGroups</code>.
     * @alias module:model/ListGroups
     */
    constructor() { 
        
        ListGroups.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListGroups</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListGroups} obj Optional instance to populate.
     * @return {module:model/ListGroups} The populated <code>ListGroups</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListGroups();

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
 * Filter by auth method name or part of it
 * @member {String} filter
 */
ListGroups.prototype['filter'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
ListGroups.prototype['json'] = false;

/**
 * Next page reference
 * @member {String} pagination-token
 */
ListGroups.prototype['pagination-token'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
ListGroups.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
ListGroups.prototype['uid-token'] = undefined;






export default ListGroups;
