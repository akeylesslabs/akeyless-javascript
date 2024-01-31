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
 * The UidRevokeToken model module.
 * @module model/UidRevokeToken
 * @version 3.6.1
 */
class UidRevokeToken {
    /**
     * Constructs a new <code>UidRevokeToken</code>.
     * @alias module:model/UidRevokeToken
     * @param revokeToken {String} the universal identity token/token-id to revoke
     * @param revokeType {String} revokeSelf/revokeAll (delete only this token/this token and his children)
     */
    constructor(revokeToken, revokeType) { 
        
        UidRevokeToken.initialize(this, revokeToken, revokeType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, revokeToken, revokeType) { 
        obj['revoke-token'] = revokeToken;
        obj['revoke-type'] = revokeType;
    }

    /**
     * Constructs a <code>UidRevokeToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UidRevokeToken} obj Optional instance to populate.
     * @return {module:model/UidRevokeToken} The populated <code>UidRevokeToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UidRevokeToken();

            if (data.hasOwnProperty('auth-method-name')) {
                obj['auth-method-name'] = ApiClient.convertToType(data['auth-method-name'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('revoke-token')) {
                obj['revoke-token'] = ApiClient.convertToType(data['revoke-token'], 'String');
            }
            if (data.hasOwnProperty('revoke-type')) {
                obj['revoke-type'] = ApiClient.convertToType(data['revoke-type'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The universal identity auth method name
 * @member {String} auth-method-name
 */
UidRevokeToken.prototype['auth-method-name'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UidRevokeToken.prototype['json'] = false;

/**
 * the universal identity token/token-id to revoke
 * @member {String} revoke-token
 */
UidRevokeToken.prototype['revoke-token'] = undefined;

/**
 * revokeSelf/revokeAll (delete only this token/this token and his children)
 * @member {String} revoke-type
 */
UidRevokeToken.prototype['revoke-type'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UidRevokeToken.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UidRevokeToken.prototype['uid-token'] = undefined;






export default UidRevokeToken;

