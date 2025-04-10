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
 * The AccessOrGroupPermissionAssignment model module.
 * @module model/AccessOrGroupPermissionAssignment
 * @version 5.0.2
 */
class AccessOrGroupPermissionAssignment {
    /**
     * Constructs a new <code>AccessOrGroupPermissionAssignment</code>.
     * @alias module:model/AccessOrGroupPermissionAssignment
     */
    constructor() { 
        
        AccessOrGroupPermissionAssignment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccessOrGroupPermissionAssignment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccessOrGroupPermissionAssignment} obj Optional instance to populate.
     * @return {module:model/AccessOrGroupPermissionAssignment} The populated <code>AccessOrGroupPermissionAssignment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccessOrGroupPermissionAssignment();

            if (data.hasOwnProperty('access_id')) {
                obj['access_id'] = ApiClient.convertToType(data['access_id'], 'String');
            }
            if (data.hasOwnProperty('access_type')) {
                obj['access_type'] = ApiClient.convertToType(data['access_type'], 'String');
            }
            if (data.hasOwnProperty('assignment_name')) {
                obj['assignment_name'] = ApiClient.convertToType(data['assignment_name'], 'String');
            }
            if (data.hasOwnProperty('assignment_type')) {
                obj['assignment_type'] = ApiClient.convertToType(data['assignment_type'], 'String');
            }
            if (data.hasOwnProperty('group_id')) {
                obj['group_id'] = ApiClient.convertToType(data['group_id'], 'String');
            }
            if (data.hasOwnProperty('sub_claims')) {
                obj['sub_claims'] = ApiClient.convertToType(data['sub_claims'], {'String': ['String']});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AccessOrGroupPermissionAssignment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccessOrGroupPermissionAssignment</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['access_id'] && !(typeof data['access_id'] === 'string' || data['access_id'] instanceof String)) {
            throw new Error("Expected the field `access_id` to be a primitive type in the JSON string but got " + data['access_id']);
        }
        // ensure the json data is a string
        if (data['access_type'] && !(typeof data['access_type'] === 'string' || data['access_type'] instanceof String)) {
            throw new Error("Expected the field `access_type` to be a primitive type in the JSON string but got " + data['access_type']);
        }
        // ensure the json data is a string
        if (data['assignment_name'] && !(typeof data['assignment_name'] === 'string' || data['assignment_name'] instanceof String)) {
            throw new Error("Expected the field `assignment_name` to be a primitive type in the JSON string but got " + data['assignment_name']);
        }
        // ensure the json data is a string
        if (data['assignment_type'] && !(typeof data['assignment_type'] === 'string' || data['assignment_type'] instanceof String)) {
            throw new Error("Expected the field `assignment_type` to be a primitive type in the JSON string but got " + data['assignment_type']);
        }
        // ensure the json data is a string
        if (data['group_id'] && !(typeof data['group_id'] === 'string' || data['group_id'] instanceof String)) {
            throw new Error("Expected the field `group_id` to be a primitive type in the JSON string but got " + data['group_id']);
        }

        return true;
    }


}



/**
 * @member {String} access_id
 */
AccessOrGroupPermissionAssignment.prototype['access_id'] = undefined;

/**
 * @member {String} access_type
 */
AccessOrGroupPermissionAssignment.prototype['access_type'] = undefined;

/**
 * @member {String} assignment_name
 */
AccessOrGroupPermissionAssignment.prototype['assignment_name'] = undefined;

/**
 * @member {String} assignment_type
 */
AccessOrGroupPermissionAssignment.prototype['assignment_type'] = undefined;

/**
 * @member {String} group_id
 */
AccessOrGroupPermissionAssignment.prototype['group_id'] = undefined;

/**
 * @member {Object.<String, Array.<String>>} sub_claims
 */
AccessOrGroupPermissionAssignment.prototype['sub_claims'] = undefined;






export default AccessOrGroupPermissionAssignment;

