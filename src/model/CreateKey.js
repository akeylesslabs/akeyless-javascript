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
 * @version 5.0.2
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
        obj['json'] = false;
        obj['name'] = name;
        obj['split-level'] = 3;
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
            if (data.hasOwnProperty('certificate-common-name')) {
                obj['certificate-common-name'] = ApiClient.convertToType(data['certificate-common-name'], 'String');
            }
            if (data.hasOwnProperty('certificate-country')) {
                obj['certificate-country'] = ApiClient.convertToType(data['certificate-country'], 'String');
            }
            if (data.hasOwnProperty('certificate-digest-algo')) {
                obj['certificate-digest-algo'] = ApiClient.convertToType(data['certificate-digest-algo'], 'String');
            }
            if (data.hasOwnProperty('certificate-locality')) {
                obj['certificate-locality'] = ApiClient.convertToType(data['certificate-locality'], 'String');
            }
            if (data.hasOwnProperty('certificate-organization')) {
                obj['certificate-organization'] = ApiClient.convertToType(data['certificate-organization'], 'String');
            }
            if (data.hasOwnProperty('certificate-province')) {
                obj['certificate-province'] = ApiClient.convertToType(data['certificate-province'], 'String');
            }
            if (data.hasOwnProperty('certificate-ttl')) {
                obj['certificate-ttl'] = ApiClient.convertToType(data['certificate-ttl'], 'Number');
            }
            if (data.hasOwnProperty('conf-file-data')) {
                obj['conf-file-data'] = ApiClient.convertToType(data['conf-file-data'], 'String');
            }
            if (data.hasOwnProperty('customer-frg-id')) {
                obj['customer-frg-id'] = ApiClient.convertToType(data['customer-frg-id'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('generate-self-signed-certificate')) {
                obj['generate-self-signed-certificate'] = ApiClient.convertToType(data['generate-self-signed-certificate'], 'Boolean');
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

    /**
     * Validates the JSON data with respect to <code>CreateKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateKey</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateKey.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['alg'] && !(typeof data['alg'] === 'string' || data['alg'] instanceof String)) {
            throw new Error("Expected the field `alg` to be a primitive type in the JSON string but got " + data['alg']);
        }
        // ensure the json data is a string
        if (data['certificate-common-name'] && !(typeof data['certificate-common-name'] === 'string' || data['certificate-common-name'] instanceof String)) {
            throw new Error("Expected the field `certificate-common-name` to be a primitive type in the JSON string but got " + data['certificate-common-name']);
        }
        // ensure the json data is a string
        if (data['certificate-country'] && !(typeof data['certificate-country'] === 'string' || data['certificate-country'] instanceof String)) {
            throw new Error("Expected the field `certificate-country` to be a primitive type in the JSON string but got " + data['certificate-country']);
        }
        // ensure the json data is a string
        if (data['certificate-digest-algo'] && !(typeof data['certificate-digest-algo'] === 'string' || data['certificate-digest-algo'] instanceof String)) {
            throw new Error("Expected the field `certificate-digest-algo` to be a primitive type in the JSON string but got " + data['certificate-digest-algo']);
        }
        // ensure the json data is a string
        if (data['certificate-locality'] && !(typeof data['certificate-locality'] === 'string' || data['certificate-locality'] instanceof String)) {
            throw new Error("Expected the field `certificate-locality` to be a primitive type in the JSON string but got " + data['certificate-locality']);
        }
        // ensure the json data is a string
        if (data['certificate-organization'] && !(typeof data['certificate-organization'] === 'string' || data['certificate-organization'] instanceof String)) {
            throw new Error("Expected the field `certificate-organization` to be a primitive type in the JSON string but got " + data['certificate-organization']);
        }
        // ensure the json data is a string
        if (data['certificate-province'] && !(typeof data['certificate-province'] === 'string' || data['certificate-province'] instanceof String)) {
            throw new Error("Expected the field `certificate-province` to be a primitive type in the JSON string but got " + data['certificate-province']);
        }
        // ensure the json data is a string
        if (data['conf-file-data'] && !(typeof data['conf-file-data'] === 'string' || data['conf-file-data'] instanceof String)) {
            throw new Error("Expected the field `conf-file-data` to be a primitive type in the JSON string but got " + data['conf-file-data']);
        }
        // ensure the json data is a string
        if (data['customer-frg-id'] && !(typeof data['customer-frg-id'] === 'string' || data['customer-frg-id'] instanceof String)) {
            throw new Error("Expected the field `customer-frg-id` to be a primitive type in the JSON string but got " + data['customer-frg-id']);
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['metadata'] && !(typeof data['metadata'] === 'string' || data['metadata'] instanceof String)) {
            throw new Error("Expected the field `metadata` to be a primitive type in the JSON string but got " + data['metadata']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tag'])) {
            throw new Error("Expected the field `tag` to be an array in the JSON data but got " + data['tag']);
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

CreateKey.RequiredProperties = ["alg", "name"];

/**
 * Key type; options: [AES128GCM, AES256GCM, AES128SIV, AES256SIV, AES128CBC, AES256CBC, RSA1024, RSA2048, RSA3072, RSA4096]
 * @member {String} alg
 */
CreateKey.prototype['alg'] = undefined;

/**
 * Common name for the generated certificate. Relevant only for generate-self-signed-certificate.
 * @member {String} certificate-common-name
 */
CreateKey.prototype['certificate-common-name'] = undefined;

/**
 * Country name for the generated certificate. Relevant only for generate-self-signed-certificate.
 * @member {String} certificate-country
 */
CreateKey.prototype['certificate-country'] = undefined;

/**
 * Digest algorithm to be used for the certificate key signing. Currently, we support only \"sha256\" so we hide this option for CLI.
 * @member {String} certificate-digest-algo
 */
CreateKey.prototype['certificate-digest-algo'] = undefined;

/**
 * Locality for the generated certificate. Relevant only for generate-self-signed-certificate.
 * @member {String} certificate-locality
 */
CreateKey.prototype['certificate-locality'] = undefined;

/**
 * Organization name for the generated certificate. Relevant only for generate-self-signed-certificate.
 * @member {String} certificate-organization
 */
CreateKey.prototype['certificate-organization'] = undefined;

/**
 * Province name for the generated certificate. Relevant only for generate-self-signed-certificate.
 * @member {String} certificate-province
 */
CreateKey.prototype['certificate-province'] = undefined;

/**
 * TTL in days for the generated certificate. Required only for generate-self-signed-certificate.
 * @member {Number} certificate-ttl
 */
CreateKey.prototype['certificate-ttl'] = undefined;

/**
 * The csr config data in base64 encoding
 * @member {String} conf-file-data
 */
CreateKey.prototype['conf-file-data'] = undefined;

/**
 * The customer fragment ID that will be used to create the key (if empty, the key will be created independently of a customer fragment)
 * @member {String} customer-frg-id
 */
CreateKey.prototype['customer-frg-id'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
CreateKey.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateKey.prototype['description'] = undefined;

/**
 * Whether to generate a self signed certificate with the key. If set, --certificate-ttl must be provided.
 * @member {Boolean} generate-self-signed-certificate
 */
CreateKey.prototype['generate-self-signed-certificate'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateKey.prototype['json'] = false;

/**
 * Deprecated - use description
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
 * @default 3
 */
CreateKey.prototype['split-level'] = 3;

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

