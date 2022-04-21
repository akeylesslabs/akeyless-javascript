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
 * The RevokeCreds model module.
 * @module model/RevokeCreds
 * @version 2.16.2
 */
class RevokeCreds {
    /**
     * Constructs a new <code>RevokeCreds</code>.
     * revokeCreds will permanently revoke the credentials associated with the provided token or profile.
     * @alias module:model/RevokeCreds
     */
    constructor() { 
        
        RevokeCreds.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RevokeCreds</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RevokeCreds} obj Optional instance to populate.
     * @return {module:model/RevokeCreds} The populated <code>RevokeCreds</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RevokeCreds();

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
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RevokeCreds.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RevokeCreds.prototype['uid-token'] = undefined;






export default RevokeCreds;

