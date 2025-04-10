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
 * @version 5.0.2
 */
class UpdatePKICertIssuer {
    /**
     * Constructs a new <code>UpdatePKICertIssuer</code>.
     * @alias module:model/UpdatePKICertIssuer
     * @param name {String} PKI certificate issuer name
     * @param ttl {String} The maximum requested Time To Live for issued certificates, in seconds. In case of Public CA, this is based on the CA target's supported maximum TTLs
     */
    constructor(name, ttl) { 
        
        UpdatePKICertIssuer.initialize(this, name, ttl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, ttl) { 
        obj['critical-key-usage'] = 'true';
        obj['json'] = false;
        obj['key-usage'] = 'DigitalSignature,KeyAgreement,KeyEncipherment';
        obj['max-path-len'] = -1;
        obj['name'] = name;
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
            if (data.hasOwnProperty('allow-copy-ext-from-csr')) {
                obj['allow-copy-ext-from-csr'] = ApiClient.convertToType(data['allow-copy-ext-from-csr'], 'Boolean');
            }
            if (data.hasOwnProperty('allow-subdomains')) {
                obj['allow-subdomains'] = ApiClient.convertToType(data['allow-subdomains'], 'Boolean');
            }
            if (data.hasOwnProperty('allowed-domains')) {
                obj['allowed-domains'] = ApiClient.convertToType(data['allowed-domains'], 'String');
            }
            if (data.hasOwnProperty('allowed-extra-extensions')) {
                obj['allowed-extra-extensions'] = ApiClient.convertToType(data['allowed-extra-extensions'], 'String');
            }
            if (data.hasOwnProperty('allowed-ip-sans')) {
                obj['allowed-ip-sans'] = ApiClient.convertToType(data['allowed-ip-sans'], 'String');
            }
            if (data.hasOwnProperty('allowed-uri-sans')) {
                obj['allowed-uri-sans'] = ApiClient.convertToType(data['allowed-uri-sans'], 'String');
            }
            if (data.hasOwnProperty('auto-renew')) {
                obj['auto-renew'] = ApiClient.convertToType(data['auto-renew'], 'Boolean');
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
            if (data.hasOwnProperty('create-private-crl')) {
                obj['create-private-crl'] = ApiClient.convertToType(data['create-private-crl'], 'Boolean');
            }
            if (data.hasOwnProperty('create-public-crl')) {
                obj['create-public-crl'] = ApiClient.convertToType(data['create-public-crl'], 'Boolean');
            }
            if (data.hasOwnProperty('critical-key-usage')) {
                obj['critical-key-usage'] = ApiClient.convertToType(data['critical-key-usage'], 'String');
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
            if (data.hasOwnProperty('enable-acme')) {
                obj['enable-acme'] = ApiClient.convertToType(data['enable-acme'], 'Boolean');
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
            if (data.hasOwnProperty('max-path-len')) {
                obj['max-path-len'] = ApiClient.convertToType(data['max-path-len'], 'Number');
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
            if (data.hasOwnProperty('protect-certificates')) {
                obj['protect-certificates'] = ApiClient.convertToType(data['protect-certificates'], 'Boolean');
            }
            if (data.hasOwnProperty('province')) {
                obj['province'] = ApiClient.convertToType(data['province'], 'String');
            }
            if (data.hasOwnProperty('rm-tag')) {
                obj['rm-tag'] = ApiClient.convertToType(data['rm-tag'], ['String']);
            }
            if (data.hasOwnProperty('scheduled-renew')) {
                obj['scheduled-renew'] = ApiClient.convertToType(data['scheduled-renew'], 'Number');
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
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdatePKICertIssuer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdatePKICertIssuer</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdatePKICertIssuer.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['add-tag'])) {
            throw new Error("Expected the field `add-tag` to be an array in the JSON data but got " + data['add-tag']);
        }
        // ensure the json data is a string
        if (data['allowed-domains'] && !(typeof data['allowed-domains'] === 'string' || data['allowed-domains'] instanceof String)) {
            throw new Error("Expected the field `allowed-domains` to be a primitive type in the JSON string but got " + data['allowed-domains']);
        }
        // ensure the json data is a string
        if (data['allowed-extra-extensions'] && !(typeof data['allowed-extra-extensions'] === 'string' || data['allowed-extra-extensions'] instanceof String)) {
            throw new Error("Expected the field `allowed-extra-extensions` to be a primitive type in the JSON string but got " + data['allowed-extra-extensions']);
        }
        // ensure the json data is a string
        if (data['allowed-ip-sans'] && !(typeof data['allowed-ip-sans'] === 'string' || data['allowed-ip-sans'] instanceof String)) {
            throw new Error("Expected the field `allowed-ip-sans` to be a primitive type in the JSON string but got " + data['allowed-ip-sans']);
        }
        // ensure the json data is a string
        if (data['allowed-uri-sans'] && !(typeof data['allowed-uri-sans'] === 'string' || data['allowed-uri-sans'] instanceof String)) {
            throw new Error("Expected the field `allowed-uri-sans` to be a primitive type in the JSON string but got " + data['allowed-uri-sans']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is a string
        if (data['critical-key-usage'] && !(typeof data['critical-key-usage'] === 'string' || data['critical-key-usage'] instanceof String)) {
            throw new Error("Expected the field `critical-key-usage` to be a primitive type in the JSON string but got " + data['critical-key-usage']);
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['destination-path'] && !(typeof data['destination-path'] === 'string' || data['destination-path'] instanceof String)) {
            throw new Error("Expected the field `destination-path` to be a primitive type in the JSON string but got " + data['destination-path']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['expiration-event-in'])) {
            throw new Error("Expected the field `expiration-event-in` to be an array in the JSON data but got " + data['expiration-event-in']);
        }
        // ensure the json data is a string
        if (data['gw-cluster-url'] && !(typeof data['gw-cluster-url'] === 'string' || data['gw-cluster-url'] instanceof String)) {
            throw new Error("Expected the field `gw-cluster-url` to be a primitive type in the JSON string but got " + data['gw-cluster-url']);
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
        if (data['metadata'] && !(typeof data['metadata'] === 'string' || data['metadata'] instanceof String)) {
            throw new Error("Expected the field `metadata` to be a primitive type in the JSON string but got " + data['metadata']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['new-name'] && !(typeof data['new-name'] === 'string' || data['new-name'] instanceof String)) {
            throw new Error("Expected the field `new-name` to be a primitive type in the JSON string but got " + data['new-name']);
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
        // ensure the json data is an array
        if (!Array.isArray(data['rm-tag'])) {
            throw new Error("Expected the field `rm-tag` to be an array in the JSON data but got " + data['rm-tag']);
        }
        // ensure the json data is a string
        if (data['signer-key-name'] && !(typeof data['signer-key-name'] === 'string' || data['signer-key-name'] instanceof String)) {
            throw new Error("Expected the field `signer-key-name` to be a primitive type in the JSON string but got " + data['signer-key-name']);
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
        if (data['ttl'] && !(typeof data['ttl'] === 'string' || data['ttl'] instanceof String)) {
            throw new Error("Expected the field `ttl` to be a primitive type in the JSON string but got " + data['ttl']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

UpdatePKICertIssuer.RequiredProperties = ["name", "ttl"];

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
 * If set, will allow copying the extra extensions from the csr file (if given)
 * @member {Boolean} allow-copy-ext-from-csr
 */
UpdatePKICertIssuer.prototype['allow-copy-ext-from-csr'] = undefined;

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
 * A json string containing the allowed extra extensions for the pki cert issuer
 * @member {String} allowed-extra-extensions
 */
UpdatePKICertIssuer.prototype['allowed-extra-extensions'] = undefined;

/**
 * A list of the allowed CIDRs for ips that clients can request to be included in the certificate as part of the IP Subject Alternative Names (in a comma-delimited list)
 * @member {String} allowed-ip-sans
 */
UpdatePKICertIssuer.prototype['allowed-ip-sans'] = undefined;

/**
 * A list of the allowed URIs that clients can request to be included in the certificate as part of the URI Subject Alternative Names (in a comma-delimited list)
 * @member {String} allowed-uri-sans
 */
UpdatePKICertIssuer.prototype['allowed-uri-sans'] = undefined;

/**
 * Automatically renew certificates before expiration
 * @member {Boolean} auto-renew
 */
UpdatePKICertIssuer.prototype['auto-renew'] = undefined;

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
 * A comma-separated list of countries that will be set in the issued certificate
 * @member {String} country
 */
UpdatePKICertIssuer.prototype['country'] = undefined;

/**
 * Set this to allow the issuer will expose a CRL endpoint in the Gateway
 * @member {Boolean} create-private-crl
 */
UpdatePKICertIssuer.prototype['create-private-crl'] = undefined;

/**
 * Set this to allow the cert issuer will expose a public CRL endpoint
 * @member {Boolean} create-public-crl
 */
UpdatePKICertIssuer.prototype['create-public-crl'] = undefined;

/**
 * Mark key usage as critical [true/false]
 * @member {String} critical-key-usage
 * @default 'true'
 */
UpdatePKICertIssuer.prototype['critical-key-usage'] = 'true';

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
UpdatePKICertIssuer.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
UpdatePKICertIssuer.prototype['description'] = undefined;

/**
 * A path in which to save generated certificates
 * @member {String} destination-path
 */
UpdatePKICertIssuer.prototype['destination-path'] = undefined;

/**
 * If set, the cert issuer will support the acme protocol
 * @member {Boolean} enable-acme
 */
UpdatePKICertIssuer.prototype['enable-acme'] = undefined;

/**
 * How many days before the expiration of the certificate would you like to be notified.
 * @member {Array.<String>} expiration-event-in
 */
UpdatePKICertIssuer.prototype['expiration-event-in'] = undefined;

/**
 * The GW cluster URL to issue the certificate from. Required in Public CA mode, to allow CRLs on private CA, or to enable ACME
 * @member {String} gw-cluster-url
 */
UpdatePKICertIssuer.prototype['gw-cluster-url'] = undefined;

/**
 * If set, the basic constraints extension will be added to certificate
 * @member {Boolean} is-ca
 */
UpdatePKICertIssuer.prototype['is-ca'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdatePKICertIssuer.prototype['json'] = false;

/**
 * key-usage
 * @member {String} key-usage
 * @default 'DigitalSignature,KeyAgreement,KeyEncipherment'
 */
UpdatePKICertIssuer.prototype['key-usage'] = 'DigitalSignature,KeyAgreement,KeyEncipherment';

/**
 * A comma-separated list of localities that will be set in the issued certificate
 * @member {String} locality
 */
UpdatePKICertIssuer.prototype['locality'] = undefined;

/**
 * The maximum path length for the generated certificate. -1, means unlimited
 * @member {Number} max-path-len
 * @default -1
 */
UpdatePKICertIssuer.prototype['max-path-len'] = -1;

/**
 * Deprecated - use description
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
 * A comma-separated list of postal codes that will be set in the issued certificate
 * @member {String} postal-code
 */
UpdatePKICertIssuer.prototype['postal-code'] = undefined;

/**
 * Whether to protect generated certificates from deletion
 * @member {Boolean} protect-certificates
 */
UpdatePKICertIssuer.prototype['protect-certificates'] = undefined;

/**
 * A comma-separated list of provinces that will be set in the issued certificate
 * @member {String} province
 */
UpdatePKICertIssuer.prototype['province'] = undefined;

/**
 * List of the existent tags that will be removed from this item
 * @member {Array.<String>} rm-tag
 */
UpdatePKICertIssuer.prototype['rm-tag'] = undefined;

/**
 * Number of days before expiration to renew certificates
 * @member {Number} scheduled-renew
 */
UpdatePKICertIssuer.prototype['scheduled-renew'] = undefined;

/**
 * If set, certificates will be flagged for server auth use
 * @member {Boolean} server-flag
 */
UpdatePKICertIssuer.prototype['server-flag'] = undefined;

/**
 * A key to sign the certificate with, required in Private CA mode
 * @member {String} signer-key-name
 */
UpdatePKICertIssuer.prototype['signer-key-name'] = undefined;

/**
 * A comma-separated list of street addresses that will be set in the issued certificate
 * @member {String} street-address
 */
UpdatePKICertIssuer.prototype['street-address'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdatePKICertIssuer.prototype['token'] = undefined;

/**
 * The maximum requested Time To Live for issued certificates, in seconds. In case of Public CA, this is based on the CA target's supported maximum TTLs
 * @member {String} ttl
 */
UpdatePKICertIssuer.prototype['ttl'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdatePKICertIssuer.prototype['uid-token'] = undefined;






export default UpdatePKICertIssuer;

