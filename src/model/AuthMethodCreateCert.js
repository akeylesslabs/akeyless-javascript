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
 * The AuthMethodCreateCert model module.
 * @module model/AuthMethodCreateCert
 * @version 5.0.1
 */
class AuthMethodCreateCert {
    /**
     * Constructs a new <code>AuthMethodCreateCert</code>.
     * authMethodCreateCert is a command that creates a new auth method that will be able to authenticate using a client certificate
     * @alias module:model/AuthMethodCreateCert
     * @param name {String} Auth Method name
     * @param uniqueIdentifier {String} A unique identifier (ID) value should be configured, such as common_name or organizational_unit Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
     */
    constructor(name, uniqueIdentifier) { 
        
        AuthMethodCreateCert.initialize(this, name, uniqueIdentifier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, uniqueIdentifier) { 
        obj['access-expires'] = 0;
        obj['json'] = false;
        obj['jwt-ttl'] = 0;
        obj['name'] = name;
        obj['unique-identifier'] = uniqueIdentifier;
    }

    /**
     * Constructs a <code>AuthMethodCreateCert</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthMethodCreateCert} obj Optional instance to populate.
     * @return {module:model/AuthMethodCreateCert} The populated <code>AuthMethodCreateCert</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthMethodCreateCert();

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
            if (data.hasOwnProperty('expiration-event-in')) {
                obj['expiration-event-in'] = ApiClient.convertToType(data['expiration-event-in'], ['String']);
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

    /**
     * Validates the JSON data with respect to <code>AuthMethodCreateCert</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthMethodCreateCert</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AuthMethodCreateCert.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['allowed-cors'] && !(typeof data['allowed-cors'] === 'string' || data['allowed-cors'] instanceof String)) {
            throw new Error("Expected the field `allowed-cors` to be a primitive type in the JSON string but got " + data['allowed-cors']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['audit-logs-claims'])) {
            throw new Error("Expected the field `audit-logs-claims` to be an array in the JSON data but got " + data['audit-logs-claims']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-common-names'])) {
            throw new Error("Expected the field `bound-common-names` to be an array in the JSON data but got " + data['bound-common-names']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-dns-sans'])) {
            throw new Error("Expected the field `bound-dns-sans` to be an array in the JSON data but got " + data['bound-dns-sans']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-email-sans'])) {
            throw new Error("Expected the field `bound-email-sans` to be an array in the JSON data but got " + data['bound-email-sans']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-extensions'])) {
            throw new Error("Expected the field `bound-extensions` to be an array in the JSON data but got " + data['bound-extensions']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-ips'])) {
            throw new Error("Expected the field `bound-ips` to be an array in the JSON data but got " + data['bound-ips']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-organizational-units'])) {
            throw new Error("Expected the field `bound-organizational-units` to be an array in the JSON data but got " + data['bound-organizational-units']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound-uri-sans'])) {
            throw new Error("Expected the field `bound-uri-sans` to be an array in the JSON data but got " + data['bound-uri-sans']);
        }
        // ensure the json data is a string
        if (data['certificate-data'] && !(typeof data['certificate-data'] === 'string' || data['certificate-data'] instanceof String)) {
            throw new Error("Expected the field `certificate-data` to be a primitive type in the JSON string but got " + data['certificate-data']);
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['expiration-event-in'])) {
            throw new Error("Expected the field `expiration-event-in` to be an array in the JSON data but got " + data['expiration-event-in']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['gw-bound-ips'])) {
            throw new Error("Expected the field `gw-bound-ips` to be an array in the JSON data but got " + data['gw-bound-ips']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['product-type'])) {
            throw new Error("Expected the field `product-type` to be an array in the JSON data but got " + data['product-type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['revoked-cert-ids'])) {
            throw new Error("Expected the field `revoked-cert-ids` to be an array in the JSON data but got " + data['revoked-cert-ids']);
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
        if (data['unique-identifier'] && !(typeof data['unique-identifier'] === 'string' || data['unique-identifier'] instanceof String)) {
            throw new Error("Expected the field `unique-identifier` to be a primitive type in the JSON string but got " + data['unique-identifier']);
        }

        return true;
    }


}

AuthMethodCreateCert.RequiredProperties = ["name", "unique-identifier"];

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
AuthMethodCreateCert.prototype['access-expires'] = 0;

/**
 * Comma separated list of allowed CORS domains to be validated as part of the authentication flow.
 * @member {String} allowed-cors
 */
AuthMethodCreateCert.prototype['allowed-cors'] = undefined;

/**
 * Subclaims to include in audit logs, e.g \"--audit-logs-claims email --audit-logs-claims username\"
 * @member {Array.<String>} audit-logs-claims
 */
AuthMethodCreateCert.prototype['audit-logs-claims'] = undefined;

/**
 * A list of names. At least one must exist in the Common Name. Supports globbing.
 * @member {Array.<String>} bound-common-names
 */
AuthMethodCreateCert.prototype['bound-common-names'] = undefined;

/**
 * A list of DNS names. At least one must exist in the SANs. Supports globbing.
 * @member {Array.<String>} bound-dns-sans
 */
AuthMethodCreateCert.prototype['bound-dns-sans'] = undefined;

/**
 * A list of Email Addresses. At least one must exist in the SANs. Supports globbing.
 * @member {Array.<String>} bound-email-sans
 */
AuthMethodCreateCert.prototype['bound-email-sans'] = undefined;

/**
 * A list of extensions formatted as \"oid:value\". Expects the extension value to be some type of ASN1 encoded string. All values much match. Supports globbing on \"value\".
 * @member {Array.<String>} bound-extensions
 */
AuthMethodCreateCert.prototype['bound-extensions'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
AuthMethodCreateCert.prototype['bound-ips'] = undefined;

/**
 * A list of Organizational Units names. At least one must exist in the OU field.
 * @member {Array.<String>} bound-organizational-units
 */
AuthMethodCreateCert.prototype['bound-organizational-units'] = undefined;

/**
 * A list of URIs. At least one must exist in the SANs. Supports globbing.
 * @member {Array.<String>} bound-uri-sans
 */
AuthMethodCreateCert.prototype['bound-uri-sans'] = undefined;

/**
 * The certificate data in base64, if no file was provided
 * @member {String} certificate-data
 */
AuthMethodCreateCert.prototype['certificate-data'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
AuthMethodCreateCert.prototype['delete_protection'] = undefined;

/**
 * Auth Method description
 * @member {String} description
 */
AuthMethodCreateCert.prototype['description'] = undefined;

/**
 * How many days before the expiration of the auth method would you like to be notified.
 * @member {Array.<String>} expiration-event-in
 */
AuthMethodCreateCert.prototype['expiration-event-in'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
AuthMethodCreateCert.prototype['force-sub-claims'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
AuthMethodCreateCert.prototype['gw-bound-ips'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
AuthMethodCreateCert.prototype['json'] = false;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
AuthMethodCreateCert.prototype['jwt-ttl'] = 0;

/**
 * Auth Method name
 * @member {String} name
 */
AuthMethodCreateCert.prototype['name'] = undefined;

/**
 * Choose the relevant product type for the auth method [sm, sra, pm, dp, ca]
 * @member {Array.<String>} product-type
 */
AuthMethodCreateCert.prototype['product-type'] = undefined;

/**
 * A list of revoked cert ids
 * @member {Array.<String>} revoked-cert-ids
 */
AuthMethodCreateCert.prototype['revoked-cert-ids'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
AuthMethodCreateCert.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
AuthMethodCreateCert.prototype['uid-token'] = undefined;

/**
 * A unique identifier (ID) value should be configured, such as common_name or organizational_unit Whenever a user logs in with a token, these authentication types issue a \"sub claim\" that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
 * @member {String} unique-identifier
 */
AuthMethodCreateCert.prototype['unique-identifier'] = undefined;






export default AuthMethodCreateCert;

