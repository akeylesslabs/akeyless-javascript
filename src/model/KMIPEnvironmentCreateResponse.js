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
 * The KMIPEnvironmentCreateResponse model module.
 * @module model/KMIPEnvironmentCreateResponse
 * @version 5.0.6
 */
class KMIPEnvironmentCreateResponse {
    /**
     * Constructs a new <code>KMIPEnvironmentCreateResponse</code>.
     * @alias module:model/KMIPEnvironmentCreateResponse
     */
    constructor() { 
        
        KMIPEnvironmentCreateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KMIPEnvironmentCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KMIPEnvironmentCreateResponse} obj Optional instance to populate.
     * @return {module:model/KMIPEnvironmentCreateResponse} The populated <code>KMIPEnvironmentCreateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KMIPEnvironmentCreateResponse();

            if (data.hasOwnProperty('ca_cert')) {
                obj['ca_cert'] = ApiClient.convertToType(data['ca_cert'], ['Number']);
            }
            if (data.hasOwnProperty('root')) {
                obj['root'] = ApiClient.convertToType(data['root'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>KMIPEnvironmentCreateResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>KMIPEnvironmentCreateResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['ca_cert'])) {
            throw new Error("Expected the field `ca_cert` to be an array in the JSON data but got " + data['ca_cert']);
        }
        // ensure the json data is a string
        if (data['root'] && !(typeof data['root'] === 'string' || data['root'] instanceof String)) {
            throw new Error("Expected the field `root` to be a primitive type in the JSON string but got " + data['root']);
        }

        return true;
    }


}



/**
 * @member {Array.<Number>} ca_cert
 */
KMIPEnvironmentCreateResponse.prototype['ca_cert'] = undefined;

/**
 * @member {String} root
 */
KMIPEnvironmentCreateResponse.prototype['root'] = undefined;






export default KMIPEnvironmentCreateResponse;

