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
 * The CertAccessRules model module.
 * @module model/CertAccessRules
 * @version 3.0.1
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


}

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

