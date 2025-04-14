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
 * The RegexpTokenizerInfo model module.
 * @module model/RegexpTokenizerInfo
 * @version 5.0.3
 */
class RegexpTokenizerInfo {
    /**
     * Constructs a new <code>RegexpTokenizerInfo</code>.
     * RegexpTokenizerInfo represents a general Regexp tokenization template
     * @alias module:model/RegexpTokenizerInfo
     */
    constructor() { 
        
        RegexpTokenizerInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RegexpTokenizerInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegexpTokenizerInfo} obj Optional instance to populate.
     * @return {module:model/RegexpTokenizerInfo} The populated <code>RegexpTokenizerInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegexpTokenizerInfo();

            if (data.hasOwnProperty('alphabet')) {
                obj['alphabet'] = ApiClient.convertToType(data['alphabet'], 'String');
            }
            if (data.hasOwnProperty('decoding_template')) {
                obj['decoding_template'] = ApiClient.convertToType(data['decoding_template'], 'String');
            }
            if (data.hasOwnProperty('encoding_template')) {
                obj['encoding_template'] = ApiClient.convertToType(data['encoding_template'], 'String');
            }
            if (data.hasOwnProperty('pattern')) {
                obj['pattern'] = ApiClient.convertToType(data['pattern'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RegexpTokenizerInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RegexpTokenizerInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['alphabet'] && !(typeof data['alphabet'] === 'string' || data['alphabet'] instanceof String)) {
            throw new Error("Expected the field `alphabet` to be a primitive type in the JSON string but got " + data['alphabet']);
        }
        // ensure the json data is a string
        if (data['decoding_template'] && !(typeof data['decoding_template'] === 'string' || data['decoding_template'] instanceof String)) {
            throw new Error("Expected the field `decoding_template` to be a primitive type in the JSON string but got " + data['decoding_template']);
        }
        // ensure the json data is a string
        if (data['encoding_template'] && !(typeof data['encoding_template'] === 'string' || data['encoding_template'] instanceof String)) {
            throw new Error("Expected the field `encoding_template` to be a primitive type in the JSON string but got " + data['encoding_template']);
        }
        // ensure the json data is a string
        if (data['pattern'] && !(typeof data['pattern'] === 'string' || data['pattern'] instanceof String)) {
            throw new Error("Expected the field `pattern` to be a primitive type in the JSON string but got " + data['pattern']);
        }

        return true;
    }


}



/**
 * The Alphabet used for the tokenization
 * @member {String} alphabet
 */
RegexpTokenizerInfo.prototype['alphabet'] = undefined;

/**
 * Transformation to perform on the decrypted data
 * @member {String} decoding_template
 */
RegexpTokenizerInfo.prototype['decoding_template'] = undefined;

/**
 * Transformation to perform on the encrypted data, if the required output template doesn't match the input string The output Should still be valid for the Pattern, otherwise the secret would be able to be decrypted.
 * @member {String} encoding_template
 */
RegexpTokenizerInfo.prototype['encoding_template'] = undefined;

/**
 * Regexp pattern to extract and deposit the text/encdata
 * @member {String} pattern
 */
RegexpTokenizerInfo.prototype['pattern'] = undefined;






export default RegexpTokenizerInfo;

