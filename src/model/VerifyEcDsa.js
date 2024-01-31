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
 * The VerifyEcDsa model module.
 * @module model/VerifyEcDsa
 * @version 3.6.1
 */
class VerifyEcDsa {
    /**
     * Constructs a new <code>VerifyEcDsa</code>.
     * verifyEcDsa is a command that verifies an ECDSA signature using a sha hash algorithm matching the key size
     * @alias module:model/VerifyEcDsa
     * @param message {String} The message to be verified in a base64 format
     * @param signature {String} The message's signature
     */
    constructor(message, signature) { 
        
        VerifyEcDsa.initialize(this, message, signature);
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
     * Constructs a <code>VerifyEcDsa</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerifyEcDsa} obj Optional instance to populate.
     * @return {module:model/VerifyEcDsa} The populated <code>VerifyEcDsa</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VerifyEcDsa();

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
 * The display id of the EC key to use for the verification process
 * @member {String} display-id
 */
VerifyEcDsa.prototype['display-id'] = undefined;

/**
 * The item id of the EC key to use for the verification process
 * @member {Number} item-id
 */
VerifyEcDsa.prototype['item-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
VerifyEcDsa.prototype['json'] = false;

/**
 * The name of the EC key to use for the verification process
 * @member {String} key-name
 */
VerifyEcDsa.prototype['key-name'] = undefined;

/**
 * The message to be verified in a base64 format
 * @member {String} message
 */
VerifyEcDsa.prototype['message'] = undefined;

/**
 * Markes that the message is already hashed
 * @member {Boolean} prehashed
 */
VerifyEcDsa.prototype['prehashed'] = undefined;

/**
 * The message's signature
 * @member {String} signature
 */
VerifyEcDsa.prototype['signature'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
VerifyEcDsa.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
VerifyEcDsa.prototype['uid-token'] = undefined;

/**
 * The version of the key to use for verification
 * @member {Number} version
 */
VerifyEcDsa.prototype['version'] = undefined;






export default VerifyEcDsa;

