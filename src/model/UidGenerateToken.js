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
 * The UidGenerateToken model module.
 * @module model/UidGenerateToken
 * @version 3.2.7
 */
class UidGenerateToken {
    /**
     * Constructs a new <code>UidGenerateToken</code>.
     * uidGenerateToken is a command that generates a new token using Akeyless Universal Identity.
     * @alias module:model/UidGenerateToken
     * @param authMethodName {String} The universal identity auth method name
     */
    constructor(authMethodName) { 
        
        UidGenerateToken.initialize(this, authMethodName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, authMethodName) { 
        obj['auth-method-name'] = authMethodName;
    }

    /**
     * Constructs a <code>UidGenerateToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UidGenerateToken} obj Optional instance to populate.
     * @return {module:model/UidGenerateToken} The populated <code>UidGenerateToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UidGenerateToken();

            if (data.hasOwnProperty('auth-method-name')) {
                obj['auth-method-name'] = ApiClient.convertToType(data['auth-method-name'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
UidGenerateToken.prototype['auth-method-name'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UidGenerateToken.prototype['json'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UidGenerateToken.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UidGenerateToken.prototype['uid-token'] = undefined;






export default UidGenerateToken;

