/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
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
 * @version 5.0.3
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

    /**
     * Validates the JSON data with respect to <code>GatewayDeleteAllowedAccessOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayDeleteAllowedAccessOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['allowed_access_name'] && !(typeof data['allowed_access_name'] === 'string' || data['allowed_access_name'] instanceof String)) {
            throw new Error("Expected the field `allowed_access_name` to be a primitive type in the JSON string but got " + data['allowed_access_name']);
        }

        return true;
    }


}



/**
 * @member {String} allowed_access_name
 */
GatewayDeleteAllowedAccessOutput.prototype['allowed_access_name'] = undefined;






export default GatewayDeleteAllowedAccessOutput;

