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
 * The UpdateCertificateValue model module.
 * @module model/UpdateCertificateValue
 * @version 3.3.3
 */
class UpdateCertificateValue {
    /**
     * Constructs a new <code>UpdateCertificateValue</code>.
     * @alias module:model/UpdateCertificateValue
     * @param name {String} Certificate name
     */
    constructor(name) { 
        
        UpdateCertificateValue.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>UpdateCertificateValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCertificateValue} obj Optional instance to populate.
     * @return {module:model/UpdateCertificateValue} The populated <code>UpdateCertificateValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCertificateValue();

            if (data.hasOwnProperty('certificate-data')) {
                obj['certificate-data'] = ApiClient.convertToType(data['certificate-data'], 'String');
            }
            if (data.hasOwnProperty('expiration-event-in')) {
                obj['expiration-event-in'] = ApiClient.convertToType(data['expiration-event-in'], ['String']);
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('key-data')) {
                obj['key-data'] = ApiClient.convertToType(data['key-data'], 'String');
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


}

/**
 * Content of the certificate in a Base64 format.
 * @member {String} certificate-data
 */
UpdateCertificateValue.prototype['certificate-data'] = undefined;

/**
 * How many days before the expiration of the certificate would you like to be notified.
 * @member {Array.<String>} expiration-event-in
 */
UpdateCertificateValue.prototype['expiration-event-in'] = undefined;

/**
 * CertificateFormat of the certificate and private key, possible values: cer,crt,pem,pfx,p12. Required when passing inline certificate content with --certificate-data or --key-data, otherwise format is derived from the file extension.
 * @member {String} format
 */
UpdateCertificateValue.prototype['format'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateCertificateValue.prototype['json'] = false;

/**
 * The name of a key to use to encrypt the certificate's key (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateCertificateValue.prototype['key'] = undefined;

/**
 * Content of the certificate's private key in a Base64 format.
 * @member {String} key-data
 */
UpdateCertificateValue.prototype['key-data'] = undefined;

/**
 * Certificate name
 * @member {String} name
 */
UpdateCertificateValue.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateCertificateValue.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateCertificateValue.prototype['uid-token'] = undefined;






export default UpdateCertificateValue;

