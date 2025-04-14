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
 * The HashiPayload model module.
 * @module model/HashiPayload
 * @version 5.0.3
 */
class HashiPayload {
    /**
     * Constructs a new <code>HashiPayload</code>.
     * @alias module:model/HashiPayload
     */
    constructor() { 
        
        HashiPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HashiPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HashiPayload} obj Optional instance to populate.
     * @return {module:model/HashiPayload} The populated <code>HashiPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HashiPayload();

            if (data.hasOwnProperty('import_as_json')) {
                obj['import_as_json'] = ApiClient.convertToType(data['import_as_json'], 'Boolean');
            }
            if (data.hasOwnProperty('namespaces')) {
                obj['namespaces'] = ApiClient.convertToType(data['namespaces'], ['String']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HashiPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HashiPayload</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['namespaces'])) {
            throw new Error("Expected the field `namespaces` to be an array in the JSON data but got " + data['namespaces']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * @member {Boolean} import_as_json
 */
HashiPayload.prototype['import_as_json'] = undefined;

/**
 * @member {Array.<String>} namespaces
 */
HashiPayload.prototype['namespaces'] = undefined;

/**
 * @member {String} token
 */
HashiPayload.prototype['token'] = undefined;

/**
 * @member {String} url
 */
HashiPayload.prototype['url'] = undefined;






export default HashiPayload;

