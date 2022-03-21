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
 * @version 2.15.28
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
        obj['name'] = name;
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
            if (data.hasOwnProperty('customer-frg-id')) {
                obj['customer-frg-id'] = ApiClient.convertToType(data['customer-frg-id'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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


}

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
 * The customer fragment ID that will be used to split the key (if empty, the key will be created independently of a customer fragment)
 * @member {String} customer-frg-id
 */
UploadRSA.prototype['customer-frg-id'] = undefined;

/**
 * A metadata about the key
 * @member {String} metadata
 */
UploadRSA.prototype['metadata'] = undefined;

/**
 * Name of key to be created
 * @member {String} name
 */
UploadRSA.prototype['name'] = undefined;

/**
 * RSA private key data, base64 encoded
 * @member {String} rsa-file-data
 */
UploadRSA.prototype['rsa-file-data'] = undefined;

/**
 * The number of fragments that the item will be split into
 * @member {Number} split-level
 * @default 2
 */
UploadRSA.prototype['split-level'] = 2;

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

