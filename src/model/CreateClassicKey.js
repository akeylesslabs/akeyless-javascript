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
 * @version 3.3.14
 */
class CreateClassicKey {
    /**
     * Constructs a new <code>CreateClassicKey</code>.
     * CreateClassicKey is a command that creates classic key
     * @alias module:model/CreateClassicKey
     * @param alg {String} Classic Key type; options: [AES128GCM, AES256GCM, AES128SIV, AES256SIV, RSA1024, RSA2048, RSA3072, RSA4096, EC256, EC384, GPG]
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
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('generate-self-signed-certificate')) {
                obj['generate-self-signed-certificate'] = ApiClient.convertToType(data['generate-self-signed-certificate'], 'Boolean');
            }
            if (data.hasOwnProperty('gpg-alg')) {
                obj['gpg-alg'] = ApiClient.convertToType(data['gpg-alg'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
            if (data.hasOwnProperty('protection-key-name')) {
                obj['protection-key-name'] = ApiClient.convertToType(data['protection-key-name'], 'String');
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
 * Classic Key type; options: [AES128GCM, AES256GCM, AES128SIV, AES256SIV, RSA1024, RSA2048, RSA3072, RSA4096, EC256, EC384, GPG]
 * @member {String} alg
 */
CreateClassicKey.prototype['alg'] = undefined;

/**
 * Certificate in a PEM format.
 * @member {String} cert-file-data
 */
CreateClassicKey.prototype['cert-file-data'] = undefined;

/**
 * Common name for the generated certificate. Relevant only for generate-self-signed-certificate.
 * @member {String} certificate-common-name
 */
CreateClassicKey.prototype['certificate-common-name'] = undefined;

/**
 * Country name for the generated certificate. Relevant only for generate-self-signed-certificate.
 * @member {String} certificate-country
 */
CreateClassicKey.prototype['certificate-country'] = undefined;

/**
 * Digest algorithm to be used for the certificate key signing. Currently, we support only \"sha256\" so we hide this option for CLI.
 * @member {String} certificate-digest-algo
 */
CreateClassicKey.prototype['certificate-digest-algo'] = undefined;

/**
 * Locality for the generated certificate. Relevant only for generate-self-signed-certificate.
 * @member {String} certificate-locality
 */
CreateClassicKey.prototype['certificate-locality'] = undefined;

/**
 * Organization name for the generated certificate. Relevant only for generate-self-signed-certificate.
 * @member {String} certificate-organization
 */
CreateClassicKey.prototype['certificate-organization'] = undefined;

/**
 * Province name for the generated certificate. Relevant only for generate-self-signed-certificate.
 * @member {String} certificate-province
 */
CreateClassicKey.prototype['certificate-province'] = undefined;

/**
 * TTL in days for the generated certificate. Required only for generate-self-signed-certificate.
 * @member {Number} certificate-ttl
 */
CreateClassicKey.prototype['certificate-ttl'] = undefined;

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
CreateClassicKey.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateClassicKey.prototype['description'] = undefined;

/**
 * Whether to generate a self signed certificate with the key. If set, --certificate-ttl must be provided.
 * @member {Boolean} generate-self-signed-certificate
 */
CreateClassicKey.prototype['generate-self-signed-certificate'] = undefined;

/**
 * gpg alg: Relevant only if GPG key type selected; options: [RSA1024, RSA2048, RSA3072, RSA4096, Ed25519]
 * @member {String} gpg-alg
 */
CreateClassicKey.prototype['gpg-alg'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateClassicKey.prototype['json'] = false;

/**
 * Base64-encoded classic key value
 * @member {String} key-data
 */
CreateClassicKey.prototype['key-data'] = undefined;

/**
 * Deprecated - use description
 * @member {String} metadata
 */
CreateClassicKey.prototype['metadata'] = undefined;

/**
 * ClassicKey name
 * @member {String} name
 */
CreateClassicKey.prototype['name'] = undefined;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} protection-key-name
 */
CreateClassicKey.prototype['protection-key-name'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
CreateClassicKey.prototype['tags'] = undefined;

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






export default CreateClassicKey;

