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
 * The EncryptPKCS1 model module.
 * @module model/EncryptPKCS1
 * @version 2.16.7
 */
class EncryptPKCS1 {
    /**
     * Constructs a new <code>EncryptPKCS1</code>.
     * @alias module:model/EncryptPKCS1
     * @param keyName {String} The name of the RSA key to use in the encryption process
     * @param plaintext {String} Data to be encrypted
     */
    constructor(keyName, plaintext) { 
        
        EncryptPKCS1.initialize(this, keyName, plaintext);
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
     * Constructs a <code>EncryptPKCS1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EncryptPKCS1} obj Optional instance to populate.
     * @return {module:model/EncryptPKCS1} The populated <code>EncryptPKCS1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptPKCS1();

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
 * The name of the RSA key to use in the encryption process
 * @member {String} key-name
 */
EncryptPKCS1.prototype['key-name'] = undefined;

/**
 * Data to be encrypted
 * @member {String} plaintext
 */
EncryptPKCS1.prototype['plaintext'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
EncryptPKCS1.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
EncryptPKCS1.prototype['uid-token'] = undefined;






export default EncryptPKCS1;

