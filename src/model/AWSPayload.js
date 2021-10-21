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
 * The AWSPayload model module.
 * @module model/AWSPayload
 * @version 2.5.10
 */
class AWSPayload {
    /**
     * Constructs a new <code>AWSPayload</code>.
     * @alias module:model/AWSPayload
     */
    constructor() { 
        
        AWSPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AWSPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AWSPayload} obj Optional instance to populate.
     * @return {module:model/AWSPayload} The populated <code>AWSPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AWSPayload();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} key
 */
AWSPayload.prototype['key'] = undefined;

/**
 * @member {String} region
 */
AWSPayload.prototype['region'] = undefined;

/**
 * @member {String} secret
 */
AWSPayload.prototype['secret'] = undefined;






export default AWSPayload;

