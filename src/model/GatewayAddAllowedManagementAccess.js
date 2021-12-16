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
 * The GatewayAddAllowedManagementAccess model module.
 * @module model/GatewayAddAllowedManagementAccess
 * @version 2.5.21
 */
class GatewayAddAllowedManagementAccess {
    /**
     * Constructs a new <code>GatewayAddAllowedManagementAccess</code>.
     * gatewayAddAllowedManagementAccess is a command that adds sub-admins
     * @alias module:model/GatewayAddAllowedManagementAccess
     * @param subAdminAccessId {String} SubAdmins to add
     */
    constructor(subAdminAccessId) { 
        
        GatewayAddAllowedManagementAccess.initialize(this, subAdminAccessId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, subAdminAccessId) { 
        obj['sub-admin-access-id'] = subAdminAccessId;
    }

    /**
     * Constructs a <code>GatewayAddAllowedManagementAccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayAddAllowedManagementAccess} obj Optional instance to populate.
     * @return {module:model/GatewayAddAllowedManagementAccess} The populated <code>GatewayAddAllowedManagementAccess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayAddAllowedManagementAccess();

            if (data.hasOwnProperty('allow-gw-api')) {
                obj['allow-gw-api'] = ApiClient.convertToType(data['allow-gw-api'], 'Boolean');
            }
            if (data.hasOwnProperty('allow-gw-login')) {
                obj['allow-gw-login'] = ApiClient.convertToType(data['allow-gw-login'], 'Boolean');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('sub-admin-access-id')) {
                obj['sub-admin-access-id'] = ApiClient.convertToType(data['sub-admin-access-id'], 'String');
            }
            if (data.hasOwnProperty('sub-claims')) {
                obj['sub-claims'] = ApiClient.convertToType(data['sub-claims'], {'String': 'String'});
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
 * @member {Boolean} allow-gw-api
 */
GatewayAddAllowedManagementAccess.prototype['allow-gw-api'] = undefined;

/**
 * @member {Boolean} allow-gw-login
 */
GatewayAddAllowedManagementAccess.prototype['allow-gw-login'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
GatewayAddAllowedManagementAccess.prototype['password'] = undefined;

/**
 * SubAdmins to add
 * @member {String} sub-admin-access-id
 */
GatewayAddAllowedManagementAccess.prototype['sub-admin-access-id'] = undefined;

/**
 * key/val of sub claims, e.g group=admins,developers
 * @member {Object.<String, String>} sub-claims
 */
GatewayAddAllowedManagementAccess.prototype['sub-claims'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayAddAllowedManagementAccess.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayAddAllowedManagementAccess.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
GatewayAddAllowedManagementAccess.prototype['username'] = undefined;






export default GatewayAddAllowedManagementAccess;

