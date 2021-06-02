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
import OAuth2CustomClaim from './OAuth2CustomClaim';

/**
 * The OAuth2AccessRules model module.
 * @module model/OAuth2AccessRules
 * @version 2.4.2
 */
class OAuth2AccessRules {
    /**
     * Constructs a new <code>OAuth2AccessRules</code>.
     * OAuth2AccessRules contains access rules specific to OAuth2 authentication method.
     * @alias module:model/OAuth2AccessRules
     */
    constructor() { 
        
        OAuth2AccessRules.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OAuth2AccessRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OAuth2AccessRules} obj Optional instance to populate.
     * @return {module:model/OAuth2AccessRules} The populated <code>OAuth2AccessRules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OAuth2AccessRules();

            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], 'String');
            }
            if (data.hasOwnProperty('bound_claims')) {
                obj['bound_claims'] = ApiClient.convertToType(data['bound_claims'], [OAuth2CustomClaim]);
            }
            if (data.hasOwnProperty('bound_clients_id')) {
                obj['bound_clients_id'] = ApiClient.convertToType(data['bound_clients_id'], ['String']);
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
            if (data.hasOwnProperty('jwks_uri')) {
                obj['jwks_uri'] = ApiClient.convertToType(data['jwks_uri'], 'String');
            }
            if (data.hasOwnProperty('unique_identifier')) {
                obj['unique_identifier'] = ApiClient.convertToType(data['unique_identifier'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The audience in the JWT.
 * @member {String} audience
 */
OAuth2AccessRules.prototype['audience'] = undefined;

/**
 * The claims that login is restricted to.
 * @member {Array.<module:model/OAuth2CustomClaim>} bound_claims
 */
OAuth2AccessRules.prototype['bound_claims'] = undefined;

/**
 * The clients ids that login is restricted to.
 * @member {Array.<String>} bound_clients_id
 */
OAuth2AccessRules.prototype['bound_clients_id'] = undefined;

/**
 * Issuer URL
 * @member {String} issuer
 */
OAuth2AccessRules.prototype['issuer'] = undefined;

/**
 * The URL to the JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server.
 * @member {String} jwks_uri
 */
OAuth2AccessRules.prototype['jwks_uri'] = undefined;

/**
 * A unique identifier to distinguish different users
 * @member {String} unique_identifier
 */
OAuth2AccessRules.prototype['unique_identifier'] = undefined;






export default OAuth2AccessRules;

