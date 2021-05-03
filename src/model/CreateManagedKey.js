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
 * The CreateManagedKey model module.
 * @module model/CreateManagedKey
 * @version 2.4.0
 */
class CreateManagedKey {
    /**
     * Constructs a new <code>CreateManagedKey</code>.
     * CreateManagedKey is a command that creates managed key
     * @alias module:model/CreateManagedKey
     * @param alg {String} Managed Key type; options: [AES256GCM, RSA2048]
     * @param name {String} ManagedKey name
     */
    constructor(alg, name) { 
        
        CreateManagedKey.initialize(this, alg, name);
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
     * Constructs a <code>CreateManagedKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateManagedKey} obj Optional instance to populate.
     * @return {module:model/CreateManagedKey} The populated <code>CreateManagedKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateManagedKey();

            if (data.hasOwnProperty('alg')) {
                obj['alg'] = ApiClient.convertToType(data['alg'], 'String');
            }
            if (data.hasOwnProperty('managed-key-value')) {
                obj['managed-key-value'] = ApiClient.convertToType(data['managed-key-value'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('protection_key')) {
                obj['protection_key'] = ApiClient.convertToType(data['protection_key'], 'String');
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
        }
        return obj;
    }


}

/**
 * Managed Key type; options: [AES256GCM, RSA2048]
 * @member {String} alg
 */
CreateManagedKey.prototype['alg'] = undefined;

/**
 * Base64-encoded managed key value
 * @member {String} managed-key-value
 */
CreateManagedKey.prototype['managed-key-value'] = undefined;

/**
 * Metadata about the managed key
 * @member {String} metadata
 */
CreateManagedKey.prototype['metadata'] = undefined;

/**
 * ManagedKey name
 * @member {String} name
 */
CreateManagedKey.prototype['name'] = undefined;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} protection_key
 */
CreateManagedKey.prototype['protection_key'] = undefined;

/**
 * List of the tags attached to this managed key
 * @member {Array.<String>} tags
 */
CreateManagedKey.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
CreateManagedKey.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateManagedKey.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateManagedKey.prototype['uid-token'] = undefined;






export default CreateManagedKey;

