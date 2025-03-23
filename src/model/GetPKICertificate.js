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
 * The GetPKICertificate model module.
 * @module model/GetPKICertificate
 * @version 5.0.1
 */
class GetPKICertificate {
    /**
     * Constructs a new <code>GetPKICertificate</code>.
     * @alias module:model/GetPKICertificate
     * @param certIssuerName {String} The name of the PKI certificate issuer
     */
    constructor(certIssuerName) { 
        
        GetPKICertificate.initialize(this, certIssuerName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, certIssuerName) { 
        obj['cert-issuer-name'] = certIssuerName;
        obj['json'] = false;
        obj['max-path-len'] = -1;
    }

    /**
     * Constructs a <code>GetPKICertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPKICertificate} obj Optional instance to populate.
     * @return {module:model/GetPKICertificate} The populated <code>GetPKICertificate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPKICertificate();

            if (data.hasOwnProperty('alt-names')) {
                obj['alt-names'] = ApiClient.convertToType(data['alt-names'], 'String');
            }
            if (data.hasOwnProperty('cert-issuer-name')) {
                obj['cert-issuer-name'] = ApiClient.convertToType(data['cert-issuer-name'], 'String');
            }
            if (data.hasOwnProperty('common-name')) {
                obj['common-name'] = ApiClient.convertToType(data['common-name'], 'String');
            }
            if (data.hasOwnProperty('csr-data-base64')) {
                obj['csr-data-base64'] = ApiClient.convertToType(data['csr-data-base64'], 'String');
            }
            if (data.hasOwnProperty('extended-key-usage')) {
                obj['extended-key-usage'] = ApiClient.convertToType(data['extended-key-usage'], 'String');
            }
            if (data.hasOwnProperty('extra-extensions')) {
                obj['extra-extensions'] = ApiClient.convertToType(data['extra-extensions'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key-data-base64')) {
                obj['key-data-base64'] = ApiClient.convertToType(data['key-data-base64'], 'String');
            }
            if (data.hasOwnProperty('max-path-len')) {
                obj['max-path-len'] = ApiClient.convertToType(data['max-path-len'], 'Number');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('uri-sans')) {
                obj['uri-sans'] = ApiClient.convertToType(data['uri-sans'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetPKICertificate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetPKICertificate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetPKICertificate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['alt-names'] && !(typeof data['alt-names'] === 'string' || data['alt-names'] instanceof String)) {
            throw new Error("Expected the field `alt-names` to be a primitive type in the JSON string but got " + data['alt-names']);
        }
        // ensure the json data is a string
        if (data['cert-issuer-name'] && !(typeof data['cert-issuer-name'] === 'string' || data['cert-issuer-name'] instanceof String)) {
            throw new Error("Expected the field `cert-issuer-name` to be a primitive type in the JSON string but got " + data['cert-issuer-name']);
        }
        // ensure the json data is a string
        if (data['common-name'] && !(typeof data['common-name'] === 'string' || data['common-name'] instanceof String)) {
            throw new Error("Expected the field `common-name` to be a primitive type in the JSON string but got " + data['common-name']);
        }
        // ensure the json data is a string
        if (data['csr-data-base64'] && !(typeof data['csr-data-base64'] === 'string' || data['csr-data-base64'] instanceof String)) {
            throw new Error("Expected the field `csr-data-base64` to be a primitive type in the JSON string but got " + data['csr-data-base64']);
        }
        // ensure the json data is a string
        if (data['extended-key-usage'] && !(typeof data['extended-key-usage'] === 'string' || data['extended-key-usage'] instanceof String)) {
            throw new Error("Expected the field `extended-key-usage` to be a primitive type in the JSON string but got " + data['extended-key-usage']);
        }
        // ensure the json data is a string
        if (data['extra-extensions'] && !(typeof data['extra-extensions'] === 'string' || data['extra-extensions'] instanceof String)) {
            throw new Error("Expected the field `extra-extensions` to be a primitive type in the JSON string but got " + data['extra-extensions']);
        }
        // ensure the json data is a string
        if (data['key-data-base64'] && !(typeof data['key-data-base64'] === 'string' || data['key-data-base64'] instanceof String)) {
            throw new Error("Expected the field `key-data-base64` to be a primitive type in the JSON string but got " + data['key-data-base64']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['ttl'] && !(typeof data['ttl'] === 'string' || data['ttl'] instanceof String)) {
            throw new Error("Expected the field `ttl` to be a primitive type in the JSON string but got " + data['ttl']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }
        // ensure the json data is a string
        if (data['uri-sans'] && !(typeof data['uri-sans'] === 'string' || data['uri-sans'] instanceof String)) {
            throw new Error("Expected the field `uri-sans` to be a primitive type in the JSON string but got " + data['uri-sans']);
        }

        return true;
    }


}

GetPKICertificate.RequiredProperties = ["cert-issuer-name"];

/**
 * The Subject Alternative Names to be included in the PKI certificate (in a comma-separated list) (if CSR is supplied this flag is ignored and any DNS.* names are taken from it)
 * @member {String} alt-names
 */
GetPKICertificate.prototype['alt-names'] = undefined;

/**
 * The name of the PKI certificate issuer
 * @member {String} cert-issuer-name
 */
GetPKICertificate.prototype['cert-issuer-name'] = undefined;

/**
 * The common name to be included in the PKI certificate (if CSR is supplied this flag is ignored and the CSR subject CN is taken)
 * @member {String} common-name
 */
GetPKICertificate.prototype['common-name'] = undefined;

/**
 * Certificate Signing Request contents encoded in base64 to generate the certificate with
 * @member {String} csr-data-base64
 */
GetPKICertificate.prototype['csr-data-base64'] = undefined;

/**
 * A comma-separated list of extended key usage requests which will be used for certificate issuance. Supported values: 'clientauth', 'serverauth'. If critical is present the extension will be marked as critical
 * @member {String} extended-key-usage
 */
GetPKICertificate.prototype['extended-key-usage'] = undefined;

/**
 * A json string that defines the requested extra extensions for the certificate
 * @member {String} extra-extensions
 */
GetPKICertificate.prototype['extra-extensions'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GetPKICertificate.prototype['json'] = false;

/**
 * PKI key file contents. If this option is used, the certificate will be printed to stdout
 * @member {String} key-data-base64
 */
GetPKICertificate.prototype['key-data-base64'] = undefined;

/**
 * The maximum path length for the generated certificate. -1, means unlimited unless the signing certificate has a maximum path length set
 * @member {Number} max-path-len
 * @default -1
 */
GetPKICertificate.prototype['max-path-len'] = -1;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GetPKICertificate.prototype['token'] = undefined;

/**
 * Updated certificate lifetime in seconds (must be less than the Certificate Issuer default TTL)
 * @member {String} ttl
 */
GetPKICertificate.prototype['ttl'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GetPKICertificate.prototype['uid-token'] = undefined;

/**
 * The URI Subject Alternative Names to be included in the PKI certificate (in a comma-separated list) (if CSR is supplied this flag is ignored and any URI.* names are taken from it)
 * @member {String} uri-sans
 */
GetPKICertificate.prototype['uri-sans'] = undefined;






export default GetPKICertificate;

