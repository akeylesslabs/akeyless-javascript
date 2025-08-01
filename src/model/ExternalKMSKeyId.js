/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ExternalKMSKeyId model module.
 * @module model/ExternalKMSKeyId
 * @version 5.0.6
 */
class ExternalKMSKeyId {
    /**
     * Constructs a new <code>ExternalKMSKeyId</code>.
     * @alias module:model/ExternalKMSKeyId
     */
    constructor() { 
        
        ExternalKMSKeyId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExternalKMSKeyId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalKMSKeyId} obj Optional instance to populate.
     * @return {module:model/ExternalKMSKeyId} The populated <code>ExternalKMSKeyId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExternalKMSKeyId();

            if (data.hasOwnProperty('key_id')) {
                obj['key_id'] = ApiClient.convertToType(data['key_id'], 'String');
            }
            if (data.hasOwnProperty('key_reference')) {
                obj['key_reference'] = ApiClient.convertToType(data['key_reference'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExternalKMSKeyId</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalKMSKeyId</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['key_id'] && !(typeof data['key_id'] === 'string' || data['key_id'] instanceof String)) {
            throw new Error("Expected the field `key_id` to be a primitive type in the JSON string but got " + data['key_id']);
        }
        // ensure the json data is a string
        if (data['key_reference'] && !(typeof data['key_reference'] === 'string' || data['key_reference'] instanceof String)) {
            throw new Error("Expected the field `key_reference` to be a primitive type in the JSON string but got " + data['key_reference']);
        }

        return true;
    }


}



/**
 * @member {String} key_id
 */
ExternalKMSKeyId.prototype['key_id'] = undefined;

/**
 * @member {String} key_reference
 */
ExternalKMSKeyId.prototype['key_reference'] = undefined;






export default ExternalKMSKeyId;

