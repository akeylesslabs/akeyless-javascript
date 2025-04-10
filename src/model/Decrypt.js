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
 * The Decrypt model module.
 * @module model/Decrypt
 * @version 5.0.2
 */
class Decrypt {
    /**
     * Constructs a new <code>Decrypt</code>.
     * decrypt is a command that decrypts ciphertext into plaintext by using an AES key.
     * @alias module:model/Decrypt
     * @param keyName {String} The name of the key to use in the decryption process
     */
    constructor(keyName) { 
        
        Decrypt.initialize(this, keyName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, keyName) { 
        obj['json'] = false;
        obj['key-name'] = keyName;
    }

    /**
     * Constructs a <code>Decrypt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Decrypt} obj Optional instance to populate.
     * @return {module:model/Decrypt} The populated <code>Decrypt</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Decrypt();

            if (data.hasOwnProperty('ciphertext')) {
                obj['ciphertext'] = ApiClient.convertToType(data['ciphertext'], 'String');
            }
            if (data.hasOwnProperty('display-id')) {
                obj['display-id'] = ApiClient.convertToType(data['display-id'], 'String');
            }
            if (data.hasOwnProperty('encryption-context')) {
                obj['encryption-context'] = ApiClient.convertToType(data['encryption-context'], {'String': 'String'});
            }
            if (data.hasOwnProperty('item-id')) {
                obj['item-id'] = ApiClient.convertToType(data['item-id'], 'Number');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key-name')) {
                obj['key-name'] = ApiClient.convertToType(data['key-name'], 'String');
            }
            if (data.hasOwnProperty('output-format')) {
                obj['output-format'] = ApiClient.convertToType(data['output-format'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Decrypt</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Decrypt</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Decrypt.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ciphertext'] && !(typeof data['ciphertext'] === 'string' || data['ciphertext'] instanceof String)) {
            throw new Error("Expected the field `ciphertext` to be a primitive type in the JSON string but got " + data['ciphertext']);
        }
        // ensure the json data is a string
        if (data['display-id'] && !(typeof data['display-id'] === 'string' || data['display-id'] instanceof String)) {
            throw new Error("Expected the field `display-id` to be a primitive type in the JSON string but got " + data['display-id']);
        }
        // ensure the json data is a string
        if (data['key-name'] && !(typeof data['key-name'] === 'string' || data['key-name'] instanceof String)) {
            throw new Error("Expected the field `key-name` to be a primitive type in the JSON string but got " + data['key-name']);
        }
        // ensure the json data is a string
        if (data['output-format'] && !(typeof data['output-format'] === 'string' || data['output-format'] instanceof String)) {
            throw new Error("Expected the field `output-format` to be a primitive type in the JSON string but got " + data['output-format']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

Decrypt.RequiredProperties = ["key-name"];

/**
 * Ciphertext to be decrypted in base64 encoded format
 * @member {String} ciphertext
 */
Decrypt.prototype['ciphertext'] = undefined;

/**
 * The display id of the key to use in the decryption process
 * @member {String} display-id
 */
Decrypt.prototype['display-id'] = undefined;

/**
 * The encryption context. If this was specified in the encrypt command, it must be specified here or the decryption operation will fail
 * @member {Object.<String, String>} encryption-context
 */
Decrypt.prototype['encryption-context'] = undefined;

/**
 * The item id of the key to use in the decryption process
 * @member {Number} item-id
 */
Decrypt.prototype['item-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
Decrypt.prototype['json'] = false;

/**
 * The name of the key to use in the decryption process
 * @member {String} key-name
 */
Decrypt.prototype['key-name'] = undefined;

/**
 * If specified, the output will be formatted accordingly. options: [base64]
 * @member {String} output-format
 */
Decrypt.prototype['output-format'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
Decrypt.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
Decrypt.prototype['uid-token'] = undefined;

/**
 * key version (relevant only for classic key)
 * @member {Number} version
 */
Decrypt.prototype['version'] = undefined;






export default Decrypt;

