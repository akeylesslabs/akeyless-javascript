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
 * The UpdateClassicKeyCertificate model module.
 * @module model/UpdateClassicKeyCertificate
 * @version 5.0.6
 */
class UpdateClassicKeyCertificate {
    /**
     * Constructs a new <code>UpdateClassicKeyCertificate</code>.
     * UpdateClassicKeyCertificate is a command that updates the certificate for a classic key
     * @alias module:model/UpdateClassicKeyCertificate
     * @param name {String} ClassicKey name
     */
    constructor(name) { 
        
        UpdateClassicKeyCertificate.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['json'] = false;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>UpdateClassicKeyCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateClassicKeyCertificate} obj Optional instance to populate.
     * @return {module:model/UpdateClassicKeyCertificate} The populated <code>UpdateClassicKeyCertificate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateClassicKeyCertificate();

            if (data.hasOwnProperty('cert-file-data')) {
                obj['cert-file-data'] = ApiClient.convertToType(data['cert-file-data'], 'String');
            }
            if (data.hasOwnProperty('certificate-format')) {
                obj['certificate-format'] = ApiClient.convertToType(data['certificate-format'], 'String');
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateClassicKeyCertificate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateClassicKeyCertificate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateClassicKeyCertificate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
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

UpdateClassicKeyCertificate.RequiredProperties = ["name"];

/**
 * PEM Certificate in a Base64 format. Used for updating RSA keys' certificates.
 * @member {String} cert-file-data
 */
UpdateClassicKeyCertificate.prototype['cert-file-data'] = undefined;

/**
 * @member {String} certificate-format
 */
UpdateClassicKeyCertificate.prototype['certificate-format'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateClassicKeyCertificate.prototype['json'] = false;

/**
 * ClassicKey name
 * @member {String} name
 */
UpdateClassicKeyCertificate.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateClassicKeyCertificate.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateClassicKeyCertificate.prototype['uid-token'] = undefined;






export default UpdateClassicKeyCertificate;

