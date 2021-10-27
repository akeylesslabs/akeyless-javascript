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
 * The SignPKCS1 model module.
 * @module model/SignPKCS1
 * @version 2.5.11
 */
class SignPKCS1 {
    /**
     * Constructs a new <code>SignPKCS1</code>.
     * signPKCS1 is a command that calculates the signature of hashed data using RSASSA-PKCS1-V1_5-SIGN from RSA PKCS#1 v1.5.
     * @alias module:model/SignPKCS1
     * @param keyName {String} The name of the RSA key to use in the signing process
     * @param message {String} The message to be signed
     */
    constructor(keyName, message) { 
        
        SignPKCS1.initialize(this, keyName, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, keyName, message) { 
        obj['key-name'] = keyName;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>SignPKCS1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignPKCS1} obj Optional instance to populate.
     * @return {module:model/SignPKCS1} The populated <code>SignPKCS1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignPKCS1();

            if (data.hasOwnProperty('key-name')) {
                obj['key-name'] = ApiClient.convertToType(data['key-name'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
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
 * The name of the RSA key to use in the signing process
 * @member {String} key-name
 */
SignPKCS1.prototype['key-name'] = undefined;

/**
 * The message to be signed
 * @member {String} message
 */
SignPKCS1.prototype['message'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
SignPKCS1.prototype['password'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
SignPKCS1.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
SignPKCS1.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
SignPKCS1.prototype['username'] = undefined;






export default SignPKCS1;

