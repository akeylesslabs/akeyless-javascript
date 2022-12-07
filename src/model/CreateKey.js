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
 * The CreateKey model module.
 * @module model/CreateKey
 * @version 3.0.1
 */
class CreateKey {
    /**
     * Constructs a new <code>CreateKey</code>.
     * createKey is a command that creates a new key. [Deprecated: Use command create-dfc-key]
     * @alias module:model/CreateKey
     * @param alg {String} Key type; options: [AES128GCM, AES256GCM, AES128SIV, AES256SIV, AES128CBC, AES256CBC, RSA1024, RSA2048, RSA3072, RSA4096]
     * @param name {String} Key name
     */
    constructor(alg, name) { 
        
        CreateKey.initialize(this, alg, name);
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
     * Constructs a <code>CreateKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateKey} obj Optional instance to populate.
     * @return {module:model/CreateKey} The populated <code>CreateKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateKey();

            if (data.hasOwnProperty('alg')) {
                obj['alg'] = ApiClient.convertToType(data['alg'], 'String');
            }
            if (data.hasOwnProperty('customer-frg-id')) {
                obj['customer-frg-id'] = ApiClient.convertToType(data['customer-frg-id'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('split-level')) {
                obj['split-level'] = ApiClient.convertToType(data['split-level'], 'Number');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], ['String']);
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
 * Key type; options: [AES128GCM, AES256GCM, AES128SIV, AES256SIV, AES128CBC, AES256CBC, RSA1024, RSA2048, RSA3072, RSA4096]
 * @member {String} alg
 */
CreateKey.prototype['alg'] = undefined;

/**
 * The customer fragment ID that will be used to create the key (if empty, the key will be created independently of a customer fragment)
 * @member {String} customer-frg-id
 */
CreateKey.prototype['customer-frg-id'] = undefined;

/**
 * Protection from accidental deletion of this item
 * @member {String} delete_protection
 */
CreateKey.prototype['delete_protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
CreateKey.prototype['json'] = undefined;

/**
 * Metadata about the key
 * @member {String} metadata
 */
CreateKey.prototype['metadata'] = undefined;

/**
 * Key name
 * @member {String} name
 */
CreateKey.prototype['name'] = undefined;

/**
 * The number of fragments that the item will be split into (not includes customer fragment)
 * @member {Number} split-level
 * @default 2
 */
CreateKey.prototype['split-level'] = 2;

/**
 * List of the tags attached to this key
 * @member {Array.<String>} tag
 */
CreateKey.prototype['tag'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateKey.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateKey.prototype['uid-token'] = undefined;






export default CreateKey;

