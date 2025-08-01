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
 * The DecryptWithClassicKey model module.
 * @module model/DecryptWithClassicKey
 * @version 5.0.6
 */
class DecryptWithClassicKey {
    /**
     * Constructs a new <code>DecryptWithClassicKey</code>.
     * @alias module:model/DecryptWithClassicKey
     * @param ciphertext {String} Ciphertext to be decrypted in base64 encoded format
     * @param displayId {String} The name of the key to use in the encryption process
     * @param version {Number} classic key version
     */
    constructor(ciphertext, displayId, version) { 
        
        DecryptWithClassicKey.initialize(this, ciphertext, displayId, version);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ciphertext, displayId, version) { 
        obj['ciphertext'] = ciphertext;
        obj['display-id'] = displayId;
        obj['json'] = false;
        obj['version'] = version;
    }

    /**
     * Constructs a <code>DecryptWithClassicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecryptWithClassicKey} obj Optional instance to populate.
     * @return {module:model/DecryptWithClassicKey} The populated <code>DecryptWithClassicKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecryptWithClassicKey();

            if (data.hasOwnProperty('ciphertext')) {
                obj['ciphertext'] = ApiClient.convertToType(data['ciphertext'], 'String');
            }
            if (data.hasOwnProperty('display-id')) {
                obj['display-id'] = ApiClient.convertToType(data['display-id'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
     * Validates the JSON data with respect to <code>DecryptWithClassicKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DecryptWithClassicKey</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DecryptWithClassicKey.RequiredProperties) {
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

DecryptWithClassicKey.RequiredProperties = ["ciphertext", "display-id", "version"];

/**
 * Ciphertext to be decrypted in base64 encoded format
 * @member {String} ciphertext
 */
DecryptWithClassicKey.prototype['ciphertext'] = undefined;

/**
 * The name of the key to use in the encryption process
 * @member {String} display-id
 */
DecryptWithClassicKey.prototype['display-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DecryptWithClassicKey.prototype['json'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DecryptWithClassicKey.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DecryptWithClassicKey.prototype['uid-token'] = undefined;

/**
 * classic key version
 * @member {Number} version
 */
DecryptWithClassicKey.prototype['version'] = undefined;






export default DecryptWithClassicKey;

