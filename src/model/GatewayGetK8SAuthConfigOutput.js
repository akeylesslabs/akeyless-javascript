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
 * The GatewayGetK8SAuthConfigOutput model module.
 * @module model/GatewayGetK8SAuthConfigOutput
 * @version 2.16.2
 */
class GatewayGetK8SAuthConfigOutput {
    /**
     * Constructs a new <code>GatewayGetK8SAuthConfigOutput</code>.
     * @alias module:model/GatewayGetK8SAuthConfigOutput
     */
    constructor() { 
        
        GatewayGetK8SAuthConfigOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayGetK8SAuthConfigOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayGetK8SAuthConfigOutput} obj Optional instance to populate.
     * @return {module:model/GatewayGetK8SAuthConfigOutput} The populated <code>GatewayGetK8SAuthConfigOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayGetK8SAuthConfigOutput();

            if (data.hasOwnProperty('am_token_expiration')) {
                obj['am_token_expiration'] = ApiClient.convertToType(data['am_token_expiration'], 'Number');
            }
            if (data.hasOwnProperty('auth_method_access_id')) {
                obj['auth_method_access_id'] = ApiClient.convertToType(data['auth_method_access_id'], 'String');
            }
            if (data.hasOwnProperty('auth_method_prv_key_pem')) {
                obj['auth_method_prv_key_pem'] = ApiClient.convertToType(data['auth_method_prv_key_pem'], 'String');
            }
            if (data.hasOwnProperty('disable_iss_validation')) {
                obj['disable_iss_validation'] = ApiClient.convertToType(data['disable_iss_validation'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('k8s_ca_cert')) {
                obj['k8s_ca_cert'] = ApiClient.convertToType(data['k8s_ca_cert'], 'String');
            }
            if (data.hasOwnProperty('k8s_host')) {
                obj['k8s_host'] = ApiClient.convertToType(data['k8s_host'], 'String');
            }
            if (data.hasOwnProperty('k8s_issuer')) {
                obj['k8s_issuer'] = ApiClient.convertToType(data['k8s_issuer'], 'String');
            }
            if (data.hasOwnProperty('k8s_pub_keys_pem')) {
                obj['k8s_pub_keys_pem'] = ApiClient.convertToType(data['k8s_pub_keys_pem'], ['String']);
            }
            if (data.hasOwnProperty('k8s_token_reviewer_jwt')) {
                obj['k8s_token_reviewer_jwt'] = ApiClient.convertToType(data['k8s_token_reviewer_jwt'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('protection_key')) {
                obj['protection_key'] = ApiClient.convertToType(data['protection_key'], 'String');
            }
            if (data.hasOwnProperty('use_local_ca_jwt')) {
                obj['use_local_ca_jwt'] = ApiClient.convertToType(data['use_local_ca_jwt'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * AuthMethodTokenExpiration is time in seconds of expiration of the Akeyless Kube Auth Method token
 * @member {Number} am_token_expiration
 */
GatewayGetK8SAuthConfigOutput.prototype['am_token_expiration'] = undefined;

/**
 * AuthMethodAccessId of the Kubernetes auth method
 * @member {String} auth_method_access_id
 */
GatewayGetK8SAuthConfigOutput.prototype['auth_method_access_id'] = undefined;

/**
 * AuthMethodSigningKey is the private key (in base64 of the PEM format) associated with the public key defined in the Kubernetes auth method, that used to sign the internal token for the Akeyless Kubernetes Auth Method
 * @member {String} auth_method_prv_key_pem
 */
GatewayGetK8SAuthConfigOutput.prototype['auth_method_prv_key_pem'] = undefined;

/**
 * DisableISSValidation is optional parameter to disable ISS validation
 * @member {Boolean} disable_iss_validation
 */
GatewayGetK8SAuthConfigOutput.prototype['disable_iss_validation'] = undefined;

/**
 * @member {String} id
 */
GatewayGetK8SAuthConfigOutput.prototype['id'] = undefined;

/**
 * K8SCACert is the CA Cert to use to call into the kubernetes API
 * @member {String} k8s_ca_cert
 */
GatewayGetK8SAuthConfigOutput.prototype['k8s_ca_cert'] = undefined;

/**
 * K8SHost is the url string for the kubernetes API
 * @member {String} k8s_host
 */
GatewayGetK8SAuthConfigOutput.prototype['k8s_host'] = undefined;

/**
 * K8SIssuer is the claim that specifies who issued the Kubernetes token
 * @member {String} k8s_issuer
 */
GatewayGetK8SAuthConfigOutput.prototype['k8s_issuer'] = undefined;

/**
 * K8SPublicKeysPEM is the list of public key in PEM format
 * @member {Array.<String>} k8s_pub_keys_pem
 */
GatewayGetK8SAuthConfigOutput.prototype['k8s_pub_keys_pem'] = undefined;

/**
 * K8STokenReviewerJW\"K8S Auth config %v successfully created\\n\", clictx.Color().Bold(c.K8SAuthConfigName)T is the bearer to use during the TokenReview API call
 * @member {String} k8s_token_reviewer_jwt
 */
GatewayGetK8SAuthConfigOutput.prototype['k8s_token_reviewer_jwt'] = undefined;

/**
 * @member {String} name
 */
GatewayGetK8SAuthConfigOutput.prototype['name'] = undefined;

/**
 * @member {String} protection_key
 */
GatewayGetK8SAuthConfigOutput.prototype['protection_key'] = undefined;

/**
 * UseLocalCAJwt is an optional parameter to set defaulting to using the local CA cert and service account jwt when running in a Kubernetes pod
 * @member {Boolean} use_local_ca_jwt
 */
GatewayGetK8SAuthConfigOutput.prototype['use_local_ca_jwt'] = undefined;






export default GatewayGetK8SAuthConfigOutput;

