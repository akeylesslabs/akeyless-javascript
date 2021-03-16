/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GatewayAddSubAdmins model module.
 * @module model/GatewayAddSubAdmins
 * @version 1.0
 */
class GatewayAddSubAdmins {
    /**
     * Constructs a new <code>GatewayAddSubAdmins</code>.
     * gatewayAddSubAdmins is a command that adds sub-admins
     * @alias module:model/GatewayAddSubAdmins
     * @param subAdmin {Array.<String>} SubAdmins to add
     */
    constructor(subAdmin) { 
        
        GatewayAddSubAdmins.initialize(this, subAdmin);
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
     * Constructs a <code>GatewayAddSubAdmins</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayAddSubAdmins} obj Optional instance to populate.
     * @return {module:model/GatewayAddSubAdmins} The populated <code>GatewayAddSubAdmins</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayAddSubAdmins();

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
GatewayAddSubAdmins.prototype['gateway-url'] = 'http://localhost:8000';

/**
 * SubAdmins to add
 * @member {Array.<String>} sub-admin
 */
GatewayAddSubAdmins.prototype['sub-admin'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayAddSubAdmins.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayAddSubAdmins.prototype['uid-token'] = undefined;






export default GatewayAddSubAdmins;

