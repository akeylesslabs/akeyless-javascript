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
 * The GatewayDeleteSubAdmins model module.
 * @module model/GatewayDeleteSubAdmins
 * @version 2.4.0
 */
class GatewayDeleteSubAdmins {
    /**
     * Constructs a new <code>GatewayDeleteSubAdmins</code>.
     * gatewayDeleteSubAdmins is a command that deletes sub-admins
     * @alias module:model/GatewayDeleteSubAdmins
     * @param subAdmin {Array.<String>} SubAdmins to be removed
     */
    constructor(subAdmin) { 
        
        GatewayDeleteSubAdmins.initialize(this, subAdmin);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, subAdmin) { 
        obj['sub-admin'] = subAdmin;
    }

    /**
     * Constructs a <code>GatewayDeleteSubAdmins</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayDeleteSubAdmins} obj Optional instance to populate.
     * @return {module:model/GatewayDeleteSubAdmins} The populated <code>GatewayDeleteSubAdmins</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayDeleteSubAdmins();

            if (data.hasOwnProperty('gateway-url')) {
                obj['gateway-url'] = ApiClient.convertToType(data['gateway-url'], 'String');
            }
            if (data.hasOwnProperty('sub-admin')) {
                obj['sub-admin'] = ApiClient.convertToType(data['sub-admin'], ['String']);
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
GatewayDeleteSubAdmins.prototype['gateway-url'] = 'http://localhost:8000';

/**
 * SubAdmins to be removed
 * @member {Array.<String>} sub-admin
 */
GatewayDeleteSubAdmins.prototype['sub-admin'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayDeleteSubAdmins.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayDeleteSubAdmins.prototype['uid-token'] = undefined;






export default GatewayDeleteSubAdmins;

