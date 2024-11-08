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
 * The OAuth2CustomClaim model module.
 * @module model/OAuth2CustomClaim
 * @version 4.3.0
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

