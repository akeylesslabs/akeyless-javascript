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
 * The Hmac model module.
 * @module model/Hmac
 * @version 4.0.0
 */
class Hmac {
    /**
     * Constructs a new <code>Hmac</code>.
     * @alias module:model/Hmac
     * @param keyName {String} The name of the key to use in the encryption process
     */
    constructor(keyName) { 
        
        Hmac.initialize(this, keyName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, keyName) { 
        obj['key-name'] = keyName;
    }

    /**
     * Constructs a <code>Hmac</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Hmac} obj Optional instance to populate.
     * @return {module:model/Hmac} The populated <code>Hmac</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Hmac();

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
 * The display id of the key to use in the encryption process
 * @member {String} display-id
 */
Hmac.prototype['display-id'] = undefined;

/**
 * Hash function [sha-256,sha-512]
 * @member {String} hash-function
 * @default 'sha-256'
 */
Hmac.prototype['hash-function'] = 'sha-256';

/**
 * Select default assumed format for any plaintext input. Currently supported options: [base64]
 * @member {String} input-format
 */
Hmac.prototype['input-format'] = undefined;

/**
 * The item id of the key to use in the encryption process
 * @member {Number} item-id
 */
Hmac.prototype['item-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
Hmac.prototype['json'] = false;

/**
 * The name of the key to use in the encryption process
 * @member {String} key-name
 */
Hmac.prototype['key-name'] = undefined;

/**
 * Data to perform hmac on
 * @member {String} plaintext
 */
Hmac.prototype['plaintext'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
Hmac.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
Hmac.prototype['uid-token'] = undefined;






export default Hmac;

