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
import AccessOrGroupPermissionAssignment from './AccessOrGroupPermissionAssignment';

/**
 * The OidcClientInfo model module.
 * @module model/OidcClientInfo
 * @version 3.5.1
 */
class OidcClientInfo {
    /**
     * Constructs a new <code>OidcClientInfo</code>.
     * @alias module:model/OidcClientInfo
     */
    constructor() { 
        
        OidcClientInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OidcClientInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OidcClientInfo} obj Optional instance to populate.
     * @return {module:model/OidcClientInfo} The populated <code>OidcClientInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OidcClientInfo();

            if (data.hasOwnProperty('access_permission_assignment')) {
                obj['access_permission_assignment'] = ApiClient.convertToType(data['access_permission_assignment'], [AccessOrGroupPermissionAssignment]);
            }
            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], ['String']);
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('grant_types')) {
                obj['grant_types'] = ApiClient.convertToType(data['grant_types'], ['String']);
            }
            if (data.hasOwnProperty('issuer_url')) {
                obj['issuer_url'] = ApiClient.convertToType(data['issuer_url'], 'String');
            }
            if (data.hasOwnProperty('logout_uris')) {
                obj['logout_uris'] = ApiClient.convertToType(data['logout_uris'], ['String']);
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
            }
            if (data.hasOwnProperty('redirect_uris')) {
                obj['redirect_uris'] = ApiClient.convertToType(data['redirect_uris'], ['String']);
            }
            if (data.hasOwnProperty('response_types')) {
                obj['response_types'] = ApiClient.convertToType(data['response_types'], ['String']);
            }
            if (data.hasOwnProperty('scopes')) {
                obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/AccessOrGroupPermissionAssignment>} access_permission_assignment
 */
OidcClientInfo.prototype['access_permission_assignment'] = undefined;

/**
 * @member {Array.<String>} audience
 */
OidcClientInfo.prototype['audience'] = undefined;

/**
 * @member {String} client_id
 */
OidcClientInfo.prototype['client_id'] = undefined;

/**
 * @member {Array.<String>} grant_types
 */
OidcClientInfo.prototype['grant_types'] = undefined;

/**
 * @member {String} issuer_url
 */
OidcClientInfo.prototype['issuer_url'] = undefined;

/**
 * @member {Array.<String>} logout_uris
 */
OidcClientInfo.prototype['logout_uris'] = undefined;

/**
 * @member {Boolean} public
 */
OidcClientInfo.prototype['public'] = undefined;

/**
 * @member {Array.<String>} redirect_uris
 */
OidcClientInfo.prototype['redirect_uris'] = undefined;

/**
 * @member {Array.<String>} response_types
 */
OidcClientInfo.prototype['response_types'] = undefined;

/**
 * @member {Array.<String>} scopes
 */
OidcClientInfo.prototype['scopes'] = undefined;






export default OidcClientInfo;

