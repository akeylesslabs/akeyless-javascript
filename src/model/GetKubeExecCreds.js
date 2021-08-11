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
 * The GetKubeExecCreds model module.
 * @module model/GetKubeExecCreds
 * @version 2.4.5
 */
class GetKubeExecCreds {
    /**
     * Constructs a new <code>GetKubeExecCreds</code>.
     * getKubeExecCreds is a command that gets credentials for authentication with Kubernetes cluster based on a PKI cert issuer.
     * @alias module:model/GetKubeExecCreds
     * @param certIssuerName {String} The name of the PKI certificate issuer
     */
    constructor(certIssuerName) { 
        
        GetKubeExecCreds.initialize(this, certIssuerName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, certIssuerName) { 
        obj['cert-issuer-name'] = certIssuerName;
    }

    /**
     * Constructs a <code>GetKubeExecCreds</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetKubeExecCreds} obj Optional instance to populate.
     * @return {module:model/GetKubeExecCreds} The populated <code>GetKubeExecCreds</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetKubeExecCreds();

            if (data.hasOwnProperty('alt-names')) {
                obj['alt-names'] = ApiClient.convertToType(data['alt-names'], 'String');
            }
            if (data.hasOwnProperty('cert-issuer-name')) {
                obj['cert-issuer-name'] = ApiClient.convertToType(data['cert-issuer-name'], 'String');
            }
            if (data.hasOwnProperty('common-name')) {
                obj['common-name'] = ApiClient.convertToType(data['common-name'], 'String');
            }
            if (data.hasOwnProperty('key-data-base64')) {
                obj['key-data-base64'] = ApiClient.convertToType(data['key-data-base64'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('uri-sans')) {
                obj['uri-sans'] = ApiClient.convertToType(data['uri-sans'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The Subject Alternative Names to be included in the PKI certificate (in a comma-delimited list)
 * @member {String} alt-names
 */
GetKubeExecCreds.prototype['alt-names'] = undefined;

/**
 * The name of the PKI certificate issuer
 * @member {String} cert-issuer-name
 */
GetKubeExecCreds.prototype['cert-issuer-name'] = undefined;

/**
 * The common name to be included in the PKI certificate
 * @member {String} common-name
 */
GetKubeExecCreds.prototype['common-name'] = undefined;

/**
 * PKI key file contents. If this option is used, the certificate will be printed to stdout
 * @member {String} key-data-base64
 */
GetKubeExecCreds.prototype['key-data-base64'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
GetKubeExecCreds.prototype['password'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GetKubeExecCreds.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GetKubeExecCreds.prototype['uid-token'] = undefined;

/**
 * The URI Subject Alternative Names to be included in the PKI certificate (in a comma-delimited list)
 * @member {String} uri-sans
 */
GetKubeExecCreds.prototype['uri-sans'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
GetKubeExecCreds.prototype['username'] = undefined;






export default GetKubeExecCreds;

