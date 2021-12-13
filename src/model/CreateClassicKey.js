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
 * The CreateClassicKey model module.
 * @module model/CreateClassicKey
 * @version 2.5.19
 */
class CreateClassicKey {
    /**
     * Constructs a new <code>CreateClassicKey</code>.
     * CreateClassicKey is a command that creates classic key
     * @alias module:model/CreateClassicKey
     * @param alg {String} Classic Key type; options: [AES128GCM, AES256GCM, AES128SIV, AES256SIV, RSA1024, RSA2048, RSA3072, RSA4096, EC256, EC384]
     * @param name {String} ClassicKey name
     */
    constructor(alg, name) { 
        
        CreateClassicKey.initialize(this, alg, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, alg, name) { 
        obj['alg'] = alg;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateClassicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateClassicKey} obj Optional instance to populate.
     * @return {module:model/CreateClassicKey} The populated <code>CreateClassicKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateClassicKey();

            if (data.hasOwnProperty('alg')) {
                obj['alg'] = ApiClient.convertToType(data['alg'], 'String');
            }
            if (data.hasOwnProperty('cert-file-data')) {
                obj['cert-file-data'] = ApiClient.convertToType(data['cert-file-data'], 'String');
            }
            if (data.hasOwnProperty('key-data')) {
                obj['key-data'] = ApiClient.convertToType(data['key-data'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('protection-key-name')) {
                obj['protection-key-name'] = ApiClient.convertToType(data['protection-key-name'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Classic Key type; options: [AES128GCM, AES256GCM, AES128SIV, AES256SIV, RSA1024, RSA2048, RSA3072, RSA4096, EC256, EC384]
 * @member {String} alg
 */
CreateClassicKey.prototype['alg'] = undefined;

/**
 * Certificate in a PEM format.
 * @member {String} cert-file-data
 */
CreateClassicKey.prototype['cert-file-data'] = undefined;

/**
 * Base64-encoded classic key value
 * @member {String} key-data
 */
CreateClassicKey.prototype['key-data'] = undefined;

/**
 * Metadata about the classic key
 * @member {String} metadata
 */
CreateClassicKey.prototype['metadata'] = undefined;

/**
 * ClassicKey name
 * @member {String} name
 */
CreateClassicKey.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
CreateClassicKey.prototype['password'] = undefined;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} protection-key-name
 */
CreateClassicKey.prototype['protection-key-name'] = undefined;

/**
 * List of the tags attached to this classic key
 * @member {Array.<String>} tags
 */
CreateClassicKey.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
CreateClassicKey.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateClassicKey.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateClassicKey.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
CreateClassicKey.prototype['username'] = undefined;






export default CreateClassicKey;

