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
 * The GatewayDeleteAllowedAccessOutput model module.
 * @module model/GatewayDeleteAllowedAccessOutput
 * @version 4.0.0
 */
class GatewayDeleteAllowedAccessOutput {
    /**
     * Constructs a new <code>GatewayDeleteAllowedAccessOutput</code>.
     * @alias module:model/GatewayDeleteAllowedAccessOutput
     */
    constructor() { 
        
        GatewayDeleteAllowedAccessOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayDeleteAllowedAccessOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayDeleteAllowedAccessOutput} obj Optional instance to populate.
     * @return {module:model/GatewayDeleteAllowedAccessOutput} The populated <code>GatewayDeleteAllowedAccessOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayDeleteAllowedAccessOutput();

            if (data.hasOwnProperty('allowed_access_name')) {
                obj['allowed_access_name'] = ApiClient.convertToType(data['allowed_access_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} allowed_access_name
 */
GatewayDeleteAllowedAccessOutput.prototype['allowed_access_name'] = undefined;






export default GatewayDeleteAllowedAccessOutput;

