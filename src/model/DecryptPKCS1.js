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
 * The DecryptPKCS1 model module.
 * @module model/DecryptPKCS1
 * @version 4.2.5
 */
class DecryptPKCS1 {
    /**
     * Constructs a new <code>DecryptPKCS1</code>.
     * @alias module:model/DecryptPKCS1
     * @param ciphertext {String} Ciphertext to be decrypted in base64 encoded format
     * @param keyName {String} The name of the key to use in the decryption process
     */
    constructor(ciphertext, keyName) { 
        
        DecryptPKCS1.initialize(this, ciphertext, keyName);
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
     * Constructs a <code>DecryptPKCS1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecryptPKCS1} obj Optional instance to populate.
     * @return {module:model/DecryptPKCS1} The populated <code>DecryptPKCS1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecryptPKCS1();

            if (data.hasOwnProperty('ciphertext')) {
                obj['ciphertext'] = ApiClient.convertToType(data['ciphertext'], 'String');
            }
            if (data.hasOwnProperty('display-id')) {
                obj['display-id'] = ApiClient.convertToType(data['display-id'], 'String');
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


}

/**
 * Ciphertext to be decrypted in base64 encoded format
 * @member {String} ciphertext
 */
DecryptPKCS1.prototype['ciphertext'] = undefined;

/**
 * The display id of the key to use in the decryption process
 * @member {String} display-id
 */
DecryptPKCS1.prototype['display-id'] = undefined;

/**
 * The item id of the key to use in the decryption process
 * @member {Number} item-id
 */
DecryptPKCS1.prototype['item-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DecryptPKCS1.prototype['json'] = false;

/**
 * The name of the key to use in the decryption process
 * @member {String} key-name
 */
DecryptPKCS1.prototype['key-name'] = undefined;

/**
 * If specified, the output will be formatted accordingly. options: [base64]
 * @member {String} output-format
 */
DecryptPKCS1.prototype['output-format'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DecryptPKCS1.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DecryptPKCS1.prototype['uid-token'] = undefined;

/**
 * key version (relevant only for classic key)
 * @member {Number} version
 */
DecryptPKCS1.prototype['version'] = undefined;






export default DecryptPKCS1;

