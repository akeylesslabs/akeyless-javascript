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
 * The VerifyRsaSsaPss model module.
 * @module model/VerifyRsaSsaPss
 * @version 4.2.1
 */
class VerifyRsaSsaPss {
    /**
     * Constructs a new <code>VerifyRsaSsaPss</code>.
     * verifyRsaSsaPss is a command that Verifies an rsassa-pss signature
     * @alias module:model/VerifyRsaSsaPss
     * @param message {String} The input message to verify in a base64 format
     * @param signature {String} The message's signature
     */
    constructor(message, signature) { 
        
        VerifyRsaSsaPss.initialize(this, message, signature);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message, signature) { 
        obj['message'] = message;
        obj['signature'] = signature;
    }

    /**
     * Constructs a <code>VerifyRsaSsaPss</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerifyRsaSsaPss} obj Optional instance to populate.
     * @return {module:model/VerifyRsaSsaPss} The populated <code>VerifyRsaSsaPss</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VerifyRsaSsaPss();

            if (data.hasOwnProperty('display-id')) {
                obj['display-id'] = ApiClient.convertToType(data['display-id'], 'String');
            }
            if (data.hasOwnProperty('hash-function')) {
                obj['hash-function'] = ApiClient.convertToType(data['hash-function'], 'String');
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
            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
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
 * The display id of the RSA key to use in the verification process
 * @member {String} display-id
 */
VerifyRsaSsaPss.prototype['display-id'] = undefined;

/**
 * HashFunction defines the hash function (e.g. sha-256)
 * @member {String} hash-function
 */
VerifyRsaSsaPss.prototype['hash-function'] = undefined;

/**
 * The item id of the RSA key to use in the verification process
 * @member {Number} item-id
 */
VerifyRsaSsaPss.prototype['item-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
VerifyRsaSsaPss.prototype['json'] = false;

/**
 * The name of the RSA key to use in the verification process
 * @member {String} key-name
 */
VerifyRsaSsaPss.prototype['key-name'] = undefined;

/**
 * The input message to verify in a base64 format
 * @member {String} message
 */
VerifyRsaSsaPss.prototype['message'] = undefined;

/**
 * Markes that the message is already hashed
 * @member {Boolean} prehashed
 */
VerifyRsaSsaPss.prototype['prehashed'] = undefined;

/**
 * The message's signature
 * @member {String} signature
 */
VerifyRsaSsaPss.prototype['signature'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
VerifyRsaSsaPss.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
VerifyRsaSsaPss.prototype['uid-token'] = undefined;

/**
 * The version of the key to use for verification
 * @member {Number} version
 */
VerifyRsaSsaPss.prototype['version'] = undefined;






export default VerifyRsaSsaPss;

