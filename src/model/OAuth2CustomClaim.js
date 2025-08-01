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
 * The OAuth2CustomClaim model module.
 * @module model/OAuth2CustomClaim
 * @version 5.0.6
 */
class OAuth2CustomClaim {
    /**
     * Constructs a new <code>OAuth2CustomClaim</code>.
     * OAuth2CustomClaim is a custom claim specific to OAuth2 authentication method.
     * @alias module:model/OAuth2CustomClaim
     */
    constructor() { 
        
        OAuth2CustomClaim.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OAuth2CustomClaim</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OAuth2CustomClaim} obj Optional instance to populate.
     * @return {module:model/OAuth2CustomClaim} The populated <code>OAuth2CustomClaim</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OAuth2CustomClaim();

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
     * Validates the JSON data with respect to <code>OAuth2CustomClaim</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OAuth2CustomClaim</code>.
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
OAuth2CustomClaim.prototype['name'] = undefined;

/**
 * @member {Array.<String>} values
 */
OAuth2CustomClaim.prototype['values'] = undefined;






export default OAuth2CustomClaim;

