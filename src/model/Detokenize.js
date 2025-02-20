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
 * The Detokenize model module.
 * @module model/Detokenize
 * @version 5.0.0
 */
class Detokenize {
    /**
     * Constructs a new <code>Detokenize</code>.
     * detokenize is a command that decrypts text with a tokenizer
     * @alias module:model/Detokenize
     * @param ciphertext {String} Data to be decrypted
     * @param tokenizerName {String} The name of the tokenizer to use in the decryption process
     */
    constructor(ciphertext, tokenizerName) { 
        
        Detokenize.initialize(this, ciphertext, tokenizerName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ciphertext, tokenizerName) { 
        obj['ciphertext'] = ciphertext;
        obj['json'] = false;
        obj['tokenizer-name'] = tokenizerName;
    }

    /**
     * Constructs a <code>Detokenize</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Detokenize} obj Optional instance to populate.
     * @return {module:model/Detokenize} The populated <code>Detokenize</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Detokenize();

            if (data.hasOwnProperty('ciphertext')) {
                obj['ciphertext'] = ApiClient.convertToType(data['ciphertext'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('tokenizer-name')) {
                obj['tokenizer-name'] = ApiClient.convertToType(data['tokenizer-name'], 'String');
            }
            if (data.hasOwnProperty('tweak')) {
                obj['tweak'] = ApiClient.convertToType(data['tweak'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Detokenize</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Detokenize</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Detokenize.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ciphertext'] && !(typeof data['ciphertext'] === 'string' || data['ciphertext'] instanceof String)) {
            throw new Error("Expected the field `ciphertext` to be a primitive type in the JSON string but got " + data['ciphertext']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['tokenizer-name'] && !(typeof data['tokenizer-name'] === 'string' || data['tokenizer-name'] instanceof String)) {
            throw new Error("Expected the field `tokenizer-name` to be a primitive type in the JSON string but got " + data['tokenizer-name']);
        }
        // ensure the json data is a string
        if (data['tweak'] && !(typeof data['tweak'] === 'string' || data['tweak'] instanceof String)) {
            throw new Error("Expected the field `tweak` to be a primitive type in the JSON string but got " + data['tweak']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

Detokenize.RequiredProperties = ["ciphertext", "tokenizer-name"];

/**
 * Data to be decrypted
 * @member {String} ciphertext
 */
Detokenize.prototype['ciphertext'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
Detokenize.prototype['json'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
Detokenize.prototype['token'] = undefined;

/**
 * The name of the tokenizer to use in the decryption process
 * @member {String} tokenizer-name
 */
Detokenize.prototype['tokenizer-name'] = undefined;

/**
 * Base64 encoded tweak for vaultless encryption
 * @member {String} tweak
 */
Detokenize.prototype['tweak'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
Detokenize.prototype['uid-token'] = undefined;






export default Detokenize;

