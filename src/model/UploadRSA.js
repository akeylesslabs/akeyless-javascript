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
 * The UploadRSA model module.
 * @module model/UploadRSA
 * @version 5.0.2
 */
class UploadRSA {
    /**
     * Constructs a new <code>UploadRSA</code>.
     * @alias module:model/UploadRSA
     * @param alg {String} Key type. options: [RSA1024, RSA2048, RSA3072, RSA4096]
     * @param name {String} Name of key to be created
     */
    constructor(alg, name) { 
        
        UploadRSA.initialize(this, alg, name);
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
        obj['overwrite'] = 'false';
        obj['split-level'] = 3;
    }

    /**
     * Constructs a <code>UploadRSA</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UploadRSA} obj Optional instance to populate.
     * @return {module:model/UploadRSA} The populated <code>UploadRSA</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UploadRSA();

            if (data.hasOwnProperty('alg')) {
                obj['alg'] = ApiClient.convertToType(data['alg'], 'String');
            }
            if (data.hasOwnProperty('cert-file-data')) {
                obj['cert-file-data'] = ApiClient.convertToType(data['cert-file-data'], 'String');
            }
            if (data.hasOwnProperty('certificate-format')) {
                obj['certificate-format'] = ApiClient.convertToType(data['certificate-format'], 'String');
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
            if (data.hasOwnProperty('expiration-event-in')) {
                obj['expiration-event-in'] = ApiClient.convertToType(data['expiration-event-in'], ['String']);
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
            if (data.hasOwnProperty('overwrite')) {
                obj['overwrite'] = ApiClient.convertToType(data['overwrite'], 'String');
            }
            if (data.hasOwnProperty('rsa-file-data')) {
                obj['rsa-file-data'] = ApiClient.convertToType(data['rsa-file-data'], 'String');
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
     * Validates the JSON data with respect to <code>UploadRSA</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UploadRSA</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UploadRSA.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['alg'] && !(typeof data['alg'] === 'string' || data['alg'] instanceof String)) {
            throw new Error("Expected the field `alg` to be a primitive type in the JSON string but got " + data['alg']);
        }
        // ensure the json data is a string
        if (data['cert-file-data'] && !(typeof data['cert-file-data'] === 'string' || data['cert-file-data'] instanceof String)) {
            throw new Error("Expected the field `cert-file-data` to be a primitive type in the JSON string but got " + data['cert-file-data']);
        }
        // ensure the json data is a string
        if (data['certificate-format'] && !(typeof data['certificate-format'] === 'string' || data['certificate-format'] instanceof String)) {
            throw new Error("Expected the field `certificate-format` to be a primitive type in the JSON string but got " + data['certificate-format']);
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
        // ensure the json data is an array
        if (!Array.isArray(data['expiration-event-in'])) {
            throw new Error("Expected the field `expiration-event-in` to be an array in the JSON data but got " + data['expiration-event-in']);
        }
        // ensure the json data is a string
        if (data['metadata'] && !(typeof data['metadata'] === 'string' || data['metadata'] instanceof String)) {
            throw new Error("Expected the field `metadata` to be a primitive type in the JSON string but got " + data['metadata']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['overwrite'] && !(typeof data['overwrite'] === 'string' || data['overwrite'] instanceof String)) {
            throw new Error("Expected the field `overwrite` to be a primitive type in the JSON string but got " + data['overwrite']);
        }
        // ensure the json data is a string
        if (data['rsa-file-data'] && !(typeof data['rsa-file-data'] === 'string' || data['rsa-file-data'] instanceof String)) {
            throw new Error("Expected the field `rsa-file-data` to be a primitive type in the JSON string but got " + data['rsa-file-data']);
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

UploadRSA.RequiredProperties = ["alg", "name"];

/**
 * Key type. options: [RSA1024, RSA2048, RSA3072, RSA4096]
 * @member {String} alg
 */
UploadRSA.prototype['alg'] = undefined;

/**
 * Certificate in a PEM format.
 * @member {String} cert-file-data
 */
UploadRSA.prototype['cert-file-data'] = undefined;

/**
 * @member {String} certificate-format
 */
UploadRSA.prototype['certificate-format'] = undefined;

/**
 * The customer fragment ID that will be used to split the key (if empty, the key will be created independently of a customer fragment)
 * @member {String} customer-frg-id
 */
UploadRSA.prototype['customer-frg-id'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
UploadRSA.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
UploadRSA.prototype['description'] = undefined;

/**
 * How many days before the expiration of the certificate would you like to be notified.
 * @member {Array.<String>} expiration-event-in
 */
UploadRSA.prototype['expiration-event-in'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UploadRSA.prototype['json'] = false;

/**
 * Deprecated - use description
 * @member {String} metadata
 */
UploadRSA.prototype['metadata'] = undefined;

/**
 * Name of key to be created
 * @member {String} name
 */
UploadRSA.prototype['name'] = undefined;

/**
 * When the overwrite flag is set, this command will only update an existing key [true/false]
 * @member {String} overwrite
 * @default 'false'
 */
UploadRSA.prototype['overwrite'] = 'false';

/**
 * RSA private key data, base64 encoded
 * @member {String} rsa-file-data
 */
UploadRSA.prototype['rsa-file-data'] = undefined;

/**
 * The number of fragments that the item will be split into
 * @member {Number} split-level
 * @default 3
 */
UploadRSA.prototype['split-level'] = 3;

/**
 * List of the tags attached to this key
 * @member {Array.<String>} tag
 */
UploadRSA.prototype['tag'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UploadRSA.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UploadRSA.prototype['uid-token'] = undefined;






export default UploadRSA;

