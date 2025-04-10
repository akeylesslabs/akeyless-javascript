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
import RoleAuthMethodAssociation from './RoleAuthMethodAssociation';
import Rules from './Rules';

/**
 * The Role model module.
 * @module model/Role
 * @version 5.0.2
 */
class Role {
    /**
     * Constructs a new <code>Role</code>.
     * @alias module:model/Role
     */
    constructor() { 
        
        Role.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Role} obj Optional instance to populate.
     * @return {module:model/Role} The populated <code>Role</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Role();

            if (data.hasOwnProperty('access_date')) {
                obj['access_date'] = ApiClient.convertToType(data['access_date'], 'Date');
            }
            if (data.hasOwnProperty('access_date_display')) {
                obj['access_date_display'] = ApiClient.convertToType(data['access_date_display'], 'String');
            }
            if (data.hasOwnProperty('client_permissions')) {
                obj['client_permissions'] = ApiClient.convertToType(data['client_permissions'], ['String']);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('creation_date')) {
                obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'Boolean');
            }
            if (data.hasOwnProperty('modification_date')) {
                obj['modification_date'] = ApiClient.convertToType(data['modification_date'], 'Date');
            }
            if (data.hasOwnProperty('role_auth_methods_assoc')) {
                obj['role_auth_methods_assoc'] = ApiClient.convertToType(data['role_auth_methods_assoc'], [RoleAuthMethodAssociation]);
            }
            if (data.hasOwnProperty('role_id')) {
                obj['role_id'] = ApiClient.convertToType(data['role_id'], 'Number');
            }
            if (data.hasOwnProperty('role_name')) {
                obj['role_name'] = ApiClient.convertToType(data['role_name'], 'String');
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = Rules.constructFromObject(data['rules']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Role</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Role</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['access_date_display'] && !(typeof data['access_date_display'] === 'string' || data['access_date_display'] instanceof String)) {
            throw new Error("Expected the field `access_date_display` to be a primitive type in the JSON string but got " + data['access_date_display']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['client_permissions'])) {
            throw new Error("Expected the field `client_permissions` to be an array in the JSON data but got " + data['client_permissions']);
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }
        if (data['role_auth_methods_assoc']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['role_auth_methods_assoc'])) {
                throw new Error("Expected the field `role_auth_methods_assoc` to be an array in the JSON data but got " + data['role_auth_methods_assoc']);
            }
            // validate the optional field `role_auth_methods_assoc` (array)
            for (const item of data['role_auth_methods_assoc']) {
                RoleAuthMethodAssociation.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['role_name'] && !(typeof data['role_name'] === 'string' || data['role_name'] instanceof String)) {
            throw new Error("Expected the field `role_name` to be a primitive type in the JSON string but got " + data['role_name']);
        }
        // validate the optional field `rules`
        if (data['rules']) { // data not null
          Rules.validateJSON(data['rules']);
        }

        return true;
    }


}



/**
 * @member {Date} access_date
 */
Role.prototype['access_date'] = undefined;

/**
 * @member {String} access_date_display
 */
Role.prototype['access_date_display'] = undefined;

/**
 * @member {Array.<String>} client_permissions
 */
Role.prototype['client_permissions'] = undefined;

/**
 * @member {String} comment
 */
Role.prototype['comment'] = undefined;

/**
 * @member {Date} creation_date
 */
Role.prototype['creation_date'] = undefined;

/**
 * @member {Boolean} delete_protection
 */
Role.prototype['delete_protection'] = undefined;

/**
 * @member {Date} modification_date
 */
Role.prototype['modification_date'] = undefined;

/**
 * @member {Array.<module:model/RoleAuthMethodAssociation>} role_auth_methods_assoc
 */
Role.prototype['role_auth_methods_assoc'] = undefined;

/**
 * @member {Number} role_id
 */
Role.prototype['role_id'] = undefined;

/**
 * @member {String} role_name
 */
Role.prototype['role_name'] = undefined;

/**
 * @member {module:model/Rules} rules
 */
Role.prototype['rules'] = undefined;






export default Role;

