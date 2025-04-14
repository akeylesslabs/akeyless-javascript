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
 * The CertAccessRules model module.
 * @module model/CertAccessRules
 * @version 5.0.3
 */
class CertAccessRules {
    /**
     * Constructs a new <code>CertAccessRules</code>.
     * @alias module:model/CertAccessRules
     */
    constructor() { 
        
        CertAccessRules.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CertAccessRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CertAccessRules} obj Optional instance to populate.
     * @return {module:model/CertAccessRules} The populated <code>CertAccessRules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CertAccessRules();

            if (data.hasOwnProperty('allowed_cors')) {
                obj['allowed_cors'] = ApiClient.convertToType(data['allowed_cors'], ['String']);
            }
            if (data.hasOwnProperty('bound_common_names')) {
                obj['bound_common_names'] = ApiClient.convertToType(data['bound_common_names'], ['String']);
            }
            if (data.hasOwnProperty('bound_dns_sans')) {
                obj['bound_dns_sans'] = ApiClient.convertToType(data['bound_dns_sans'], ['String']);
            }
            if (data.hasOwnProperty('bound_email_sans')) {
                obj['bound_email_sans'] = ApiClient.convertToType(data['bound_email_sans'], ['String']);
            }
            if (data.hasOwnProperty('bound_extensions')) {
                obj['bound_extensions'] = ApiClient.convertToType(data['bound_extensions'], ['String']);
            }
            if (data.hasOwnProperty('bound_organizational_units')) {
                obj['bound_organizational_units'] = ApiClient.convertToType(data['bound_organizational_units'], ['String']);
            }
            if (data.hasOwnProperty('bound_uri_sans')) {
                obj['bound_uri_sans'] = ApiClient.convertToType(data['bound_uri_sans'], ['String']);
            }
            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
            }
            if (data.hasOwnProperty('revoked_cert_ids')) {
                obj['revoked_cert_ids'] = ApiClient.convertToType(data['revoked_cert_ids'], ['String']);
            }
            if (data.hasOwnProperty('unique_identifier')) {
                obj['unique_identifier'] = ApiClient.convertToType(data['unique_identifier'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CertAccessRules</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CertAccessRules</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['allowed_cors'])) {
            throw new Error("Expected the field `allowed_cors` to be an array in the JSON data but got " + data['allowed_cors']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound_common_names'])) {
            throw new Error("Expected the field `bound_common_names` to be an array in the JSON data but got " + data['bound_common_names']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound_dns_sans'])) {
            throw new Error("Expected the field `bound_dns_sans` to be an array in the JSON data but got " + data['bound_dns_sans']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound_email_sans'])) {
            throw new Error("Expected the field `bound_email_sans` to be an array in the JSON data but got " + data['bound_email_sans']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound_extensions'])) {
            throw new Error("Expected the field `bound_extensions` to be an array in the JSON data but got " + data['bound_extensions']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound_organizational_units'])) {
            throw new Error("Expected the field `bound_organizational_units` to be an array in the JSON data but got " + data['bound_organizational_units']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound_uri_sans'])) {
            throw new Error("Expected the field `bound_uri_sans` to be an array in the JSON data but got " + data['bound_uri_sans']);
        }
        // ensure the json data is a string
        if (data['certificate'] && !(typeof data['certificate'] === 'string' || data['certificate'] instanceof String)) {
            throw new Error("Expected the field `certificate` to be a primitive type in the JSON string but got " + data['certificate']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['revoked_cert_ids'])) {
            throw new Error("Expected the field `revoked_cert_ids` to be an array in the JSON data but got " + data['revoked_cert_ids']);
        }
        // ensure the json data is a string
        if (data['unique_identifier'] && !(typeof data['unique_identifier'] === 'string' || data['unique_identifier'] instanceof String)) {
            throw new Error("Expected the field `unique_identifier` to be a primitive type in the JSON string but got " + data['unique_identifier']);
        }

        return true;
    }


}



/**
 * a list of allowed cors domains if used for browser authentication
 * @member {Array.<String>} allowed_cors
 */
CertAccessRules.prototype['allowed_cors'] = undefined;

/**
 * A list of names. At least one must exist in the Common Name. Supports globbing.
 * @member {Array.<String>} bound_common_names
 */
CertAccessRules.prototype['bound_common_names'] = undefined;

/**
 * A list of DNS names. At least one must exist in the SANs. Supports globbing.
 * @member {Array.<String>} bound_dns_sans
 */
CertAccessRules.prototype['bound_dns_sans'] = undefined;

/**
 * A list of Email Addresses. At least one must exist in the SANs. Supports globbing.
 * @member {Array.<String>} bound_email_sans
 */
CertAccessRules.prototype['bound_email_sans'] = undefined;

/**
 * A list of extensions formatted as \"oid:value\". Expects the extension value to be some type of ASN1 encoded string. All values must match. Supports globbing on \"value\".
 * @member {Array.<String>} bound_extensions
 */
CertAccessRules.prototype['bound_extensions'] = undefined;

/**
 * A list of Organizational Units names. At least one must exist in the OU field.
 * @member {Array.<String>} bound_organizational_units
 */
CertAccessRules.prototype['bound_organizational_units'] = undefined;

/**
 * A list of URIs. At least one must exist in the SANs. Supports globbing.
 * @member {Array.<String>} bound_uri_sans
 */
CertAccessRules.prototype['bound_uri_sans'] = undefined;

/**
 * Base64 encdoed PEM certificate
 * @member {String} certificate
 */
CertAccessRules.prototype['certificate'] = undefined;

/**
 * A list of revoked cert ids
 * @member {Array.<String>} revoked_cert_ids
 */
CertAccessRules.prototype['revoked_cert_ids'] = undefined;

/**
 * A unique identifier to distinguish different users
 * @member {String} unique_identifier
 */
CertAccessRules.prototype['unique_identifier'] = undefined;






export default CertAccessRules;

