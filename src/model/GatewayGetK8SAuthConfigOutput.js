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
 * @version 5.0.2
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
            if (data.hasOwnProperty('protection_key')) {
                obj['protection_key'] = ApiClient.convertToType(data['protection_key'], 'String');
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

    /**
     * Validates the JSON data with respect to <code>GatewayGetK8SAuthConfigOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayGetK8SAuthConfigOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['auth_method_access_id'] && !(typeof data['auth_method_access_id'] === 'string' || data['auth_method_access_id'] instanceof String)) {
            throw new Error("Expected the field `auth_method_access_id` to be a primitive type in the JSON string but got " + data['auth_method_access_id']);
        }
        // ensure the json data is a string
        if (data['auth_method_prv_key_pem'] && !(typeof data['auth_method_prv_key_pem'] === 'string' || data['auth_method_prv_key_pem'] instanceof String)) {
            throw new Error("Expected the field `auth_method_prv_key_pem` to be a primitive type in the JSON string but got " + data['auth_method_prv_key_pem']);
        }
        // ensure the json data is a string
        if (data['cluster_api_type'] && !(typeof data['cluster_api_type'] === 'string' || data['cluster_api_type'] instanceof String)) {
            throw new Error("Expected the field `cluster_api_type` to be a primitive type in the JSON string but got " + data['cluster_api_type']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['k8s_auth_type'] && !(typeof data['k8s_auth_type'] === 'string' || data['k8s_auth_type'] instanceof String)) {
            throw new Error("Expected the field `k8s_auth_type` to be a primitive type in the JSON string but got " + data['k8s_auth_type']);
        }
        // ensure the json data is a string
        if (data['k8s_ca_cert'] && !(typeof data['k8s_ca_cert'] === 'string' || data['k8s_ca_cert'] instanceof String)) {
            throw new Error("Expected the field `k8s_ca_cert` to be a primitive type in the JSON string but got " + data['k8s_ca_cert']);
        }
        // ensure the json data is a string
        if (data['k8s_client_cert_data'] && !(typeof data['k8s_client_cert_data'] === 'string' || data['k8s_client_cert_data'] instanceof String)) {
            throw new Error("Expected the field `k8s_client_cert_data` to be a primitive type in the JSON string but got " + data['k8s_client_cert_data']);
        }
        // ensure the json data is a string
        if (data['k8s_client_key_data'] && !(typeof data['k8s_client_key_data'] === 'string' || data['k8s_client_key_data'] instanceof String)) {
            throw new Error("Expected the field `k8s_client_key_data` to be a primitive type in the JSON string but got " + data['k8s_client_key_data']);
        }
        // ensure the json data is a string
        if (data['k8s_host'] && !(typeof data['k8s_host'] === 'string' || data['k8s_host'] instanceof String)) {
            throw new Error("Expected the field `k8s_host` to be a primitive type in the JSON string but got " + data['k8s_host']);
        }
        // ensure the json data is a string
        if (data['k8s_issuer'] && !(typeof data['k8s_issuer'] === 'string' || data['k8s_issuer'] instanceof String)) {
            throw new Error("Expected the field `k8s_issuer` to be a primitive type in the JSON string but got " + data['k8s_issuer']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['k8s_pub_keys_pem'])) {
            throw new Error("Expected the field `k8s_pub_keys_pem` to be an array in the JSON data but got " + data['k8s_pub_keys_pem']);
        }
        // ensure the json data is a string
        if (data['k8s_token_reviewer_jwt'] && !(typeof data['k8s_token_reviewer_jwt'] === 'string' || data['k8s_token_reviewer_jwt'] instanceof String)) {
            throw new Error("Expected the field `k8s_token_reviewer_jwt` to be a primitive type in the JSON string but got " + data['k8s_token_reviewer_jwt']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['protection_key'] && !(typeof data['protection_key'] === 'string' || data['protection_key'] instanceof String)) {
            throw new Error("Expected the field `protection_key` to be a primitive type in the JSON string but got " + data['protection_key']);
        }
        // ensure the json data is a string
        if (data['rancher_api_key'] && !(typeof data['rancher_api_key'] === 'string' || data['rancher_api_key'] instanceof String)) {
            throw new Error("Expected the field `rancher_api_key` to be a primitive type in the JSON string but got " + data['rancher_api_key']);
        }
        // ensure the json data is a string
        if (data['rancher_cluster_id'] && !(typeof data['rancher_cluster_id'] === 'string' || data['rancher_cluster_id'] instanceof String)) {
            throw new Error("Expected the field `rancher_cluster_id` to be a primitive type in the JSON string but got " + data['rancher_cluster_id']);
        }

        return true;
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
 * ClusterApiType defines types of API access to cluster
 * @member {String} cluster_api_type
 */
GatewayGetK8SAuthConfigOutput.prototype['cluster_api_type'] = undefined;

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
 * @member {String} k8s_auth_type
 */
GatewayGetK8SAuthConfigOutput.prototype['k8s_auth_type'] = undefined;

/**
 * K8SCACert is the CA Cert to use to call into the kubernetes API
 * @member {String} k8s_ca_cert
 */
GatewayGetK8SAuthConfigOutput.prototype['k8s_ca_cert'] = undefined;

/**
 * K8sClientCertData is the client certificate for k8s client certificate authentication
 * @member {String} k8s_client_cert_data
 */
GatewayGetK8SAuthConfigOutput.prototype['k8s_client_cert_data'] = undefined;

/**
 * K8sClientKeyData is the client key for k8s client certificate authentication
 * @member {String} k8s_client_key_data
 */
GatewayGetK8SAuthConfigOutput.prototype['k8s_client_key_data'] = undefined;

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
 * K8STokenReviewerJWT is the bearer for clusterApiTypeK8s, used during TokenReview API call
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
 * RancherApiKey the bear token for clusterApiTypeRancher
 * @member {String} rancher_api_key
 */
GatewayGetK8SAuthConfigOutput.prototype['rancher_api_key'] = undefined;

/**
 * RancherClusterId cluster id as define in rancher (in case of clusterApiTypeRancher)
 * @member {String} rancher_cluster_id
 */
GatewayGetK8SAuthConfigOutput.prototype['rancher_cluster_id'] = undefined;

/**
 * UseLocalCAJwt is an optional parameter to set defaulting to using the local service account when running in a Kubernetes pod
 * @member {Boolean} use_local_ca_jwt
 */
GatewayGetK8SAuthConfigOutput.prototype['use_local_ca_jwt'] = undefined;






export default GatewayGetK8SAuthConfigOutput;

