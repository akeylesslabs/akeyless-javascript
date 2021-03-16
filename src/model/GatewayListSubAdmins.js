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
 * The GatewayListSubAdmins model module.
 * @module model/GatewayListSubAdmins
 * @version 2.0
 */
class GatewayListSubAdmins {
    /**
     * Constructs a new <code>GatewayListSubAdmins</code>.
     * gatewayListSubAdmins is a command that returns list sub admins
     * @alias module:model/GatewayListSubAdmins
     */
    constructor() { 
        
        GatewayListSubAdmins.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayListSubAdmins</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayListSubAdmins} obj Optional instance to populate.
     * @return {module:model/GatewayListSubAdmins} The populated <code>GatewayListSubAdmins</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayListSubAdmins();

            if (data.hasOwnProperty('gateway-url')) {
                obj['gateway-url'] = ApiClient.convertToType(data['gateway-url'], 'String');
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
 * Gateway url
 * @member {String} gateway-url
 * @default 'http://localhost:8000'
 */
GatewayListSubAdmins.prototype['gateway-url'] = 'http://localhost:8000';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayListSubAdmins.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayListSubAdmins.prototype['uid-token'] = undefined;






export default GatewayListSubAdmins;

