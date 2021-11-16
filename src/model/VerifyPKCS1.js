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
 * The VerifyPKCS1 model module.
 * @module model/VerifyPKCS1
 * @version 2.5.14
 */
class VerifyPKCS1 {
    /**
     * Constructs a new <code>VerifyPKCS1</code>.
     * @alias module:model/VerifyPKCS1
     * @param keyName {String} The name of the RSA key to use in the verification process
     * @param message {String} The message to be verified
     * @param signature {String} The message's signature
     */
    constructor(keyName, message, signature) { 
        
        VerifyPKCS1.initialize(this, keyName, message, signature);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, keyName, message, signature) { 
        obj['key-name'] = keyName;
        obj['message'] = message;
        obj['signature'] = signature;
    }

    /**
     * Constructs a <code>VerifyPKCS1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerifyPKCS1} obj Optional instance to populate.
     * @return {module:model/VerifyPKCS1} The populated <code>VerifyPKCS1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VerifyPKCS1();

            if (data.hasOwnProperty('key-name')) {
                obj['key-name'] = ApiClient.convertToType(data['key-name'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
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
 * The name of the RSA key to use in the verification process
 * @member {String} key-name
 */
VerifyPKCS1.prototype['key-name'] = undefined;

/**
 * The message to be verified
 * @member {String} message
 */
VerifyPKCS1.prototype['message'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
VerifyPKCS1.prototype['password'] = undefined;

/**
 * The message's signature
 * @member {String} signature
 */
VerifyPKCS1.prototype['signature'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
VerifyPKCS1.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
VerifyPKCS1.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
VerifyPKCS1.prototype['username'] = undefined;






export default VerifyPKCS1;

