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
 * The GatewayCreateProducerNativeK8S model module.
 * @module model/GatewayCreateProducerNativeK8S
 * @version 2.5.6
 */
class GatewayCreateProducerNativeK8S {
    /**
     * Constructs a new <code>GatewayCreateProducerNativeK8S</code>.
     * gatewayCreateProducerNativeK8S is a command that creates k8s producer
     * @alias module:model/GatewayCreateProducerNativeK8S
     * @param k8sClusterToken {String} K8S cluster Bearer token
     * @param name {String} Producer name
     */
    constructor(k8sClusterToken, name) { 
        
        GatewayCreateProducerNativeK8S.initialize(this, k8sClusterToken, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, k8sClusterToken, name) { 
        obj['k8s-cluster-token'] = k8sClusterToken;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GatewayCreateProducerNativeK8S</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerNativeK8S} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerNativeK8S} The populated <code>GatewayCreateProducerNativeK8S</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerNativeK8S();

            if (data.hasOwnProperty('k8s-cluster-ca-cert')) {
                obj['k8s-cluster-ca-cert'] = ApiClient.convertToType(data['k8s-cluster-ca-cert'], 'String');
            }
            if (data.hasOwnProperty('k8s-cluster-endpoint')) {
                obj['k8s-cluster-endpoint'] = ApiClient.convertToType(data['k8s-cluster-endpoint'], 'String');
            }
            if (data.hasOwnProperty('k8s-cluster-token')) {
                obj['k8s-cluster-token'] = ApiClient.convertToType(data['k8s-cluster-token'], 'String');
            }
            if (data.hasOwnProperty('k8s-namespace')) {
                obj['k8s-namespace'] = ApiClient.convertToType(data['k8s-namespace'], 'String');
            }
            if (data.hasOwnProperty('k8s-service-account')) {
                obj['k8s-service-account'] = ApiClient.convertToType(data['k8s-service-account'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('secure-access-allow-port-forwading')) {
                obj['secure-access-allow-port-forwading'] = ApiClient.convertToType(data['secure-access-allow-port-forwading'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-bastion-issuer')) {
                obj['secure-access-bastion-issuer'] = ApiClient.convertToType(data['secure-access-bastion-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-cluster-endpoint')) {
                obj['secure-access-cluster-endpoint'] = ApiClient.convertToType(data['secure-access-cluster-endpoint'], 'String');
            }
            if (data.hasOwnProperty('secure-access-dashboard-url')) {
                obj['secure-access-dashboard-url'] = ApiClient.convertToType(data['secure-access-dashboard-url'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-web-browsing')) {
                obj['secure-access-web-browsing'] = ApiClient.convertToType(data['secure-access-web-browsing'], 'Boolean');
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user-ttl')) {
                obj['user-ttl'] = ApiClient.convertToType(data['user-ttl'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * K8S cluster CA certificate
 * @member {String} k8s-cluster-ca-cert
 */
GatewayCreateProducerNativeK8S.prototype['k8s-cluster-ca-cert'] = undefined;

/**
 * K8S cluster URL endpoint
 * @member {String} k8s-cluster-endpoint
 */
GatewayCreateProducerNativeK8S.prototype['k8s-cluster-endpoint'] = undefined;

/**
 * K8S cluster Bearer token
 * @member {String} k8s-cluster-token
 */
GatewayCreateProducerNativeK8S.prototype['k8s-cluster-token'] = undefined;

/**
 * K8S namespace
 * @member {String} k8s-namespace
 */
GatewayCreateProducerNativeK8S.prototype['k8s-namespace'] = undefined;

/**
 * K8S service account
 * @member {String} k8s-service-account
 */
GatewayCreateProducerNativeK8S.prototype['k8s-service-account'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerNativeK8S.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
GatewayCreateProducerNativeK8S.prototype['password'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerNativeK8S.prototype['producer-encryption-key-name'] = undefined;

/**
 * @member {Boolean} secure-access-allow-port-forwading
 */
GatewayCreateProducerNativeK8S.prototype['secure-access-allow-port-forwading'] = undefined;

/**
 * @member {String} secure-access-bastion-issuer
 */
GatewayCreateProducerNativeK8S.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * @member {String} secure-access-cluster-endpoint
 */
GatewayCreateProducerNativeK8S.prototype['secure-access-cluster-endpoint'] = undefined;

/**
 * @member {String} secure-access-dashboard-url
 */
GatewayCreateProducerNativeK8S.prototype['secure-access-dashboard-url'] = undefined;

/**
 * @member {String} secure-access-enable
 */
GatewayCreateProducerNativeK8S.prototype['secure-access-enable'] = undefined;

/**
 * @member {Boolean} secure-access-web-browsing
 */
GatewayCreateProducerNativeK8S.prototype['secure-access-web-browsing'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayCreateProducerNativeK8S.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerNativeK8S.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerNativeK8S.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerNativeK8S.prototype['user-ttl'] = '60m';

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
GatewayCreateProducerNativeK8S.prototype['username'] = undefined;






export default GatewayCreateProducerNativeK8S;

