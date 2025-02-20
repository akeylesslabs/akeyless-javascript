/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The VerifyGPG model module.
 * @module model/VerifyGPG
 * @version 5.0.0
 */
class VerifyGPG {
    /**
     * Constructs a new <code>VerifyGPG</code>.
     * @alias module:model/VerifyGPG
     * @param keyName {String} The name of the key to use in the encryption process
     * @param signature {String} The signature to be verified in base64 format
     */
    constructor(keyName, signature) { 
        
        VerifyGPG.initialize(this, keyName, signature);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, keyName, signature) { 
        obj['json'] = false;
        obj['key-name'] = keyName;
        obj['signature'] = signature;
    }

    /**
     * Constructs a <code>VerifyGPG</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerifyGPG} obj Optional instance to populate.
     * @return {module:model/VerifyGPG} The populated <code>VerifyGPG</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VerifyGPG();

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
            if (data.hasOwnProperty('passphrase')) {
                obj['passphrase'] = ApiClient.convertToType(data['passphrase'], 'String');
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VerifyGPG</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VerifyGPG</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VerifyGPG.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['display-id'] && !(typeof data['display-id'] === 'string' || data['display-id'] instanceof String)) {
            throw new Error("Expected the field `display-id` to be a primitive type in the JSON string but got " + data['display-id']);
        }
        // ensure the json data is a string
        if (data['key-name'] && !(typeof data['key-name'] === 'string' || data['key-name'] instanceof String)) {
            throw new Error("Expected the field `key-name` to be a primitive type in the JSON string but got " + data['key-name']);
        }
        // ensure the json data is a string
        if (data['passphrase'] && !(typeof data['passphrase'] === 'string' || data['passphrase'] instanceof String)) {
            throw new Error("Expected the field `passphrase` to be a primitive type in the JSON string but got " + data['passphrase']);
        }
        // ensure the json data is a string
        if (data['signature'] && !(typeof data['signature'] === 'string' || data['signature'] instanceof String)) {
            throw new Error("Expected the field `signature` to be a primitive type in the JSON string but got " + data['signature']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

VerifyGPG.RequiredProperties = ["key-name", "signature"];

/**
 * The display id of the key to use in the encryption process
 * @member {String} display-id
 */
VerifyGPG.prototype['display-id'] = undefined;

/**
 * The item id of the key to use in the encryption process
 * @member {Number} item-id
 */
VerifyGPG.prototype['item-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
VerifyGPG.prototype['json'] = false;

/**
 * The name of the key to use in the encryption process
 * @member {String} key-name
 */
VerifyGPG.prototype['key-name'] = undefined;

/**
 * Passphrase that was used to generate the key
 * @member {String} passphrase
 */
VerifyGPG.prototype['passphrase'] = undefined;

/**
 * The signature to be verified in base64 format
 * @member {String} signature
 */
VerifyGPG.prototype['signature'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
VerifyGPG.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
VerifyGPG.prototype['uid-token'] = undefined;






export default VerifyGPG;

