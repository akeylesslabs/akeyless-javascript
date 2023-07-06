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
 * The CreatePKICertIssuer model module.
 * @module model/CreatePKICertIssuer
 * @version 3.3.13
 */
class CreatePKICertIssuer {
    /**
     * Constructs a new <code>CreatePKICertIssuer</code>.
     * @alias module:model/CreatePKICertIssuer
     * @param name {String} PKI certificate issuer name
     * @param signerKeyName {String} A key to sign the certificate with, required in Private CA mode
     * @param ttl {Number} The maximum requested Time To Live for issued certificates, in seconds. In case of Public CA, this is based on the CA target's supported maximum TTLs
     */
    constructor(name, signerKeyName, ttl) { 
        
        CreatePKICertIssuer.initialize(this, name, signerKeyName, ttl);
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
     * Constructs a <code>CreatePKICertIssuer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePKICertIssuer} obj Optional instance to populate.
     * @return {module:model/CreatePKICertIssuer} The populated <code>CreatePKICertIssuer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePKICertIssuer();

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
            if (data.hasOwnProperty('ca-target')) {
                obj['ca-target'] = ApiClient.convertToType(data['ca-target'], 'String');
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
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('destination-path')) {
                obj['destination-path'] = ApiClient.convertToType(data['destination-path'], 'String');
            }
            if (data.hasOwnProperty('expiration-event-in')) {
                obj['expiration-event-in'] = ApiClient.convertToType(data['expiration-event-in'], ['String']);
            }
            if (data.hasOwnProperty('gw-cluster-url')) {
                obj['gw-cluster-url'] = ApiClient.convertToType(data['gw-cluster-url'], 'String');
            }
            if (data.hasOwnProperty('is-ca')) {
                obj['is-ca'] = ApiClient.convertToType(data['is-ca'], 'Boolean');
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
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
            if (data.hasOwnProperty('protect-certificates')) {
                obj['protect-certificates'] = ApiClient.convertToType(data['protect-certificates'], 'Boolean');
            }
            if (data.hasOwnProperty('province')) {
                obj['province'] = ApiClient.convertToType(data['province'], 'String');
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
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], ['String']);
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
 * If set, clients can request certificates for any CN
 * @member {Boolean} allow-any-name
 */
CreatePKICertIssuer.prototype['allow-any-name'] = undefined;

/**
 * If set, clients can request certificates for subdomains and wildcard subdomains of the allowed domains
 * @member {Boolean} allow-subdomains
 */
CreatePKICertIssuer.prototype['allow-subdomains'] = undefined;

/**
 * A list of the allowed domains that clients can request to be included in the certificate (in a comma-delimited list)
 * @member {String} allowed-domains
 */
CreatePKICertIssuer.prototype['allowed-domains'] = undefined;

/**
 * A list of the allowed URIs that clients can request to be included in the certificate as part of the URI Subject Alternative Names (in a comma-delimited list)
 * @member {String} allowed-uri-sans
 */
CreatePKICertIssuer.prototype['allowed-uri-sans'] = undefined;

/**
 * The name of an existing CA target to attach this PKI Certificate Issuer to, required in Public CA mode
 * @member {String} ca-target
 */
CreatePKICertIssuer.prototype['ca-target'] = undefined;

/**
 * If set, certificates will be flagged for client auth use
 * @member {Boolean} client-flag
 */
CreatePKICertIssuer.prototype['client-flag'] = undefined;

/**
 * If set, certificates will be flagged for code signing use
 * @member {Boolean} code-signing-flag
 */
CreatePKICertIssuer.prototype['code-signing-flag'] = undefined;

/**
 * A comma-separated list of countries that will be set in the issued certificate
 * @member {String} country
 */
CreatePKICertIssuer.prototype['country'] = undefined;

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
CreatePKICertIssuer.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreatePKICertIssuer.prototype['description'] = undefined;

/**
 * A path in which to save generated certificates
 * @member {String} destination-path
 */
CreatePKICertIssuer.prototype['destination-path'] = undefined;

/**
 * How many days before the expiration of the certificate would you like to be notified.
 * @member {Array.<String>} expiration-event-in
 */
CreatePKICertIssuer.prototype['expiration-event-in'] = undefined;

/**
 * The GW cluster URL to issue the certificate from, required in Public CA mode
 * @member {String} gw-cluster-url
 */
CreatePKICertIssuer.prototype['gw-cluster-url'] = undefined;

/**
 * If set, the basic constraints extension will be added to certificate
 * @member {Boolean} is-ca
 */
CreatePKICertIssuer.prototype['is-ca'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreatePKICertIssuer.prototype['json'] = false;

/**
 * key-usage
 * @member {String} key-usage
 * @default 'DigitalSignature,KeyAgreement,KeyEncipherment'
 */
CreatePKICertIssuer.prototype['key-usage'] = 'DigitalSignature,KeyAgreement,KeyEncipherment';

/**
 * A comma-separated list of localities that will be set in the issued certificate
 * @member {String} locality
 */
CreatePKICertIssuer.prototype['locality'] = undefined;

/**
 * Deprecated - use description
 * @member {String} metadata
 */
CreatePKICertIssuer.prototype['metadata'] = undefined;

/**
 * PKI certificate issuer name
 * @member {String} name
 */
CreatePKICertIssuer.prototype['name'] = undefined;

/**
 * If set, any names are allowed for CN and SANs in the certificate and not only a valid host name
 * @member {Boolean} not-enforce-hostnames
 */
CreatePKICertIssuer.prototype['not-enforce-hostnames'] = undefined;

/**
 * If set, clients can request certificates without a CN
 * @member {Boolean} not-require-cn
 */
CreatePKICertIssuer.prototype['not-require-cn'] = undefined;

/**
 * A comma-separated list of organizational units (OU) that will be set in the issued certificate
 * @member {String} organizational-units
 */
CreatePKICertIssuer.prototype['organizational-units'] = undefined;

/**
 * A comma-separated list of organizations (O) that will be set in the issued certificate
 * @member {String} organizations
 */
CreatePKICertIssuer.prototype['organizations'] = undefined;

/**
 * A comma-separated list of postal codes that will be set in the issued certificate
 * @member {String} postal-code
 */
CreatePKICertIssuer.prototype['postal-code'] = undefined;

/**
 * Whether to protect generated certificates from deletion
 * @member {Boolean} protect-certificates
 */
CreatePKICertIssuer.prototype['protect-certificates'] = undefined;

/**
 * A comma-separated list of provinces that will be set in the issued certificate
 * @member {String} province
 */
CreatePKICertIssuer.prototype['province'] = undefined;

/**
 * If set, certificates will be flagged for server auth use
 * @member {Boolean} server-flag
 */
CreatePKICertIssuer.prototype['server-flag'] = undefined;

/**
 * A key to sign the certificate with, required in Private CA mode
 * @member {String} signer-key-name
 * @default 'dummy_signer_key'
 */
CreatePKICertIssuer.prototype['signer-key-name'] = 'dummy_signer_key';

/**
 * A comma-separated list of street addresses that will be set in the issued certificate
 * @member {String} street-address
 */
CreatePKICertIssuer.prototype['street-address'] = undefined;

/**
 * List of the tags attached to this key
 * @member {Array.<String>} tag
 */
CreatePKICertIssuer.prototype['tag'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreatePKICertIssuer.prototype['token'] = undefined;

/**
 * The maximum requested Time To Live for issued certificates, in seconds. In case of Public CA, this is based on the CA target's supported maximum TTLs
 * @member {Number} ttl
 */
CreatePKICertIssuer.prototype['ttl'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreatePKICertIssuer.prototype['uid-token'] = undefined;






export default CreatePKICertIssuer;

