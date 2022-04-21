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
 * @version 2.16.1
 */
class Encrypt {
    /**
     * Constructs a new <code>Encrypt</code>.
     * @alias module:model/Encrypt
     */
    constructor() { 
        
        Encrypt.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
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
Encrypt.prototype['display-id'] = undefined;

/**
 * name-value pair that specifies the encryption context to be used for authenticated encryption. If used here, the same value must be supplied to the decrypt command or decryption will fail
 * @member {Object.<String, String>} encryption-context
 */
Encrypt.prototype['encryption-context'] = undefined;

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






export default Encrypt;

