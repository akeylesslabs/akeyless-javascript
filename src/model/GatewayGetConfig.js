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
 * The GatewayGetConfig model module.
 * @module model/GatewayGetConfig
 * @version 2.4.1
 */
class GatewayGetConfig {
    /**
     * Constructs a new <code>GatewayGetConfig</code>.
     * gatewayGetConfig is a command that returns gateway configuration
     * @alias module:model/GatewayGetConfig
     */
    constructor() { 
        
        GatewayGetConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayGetConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayGetConfig} obj Optional instance to populate.
     * @return {module:model/GatewayGetConfig} The populated <code>GatewayGetConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayGetConfig();

            if (data.hasOwnProperty('gateway-url')) {
                obj['gateway-url'] = ApiClient.convertToType(data['gateway-url'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
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
 * Gateway url
 * @member {String} gateway-url
 * @default 'http://localhost:8000'
 */
GatewayGetConfig.prototype['gateway-url'] = 'http://localhost:8000';

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
GatewayGetConfig.prototype['password'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayGetConfig.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayGetConfig.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
GatewayGetConfig.prototype['username'] = undefined;






export default GatewayGetConfig;

