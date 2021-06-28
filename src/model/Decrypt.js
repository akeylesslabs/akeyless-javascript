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
 * @version 2.4.5
 */
class Decrypt {
    /**
     * Constructs a new <code>Decrypt</code>.
     * decrypt is a command that decrypts ciphertext into plaintext by using an AES key.
     * @alias module:model/Decrypt
     * @param ciphertext {String} Ciphertext to be decrypted in base64 encoded format
     * @param keyName {String} The name of the key to use in the decryption process
     */
    constructor(ciphertext, keyName) { 
        
        Decrypt.initialize(this, ciphertext, keyName);
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
            if (data.hasOwnProperty('encryption-context')) {
                obj['encryption-context'] = ApiClient.convertToType(data['encryption-context'], {'String': 'String'});
            }
            if (data.hasOwnProperty('key-name')) {
                obj['key-name'] = ApiClient.convertToType(data['key-name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Ciphertext to be decrypted in base64 encoded format
 * @member {String} ciphertext
 */
Decrypt.prototype['ciphertext'] = undefined;

/**
 * The encryption context. If this was specified in the encrypt command, it must be specified here or the decryption operation will fail
 * @member {Object.<String, String>} encryption-context
 */
Decrypt.prototype['encryption-context'] = undefined;

/**
 * The name of the key to use in the decryption process
 * @member {String} key-name
 */
Decrypt.prototype['key-name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
Decrypt.prototype['password'] = undefined;

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
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
Decrypt.prototype['username'] = undefined;






export default Decrypt;

