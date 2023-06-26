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
 * The CreateCertificate model module.
 * @module model/CreateCertificate
 * @version 3.3.10
 */
class CreateCertificate {
    /**
     * Constructs a new <code>CreateCertificate</code>.
     * @alias module:model/CreateCertificate
     * @param name {String} Certificate name
     */
    constructor(name) { 
        
        CreateCertificate.initialize(this, name);
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
     * Constructs a <code>CreateCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCertificate} obj Optional instance to populate.
     * @return {module:model/CreateCertificate} The populated <code>CreateCertificate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCertificate();

            if (data.hasOwnProperty('certificate-data')) {
                obj['certificate-data'] = ApiClient.convertToType(data['certificate-data'], 'String');
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
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
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
CreateCertificate.prototype['certificate-data'] = undefined;

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
CreateCertificate.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateCertificate.prototype['description'] = undefined;

/**
 * How many days before the expiration of the certificate would you like to be notified.
 * @member {Array.<String>} expiration-event-in
 */
CreateCertificate.prototype['expiration-event-in'] = undefined;

/**
 * CertificateFormat of the certificate and private key, possible values: cer,crt,pem,pfx,p12. Required when passing inline certificate content with --certificate-data or --key-data, otherwise format is derived from the file extension.
 * @member {String} format
 */
CreateCertificate.prototype['format'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateCertificate.prototype['json'] = false;

/**
 * The name of a key to use to encrypt the certificate's key (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateCertificate.prototype['key'] = undefined;

/**
 * Content of the certificate's private key in a Base64 format.
 * @member {String} key-data
 */
CreateCertificate.prototype['key-data'] = undefined;

/**
 * Deprecated - use description
 * @member {String} metadata
 */
CreateCertificate.prototype['metadata'] = undefined;

/**
 * Certificate name
 * @member {String} name
 */
CreateCertificate.prototype['name'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
CreateCertificate.prototype['tags'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateCertificate.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateCertificate.prototype['uid-token'] = undefined;






export default CreateCertificate;

