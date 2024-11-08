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
 * The K8SAuth model module.
 * @module model/K8SAuth
 * @version 4.3.0
 */
class K8SAuth {
    /**
     * Constructs a new <code>K8SAuth</code>.
     * @alias module:model/K8SAuth
     */
    constructor() { 
        
        K8SAuth.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>K8SAuth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/K8SAuth} obj Optional instance to populate.
     * @return {module:model/K8SAuth} The populated <code>K8SAuth</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new K8SAuth();

            if (data.hasOwnProperty('am_token_expiration')) {
                obj['am_token_expiration'] = ApiClient.convertToType(data['am_token_expiration'], 'Number');
            }
            if (data.hasOwnProperty('auth_method_access_id')) {
                obj['auth_method_access_id'] = ApiClient.convertToType(data['auth_method_access_id'], 'String');
            }
            if (data.hasOwnProperty('auth_method_prv_key_pem')) {
                obj['auth_method_prv_key_pem'] = ApiClient.convertToType(data['auth_method_prv_key_pem'], 'String');
            }
            if (data.hasOwnProperty('cluster_api_type')) {
                obj['cluster_api_type'] = ApiClient.convertToType(data['cluster_api_type'], 'String');
            }
            if (data.hasOwnProperty('disable_iss_validation')) {
                obj['disable_iss_validation'] = ApiClient.convertToType(data['disable_iss_validation'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('k8s_auth_type')) {
                obj['k8s_auth_type'] = ApiClient.convertToType(data['k8s_auth_type'], 'String');
            }
            if (data.hasOwnProperty('k8s_ca_cert')) {
                obj['k8s_ca_cert'] = ApiClient.convertToType(data['k8s_ca_cert'], 'String');
            }
            if (data.hasOwnProperty('k8s_client_cert_data')) {
                obj['k8s_client_cert_data'] = ApiClient.convertToType(data['k8s_client_cert_data'], 'String');
            }
            if (data.hasOwnProperty('k8s_client_key_data')) {
                obj['k8s_client_key_data'] = ApiClient.convertToType(data['k8s_client_key_data'], 'String');
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
            if (data.hasOwnProperty('rancher_api_key')) {
                obj['rancher_api_key'] = ApiClient.convertToType(data['rancher_api_key'], 'String');
            }
            if (data.hasOwnProperty('rancher_cluster_id')) {
                obj['rancher_cluster_id'] = ApiClient.convertToType(data['rancher_cluster_id'], 'String');
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
K8SAuth.prototype['am_token_expiration'] = undefined;

/**
 * AuthMethodAccessId of the Kubernetes auth method
 * @member {String} auth_method_access_id
 */
K8SAuth.prototype['auth_method_access_id'] = undefined;

/**
 * AuthMethodSigningKey is the private key (in base64 of the PEM format) associated with the public key defined in the Kubernetes auth method, that used to sign the internal token for the Akeyless Kubernetes Auth Method
 * @member {String} auth_method_prv_key_pem
 */
K8SAuth.prototype['auth_method_prv_key_pem'] = undefined;

/**
 * ClusterApiType defines types of API access to cluster
 * @member {String} cluster_api_type
 */
K8SAuth.prototype['cluster_api_type'] = undefined;

/**
 * DisableISSValidation is optional parameter to disable ISS validation
 * @member {Boolean} disable_iss_validation
 */
K8SAuth.prototype['disable_iss_validation'] = undefined;

/**
 * @member {String} id
 */
K8SAuth.prototype['id'] = undefined;

/**
 * @member {String} k8s_auth_type
 */
K8SAuth.prototype['k8s_auth_type'] = undefined;

/**
 * K8SCACert is the CA Cert to use to call into the kubernetes API
 * @member {String} k8s_ca_cert
 */
K8SAuth.prototype['k8s_ca_cert'] = undefined;

/**
 * K8sClientCertData is the client certificate for k8s client certificate authentication
 * @member {String} k8s_client_cert_data
 */
K8SAuth.prototype['k8s_client_cert_data'] = undefined;

/**
 * K8sClientKeyData is the client key for k8s client certificate authentication
 * @member {String} k8s_client_key_data
 */
K8SAuth.prototype['k8s_client_key_data'] = undefined;

/**
 * K8SHost is the url string for the kubernetes API
 * @member {String} k8s_host
 */
K8SAuth.prototype['k8s_host'] = undefined;

/**
 * K8SIssuer is the claim that specifies who issued the Kubernetes token
 * @member {String} k8s_issuer
 */
K8SAuth.prototype['k8s_issuer'] = undefined;

/**
 * K8SPublicKeysPEM is the list of public key in PEM format
 * @member {Array.<String>} k8s_pub_keys_pem
 */
K8SAuth.prototype['k8s_pub_keys_pem'] = undefined;

/**
 * K8STokenReviewerJWT is the bearer for clusterApiTypeK8s, used during TokenReview API call
 * @member {String} k8s_token_reviewer_jwt
 */
K8SAuth.prototype['k8s_token_reviewer_jwt'] = undefined;

/**
 * @member {String} name
 */
K8SAuth.prototype['name'] = undefined;

/**
 * RancherApiKey the bear token for clusterApiTypeRancher
 * @member {String} rancher_api_key
 */
K8SAuth.prototype['rancher_api_key'] = undefined;

/**
 * RancherClusterId cluster id as define in rancher (in case of clusterApiTypeRancher)
 * @member {String} rancher_cluster_id
 */
K8SAuth.prototype['rancher_cluster_id'] = undefined;

/**
 * UseLocalCAJwt is an optional parameter to set defaulting to using the local service account when running in a Kubernetes pod
 * @member {Boolean} use_local_ca_jwt
 */
K8SAuth.prototype['use_local_ca_jwt'] = undefined;






export default K8SAuth;

