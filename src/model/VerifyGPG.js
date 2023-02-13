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
 * The VerifyGPG model module.
 * @module model/VerifyGPG
 * @version 3.2.4
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


}

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

