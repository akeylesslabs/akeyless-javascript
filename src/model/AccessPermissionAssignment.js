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
 * The AccessPermissionAssignment model module.
 * @module model/AccessPermissionAssignment
 * @version 3.5.1
 */
class AccessPermissionAssignment {
    /**
     * Constructs a new <code>AccessPermissionAssignment</code>.
     * @alias module:model/AccessPermissionAssignment
     */
    constructor() { 
        
        AccessPermissionAssignment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccessPermissionAssignment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccessPermissionAssignment} obj Optional instance to populate.
     * @return {module:model/AccessPermissionAssignment} The populated <code>AccessPermissionAssignment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccessPermissionAssignment();

            if (data.hasOwnProperty('access_id')) {
                obj['access_id'] = ApiClient.convertToType(data['access_id'], 'String');
            }
            if (data.hasOwnProperty('access_type')) {
                obj['access_type'] = ApiClient.convertToType(data['access_type'], 'String');
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
AccessPermissionAssignment.prototype['access_id'] = undefined;

/**
 * @member {String} access_type
 */
AccessPermissionAssignment.prototype['access_type'] = undefined;

/**
 * @member {Object.<String, Array.<String>>} sub_claims
 */
AccessPermissionAssignment.prototype['sub_claims'] = undefined;






export default AccessPermissionAssignment;

