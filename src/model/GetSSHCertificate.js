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
 * The GetSSHCertificate model module.
 * @module model/GetSSHCertificate
 * @version 3.6.1
 */
class GetSSHCertificate {
    /**
     * Constructs a new <code>GetSSHCertificate</code>.
     * @alias module:model/GetSSHCertificate
     * @param certIssuerName {String} The name of the SSH certificate issuer
     * @param certUsername {String} The username to sign in the SSH certificate
     */
    constructor(certIssuerName, certUsername) { 
        
        GetSSHCertificate.initialize(this, certIssuerName, certUsername);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, certIssuerName, certUsername) { 
        obj['cert-issuer-name'] = certIssuerName;
        obj['cert-username'] = certUsername;
    }

    /**
     * Constructs a <code>GetSSHCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSSHCertificate} obj Optional instance to populate.
     * @return {module:model/GetSSHCertificate} The populated <code>GetSSHCertificate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSSHCertificate();

            if (data.hasOwnProperty('cert-issuer-name')) {
                obj['cert-issuer-name'] = ApiClient.convertToType(data['cert-issuer-name'], 'String');
            }
            if (data.hasOwnProperty('cert-username')) {
                obj['cert-username'] = ApiClient.convertToType(data['cert-username'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('legacy-signing-alg-name')) {
                obj['legacy-signing-alg-name'] = ApiClient.convertToType(data['legacy-signing-alg-name'], 'Boolean');
            }
            if (data.hasOwnProperty('public-key-data')) {
                obj['public-key-data'] = ApiClient.convertToType(data['public-key-data'], 'String');
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
 * The name of the SSH certificate issuer
 * @member {String} cert-issuer-name
 */
GetSSHCertificate.prototype['cert-issuer-name'] = undefined;

/**
 * The username to sign in the SSH certificate
 * @member {String} cert-username
 */
GetSSHCertificate.prototype['cert-username'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GetSSHCertificate.prototype['json'] = false;

/**
 * Set this option to output legacy ('ssh-rsa-cert-v01@openssh.com') signing algorithm name in the certificate.
 * @member {Boolean} legacy-signing-alg-name
 * @default false
 */
GetSSHCertificate.prototype['legacy-signing-alg-name'] = false;

/**
 * SSH public key file contents. If this option is used, the certificate will be printed to stdout
 * @member {String} public-key-data
 */
GetSSHCertificate.prototype['public-key-data'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GetSSHCertificate.prototype['token'] = undefined;

/**
 * Updated certificate lifetime in seconds (must be less than the Certificate Issuer default TTL)
 * @member {Number} ttl
 */
GetSSHCertificate.prototype['ttl'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GetSSHCertificate.prototype['uid-token'] = undefined;






export default GetSSHCertificate;

