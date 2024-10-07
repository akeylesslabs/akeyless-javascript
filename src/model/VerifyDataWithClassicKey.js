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
 * The VerifyDataWithClassicKey model module.
 * @module model/VerifyDataWithClassicKey
 * @version 4.2.5
 */
class VerifyDataWithClassicKey {
    /**
     * Constructs a new <code>VerifyDataWithClassicKey</code>.
     * @alias module:model/VerifyDataWithClassicKey
     * @param data {String} Data
     * @param name {String} The name of the key to use in the verification process
     * @param signature {String} The data's signature in a Base64 format.
     * @param version {Number} classic key version
     */
    constructor(data, name, signature, version) { 
        
        VerifyDataWithClassicKey.initialize(this, data, name, signature, version);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data, name, signature, version) { 
        obj['data'] = data;
        obj['name'] = name;
        obj['signature'] = signature;
        obj['version'] = version;
    }

    /**
     * Constructs a <code>VerifyDataWithClassicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerifyDataWithClassicKey} obj Optional instance to populate.
     * @return {module:model/VerifyDataWithClassicKey} The populated <code>VerifyDataWithClassicKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VerifyDataWithClassicKey();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('display-id')) {
                obj['display-id'] = ApiClient.convertToType(data['display-id'], 'String');
            }
            if (data.hasOwnProperty('hashed')) {
                obj['hashed'] = ApiClient.convertToType(data['hashed'], 'Boolean');
            }
            if (data.hasOwnProperty('hashing-method')) {
                obj['hashing-method'] = ApiClient.convertToType(data['hashing-method'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
 * Data
 * @member {String} data
 */
VerifyDataWithClassicKey.prototype['data'] = undefined;

/**
 * The display id of the key to use in the verification process
 * @member {String} display-id
 */
VerifyDataWithClassicKey.prototype['display-id'] = undefined;

/**
 * Defines whether the data should be hashed as part of the signing. If true, the data will not be hashed
 * @member {Boolean} hashed
 * @default false
 */
VerifyDataWithClassicKey.prototype['hashed'] = false;

/**
 * HashingMethod
 * @member {String} hashing-method
 * @default 'SHA256'
 */
VerifyDataWithClassicKey.prototype['hashing-method'] = 'SHA256';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
VerifyDataWithClassicKey.prototype['json'] = false;

/**
 * The name of the key to use in the verification process
 * @member {String} name
 */
VerifyDataWithClassicKey.prototype['name'] = undefined;

/**
 * The data's signature in a Base64 format.
 * @member {String} signature
 */
VerifyDataWithClassicKey.prototype['signature'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
VerifyDataWithClassicKey.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
VerifyDataWithClassicKey.prototype['uid-token'] = undefined;

/**
 * classic key version
 * @member {Number} version
 */
VerifyDataWithClassicKey.prototype['version'] = undefined;






export default VerifyDataWithClassicKey;

