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
 * The DecryptGPG model module.
 * @module model/DecryptGPG
 * @version 4.3.0
 */
class DecryptGPG {
    /**
     * Constructs a new <code>DecryptGPG</code>.
     * @alias module:model/DecryptGPG
     * @param ciphertext {String} Ciphertext to be decrypted
     * @param keyName {String} The name of the key to use in the decryption process
     */
    constructor(ciphertext, keyName) { 
        
        DecryptGPG.initialize(this, ciphertext, keyName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ciphertext, keyName) { 
        obj['ciphertext'] = ciphertext;
        obj['key-name'] = keyName;
    }

    /**
     * Constructs a <code>DecryptGPG</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecryptGPG} obj Optional instance to populate.
     * @return {module:model/DecryptGPG} The populated <code>DecryptGPG</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecryptGPG();

            if (data.hasOwnProperty('ciphertext')) {
                obj['ciphertext'] = ApiClient.convertToType(data['ciphertext'], 'String');
            }
            if (data.hasOwnProperty('display-id')) {
                obj['display-id'] = ApiClient.convertToType(data['display-id'], 'String');
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
            if (data.hasOwnProperty('output-format')) {
                obj['output-format'] = ApiClient.convertToType(data['output-format'], 'String');
            }
            if (data.hasOwnProperty('passphrase')) {
                obj['passphrase'] = ApiClient.convertToType(data['passphrase'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Ciphertext to be decrypted
 * @member {String} ciphertext
 */
DecryptGPG.prototype['ciphertext'] = undefined;

/**
 * The display id of the key to use in the decryption process
 * @member {String} display-id
 */
DecryptGPG.prototype['display-id'] = undefined;

/**
 * Select default assumed format for the ciphertext. Currently supported options: [base64,raw]
 * @member {String} input-format
 * @default 'base64'
 */
DecryptGPG.prototype['input-format'] = 'base64';

/**
 * The item id of the key to use in the decryption process
 * @member {Number} item-id
 */
DecryptGPG.prototype['item-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DecryptGPG.prototype['json'] = false;

/**
 * The name of the key to use in the decryption process
 * @member {String} key-name
 */
DecryptGPG.prototype['key-name'] = undefined;

/**
 * If specified, the output will be formatted accordingly. options: [base64]
 * @member {String} output-format
 */
DecryptGPG.prototype['output-format'] = undefined;

/**
 * Passphrase that was used to generate the key
 * @member {String} passphrase
 */
DecryptGPG.prototype['passphrase'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DecryptGPG.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DecryptGPG.prototype['uid-token'] = undefined;






export default DecryptGPG;

