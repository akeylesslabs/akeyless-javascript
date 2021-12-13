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
 * @version 2.5.16
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

            if (data.hasOwnProperty('pagination-token')) {
                obj['pagination-token'] = ApiClient.convertToType(data['pagination-token'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Next page reference
 * @member {String} pagination-token
 */
ListRoles.prototype['pagination-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
ListRoles.prototype['password'] = undefined;

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

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
ListRoles.prototype['username'] = undefined;






export default ListRoles;

