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
 * @version 3.5.2
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
            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], 'String');
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
            if (data.hasOwnProperty('is_internal')) {
                obj['is_internal'] = ApiClient.convertToType(data['is_internal'], 'Boolean');
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
            if (data.hasOwnProperty('required_scopes')) {
                obj['required_scopes'] = ApiClient.convertToType(data['required_scopes'], ['String']);
            }
            if (data.hasOwnProperty('required_scopes_prefix')) {
                obj['required_scopes_prefix'] = ApiClient.convertToType(data['required_scopes_prefix'], 'String');
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
 * Audience claim to be used as part of the authentication flow. In case set, it must match the one configured on the Identity Provider's Application
 * @member {String} audience
 */
OIDCAccessRules.prototype['audience'] = undefined;

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
 * IsInternal indicates whether this is an internal Auth Method where the client has no control over it, or it was created by the client e.g - Sign In with Google will create an OIDC Auth Method with IsInternal=true
 * @member {Boolean} is_internal
 */
OIDCAccessRules.prototype['is_internal'] = undefined;

/**
 * Issuer URL
 * @member {String} issuer
 */
OIDCAccessRules.prototype['issuer'] = undefined;

/**
 * A list of required scopes to request from the oidc provider, and to check on the token
 * @member {Array.<String>} required_scopes
 */
OIDCAccessRules.prototype['required_scopes'] = undefined;

/**
 * A prefix to add to the required scopes (for example, azures' Application ID URI)
 * @member {String} required_scopes_prefix
 */
OIDCAccessRules.prototype['required_scopes_prefix'] = undefined;

/**
 * A unique identifier to distinguish different users
 * @member {String} unique_identifier
 */
OIDCAccessRules.prototype['unique_identifier'] = undefined;






export default OIDCAccessRules;

