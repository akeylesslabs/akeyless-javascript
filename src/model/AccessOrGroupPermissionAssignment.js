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
 * @version 3.5.4
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

