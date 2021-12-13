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
import OIDCCustomClaim from './OIDCCustomClaim';

/**
 * The OIDCAccessRules model module.
 * @module model/OIDCAccessRules
 * @version 2.5.20
 */
class OIDCAccessRules {
    /**
     * Constructs a new <code>OIDCAccessRules</code>.
     * OIDCAccessRules contains access rules specific to Open Id Connect authentication method.
     * @alias module:model/OIDCAccessRules
     */
    constructor() { 
        
        OIDCAccessRules.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OIDCAccessRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OIDCAccessRules} obj Optional instance to populate.
     * @return {module:model/OIDCAccessRules} The populated <code>OIDCAccessRules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OIDCAccessRules();

            if (data.hasOwnProperty('allowed_redirect_URIs')) {
                obj['allowed_redirect_URIs'] = ApiClient.convertToType(data['allowed_redirect_URIs'], ['String']);
            }
            if (data.hasOwnProperty('bound_claims')) {
                obj['bound_claims'] = ApiClient.convertToType(data['bound_claims'], [OIDCCustomClaim]);
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('client_secret')) {
                obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
            if (data.hasOwnProperty('unique_identifier')) {
                obj['unique_identifier'] = ApiClient.convertToType(data['unique_identifier'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Allowed redirect URIs after the authentication
 * @member {Array.<String>} allowed_redirect_URIs
 */
OIDCAccessRules.prototype['allowed_redirect_URIs'] = undefined;

/**
 * The claims that login is restricted to.
 * @member {Array.<module:model/OIDCCustomClaim>} bound_claims
 */
OIDCAccessRules.prototype['bound_claims'] = undefined;

/**
 * Client ID
 * @member {String} client_id
 */
OIDCAccessRules.prototype['client_id'] = undefined;

/**
 * Client Secret
 * @member {String} client_secret
 */
OIDCAccessRules.prototype['client_secret'] = undefined;

/**
 * Issuer URL
 * @member {String} issuer
 */
OIDCAccessRules.prototype['issuer'] = undefined;

/**
 * A unique identifier to distinguish different users
 * @member {String} unique_identifier
 */
OIDCAccessRules.prototype['unique_identifier'] = undefined;






export default OIDCAccessRules;

