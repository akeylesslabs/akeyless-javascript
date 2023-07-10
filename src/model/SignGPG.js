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
 * The SignGPG model module.
 * @module model/SignGPG
 * @version 3.3.15
 */
class SignGPG {
    /**
     * Constructs a new <code>SignGPG</code>.
     * @alias module:model/SignGPG
     * @param keyName {String} The name of the key to use in the encryption process
     * @param message {String} The message to be signed in base64 format
     */
    constructor(keyName, message) { 
        
        SignGPG.initialize(this, keyName, message);
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
     * Constructs a <code>SignGPG</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignGPG} obj Optional instance to populate.
     * @return {module:model/SignGPG} The populated <code>SignGPG</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignGPG();

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
            if (data.hasOwnProperty('passphrase')) {
                obj['passphrase'] = ApiClient.convertToType(data['passphrase'], 'String');
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
SignGPG.prototype['display-id'] = undefined;

/**
 * The item id of the key to use in the encryption process
 * @member {Number} item-id
 */
SignGPG.prototype['item-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
SignGPG.prototype['json'] = false;

/**
 * The name of the key to use in the encryption process
 * @member {String} key-name
 */
SignGPG.prototype['key-name'] = undefined;

/**
 * The message to be signed in base64 format
 * @member {String} message
 */
SignGPG.prototype['message'] = undefined;

/**
 * Passphrase that was used to generate the key
 * @member {String} passphrase
 */
SignGPG.prototype['passphrase'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
SignGPG.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
SignGPG.prototype['uid-token'] = undefined;






export default SignGPG;

