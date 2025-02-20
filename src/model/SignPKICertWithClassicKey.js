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
 * The SignPKICertWithClassicKey model module.
 * @module model/SignPKICertWithClassicKey
 * @version 5.0.0
 */
class SignPKICertWithClassicKey {
    /**
     * Constructs a new <code>SignPKICertWithClassicKey</code>.
     * @alias module:model/SignPKICertWithClassicKey
     * @param displayId {String} The name of the key to use in the sign PKI Cert process
     * @param signingMethod {String} SigningMethod
     * @param ttl {Number} he requested Time To Live for the certificate, in seconds
     * @param version {Number} classic key version
     */
    constructor(displayId, signingMethod, ttl, version) { 
        
        SignPKICertWithClassicKey.initialize(this, displayId, signingMethod, ttl, version);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, displayId, signingMethod, ttl, version) { 
        obj['display-id'] = displayId;
        obj['json'] = false;
        obj['key-usage'] = 'DigitalSignature,KeyAgreement,KeyEncipherment';
        obj['signing-method'] = signingMethod;
        obj['ttl'] = ttl;
        obj['version'] = version;
    }

    /**
     * Constructs a <code>SignPKICertWithClassicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignPKICertWithClassicKey} obj Optional instance to populate.
     * @return {module:model/SignPKICertWithClassicKey} The populated <code>SignPKICertWithClassicKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignPKICertWithClassicKey();

            if (data.hasOwnProperty('common-name')) {
                obj['common-name'] = ApiClient.convertToType(data['common-name'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('display-id')) {
                obj['display-id'] = ApiClient.convertToType(data['display-id'], 'String');
            }
            if (data.hasOwnProperty('dns-names')) {
                obj['dns-names'] = ApiClient.convertToType(data['dns-names'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key-usage')) {
                obj['key-usage'] = ApiClient.convertToType(data['key-usage'], 'String');
            }
            if (data.hasOwnProperty('locality')) {
                obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
            }
            if (data.hasOwnProperty('organizational-units')) {
                obj['organizational-units'] = ApiClient.convertToType(data['organizational-units'], 'String');
            }
            if (data.hasOwnProperty('organizations')) {
                obj['organizations'] = ApiClient.convertToType(data['organizations'], 'String');
            }
            if (data.hasOwnProperty('postal-code')) {
                obj['postal-code'] = ApiClient.convertToType(data['postal-code'], 'String');
            }
            if (data.hasOwnProperty('province')) {
                obj['province'] = ApiClient.convertToType(data['province'], 'String');
            }
            if (data.hasOwnProperty('public-key-pem-data')) {
                obj['public-key-pem-data'] = ApiClient.convertToType(data['public-key-pem-data'], 'String');
            }
            if (data.hasOwnProperty('signing-method')) {
                obj['signing-method'] = ApiClient.convertToType(data['signing-method'], 'String');
            }
            if (data.hasOwnProperty('street-address')) {
                obj['street-address'] = ApiClient.convertToType(data['street-address'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('uri-sans')) {
                obj['uri-sans'] = ApiClient.convertToType(data['uri-sans'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SignPKICertWithClassicKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignPKICertWithClassicKey</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SignPKICertWithClassicKey.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['common-name'] && !(typeof data['common-name'] === 'string' || data['common-name'] instanceof String)) {
            throw new Error("Expected the field `common-name` to be a primitive type in the JSON string but got " + data['common-name']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is a string
        if (data['display-id'] && !(typeof data['display-id'] === 'string' || data['display-id'] instanceof String)) {
            throw new Error("Expected the field `display-id` to be a primitive type in the JSON string but got " + data['display-id']);
        }
        // ensure the json data is a string
        if (data['dns-names'] && !(typeof data['dns-names'] === 'string' || data['dns-names'] instanceof String)) {
            throw new Error("Expected the field `dns-names` to be a primitive type in the JSON string but got " + data['dns-names']);
        }
        // ensure the json data is a string
        if (data['key-usage'] && !(typeof data['key-usage'] === 'string' || data['key-usage'] instanceof String)) {
            throw new Error("Expected the field `key-usage` to be a primitive type in the JSON string but got " + data['key-usage']);
        }
        // ensure the json data is a string
        if (data['locality'] && !(typeof data['locality'] === 'string' || data['locality'] instanceof String)) {
            throw new Error("Expected the field `locality` to be a primitive type in the JSON string but got " + data['locality']);
        }
        // ensure the json data is a string
        if (data['organizational-units'] && !(typeof data['organizational-units'] === 'string' || data['organizational-units'] instanceof String)) {
            throw new Error("Expected the field `organizational-units` to be a primitive type in the JSON string but got " + data['organizational-units']);
        }
        // ensure the json data is a string
        if (data['organizations'] && !(typeof data['organizations'] === 'string' || data['organizations'] instanceof String)) {
            throw new Error("Expected the field `organizations` to be a primitive type in the JSON string but got " + data['organizations']);
        }
        // ensure the json data is a string
        if (data['postal-code'] && !(typeof data['postal-code'] === 'string' || data['postal-code'] instanceof String)) {
            throw new Error("Expected the field `postal-code` to be a primitive type in the JSON string but got " + data['postal-code']);
        }
        // ensure the json data is a string
        if (data['province'] && !(typeof data['province'] === 'string' || data['province'] instanceof String)) {
            throw new Error("Expected the field `province` to be a primitive type in the JSON string but got " + data['province']);
        }
        // ensure the json data is a string
        if (data['public-key-pem-data'] && !(typeof data['public-key-pem-data'] === 'string' || data['public-key-pem-data'] instanceof String)) {
            throw new Error("Expected the field `public-key-pem-data` to be a primitive type in the JSON string but got " + data['public-key-pem-data']);
        }
        // ensure the json data is a string
        if (data['signing-method'] && !(typeof data['signing-method'] === 'string' || data['signing-method'] instanceof String)) {
            throw new Error("Expected the field `signing-method` to be a primitive type in the JSON string but got " + data['signing-method']);
        }
        // ensure the json data is a string
        if (data['street-address'] && !(typeof data['street-address'] === 'string' || data['street-address'] instanceof String)) {
            throw new Error("Expected the field `street-address` to be a primitive type in the JSON string but got " + data['street-address']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
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

SignPKICertWithClassicKey.RequiredProperties = ["display-id", "signing-method", "ttl", "version"];

/**
 * The common name to be included in the PKI certificate
 * @member {String} common-name
 */
SignPKICertWithClassicKey.prototype['common-name'] = undefined;

/**
 * A comma-separated list of the country that will be set in the issued certificate
 * @member {String} country
 */
SignPKICertWithClassicKey.prototype['country'] = undefined;

/**
 * The name of the key to use in the sign PKI Cert process
 * @member {String} display-id
 */
SignPKICertWithClassicKey.prototype['display-id'] = undefined;

/**
 * DNS Names to be included in the PKI certificate (in a comma-delimited list)
 * @member {String} dns-names
 */
SignPKICertWithClassicKey.prototype['dns-names'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
SignPKICertWithClassicKey.prototype['json'] = false;

/**
 * key-usage
 * @member {String} key-usage
 * @default 'DigitalSignature,KeyAgreement,KeyEncipherment'
 */
SignPKICertWithClassicKey.prototype['key-usage'] = 'DigitalSignature,KeyAgreement,KeyEncipherment';

/**
 * A comma-separated list of the locality that will be set in the issued certificate
 * @member {String} locality
 */
SignPKICertWithClassicKey.prototype['locality'] = undefined;

/**
 * A comma-separated list of organizational units (OU) that will be set in the issued certificate
 * @member {String} organizational-units
 */
SignPKICertWithClassicKey.prototype['organizational-units'] = undefined;

/**
 * A comma-separated list of organizations (O) that will be set in the issued certificate
 * @member {String} organizations
 */
SignPKICertWithClassicKey.prototype['organizations'] = undefined;

/**
 * A comma-separated list of the postal code that will be set in the issued certificate
 * @member {String} postal-code
 */
SignPKICertWithClassicKey.prototype['postal-code'] = undefined;

/**
 * A comma-separated list of the province that will be set in the issued certificate
 * @member {String} province
 */
SignPKICertWithClassicKey.prototype['province'] = undefined;

/**
 * PublicKey using for signing in a PEM format.
 * @member {String} public-key-pem-data
 */
SignPKICertWithClassicKey.prototype['public-key-pem-data'] = undefined;

/**
 * SigningMethod
 * @member {String} signing-method
 */
SignPKICertWithClassicKey.prototype['signing-method'] = undefined;

/**
 * A comma-separated list of the street address that will be set in the issued certificate
 * @member {String} street-address
 */
SignPKICertWithClassicKey.prototype['street-address'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
SignPKICertWithClassicKey.prototype['token'] = undefined;

/**
 * he requested Time To Live for the certificate, in seconds
 * @member {Number} ttl
 */
SignPKICertWithClassicKey.prototype['ttl'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
SignPKICertWithClassicKey.prototype['uid-token'] = undefined;

/**
 * The URI Subject Alternative Names to be included in the PKI certificate (in a comma-delimited list)
 * @member {String} uri-sans
 */
SignPKICertWithClassicKey.prototype['uri-sans'] = undefined;

/**
 * classic key version
 * @member {Number} version
 */
SignPKICertWithClassicKey.prototype['version'] = undefined;






export default SignPKICertWithClassicKey;

