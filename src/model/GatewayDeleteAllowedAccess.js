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
 * The GatewayDeleteAllowedAccess model module.
 * @module model/GatewayDeleteAllowedAccess
 * @version 3.6.1
 */
class GatewayDeleteAllowedAccess {
    /**
     * Constructs a new <code>GatewayDeleteAllowedAccess</code>.
     * gatewayDeleteAllowedAccess is a command that deletes allowed access from gateway
     * @alias module:model/GatewayDeleteAllowedAccess
     * @param name {String} Allowed access name to delete
     */
    constructor(name) { 
        
        GatewayDeleteAllowedAccess.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GatewayDeleteAllowedAccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayDeleteAllowedAccess} obj Optional instance to populate.
     * @return {module:model/GatewayDeleteAllowedAccess} The populated <code>GatewayDeleteAllowedAccess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayDeleteAllowedAccess();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
 * @default false
 */
GatewayDeleteAllowedAccess.prototype['json'] = false;

/**
 * Allowed access name to delete
 * @member {String} name
 */
GatewayDeleteAllowedAccess.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayDeleteAllowedAccess.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayDeleteAllowedAccess.prototype['uid-token'] = undefined;






export default GatewayDeleteAllowedAccess;

