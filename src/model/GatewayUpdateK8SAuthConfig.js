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
 * The GatewayUpdateK8SAuthConfig model module.
 * @module model/GatewayUpdateK8SAuthConfig
 * @version 2.15.30
 */
class GatewayUpdateK8SAuthConfig {
    /**
     * Constructs a new <code>GatewayUpdateK8SAuthConfig</code>.
     * gatewayUpdateK8SAuth is a command that updates k8s auth config
     * @alias module:model/GatewayUpdateK8SAuthConfig
     * @param accessId {String} The access ID of the Kubernetes auth method
     * @param k8sHost {String} The URL of the kubernetes API server
     * @param name {String} K8S Auth config name
     * @param newName {String} K8S Auth config new name
     * @param signingKey {String} The private key (in base64 encoded of the PEM format) associated with the public key defined in the Kubernetes auth
     */
    constructor(accessId, k8sHost, name, newName, signingKey) { 
        
        GatewayUpdateK8SAuthConfig.initialize(this, accessId, k8sHost, name, newName, signingKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accessId, k8sHost, name, newName, signingKey) { 
        obj['access-id'] = accessId;
        obj['k8s-host'] = k8sHost;
        obj['name'] = name;
        obj['new-name'] = newName;
        obj['signing-key'] = signingKey;
    }

    /**
     * Constructs a <code>GatewayUpdateK8SAuthConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateK8SAuthConfig} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateK8SAuthConfig} The populated <code>GatewayUpdateK8SAuthConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateK8SAuthConfig();

            if (data.hasOwnProperty('access-id')) {
                obj['access-id'] = ApiClient.convertToType(data['access-id'], 'String');
            }
            if (data.hasOwnProperty('config-encryption-key-name')) {
                obj['config-encryption-key-name'] = ApiClient.convertToType(data['config-encryption-key-name'], 'String');
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
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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
GatewayUpdateK8SAuthConfig.prototype['access-id'] = undefined;

/**
 * Config encryption key
 * @member {String} config-encryption-key-name
 */
GatewayUpdateK8SAuthConfig.prototype['config-encryption-key-name'] = undefined;

/**
 * The CA Cert (in PEM format) to use to call into the kubernetes API server
 * @member {String} k8s-ca-cert
 */
GatewayUpdateK8SAuthConfig.prototype['k8s-ca-cert'] = undefined;

/**
 * The URL of the kubernetes API server
 * @member {String} k8s-host
 */
GatewayUpdateK8SAuthConfig.prototype['k8s-host'] = undefined;

/**
 * The Kubernetes JWT issuer name. If not set, kubernetes/serviceaccount will use as an issuer.
 * @member {String} k8s-issuer
 */
GatewayUpdateK8SAuthConfig.prototype['k8s-issuer'] = undefined;

/**
 * K8S Auth config name
 * @member {String} name
 */
GatewayUpdateK8SAuthConfig.prototype['name'] = undefined;

/**
 * K8S Auth config new name
 * @member {String} new-name
 */
GatewayUpdateK8SAuthConfig.prototype['new-name'] = undefined;

/**
 * The private key (in base64 encoded of the PEM format) associated with the public key defined in the Kubernetes auth
 * @member {String} signing-key
 */
GatewayUpdateK8SAuthConfig.prototype['signing-key'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateK8SAuthConfig.prototype['token'] = undefined;

/**
 * Time in seconds of expiration of the Akeyless Kube Auth Method token
 * @member {Number} token-exp
 */
GatewayUpdateK8SAuthConfig.prototype['token-exp'] = undefined;

/**
 * A Kubernetes service account JWT used to access the TokenReview API to validate other JWTs. If not set, the JWT submitted in the authentication process will be used to access the Kubernetes TokenReview API.
 * @member {String} token-reviewer-jwt
 */
GatewayUpdateK8SAuthConfig.prototype['token-reviewer-jwt'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateK8SAuthConfig.prototype['uid-token'] = undefined;






export default GatewayUpdateK8SAuthConfig;

