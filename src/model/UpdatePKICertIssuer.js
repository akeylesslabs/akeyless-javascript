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
 * The UpdatePKICertIssuer model module.
 * @module model/UpdatePKICertIssuer
 * @version 2.16.3
 */
class UpdatePKICertIssuer {
    /**
     * Constructs a new <code>UpdatePKICertIssuer</code>.
     * @alias module:model/UpdatePKICertIssuer
     * @param name {String} PKI certificate issuer name
     * @param signerKeyName {String} A key to sign the certificate with
     * @param ttl {Number} he requested Time To Live for the certificate, in seconds
     */
    constructor(name, signerKeyName, ttl) { 
        
        UpdatePKICertIssuer.initialize(this, name, signerKeyName, ttl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, signerKeyName, ttl) { 
        obj['name'] = name;
        obj['signer-key-name'] = signerKeyName;
        obj['ttl'] = ttl;
    }

    /**
     * Constructs a <code>UpdatePKICertIssuer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePKICertIssuer} obj Optional instance to populate.
     * @return {module:model/UpdatePKICertIssuer} The populated <code>UpdatePKICertIssuer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePKICertIssuer();

            if (data.hasOwnProperty('add-tag')) {
                obj['add-tag'] = ApiClient.convertToType(data['add-tag'], ['String']);
            }
            if (data.hasOwnProperty('allow-any-name')) {
                obj['allow-any-name'] = ApiClient.convertToType(data['allow-any-name'], 'Boolean');
            }
            if (data.hasOwnProperty('allow-subdomains')) {
                obj['allow-subdomains'] = ApiClient.convertToType(data['allow-subdomains'], 'Boolean');
            }
            if (data.hasOwnProperty('allowed-domains')) {
                obj['allowed-domains'] = ApiClient.convertToType(data['allowed-domains'], 'String');
            }
            if (data.hasOwnProperty('allowed-uri-sans')) {
                obj['allowed-uri-sans'] = ApiClient.convertToType(data['allowed-uri-sans'], 'String');
            }
            if (data.hasOwnProperty('client-flag')) {
                obj['client-flag'] = ApiClient.convertToType(data['client-flag'], 'Boolean');
            }
            if (data.hasOwnProperty('code-signing-flag')) {
                obj['code-signing-flag'] = ApiClient.convertToType(data['code-signing-flag'], 'Boolean');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('key-usage')) {
                obj['key-usage'] = ApiClient.convertToType(data['key-usage'], 'String');
            }
            if (data.hasOwnProperty('locality')) {
                obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('not-enforce-hostnames')) {
                obj['not-enforce-hostnames'] = ApiClient.convertToType(data['not-enforce-hostnames'], 'Boolean');
            }
            if (data.hasOwnProperty('not-require-cn')) {
                obj['not-require-cn'] = ApiClient.convertToType(data['not-require-cn'], 'Boolean');
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
            if (data.hasOwnProperty('rm-tag')) {
                obj['rm-tag'] = ApiClient.convertToType(data['rm-tag'], ['String']);
            }
            if (data.hasOwnProperty('server-flag')) {
                obj['server-flag'] = ApiClient.convertToType(data['server-flag'], 'Boolean');
            }
            if (data.hasOwnProperty('signer-key-name')) {
                obj['signer-key-name'] = ApiClient.convertToType(data['signer-key-name'], 'String');
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
        }
        return obj;
    }


}

/**
 * List of the new tags that will be attached to this item
 * @member {Array.<String>} add-tag
 */
UpdatePKICertIssuer.prototype['add-tag'] = undefined;

/**
 * If set, clients can request certificates for any CN
 * @member {Boolean} allow-any-name
 */
UpdatePKICertIssuer.prototype['allow-any-name'] = undefined;

/**
 * If set, clients can request certificates for subdomains and wildcard subdomains of the allowed domains
 * @member {Boolean} allow-subdomains
 */
UpdatePKICertIssuer.prototype['allow-subdomains'] = undefined;

/**
 * A list of the allowed domains that clients can request to be included in the certificate (in a comma-delimited list)
 * @member {String} allowed-domains
 */
UpdatePKICertIssuer.prototype['allowed-domains'] = undefined;

/**
 * A list of the allowed URIs that clients can request to be included in the certificate as part of the URI Subject Alternative Names (in a comma-delimited list)
 * @member {String} allowed-uri-sans
 */
UpdatePKICertIssuer.prototype['allowed-uri-sans'] = undefined;

/**
 * If set, certificates will be flagged for client auth use
 * @member {Boolean} client-flag
 */
UpdatePKICertIssuer.prototype['client-flag'] = undefined;

/**
 * If set, certificates will be flagged for code signing use
 * @member {Boolean} code-signing-flag
 */
UpdatePKICertIssuer.prototype['code-signing-flag'] = undefined;

/**
 * A comma-separated list of the country that will be set in the issued certificate
 * @member {String} country
 */
UpdatePKICertIssuer.prototype['country'] = undefined;

/**
 * key-usage
 * @member {String} key-usage
 * @default 'DigitalSignature,KeyAgreement,KeyEncipherment'
 */
UpdatePKICertIssuer.prototype['key-usage'] = 'DigitalSignature,KeyAgreement,KeyEncipherment';

/**
 * A comma-separated list of the locality that will be set in the issued certificate
 * @member {String} locality
 */
UpdatePKICertIssuer.prototype['locality'] = undefined;

/**
 * A metadata about the issuer
 * @member {String} metadata
 */
UpdatePKICertIssuer.prototype['metadata'] = undefined;

/**
 * PKI certificate issuer name
 * @member {String} name
 */
UpdatePKICertIssuer.prototype['name'] = undefined;

/**
 * New item name
 * @member {String} new-name
 */
UpdatePKICertIssuer.prototype['new-name'] = undefined;

/**
 * If set, any names are allowed for CN and SANs in the certificate and not only a valid host name
 * @member {Boolean} not-enforce-hostnames
 */
UpdatePKICertIssuer.prototype['not-enforce-hostnames'] = undefined;

/**
 * If set, clients can request certificates without a CN
 * @member {Boolean} not-require-cn
 */
UpdatePKICertIssuer.prototype['not-require-cn'] = undefined;

/**
 * A comma-separated list of organizational units (OU) that will be set in the issued certificate
 * @member {String} organizational-units
 */
UpdatePKICertIssuer.prototype['organizational-units'] = undefined;

/**
 * A comma-separated list of organizations (O) that will be set in the issued certificate
 * @member {String} organizations
 */
UpdatePKICertIssuer.prototype['organizations'] = undefined;

/**
 * A comma-separated list of the postal code that will be set in the issued certificate
 * @member {String} postal-code
 */
UpdatePKICertIssuer.prototype['postal-code'] = undefined;

/**
 * A comma-separated list of the province that will be set in the issued certificate
 * @member {String} province
 */
UpdatePKICertIssuer.prototype['province'] = undefined;

/**
 * List of the existent tags that will be removed from this item
 * @member {Array.<String>} rm-tag
 */
UpdatePKICertIssuer.prototype['rm-tag'] = undefined;

/**
 * If set, certificates will be flagged for server auth use
 * @member {Boolean} server-flag
 */
UpdatePKICertIssuer.prototype['server-flag'] = undefined;

/**
 * A key to sign the certificate with
 * @member {String} signer-key-name
 */
UpdatePKICertIssuer.prototype['signer-key-name'] = undefined;

/**
 * A comma-separated list of the street address that will be set in the issued certificate
 * @member {String} street-address
 */
UpdatePKICertIssuer.prototype['street-address'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdatePKICertIssuer.prototype['token'] = undefined;

/**
 * he requested Time To Live for the certificate, in seconds
 * @member {Number} ttl
 */
UpdatePKICertIssuer.prototype['ttl'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdatePKICertIssuer.prototype['uid-token'] = undefined;






export default UpdatePKICertIssuer;

