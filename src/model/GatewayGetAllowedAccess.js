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
 * The GatewayGetAllowedAccess model module.
 * @module model/GatewayGetAllowedAccess
 * @version 3.3.17
 */
class GatewayGetAllowedAccess {
    /**
     * Constructs a new <code>GatewayGetAllowedAccess</code>.
     * gatewayGetAllowedAccess is a command that gets allowed access from gateway
     * @alias module:model/GatewayGetAllowedAccess
     * @param name {String} Allowed access name
     */
    constructor(name) { 
        
        GatewayGetAllowedAccess.initialize(this, name);
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
     * Constructs a <code>GatewayGetAllowedAccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayGetAllowedAccess} obj Optional instance to populate.
     * @return {module:model/GatewayGetAllowedAccess} The populated <code>GatewayGetAllowedAccess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayGetAllowedAccess();

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
GatewayGetAllowedAccess.prototype['json'] = false;

/**
 * Allowed access name
 * @member {String} name
 */
GatewayGetAllowedAccess.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayGetAllowedAccess.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayGetAllowedAccess.prototype['uid-token'] = undefined;






export default GatewayGetAllowedAccess;

