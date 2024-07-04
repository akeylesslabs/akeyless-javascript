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
 * The EncryptGPG model module.
 * @module model/EncryptGPG
 * @version 4.2.0
 */
class EncryptGPG {
    /**
     * Constructs a new <code>EncryptGPG</code>.
     * @alias module:model/EncryptGPG
     * @param keyName {String} The name of the key to use in the encryption process
     * @param plaintext {String} Data to be encrypted
     */
    constructor(keyName, plaintext) { 
        
        EncryptGPG.initialize(this, keyName, plaintext);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, keyName, plaintext) { 
        obj['key-name'] = keyName;
        obj['plaintext'] = plaintext;
    }

    /**
     * Constructs a <code>EncryptGPG</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EncryptGPG} obj Optional instance to populate.
     * @return {module:model/EncryptGPG} The populated <code>EncryptGPG</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptGPG();

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
            if (data.hasOwnProperty('plaintext')) {
                obj['plaintext'] = ApiClient.convertToType(data['plaintext'], 'String');
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
 * The display id of the key to use in the encryption process
 * @member {String} display-id
 */
EncryptGPG.prototype['display-id'] = undefined;

/**
 * If specified, the plaintext input is assumed to be formatted accordingly. Current supported options: [base64]
 * @member {String} input-format
 */
EncryptGPG.prototype['input-format'] = undefined;

/**
 * The item id of the key to use in the encryption process
 * @member {Number} item-id
 */
EncryptGPG.prototype['item-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
EncryptGPG.prototype['json'] = false;

/**
 * The name of the key to use in the encryption process
 * @member {String} key-name
 */
EncryptGPG.prototype['key-name'] = undefined;

/**
 * Data to be encrypted
 * @member {String} plaintext
 */
EncryptGPG.prototype['plaintext'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
EncryptGPG.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
EncryptGPG.prototype['uid-token'] = undefined;






export default EncryptGPG;

