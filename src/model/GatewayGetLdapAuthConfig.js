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
 * The GatewayGetLdapAuthConfig model module.
 * @module model/GatewayGetLdapAuthConfig
 * @version 3.3.2
 */
class GatewayGetLdapAuthConfig {
    /**
     * Constructs a new <code>GatewayGetLdapAuthConfig</code>.
     * gatewayGetLdapAuth is a command that gets ldap auth config
     * @alias module:model/GatewayGetLdapAuthConfig
     */
    constructor() { 
        
        GatewayGetLdapAuthConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayGetLdapAuthConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayGetLdapAuthConfig} obj Optional instance to populate.
     * @return {module:model/GatewayGetLdapAuthConfig} The populated <code>GatewayGetLdapAuthConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayGetLdapAuthConfig();

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
 * @default false
 */
GatewayGetLdapAuthConfig.prototype['json'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayGetLdapAuthConfig.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayGetLdapAuthConfig.prototype['uid-token'] = undefined;






export default GatewayGetLdapAuthConfig;

