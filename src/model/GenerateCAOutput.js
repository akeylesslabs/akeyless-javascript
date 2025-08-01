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
 * The GenerateCAOutput model module.
 * @module model/GenerateCAOutput
 * @version 5.0.6
 */
class GenerateCAOutput {
    /**
     * Constructs a new <code>GenerateCAOutput</code>.
     * @alias module:model/GenerateCAOutput
     */
    constructor() { 
        
        GenerateCAOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GenerateCAOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateCAOutput} obj Optional instance to populate.
     * @return {module:model/GenerateCAOutput} The populated <code>GenerateCAOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenerateCAOutput();

            if (data.hasOwnProperty('intermediate_certificate_name')) {
                obj['intermediate_certificate_name'] = ApiClient.convertToType(data['intermediate_certificate_name'], 'String');
            }
            if (data.hasOwnProperty('intermediate_issuer_name')) {
                obj['intermediate_issuer_name'] = ApiClient.convertToType(data['intermediate_issuer_name'], 'String');
            }
            if (data.hasOwnProperty('intermediate_key_name')) {
                obj['intermediate_key_name'] = ApiClient.convertToType(data['intermediate_key_name'], 'String');
            }
            if (data.hasOwnProperty('root_certificate_name')) {
                obj['root_certificate_name'] = ApiClient.convertToType(data['root_certificate_name'], 'String');
            }
            if (data.hasOwnProperty('root_issuer_name')) {
                obj['root_issuer_name'] = ApiClient.convertToType(data['root_issuer_name'], 'String');
            }
            if (data.hasOwnProperty('root_key_name')) {
                obj['root_key_name'] = ApiClient.convertToType(data['root_key_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GenerateCAOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GenerateCAOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['intermediate_certificate_name'] && !(typeof data['intermediate_certificate_name'] === 'string' || data['intermediate_certificate_name'] instanceof String)) {
            throw new Error("Expected the field `intermediate_certificate_name` to be a primitive type in the JSON string but got " + data['intermediate_certificate_name']);
        }
        // ensure the json data is a string
        if (data['intermediate_issuer_name'] && !(typeof data['intermediate_issuer_name'] === 'string' || data['intermediate_issuer_name'] instanceof String)) {
            throw new Error("Expected the field `intermediate_issuer_name` to be a primitive type in the JSON string but got " + data['intermediate_issuer_name']);
        }
        // ensure the json data is a string
        if (data['intermediate_key_name'] && !(typeof data['intermediate_key_name'] === 'string' || data['intermediate_key_name'] instanceof String)) {
            throw new Error("Expected the field `intermediate_key_name` to be a primitive type in the JSON string but got " + data['intermediate_key_name']);
        }
        // ensure the json data is a string
        if (data['root_certificate_name'] && !(typeof data['root_certificate_name'] === 'string' || data['root_certificate_name'] instanceof String)) {
            throw new Error("Expected the field `root_certificate_name` to be a primitive type in the JSON string but got " + data['root_certificate_name']);
        }
        // ensure the json data is a string
        if (data['root_issuer_name'] && !(typeof data['root_issuer_name'] === 'string' || data['root_issuer_name'] instanceof String)) {
            throw new Error("Expected the field `root_issuer_name` to be a primitive type in the JSON string but got " + data['root_issuer_name']);
        }
        // ensure the json data is a string
        if (data['root_key_name'] && !(typeof data['root_key_name'] === 'string' || data['root_key_name'] instanceof String)) {
            throw new Error("Expected the field `root_key_name` to be a primitive type in the JSON string but got " + data['root_key_name']);
        }

        return true;
    }


}



/**
 * @member {String} intermediate_certificate_name
 */
GenerateCAOutput.prototype['intermediate_certificate_name'] = undefined;

/**
 * @member {String} intermediate_issuer_name
 */
GenerateCAOutput.prototype['intermediate_issuer_name'] = undefined;

/**
 * @member {String} intermediate_key_name
 */
GenerateCAOutput.prototype['intermediate_key_name'] = undefined;

/**
 * @member {String} root_certificate_name
 */
GenerateCAOutput.prototype['root_certificate_name'] = undefined;

/**
 * @member {String} root_issuer_name
 */
GenerateCAOutput.prototype['root_issuer_name'] = undefined;

/**
 * @member {String} root_key_name
 */
GenerateCAOutput.prototype['root_key_name'] = undefined;






export default GenerateCAOutput;

