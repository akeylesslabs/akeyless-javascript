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
 * The RawCreds model module.
 * @module model/RawCreds
 * @version 2.5.6
 */
class RawCreds {
    /**
     * Constructs a new <code>RawCreds</code>.
     * @alias module:model/RawCreds
     */
    constructor() { 
        
        RawCreds.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RawCreds</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RawCreds} obj Optional instance to populate.
     * @return {module:model/RawCreds} The populated <code>RawCreds</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RawCreds();

            if (data.hasOwnProperty('access-id')) {
                obj['access-id'] = ApiClient.convertToType(data['access-id'], 'String');
            }
            if (data.hasOwnProperty('access-key')) {
                obj['access-key'] = ApiClient.convertToType(data['access-key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} access-id
 */
RawCreds.prototype['access-id'] = undefined;

/**
 * @member {String} access-key
 */
RawCreds.prototype['access-key'] = undefined;






export default RawCreds;

