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
import PKICertificateIssueDetails from './PKICertificateIssueDetails';
import SSHCertificateIssueDetails from './SSHCertificateIssueDetails';

/**
 * The CertificateIssueInfo model module.
 * @module model/CertificateIssueInfo
 * @version 3.2.2
 */
class CertificateIssueInfo {
    /**
     * Constructs a new <code>CertificateIssueInfo</code>.
     * @alias module:model/CertificateIssueInfo
     */
    constructor() { 
        
        CertificateIssueInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CertificateIssueInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CertificateIssueInfo} obj Optional instance to populate.
     * @return {module:model/CertificateIssueInfo} The populated <code>CertificateIssueInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CertificateIssueInfo();

            if (data.hasOwnProperty('cert_issuer_type')) {
                obj['cert_issuer_type'] = ApiClient.convertToType(data['cert_issuer_type'], 'String');
            }
            if (data.hasOwnProperty('max_ttl')) {
                obj['max_ttl'] = ApiClient.convertToType(data['max_ttl'], 'Number');
            }
            if (data.hasOwnProperty('pki_cert_issuer_details')) {
                obj['pki_cert_issuer_details'] = PKICertificateIssueDetails.constructFromObject(data['pki_cert_issuer_details']);
            }
            if (data.hasOwnProperty('ssh_cert_issuer_details')) {
                obj['ssh_cert_issuer_details'] = SSHCertificateIssueDetails.constructFromObject(data['ssh_cert_issuer_details']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} cert_issuer_type
 */
CertificateIssueInfo.prototype['cert_issuer_type'] = undefined;

/**
 * @member {Number} max_ttl
 */
CertificateIssueInfo.prototype['max_ttl'] = undefined;

/**
 * @member {module:model/PKICertificateIssueDetails} pki_cert_issuer_details
 */
CertificateIssueInfo.prototype['pki_cert_issuer_details'] = undefined;

/**
 * @member {module:model/SSHCertificateIssueDetails} ssh_cert_issuer_details
 */
CertificateIssueInfo.prototype['ssh_cert_issuer_details'] = undefined;






export default CertificateIssueInfo;

