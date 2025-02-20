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
 * The DeriveKey model module.
 * @module model/DeriveKey
 * @version 5.0.0
 */
class DeriveKey {
    /**
     * Constructs a new <code>DeriveKey</code>.
     * @alias module:model/DeriveKey
     * @param alg {String} Kdf algorithm
     * @param iter {Number} IterationCount the number of iterations
     * @param keyLen {Number} KeyLength the byte length of the generated key
     * @param name {String} Static Secret full name
     */
    constructor(alg, iter, keyLen, name) { 
        
        DeriveKey.initialize(this, alg, iter, keyLen, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, alg, iter, keyLen, name) { 
        obj['accessibility'] = 'regular';
        obj['alg'] = alg || 'pbkdf2';
        obj['hash-function'] = 'sha256';
        obj['iter'] = iter;
        obj['json'] = false;
        obj['key-len'] = keyLen;
        obj['mem'] = 16384;
        obj['name'] = name;
        obj['parallelism'] = 1;
    }

    /**
     * Constructs a <code>DeriveKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeriveKey} obj Optional instance to populate.
     * @return {module:model/DeriveKey} The populated <code>DeriveKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeriveKey();

            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
            }
            if (data.hasOwnProperty('alg')) {
                obj['alg'] = ApiClient.convertToType(data['alg'], 'String');
            }
            if (data.hasOwnProperty('hash-function')) {
                obj['hash-function'] = ApiClient.convertToType(data['hash-function'], 'String');
            }
            if (data.hasOwnProperty('iter')) {
                obj['iter'] = ApiClient.convertToType(data['iter'], 'Number');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key-len')) {
                obj['key-len'] = ApiClient.convertToType(data['key-len'], 'Number');
            }
            if (data.hasOwnProperty('mem')) {
                obj['mem'] = ApiClient.convertToType(data['mem'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parallelism')) {
                obj['parallelism'] = ApiClient.convertToType(data['parallelism'], 'Number');
            }
            if (data.hasOwnProperty('salt')) {
                obj['salt'] = ApiClient.convertToType(data['salt'], 'String');
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
     * Validates the JSON data with respect to <code>DeriveKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeriveKey</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeriveKey.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['accessibility'] && !(typeof data['accessibility'] === 'string' || data['accessibility'] instanceof String)) {
            throw new Error("Expected the field `accessibility` to be a primitive type in the JSON string but got " + data['accessibility']);
        }
        // ensure the json data is a string
        if (data['alg'] && !(typeof data['alg'] === 'string' || data['alg'] instanceof String)) {
            throw new Error("Expected the field `alg` to be a primitive type in the JSON string but got " + data['alg']);
        }
        // ensure the json data is a string
        if (data['hash-function'] && !(typeof data['hash-function'] === 'string' || data['hash-function'] instanceof String)) {
            throw new Error("Expected the field `hash-function` to be a primitive type in the JSON string but got " + data['hash-function']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['salt'] && !(typeof data['salt'] === 'string' || data['salt'] instanceof String)) {
            throw new Error("Expected the field `salt` to be a primitive type in the JSON string but got " + data['salt']);
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

DeriveKey.RequiredProperties = ["alg", "iter", "key-len", "name"];

/**
 * for personal password manager
 * @member {String} accessibility
 * @default 'regular'
 */
DeriveKey.prototype['accessibility'] = 'regular';

/**
 * Kdf algorithm
 * @member {String} alg
 * @default 'pbkdf2'
 */
DeriveKey.prototype['alg'] = 'pbkdf2';

/**
 * HashFunction the hash function to use (relevant for pbkdf2)
 * @member {String} hash-function
 * @default 'sha256'
 */
DeriveKey.prototype['hash-function'] = 'sha256';

/**
 * IterationCount the number of iterations
 * @member {Number} iter
 */
DeriveKey.prototype['iter'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DeriveKey.prototype['json'] = false;

/**
 * KeyLength the byte length of the generated key
 * @member {Number} key-len
 */
DeriveKey.prototype['key-len'] = undefined;

/**
 * MemorySizeInKb the memory paramter in kb (relevant for argon2id)
 * @member {Number} mem
 * @default 16384
 */
DeriveKey.prototype['mem'] = 16384;

/**
 * Static Secret full name
 * @member {String} name
 */
DeriveKey.prototype['name'] = undefined;

/**
 * Parallelism the number of threads to use (relevant for argon2id)
 * @member {Number} parallelism
 * @default 1
 */
DeriveKey.prototype['parallelism'] = 1;

/**
 * Salt Base64 encoded salt value. If not provided, the salt will be generated as part of the operation. The salt should be securely-generated random bytes, minimum 64 bits, 128 bits is recommended
 * @member {String} salt
 */
DeriveKey.prototype['salt'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DeriveKey.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DeriveKey.prototype['uid-token'] = undefined;






export default DeriveKey;

