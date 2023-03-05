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
 * The GatewayCreateK8SAuthConfig model module.
 * @module model/GatewayCreateK8SAuthConfig
 * @version 3.2.8
 */
class GatewayCreateK8SAuthConfig {
    /**
     * Constructs a new <code>GatewayCreateK8SAuthConfig</code>.
     * gatewayCreateK8SAuth is a command that creates k8s auth config
     * @alias module:model/GatewayCreateK8SAuthConfig
     * @param accessId {String} The access ID of the Kubernetes auth method
     * @param k8sHost {String} The URL of the kubernetes API server
     * @param name {String} K8S Auth config name
     * @param signingKey {String} The private key (base64 encoded) associated with the public key defined in the Kubernetes auth
     */
    constructor(accessId, k8sHost, name, signingKey) { 
        
        GatewayCreateK8SAuthConfig.initialize(this, accessId, k8sHost, name, signingKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accessId, k8sHost, name, signingKey) { 
        obj['access-id'] = accessId;
        obj['k8s-host'] = k8sHost;
        obj['name'] = name;
        obj['signing-key'] = signingKey;
    }

    /**
     * Constructs a <code>GatewayCreateK8SAuthConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateK8SAuthConfig} obj Optional instance to populate.
     * @return {module:model/GatewayCreateK8SAuthConfig} The populated <code>GatewayCreateK8SAuthConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateK8SAuthConfig();

            if (data.hasOwnProperty('access-id')) {
                obj['access-id'] = ApiClient.convertToType(data['access-id'], 'String');
            }
            if (data.hasOwnProperty('cluster-api-type')) {
                obj['cluster-api-type'] = ApiClient.convertToType(data['cluster-api-type'], 'String');
            }
            if (data.hasOwnProperty('config-encryption-key-name')) {
                obj['config-encryption-key-name'] = ApiClient.convertToType(data['config-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('disable-issuer-validation')) {
                obj['disable-issuer-validation'] = ApiClient.convertToType(data['disable-issuer-validation'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('k8s-ca-cert')) {
                obj['k8s-ca-cert'] = ApiClient.convertToType(data['k8s-ca-cert'], 'String');
            }
            if (data.hasOwnProperty('k8s-host')) {
                obj['k8s-host'] = ApiClient.convertToType(data['k8s-host'], 'String');
            }
            if (data.hasOwnProperty('k8s-issuer')) {
                obj['k8s-issuer'] = ApiClient.convertToType(data['k8s-issuer'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('rancher-api-key')) {
                obj['rancher-api-key'] = ApiClient.convertToType(data['rancher-api-key'], 'String');
            }
            if (data.hasOwnProperty('rancher-cluster-id')) {
                obj['rancher-cluster-id'] = ApiClient.convertToType(data['rancher-cluster-id'], 'String');
            }
            if (data.hasOwnProperty('signing-key')) {
                obj['signing-key'] = ApiClient.convertToType(data['signing-key'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('token-exp')) {
                obj['token-exp'] = ApiClient.convertToType(data['token-exp'], 'Number');
            }
            if (data.hasOwnProperty('token-reviewer-jwt')) {
                obj['token-reviewer-jwt'] = ApiClient.convertToType(data['token-reviewer-jwt'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The access ID of the Kubernetes auth method
 * @member {String} access-id
 */
GatewayCreateK8SAuthConfig.prototype['access-id'] = undefined;

/**
 * Cluster access type. options: [native_k8s, rancher]
 * @member {String} cluster-api-type
 * @default 'native_k8s'
 */
GatewayCreateK8SAuthConfig.prototype['cluster-api-type'] = 'native_k8s';

/**
 * Config encryption key
 * @member {String} config-encryption-key-name
 */
GatewayCreateK8SAuthConfig.prototype['config-encryption-key-name'] = undefined;

/**
 * Disable issuer validation [true/false]
 * @member {String} disable-issuer-validation
 */
GatewayCreateK8SAuthConfig.prototype['disable-issuer-validation'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayCreateK8SAuthConfig.prototype['json'] = false;

/**
 * The CA Certificate (base64 encoded) to use to call into the kubernetes API server
 * @member {String} k8s-ca-cert
 */
GatewayCreateK8SAuthConfig.prototype['k8s-ca-cert'] = undefined;

/**
 * The URL of the kubernetes API server
 * @member {String} k8s-host
 */
GatewayCreateK8SAuthConfig.prototype['k8s-host'] = undefined;

/**
 * The Kubernetes JWT issuer name. K8SIssuer is the claim that specifies who issued the Kubernetes token
 * @member {String} k8s-issuer
 * @default 'kubernetes/serviceaccount'
 */
GatewayCreateK8SAuthConfig.prototype['k8s-issuer'] = 'kubernetes/serviceaccount';

/**
 * K8S Auth config name
 * @member {String} name
 */
GatewayCreateK8SAuthConfig.prototype['name'] = undefined;

/**
 * The api key used to access the TokenReview API to validate other JWTs (relevant for \"rancher\" only)
 * @member {String} rancher-api-key
 */
GatewayCreateK8SAuthConfig.prototype['rancher-api-key'] = undefined;

/**
 * The cluster id as define in rancher (relevant for \"rancher\" only)
 * @member {String} rancher-cluster-id
 */
GatewayCreateK8SAuthConfig.prototype['rancher-cluster-id'] = undefined;

/**
 * The private key (base64 encoded) associated with the public key defined in the Kubernetes auth
 * @member {String} signing-key
 */
GatewayCreateK8SAuthConfig.prototype['signing-key'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateK8SAuthConfig.prototype['token'] = undefined;

/**
 * Time in seconds of expiration of the Akeyless Kube Auth Method token
 * @member {Number} token-exp
 * @default 300
 */
GatewayCreateK8SAuthConfig.prototype['token-exp'] = 300;

/**
 * A Kubernetes service account JWT used to access the TokenReview API to validate other JWTs (relevant for \"native_k8s\" only). If not set, the JWT submitted in the authentication process will be used to access the Kubernetes TokenReview API.
 * @member {String} token-reviewer-jwt
 */
GatewayCreateK8SAuthConfig.prototype['token-reviewer-jwt'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateK8SAuthConfig.prototype['uid-token'] = undefined;






export default GatewayCreateK8SAuthConfig;

