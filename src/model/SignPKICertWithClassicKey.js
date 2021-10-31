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
 * The SignPKICertWithClassicKey model module.
 * @module model/SignPKICertWithClassicKey
 * @version 2.5.12
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
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
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
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

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
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
SignPKICertWithClassicKey.prototype['password'] = undefined;

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
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
SignPKICertWithClassicKey.prototype['username'] = undefined;

/**
 * classic key version
 * @member {Number} version
 */
SignPKICertWithClassicKey.prototype['version'] = undefined;






export default SignPKICertWithClassicKey;

