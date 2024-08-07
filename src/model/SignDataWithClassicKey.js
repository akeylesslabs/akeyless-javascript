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
 * The SignDataWithClassicKey model module.
 * @module model/SignDataWithClassicKey
 * @version 4.2.2
 */
class SignDataWithClassicKey {
    /**
     * Constructs a new <code>SignDataWithClassicKey</code>.
     * @alias module:model/SignDataWithClassicKey
     * @param data {String} Data
     * @param displayId {String} The name of the key to use in the sign data process
     * @param name {String} ClassicKey name
     * @param version {Number} classic key version
     */
    constructor(data, displayId, name, version) { 
        
        SignDataWithClassicKey.initialize(this, data, displayId, name, version);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data, displayId, name, version) { 
        obj['data'] = data;
        obj['display-id'] = displayId;
        obj['name'] = name;
        obj['version'] = version;
    }

    /**
     * Constructs a <code>SignDataWithClassicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignDataWithClassicKey} obj Optional instance to populate.
     * @return {module:model/SignDataWithClassicKey} The populated <code>SignDataWithClassicKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignDataWithClassicKey();

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
            if (data.hasOwnProperty('ignore-cache')) {
                obj['ignore-cache'] = ApiClient.convertToType(data['ignore-cache'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
SignDataWithClassicKey.prototype['data'] = undefined;

/**
 * The name of the key to use in the sign data process
 * @member {String} display-id
 */
SignDataWithClassicKey.prototype['display-id'] = undefined;

/**
 * Defines whether the data should be hashed as part of the signing. If true, the data will not be hashed
 * @member {Boolean} hashed
 * @default false
 */
SignDataWithClassicKey.prototype['hashed'] = false;

/**
 * HashingMethod
 * @member {String} hashing-method
 * @default 'SHA256'
 */
SignDataWithClassicKey.prototype['hashing-method'] = 'SHA256';

/**
 * Retrieve the Secret value without checking the Gateway's cache [true/false]. This flag is only relevant when using the RestAPI
 * @member {String} ignore-cache
 * @default 'false'
 */
SignDataWithClassicKey.prototype['ignore-cache'] = 'false';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
SignDataWithClassicKey.prototype['json'] = false;

/**
 * ClassicKey name
 * @member {String} name
 */
SignDataWithClassicKey.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
SignDataWithClassicKey.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
SignDataWithClassicKey.prototype['uid-token'] = undefined;

/**
 * classic key version
 * @member {Number} version
 */
SignDataWithClassicKey.prototype['version'] = undefined;






export default SignDataWithClassicKey;

