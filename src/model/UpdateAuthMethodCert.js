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
 * The UpdateAuthMethodCert model module.
 * @module model/UpdateAuthMethodCert
 * @version 3.1.0
 */
class UpdateAuthMethodCert {
    /**
     * Constructs a new <code>UpdateAuthMethodCert</code>.
     * updateAuthMethodCert is a command that updates a new auth method that will be able to authenticate using a client certificae
     * @alias module:model/UpdateAuthMethodCert
     * @param name {String} Auth Method name
     * @param uniqueIdentifier {String} A unique identifier (ID) value should be configured, such as common_name or organizational_unit Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
     */
    constructor(name, uniqueIdentifier) { 
        
        UpdateAuthMethodCert.initialize(this, name, uniqueIdentifier);
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
     * Constructs a <code>UpdateAuthMethodCert</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAuthMethodCert} obj Optional instance to populate.
     * @return {module:model/UpdateAuthMethodCert} The populated <code>UpdateAuthMethodCert</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAuthMethodCert();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
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
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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
UpdateAuthMethodCert.prototype['access-expires'] = 0;

/**
 * A list of names. At least one must exist in the Common Name. Supports globbing.
 * @member {Array.<String>} bound-common-names
 */
UpdateAuthMethodCert.prototype['bound-common-names'] = undefined;

/**
 * A list of DNS names. At least one must exist in the SANs. Supports globbing.
 * @member {Array.<String>} bound-dns-sans
 */
UpdateAuthMethodCert.prototype['bound-dns-sans'] = undefined;

/**
 * A list of Email Addresses. At least one must exist in the SANs. Supports globbing.
 * @member {Array.<String>} bound-email-sans
 */
UpdateAuthMethodCert.prototype['bound-email-sans'] = undefined;

/**
 * A list of extensions formatted as \"oid:value\". Expects the extension value to be some type of ASN1 encoded string. All values much match. Supports globbing on \"value\".
 * @member {Array.<String>} bound-extensions
 */
UpdateAuthMethodCert.prototype['bound-extensions'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
UpdateAuthMethodCert.prototype['bound-ips'] = undefined;

/**
 * A list of Organizational Units names. At least one must exist in the OU field.
 * @member {Array.<String>} bound-organizational-units
 */
UpdateAuthMethodCert.prototype['bound-organizational-units'] = undefined;

/**
 * A list of URIs. At least one must exist in the SANs. Supports globbing.
 * @member {Array.<String>} bound-uri-sans
 */
UpdateAuthMethodCert.prototype['bound-uri-sans'] = undefined;

/**
 * The certificate data in base64, if no file was provided
 * @member {String} certificate-data
 */
UpdateAuthMethodCert.prototype['certificate-data'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
UpdateAuthMethodCert.prototype['force-sub-claims'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
UpdateAuthMethodCert.prototype['gw-bound-ips'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
UpdateAuthMethodCert.prototype['json'] = undefined;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 */
UpdateAuthMethodCert.prototype['jwt-ttl'] = undefined;

/**
 * Auth Method name
 * @member {String} name
 */
UpdateAuthMethodCert.prototype['name'] = undefined;

/**
 * Auth Method new name
 * @member {String} new-name
 */
UpdateAuthMethodCert.prototype['new-name'] = undefined;

/**
 * A list of revoked cert ids
 * @member {Array.<String>} revoked-cert-ids
 */
UpdateAuthMethodCert.prototype['revoked-cert-ids'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateAuthMethodCert.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateAuthMethodCert.prototype['uid-token'] = undefined;

/**
 * A unique identifier (ID) value should be configured, such as common_name or organizational_unit Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
 * @member {String} unique-identifier
 */
UpdateAuthMethodCert.prototype['unique-identifier'] = undefined;






export default UpdateAuthMethodCert;

