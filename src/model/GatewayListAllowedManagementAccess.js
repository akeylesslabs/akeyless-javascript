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
 * The GatewayListAllowedManagementAccess model module.
 * @module model/GatewayListAllowedManagementAccess
 * @version 3.1.0
 */
class GatewayListAllowedManagementAccess {
    /**
     * Constructs a new <code>GatewayListAllowedManagementAccess</code>.
     * gatewayListAllowedManagementAccess is a command that returns list sub admins
     * @alias module:model/GatewayListAllowedManagementAccess
     */
    constructor() { 
        
        GatewayListAllowedManagementAccess.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayListAllowedManagementAccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayListAllowedManagementAccess} obj Optional instance to populate.
     * @return {module:model/GatewayListAllowedManagementAccess} The populated <code>GatewayListAllowedManagementAccess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayListAllowedManagementAccess();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
 * Set output format to JSON
 * @member {Boolean} json
 */
GatewayListAllowedManagementAccess.prototype['json'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayListAllowedManagementAccess.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayListAllowedManagementAccess.prototype['uid-token'] = undefined;






export default GatewayListAllowedManagementAccess;

