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
 * The OIDCCustomClaim model module.
 * @module model/OIDCCustomClaim
 * @version 5.0.2
 */
class OIDCCustomClaim {
    /**
     * Constructs a new <code>OIDCCustomClaim</code>.
     * OIDCCustomClaim is a custom claim specific to OIDC authentication method.
     * @alias module:model/OIDCCustomClaim
     */
    constructor() { 
        
        OIDCCustomClaim.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OIDCCustomClaim</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OIDCCustomClaim} obj Optional instance to populate.
     * @return {module:model/OIDCCustomClaim} The populated <code>OIDCCustomClaim</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OIDCCustomClaim();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OIDCCustomClaim</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OIDCCustomClaim</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['values'])) {
            throw new Error("Expected the field `values` to be an array in the JSON data but got " + data['values']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
OIDCCustomClaim.prototype['name'] = undefined;

/**
 * @member {Array.<String>} values
 */
OIDCCustomClaim.prototype['values'] = undefined;






export default OIDCCustomClaim;

