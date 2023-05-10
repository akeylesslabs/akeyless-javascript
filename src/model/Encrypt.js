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
 * The Encrypt model module.
 * @module model/Encrypt
 * @version 3.3.3
 */
class Encrypt {
    /**
     * Constructs a new <code>Encrypt</code>.
     * @alias module:model/Encrypt
     * @param keyName {String} The name of the key to use in the encryption process
     */
    constructor(keyName) { 
        
        Encrypt.initialize(this, keyName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, keyName) { 
        obj['key-name'] = keyName;
    }

    /**
     * Constructs a <code>Encrypt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Encrypt} obj Optional instance to populate.
     * @return {module:model/Encrypt} The populated <code>Encrypt</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Encrypt();

            if (data.hasOwnProperty('display-id')) {
                obj['display-id'] = ApiClient.convertToType(data['display-id'], 'String');
            }
            if (data.hasOwnProperty('encryption-context')) {
                obj['encryption-context'] = ApiClient.convertToType(data['encryption-context'], {'String': 'String'});
            }
            if (data.hasOwnProperty('input-format')) {
                obj['input-format'] = ApiClient.convertToType(data['input-format'], 'String');
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
            if (data.hasOwnProperty('plaintext')) {
                obj['plaintext'] = ApiClient.convertToType(data['plaintext'], 'String');
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


}

/**
 * The display id of the key to use in the encryption process
 * @member {String} display-id
 */
Encrypt.prototype['display-id'] = undefined;

/**
 * name-value pair that specifies the encryption context to be used for authenticated encryption. If used here, the same value must be supplied to the decrypt command or decryption will fail
 * @member {Object.<String, String>} encryption-context
 */
Encrypt.prototype['encryption-context'] = undefined;

/**
 * Select default assumed format for any plaintext input. Currently supported options: [base64]
 * @member {String} input-format
 */
Encrypt.prototype['input-format'] = undefined;

/**
 * The item id of the key to use in the encryption process
 * @member {Number} item-id
 */
Encrypt.prototype['item-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
Encrypt.prototype['json'] = false;

/**
 * The name of the key to use in the encryption process
 * @member {String} key-name
 */
Encrypt.prototype['key-name'] = undefined;

/**
 * Data to be encrypted
 * @member {String} plaintext
 */
Encrypt.prototype['plaintext'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
Encrypt.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
Encrypt.prototype['uid-token'] = undefined;

/**
 * key version (relevant only for classic key)
 * @member {Number} version
 */
Encrypt.prototype['version'] = undefined;






export default Encrypt;

