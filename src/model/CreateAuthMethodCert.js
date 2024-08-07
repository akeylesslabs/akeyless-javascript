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
 * The CreateAuthMethodCert model module.
 * @module model/CreateAuthMethodCert
 * @version 4.2.2
 */
class CreateAuthMethodCert {
    /**
     * Constructs a new <code>CreateAuthMethodCert</code>.
     * createAuthMethodCert is a command that creates a new auth method that will be able to authenticate using a client certificate. [Deprecated: Use auth-method-create-cert command]
     * @alias module:model/CreateAuthMethodCert
     * @param name {String} Auth Method name
     * @param uniqueIdentifier {String} A unique identifier (ID) value should be configured, such as common_name or organizational_unit Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
     */
    constructor(name, uniqueIdentifier) { 
        
        CreateAuthMethodCert.initialize(this, name, uniqueIdentifier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, uniqueIdentifier) { 
        obj['name'] = name;
        obj['unique-identifier'] = uniqueIdentifier;
    }

    /**
     * Constructs a <code>CreateAuthMethodCert</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodCert} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodCert} The populated <code>CreateAuthMethodCert</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodCert();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('allowed-cors')) {
                obj['allowed-cors'] = ApiClient.convertToType(data['allowed-cors'], 'String');
            }
            if (data.hasOwnProperty('audit-logs-claims')) {
                obj['audit-logs-claims'] = ApiClient.convertToType(data['audit-logs-claims'], ['String']);
            }
            if (data.hasOwnProperty('bound-common-names')) {
                obj['bound-common-names'] = ApiClient.convertToType(data['bound-common-names'], ['String']);
            }
            if (data.hasOwnProperty('bound-dns-sans')) {
                obj['bound-dns-sans'] = ApiClient.convertToType(data['bound-dns-sans'], ['String']);
            }
            if (data.hasOwnProperty('bound-email-sans')) {
                obj['bound-email-sans'] = ApiClient.convertToType(data['bound-email-sans'], ['String']);
            }
            if (data.hasOwnProperty('bound-extensions')) {
                obj['bound-extensions'] = ApiClient.convertToType(data['bound-extensions'], ['String']);
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('bound-organizational-units')) {
                obj['bound-organizational-units'] = ApiClient.convertToType(data['bound-organizational-units'], ['String']);
            }
            if (data.hasOwnProperty('bound-uri-sans')) {
                obj['bound-uri-sans'] = ApiClient.convertToType(data['bound-uri-sans'], ['String']);
            }
            if (data.hasOwnProperty('certificate-data')) {
                obj['certificate-data'] = ApiClient.convertToType(data['certificate-data'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('force-sub-claims')) {
                obj['force-sub-claims'] = ApiClient.convertToType(data['force-sub-claims'], 'Boolean');
            }
            if (data.hasOwnProperty('gw-bound-ips')) {
                obj['gw-bound-ips'] = ApiClient.convertToType(data['gw-bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('jwt-ttl')) {
                obj['jwt-ttl'] = ApiClient.convertToType(data['jwt-ttl'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('product-type')) {
                obj['product-type'] = ApiClient.convertToType(data['product-type'], ['String']);
            }
            if (data.hasOwnProperty('revoked-cert-ids')) {
                obj['revoked-cert-ids'] = ApiClient.convertToType(data['revoked-cert-ids'], ['String']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('unique-identifier')) {
                obj['unique-identifier'] = ApiClient.convertToType(data['unique-identifier'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
CreateAuthMethodCert.prototype['access-expires'] = 0;

/**
 * Comma separated list of allowed CORS domains to be validated as part of the authentication flow.
 * @member {String} allowed-cors
 */
CreateAuthMethodCert.prototype['allowed-cors'] = undefined;

/**
 * Subclaims to include in audit logs, e.g \"--audit-logs-claims email --audit-logs-claims username\"
 * @member {Array.<String>} audit-logs-claims
 */
CreateAuthMethodCert.prototype['audit-logs-claims'] = undefined;

/**
 * A list of names. At least one must exist in the Common Name. Supports globbing.
 * @member {Array.<String>} bound-common-names
 */
CreateAuthMethodCert.prototype['bound-common-names'] = undefined;

/**
 * A list of DNS names. At least one must exist in the SANs. Supports globbing.
 * @member {Array.<String>} bound-dns-sans
 */
CreateAuthMethodCert.prototype['bound-dns-sans'] = undefined;

/**
 * A list of Email Addresses. At least one must exist in the SANs. Supports globbing.
 * @member {Array.<String>} bound-email-sans
 */
CreateAuthMethodCert.prototype['bound-email-sans'] = undefined;

/**
 * A list of extensions formatted as \"oid:value\". Expects the extension value to be some type of ASN1 encoded string. All values much match. Supports globbing on \"value\".
 * @member {Array.<String>} bound-extensions
 */
CreateAuthMethodCert.prototype['bound-extensions'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
CreateAuthMethodCert.prototype['bound-ips'] = undefined;

/**
 * A list of Organizational Units names. At least one must exist in the OU field.
 * @member {Array.<String>} bound-organizational-units
 */
CreateAuthMethodCert.prototype['bound-organizational-units'] = undefined;

/**
 * A list of URIs. At least one must exist in the SANs. Supports globbing.
 * @member {Array.<String>} bound-uri-sans
 */
CreateAuthMethodCert.prototype['bound-uri-sans'] = undefined;

/**
 * The certificate data in base64, if no file was provided
 * @member {String} certificate-data
 */
CreateAuthMethodCert.prototype['certificate-data'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
CreateAuthMethodCert.prototype['delete_protection'] = undefined;

/**
 * Auth Method description
 * @member {String} description
 */
CreateAuthMethodCert.prototype['description'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
CreateAuthMethodCert.prototype['force-sub-claims'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
CreateAuthMethodCert.prototype['gw-bound-ips'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateAuthMethodCert.prototype['json'] = false;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
CreateAuthMethodCert.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
CreateAuthMethodCert.prototype['name'] = undefined;

/**
 * Choose the relevant product type for the auth method [sm, sra, pm, dp, ca]
 * @member {Array.<String>} product-type
 */
CreateAuthMethodCert.prototype['product-type'] = undefined;

/**
 * A list of revoked cert ids
 * @member {Array.<String>} revoked-cert-ids
 */
CreateAuthMethodCert.prototype['revoked-cert-ids'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateAuthMethodCert.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateAuthMethodCert.prototype['uid-token'] = undefined;

/**
 * A unique identifier (ID) value should be configured, such as common_name or organizational_unit Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
 * @member {String} unique-identifier
 */
CreateAuthMethodCert.prototype['unique-identifier'] = undefined;






export default CreateAuthMethodCert;

