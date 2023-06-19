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
 * The Tokenize model module.
 * @module model/Tokenize
 * @version 3.3.9
 */
class Tokenize {
    /**
     * Constructs a new <code>Tokenize</code>.
     * tokenize is a command that encrypts text with a tokenizer
     * @alias module:model/Tokenize
     * @param plaintext {String} Data to be encrypted
     * @param tokenizerName {String} The name of the tokenizer to use in the encryption process
     */
    constructor(plaintext, tokenizerName) { 
        
        Tokenize.initialize(this, plaintext, tokenizerName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, plaintext, tokenizerName) { 
        obj['plaintext'] = plaintext;
        obj['tokenizer-name'] = tokenizerName;
    }

    /**
     * Constructs a <code>Tokenize</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tokenize} obj Optional instance to populate.
     * @return {module:model/Tokenize} The populated <code>Tokenize</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Tokenize();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('plaintext')) {
                obj['plaintext'] = ApiClient.convertToType(data['plaintext'], 'String');
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


}

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
Tokenize.prototype['json'] = false;

/**
 * Data to be encrypted
 * @member {String} plaintext
 */
Tokenize.prototype['plaintext'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
Tokenize.prototype['token'] = undefined;

/**
 * The name of the tokenizer to use in the encryption process
 * @member {String} tokenizer-name
 */
Tokenize.prototype['tokenizer-name'] = undefined;

/**
 * Base64 encoded tweak for vaultless encryption
 * @member {String} tweak
 */
Tokenize.prototype['tweak'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
Tokenize.prototype['uid-token'] = undefined;






export default Tokenize;

