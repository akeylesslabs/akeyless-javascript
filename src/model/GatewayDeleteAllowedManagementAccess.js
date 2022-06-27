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
 * The GatewayDeleteAllowedManagementAccess model module.
 * @module model/GatewayDeleteAllowedManagementAccess
 * @version 2.16.9
 */
class GatewayDeleteAllowedManagementAccess {
    /**
     * Constructs a new <code>GatewayDeleteAllowedManagementAccess</code>.
     * gatewayDeleteAllowedManagementAccess is a command that deletes sub-admins
     * @alias module:model/GatewayDeleteAllowedManagementAccess
     * @param subAdminId {String} SubAdminID to be removed
     */
    constructor(subAdminId) { 
        
        GatewayDeleteAllowedManagementAccess.initialize(this, subAdminId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, subAdminId) { 
        obj['sub-admin-id'] = subAdminId;
    }

    /**
     * Constructs a <code>GatewayDeleteAllowedManagementAccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayDeleteAllowedManagementAccess} obj Optional instance to populate.
     * @return {module:model/GatewayDeleteAllowedManagementAccess} The populated <code>GatewayDeleteAllowedManagementAccess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayDeleteAllowedManagementAccess();

            if (data.hasOwnProperty('sub-admin-id')) {
                obj['sub-admin-id'] = ApiClient.convertToType(data['sub-admin-id'], 'String');
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
 * SubAdminID to be removed
 * @member {String} sub-admin-id
 */
GatewayDeleteAllowedManagementAccess.prototype['sub-admin-id'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayDeleteAllowedManagementAccess.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayDeleteAllowedManagementAccess.prototype['uid-token'] = undefined;






export default GatewayDeleteAllowedManagementAccess;

