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
 * The EncryptWithClassicKey model module.
 * @module model/EncryptWithClassicKey
 * @version 3.6.3
 */
class EncryptWithClassicKey {
    /**
     * Constructs a new <code>EncryptWithClassicKey</code>.
     * @alias module:model/EncryptWithClassicKey
     * @param displayId {String} The name of the key to use in the encryption process
     * @param plaintext {String} Data to be encrypted
     * @param version {Number} classic key version
     */
    constructor(displayId, plaintext, version) { 
        
        EncryptWithClassicKey.initialize(this, displayId, plaintext, version);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, displayId, plaintext, version) { 
        obj['display-id'] = displayId;
        obj['plaintext'] = plaintext;
        obj['version'] = version;
    }

    /**
     * Constructs a <code>EncryptWithClassicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EncryptWithClassicKey} obj Optional instance to populate.
     * @return {module:model/EncryptWithClassicKey} The populated <code>EncryptWithClassicKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptWithClassicKey();

            if (data.hasOwnProperty('display-id')) {
                obj['display-id'] = ApiClient.convertToType(data['display-id'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The name of the key to use in the encryption process
 * @member {String} display-id
 */
EncryptWithClassicKey.prototype['display-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
EncryptWithClassicKey.prototype['json'] = false;

/**
 * Data to be encrypted
 * @member {String} plaintext
 */
EncryptWithClassicKey.prototype['plaintext'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
EncryptWithClassicKey.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
EncryptWithClassicKey.prototype['uid-token'] = undefined;

/**
 * classic key version
 * @member {Number} version
 */
EncryptWithClassicKey.prototype['version'] = undefined;






export default EncryptWithClassicKey;

