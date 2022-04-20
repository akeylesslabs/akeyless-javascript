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
 * The PKICertificateIssueDetails model module.
 * @module model/PKICertificateIssueDetails
 * @version 2.16.0
 */
class PKICertificateIssueDetails {
    /**
     * Constructs a new <code>PKICertificateIssueDetails</code>.
     * @alias module:model/PKICertificateIssueDetails
     */
    constructor() { 
        
        PKICertificateIssueDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PKICertificateIssueDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PKICertificateIssueDetails} obj Optional instance to populate.
     * @return {module:model/PKICertificateIssueDetails} The populated <code>PKICertificateIssueDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PKICertificateIssueDetails();

            if (data.hasOwnProperty('allow_any_name')) {
                obj['allow_any_name'] = ApiClient.convertToType(data['allow_any_name'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_subdomains')) {
                obj['allow_subdomains'] = ApiClient.convertToType(data['allow_subdomains'], 'Boolean');
            }
            if (data.hasOwnProperty('allowed_domains_list')) {
                obj['allowed_domains_list'] = ApiClient.convertToType(data['allowed_domains_list'], ['String']);
            }
            if (data.hasOwnProperty('allowed_uri_sans')) {
                obj['allowed_uri_sans'] = ApiClient.convertToType(data['allowed_uri_sans'], ['String']);
            }
            if (data.hasOwnProperty('basic_constraints_valid_for_non_ca')) {
                obj['basic_constraints_valid_for_non_ca'] = ApiClient.convertToType(data['basic_constraints_valid_for_non_ca'], 'Boolean');
            }
            if (data.hasOwnProperty('client_flag')) {
                obj['client_flag'] = ApiClient.convertToType(data['client_flag'], 'Boolean');
            }
            if (data.hasOwnProperty('code_signing_flag')) {
                obj['code_signing_flag'] = ApiClient.convertToType(data['code_signing_flag'], 'Boolean');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], ['String']);
            }
            if (data.hasOwnProperty('enforce_hostnames')) {
                obj['enforce_hostnames'] = ApiClient.convertToType(data['enforce_hostnames'], 'Boolean');
            }
            if (data.hasOwnProperty('is_ca')) {
                obj['is_ca'] = ApiClient.convertToType(data['is_ca'], 'Boolean');
            }
            if (data.hasOwnProperty('key_bits')) {
                obj['key_bits'] = ApiClient.convertToType(data['key_bits'], 'Number');
            }
            if (data.hasOwnProperty('key_type')) {
                obj['key_type'] = ApiClient.convertToType(data['key_type'], 'String');
            }
            if (data.hasOwnProperty('key_usage_list')) {
                obj['key_usage_list'] = ApiClient.convertToType(data['key_usage_list'], ['String']);
            }
            if (data.hasOwnProperty('locality')) {
                obj['locality'] = ApiClient.convertToType(data['locality'], ['String']);
            }
            if (data.hasOwnProperty('not_before_duration')) {
                obj['not_before_duration'] = ApiClient.convertToType(data['not_before_duration'], 'Number');
            }
            if (data.hasOwnProperty('organization_list')) {
                obj['organization_list'] = ApiClient.convertToType(data['organization_list'], ['String']);
            }
            if (data.hasOwnProperty('organization_unit_list')) {
                obj['organization_unit_list'] = ApiClient.convertToType(data['organization_unit_list'], ['String']);
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], ['String']);
            }
            if (data.hasOwnProperty('province')) {
                obj['province'] = ApiClient.convertToType(data['province'], ['String']);
            }
            if (data.hasOwnProperty('require_cn')) {
                obj['require_cn'] = ApiClient.convertToType(data['require_cn'], 'Boolean');
            }
            if (data.hasOwnProperty('server_flag')) {
                obj['server_flag'] = ApiClient.convertToType(data['server_flag'], 'Boolean');
            }
            if (data.hasOwnProperty('street_address')) {
                obj['street_address'] = ApiClient.convertToType(data['street_address'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} allow_any_name
 */
PKICertificateIssueDetails.prototype['allow_any_name'] = undefined;

/**
 * @member {Boolean} allow_subdomains
 */
PKICertificateIssueDetails.prototype['allow_subdomains'] = undefined;

/**
 * @member {Array.<String>} allowed_domains_list
 */
PKICertificateIssueDetails.prototype['allowed_domains_list'] = undefined;

/**
 * @member {Array.<String>} allowed_uri_sans
 */
PKICertificateIssueDetails.prototype['allowed_uri_sans'] = undefined;

/**
 * @member {Boolean} basic_constraints_valid_for_non_ca
 */
PKICertificateIssueDetails.prototype['basic_constraints_valid_for_non_ca'] = undefined;

/**
 * @member {Boolean} client_flag
 */
PKICertificateIssueDetails.prototype['client_flag'] = undefined;

/**
 * @member {Boolean} code_signing_flag
 */
PKICertificateIssueDetails.prototype['code_signing_flag'] = undefined;

/**
 * @member {Array.<String>} country
 */
PKICertificateIssueDetails.prototype['country'] = undefined;

/**
 * @member {Boolean} enforce_hostnames
 */
PKICertificateIssueDetails.prototype['enforce_hostnames'] = undefined;

/**
 * @member {Boolean} is_ca
 */
PKICertificateIssueDetails.prototype['is_ca'] = undefined;

/**
 * @member {Number} key_bits
 */
PKICertificateIssueDetails.prototype['key_bits'] = undefined;

/**
 * @member {String} key_type
 */
PKICertificateIssueDetails.prototype['key_type'] = undefined;

/**
 * @member {Array.<String>} key_usage_list
 */
PKICertificateIssueDetails.prototype['key_usage_list'] = undefined;

/**
 * @member {Array.<String>} locality
 */
PKICertificateIssueDetails.prototype['locality'] = undefined;

/**
 * A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.
 * @member {Number} not_before_duration
 */
PKICertificateIssueDetails.prototype['not_before_duration'] = undefined;

/**
 * @member {Array.<String>} organization_list
 */
PKICertificateIssueDetails.prototype['organization_list'] = undefined;

/**
 * @member {Array.<String>} organization_unit_list
 */
PKICertificateIssueDetails.prototype['organization_unit_list'] = undefined;

/**
 * @member {Array.<String>} postal_code
 */
PKICertificateIssueDetails.prototype['postal_code'] = undefined;

/**
 * @member {Array.<String>} province
 */
PKICertificateIssueDetails.prototype['province'] = undefined;

/**
 * @member {Boolean} require_cn
 */
PKICertificateIssueDetails.prototype['require_cn'] = undefined;

/**
 * @member {Boolean} server_flag
 */
PKICertificateIssueDetails.prototype['server_flag'] = undefined;

/**
 * @member {Array.<String>} street_address
 */
PKICertificateIssueDetails.prototype['street_address'] = undefined;






export default PKICertificateIssueDetails;

