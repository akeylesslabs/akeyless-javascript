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
 * @version 2.5.12
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
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('public-key-data')) {
                obj['public-key-data'] = ApiClient.convertToType(data['public-key-data'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
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
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
GetSSHCertificate.prototype['password'] = undefined;

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
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GetSSHCertificate.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
GetSSHCertificate.prototype['username'] = undefined;






export default GetSSHCertificate;

