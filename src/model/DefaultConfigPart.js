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
 * The DefaultConfigPart model module.
 * @module model/DefaultConfigPart
 * @version 3.1.0
 */
class DefaultConfigPart {
    /**
     * Constructs a new <code>DefaultConfigPart</code>.
     * @alias module:model/DefaultConfigPart
     */
    constructor() { 
        
        DefaultConfigPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DefaultConfigPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DefaultConfigPart} obj Optional instance to populate.
     * @return {module:model/DefaultConfigPart} The populated <code>DefaultConfigPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DefaultConfigPart();

            if (data.hasOwnProperty('default_protection_key_id')) {
                obj['default_protection_key_id'] = ApiClient.convertToType(data['default_protection_key_id'], 'Number');
            }
            if (data.hasOwnProperty('default_secret_location')) {
                obj['default_secret_location'] = ApiClient.convertToType(data['default_secret_location'], 'String');
            }
            if (data.hasOwnProperty('oidc_access_id')) {
                obj['oidc_access_id'] = ApiClient.convertToType(data['oidc_access_id'], 'String');
            }
            if (data.hasOwnProperty('saml_access_id')) {
                obj['saml_access_id'] = ApiClient.convertToType(data['saml_access_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} default_protection_key_id
 */
DefaultConfigPart.prototype['default_protection_key_id'] = undefined;

/**
 * @member {String} default_secret_location
 */
DefaultConfigPart.prototype['default_secret_location'] = undefined;

/**
 * @member {String} oidc_access_id
 */
DefaultConfigPart.prototype['oidc_access_id'] = undefined;

/**
 * @member {String} saml_access_id
 */
DefaultConfigPart.prototype['saml_access_id'] = undefined;






export default DefaultConfigPart;

