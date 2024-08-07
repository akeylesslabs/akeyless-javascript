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
 * @version 4.2.2
 */
class SignPKCS1 {
    /**
     * Constructs a new <code>SignPKCS1</code>.
     * signPKCS1 is a command that calculates the signature of hashed data using RSASSA-PKCS1-V1_5-SIGN from RSA PKCS#1 v1.5.
     * @alias module:model/SignPKCS1
     * @param message {String} The message to be signed
     */
    constructor(message) { 
        
        SignPKCS1.initialize(this, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message) { 
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

            if (data.hasOwnProperty('display-id')) {
                obj['display-id'] = ApiClient.convertToType(data['display-id'], 'String');
            }
            if (data.hasOwnProperty('hash-function')) {
                obj['hash-function'] = ApiClient.convertToType(data['hash-function'], 'String');
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
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('prehashed')) {
                obj['prehashed'] = ApiClient.convertToType(data['prehashed'], 'Boolean');
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
 * The display id of the key to use in the signing process
 * @member {String} display-id
 */
SignPKCS1.prototype['display-id'] = undefined;

/**
 * HashFunction defines the hash function (e.g. sha-256)
 * @member {String} hash-function
 */
SignPKCS1.prototype['hash-function'] = undefined;

/**
 * Select default assumed format for the plaintext message. Currently supported options: [base64]
 * @member {String} input-format
 */
SignPKCS1.prototype['input-format'] = undefined;

/**
 * The item id of the key to use in the signing process
 * @member {Number} item-id
 */
SignPKCS1.prototype['item-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
SignPKCS1.prototype['json'] = false;

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
 * Markes that the message is already hashed
 * @member {Boolean} prehashed
 */
SignPKCS1.prototype['prehashed'] = undefined;

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
 * The version of the key to use for signing
 * @member {Number} version
 */
SignPKCS1.prototype['version'] = undefined;






export default SignPKCS1;

