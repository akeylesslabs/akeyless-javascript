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
 * The UploadPKCS12 model module.
 * @module model/UploadPKCS12
 * @version 2.5.10
 */
class UploadPKCS12 {
    /**
     * Constructs a new <code>UploadPKCS12</code>.
     * @alias module:model/UploadPKCS12
     * @param _in {String} PKCS#12 input file (private key and certificate only)
     * @param name {String} Name of key to be created
     * @param passphrase {String} Passphrase to unlock the pkcs#12 bundle
     */
    constructor(_in, name, passphrase) { 
        
        UploadPKCS12.initialize(this, _in, name, passphrase);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _in, name, passphrase) { 
        obj['in'] = _in;
        obj['name'] = name;
        obj['passphrase'] = passphrase;
    }

    /**
     * Constructs a <code>UploadPKCS12</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UploadPKCS12} obj Optional instance to populate.
     * @return {module:model/UploadPKCS12} The populated <code>UploadPKCS12</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UploadPKCS12();

            if (data.hasOwnProperty('customer-frg-id')) {
                obj['customer-frg-id'] = ApiClient.convertToType(data['customer-frg-id'], 'String');
            }
            if (data.hasOwnProperty('in')) {
                obj['in'] = ApiClient.convertToType(data['in'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('passphrase')) {
                obj['passphrase'] = ApiClient.convertToType(data['passphrase'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
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
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The customer fragment ID that will be used to split the key (if empty, the key will be created independently of a customer fragment)
 * @member {String} customer-frg-id
 */
UploadPKCS12.prototype['customer-frg-id'] = undefined;

/**
 * PKCS#12 input file (private key and certificate only)
 * @member {String} in
 */
UploadPKCS12.prototype['in'] = undefined;

/**
 * A metadata about the key
 * @member {String} metadata
 */
UploadPKCS12.prototype['metadata'] = undefined;

/**
 * Name of key to be created
 * @member {String} name
 */
UploadPKCS12.prototype['name'] = undefined;

/**
 * Passphrase to unlock the pkcs#12 bundle
 * @member {String} passphrase
 */
UploadPKCS12.prototype['passphrase'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
UploadPKCS12.prototype['password'] = undefined;

/**
 * The number of fragments that the item will be split into
 * @member {Number} split-level
 * @default 2
 */
UploadPKCS12.prototype['split-level'] = 2;

/**
 * List of the tags attached to this key
 * @member {Array.<String>} tag
 */
UploadPKCS12.prototype['tag'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UploadPKCS12.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UploadPKCS12.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
UploadPKCS12.prototype['username'] = undefined;






export default UploadPKCS12;

