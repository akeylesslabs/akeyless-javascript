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
 * The OnePasswordPayload model module.
 * @module model/OnePasswordPayload
 * @version 4.3.0
 */
class OnePasswordPayload {
    /**
     * Constructs a new <code>OnePasswordPayload</code>.
     * @alias module:model/OnePasswordPayload
     */
    constructor() { 
        
        OnePasswordPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OnePasswordPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OnePasswordPayload} obj Optional instance to populate.
     * @return {module:model/OnePasswordPayload} The populated <code>OnePasswordPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OnePasswordPayload();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('secret_key')) {
                obj['secret_key'] = ApiClient.convertToType(data['secret_key'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('vaults')) {
                obj['vaults'] = ApiClient.convertToType(data['vaults'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
OnePasswordPayload.prototype['email'] = undefined;

/**
 * @member {String} password
 */
OnePasswordPayload.prototype['password'] = undefined;

/**
 * @member {String} secret_key
 */
OnePasswordPayload.prototype['secret_key'] = undefined;

/**
 * @member {String} url
 */
OnePasswordPayload.prototype['url'] = undefined;

/**
 * @member {Array.<String>} vaults
 */
OnePasswordPayload.prototype['vaults'] = undefined;






export default OnePasswordPayload;

