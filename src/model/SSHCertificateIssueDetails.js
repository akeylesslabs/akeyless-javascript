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
 * The SSHCertificateIssueDetails model module.
 * @module model/SSHCertificateIssueDetails
 * @version 3.3.3
 */
class SSHCertificateIssueDetails {
    /**
     * Constructs a new <code>SSHCertificateIssueDetails</code>.
     * @alias module:model/SSHCertificateIssueDetails
     */
    constructor() { 
        
        SSHCertificateIssueDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SSHCertificateIssueDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SSHCertificateIssueDetails} obj Optional instance to populate.
     * @return {module:model/SSHCertificateIssueDetails} The populated <code>SSHCertificateIssueDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SSHCertificateIssueDetails();

            if (data.hasOwnProperty('allowed_domains')) {
                obj['allowed_domains'] = ApiClient.convertToType(data['allowed_domains'], ['String']);
            }
            if (data.hasOwnProperty('allowed_user_key_lengths')) {
                obj['allowed_user_key_lengths'] = ApiClient.convertToType(data['allowed_user_key_lengths'], {'String': 'Number'});
            }
            if (data.hasOwnProperty('allowed_users')) {
                obj['allowed_users'] = ApiClient.convertToType(data['allowed_users'], ['String']);
            }
            if (data.hasOwnProperty('cert_type')) {
                obj['cert_type'] = ApiClient.convertToType(data['cert_type'], 'Number');
            }
            if (data.hasOwnProperty('critical_options')) {
                obj['critical_options'] = ApiClient.convertToType(data['critical_options'], {'String': 'String'});
            }
            if (data.hasOwnProperty('extensions')) {
                obj['extensions'] = ApiClient.convertToType(data['extensions'], {'String': 'String'});
            }
            if (data.hasOwnProperty('principals')) {
                obj['principals'] = ApiClient.convertToType(data['principals'], ['String']);
            }
            if (data.hasOwnProperty('static_key_id')) {
                obj['static_key_id'] = ApiClient.convertToType(data['static_key_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Relevant for host certificate
 * @member {Array.<String>} allowed_domains
 */
SSHCertificateIssueDetails.prototype['allowed_domains'] = undefined;

/**
 * @member {Object.<String, Number>} allowed_user_key_lengths
 */
SSHCertificateIssueDetails.prototype['allowed_user_key_lengths'] = undefined;

/**
 * Relevant for user certificate
 * @member {Array.<String>} allowed_users
 */
SSHCertificateIssueDetails.prototype['allowed_users'] = undefined;

/**
 * @member {Number} cert_type
 */
SSHCertificateIssueDetails.prototype['cert_type'] = undefined;

/**
 * @member {Object.<String, String>} critical_options
 */
SSHCertificateIssueDetails.prototype['critical_options'] = undefined;

/**
 * @member {Object.<String, String>} extensions
 */
SSHCertificateIssueDetails.prototype['extensions'] = undefined;

/**
 * @member {Array.<String>} principals
 */
SSHCertificateIssueDetails.prototype['principals'] = undefined;

/**
 * In case it is empty, the key ID will be combination of user identifiers and a random string
 * @member {String} static_key_id
 */
SSHCertificateIssueDetails.prototype['static_key_id'] = undefined;






export default SSHCertificateIssueDetails;

