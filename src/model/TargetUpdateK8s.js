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
 * The TargetUpdateK8s model module.
 * @module model/TargetUpdateK8s
 * @version 4.2.3
 */
class TargetUpdateK8s {
    /**
     * Constructs a new <code>TargetUpdateK8s</code>.
     * targetUpdateK8s is a command that updates an existing k8s target
     * @alias module:model/TargetUpdateK8s
     * @param k8sClusterCaCert {String} K8S cluster CA certificate
     * @param k8sClusterEndpoint {String} K8S cluster URL endpoint
     * @param k8sClusterToken {String} K8S cluster Bearer token
     * @param name {String} Target name
     */
    constructor(k8sClusterCaCert, k8sClusterEndpoint, k8sClusterToken, name) { 
        
        TargetUpdateK8s.initialize(this, k8sClusterCaCert, k8sClusterEndpoint, k8sClusterToken, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, k8sClusterCaCert, k8sClusterEndpoint, k8sClusterToken, name) { 
        obj['k8s-cluster-ca-cert'] = k8sClusterCaCert;
        obj['k8s-cluster-endpoint'] = k8sClusterEndpoint;
        obj['k8s-cluster-token'] = k8sClusterToken;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>TargetUpdateK8s</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetUpdateK8s} obj Optional instance to populate.
     * @return {module:model/TargetUpdateK8s} The populated <code>TargetUpdateK8s</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetUpdateK8s();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('k8s-auth-type')) {
                obj['k8s-auth-type'] = ApiClient.convertToType(data['k8s-auth-type'], 'String');
            }
            if (data.hasOwnProperty('k8s-client-certificate')) {
                obj['k8s-client-certificate'] = ApiClient.convertToType(data['k8s-client-certificate'], 'String');
            }
            if (data.hasOwnProperty('k8s-client-key')) {
                obj['k8s-client-key'] = ApiClient.convertToType(data['k8s-client-key'], 'String');
            }
            if (data.hasOwnProperty('k8s-cluster-ca-cert')) {
                obj['k8s-cluster-ca-cert'] = ApiClient.convertToType(data['k8s-cluster-ca-cert'], 'String');
            }
            if (data.hasOwnProperty('k8s-cluster-endpoint')) {
                obj['k8s-cluster-endpoint'] = ApiClient.convertToType(data['k8s-cluster-endpoint'], 'String');
            }
            if (data.hasOwnProperty('k8s-cluster-name')) {
                obj['k8s-cluster-name'] = ApiClient.convertToType(data['k8s-cluster-name'], 'String');
            }
            if (data.hasOwnProperty('k8s-cluster-token')) {
                obj['k8s-cluster-token'] = ApiClient.convertToType(data['k8s-cluster-token'], 'String');
            }
            if (data.hasOwnProperty('keep-prev-version')) {
                obj['keep-prev-version'] = ApiClient.convertToType(data['keep-prev-version'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('use-gw-service-account')) {
                obj['use-gw-service-account'] = ApiClient.convertToType(data['use-gw-service-account'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Description of the object
 * @member {String} description
 */
TargetUpdateK8s.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetUpdateK8s.prototype['json'] = false;

/**
 * K8S auth type [token/certificate]
 * @member {String} k8s-auth-type
 * @default 'token'
 */
TargetUpdateK8s.prototype['k8s-auth-type'] = 'token';

/**
 * Content of the k8 client certificate (PEM format) in a Base64 format
 * @member {String} k8s-client-certificate
 */
TargetUpdateK8s.prototype['k8s-client-certificate'] = undefined;

/**
 * Content of the k8 client private key (PEM format) in a Base64 format
 * @member {String} k8s-client-key
 */
TargetUpdateK8s.prototype['k8s-client-key'] = undefined;

/**
 * K8S cluster CA certificate
 * @member {String} k8s-cluster-ca-cert
 * @default 'dummy_val'
 */
TargetUpdateK8s.prototype['k8s-cluster-ca-cert'] = 'dummy_val';

/**
 * K8S cluster URL endpoint
 * @member {String} k8s-cluster-endpoint
 * @default 'dummy_val'
 */
TargetUpdateK8s.prototype['k8s-cluster-endpoint'] = 'dummy_val';

/**
 * K8S cluster name
 * @member {String} k8s-cluster-name
 */
TargetUpdateK8s.prototype['k8s-cluster-name'] = undefined;

/**
 * K8S cluster Bearer token
 * @member {String} k8s-cluster-token
 * @default 'dummy_val'
 */
TargetUpdateK8s.prototype['k8s-cluster-token'] = 'dummy_val';

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
TargetUpdateK8s.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetUpdateK8s.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetUpdateK8s.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetUpdateK8s.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
TargetUpdateK8s.prototype['new-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetUpdateK8s.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetUpdateK8s.prototype['uid-token'] = undefined;

/**
 * Use the GW's service account
 * @member {Boolean} use-gw-service-account
 */
TargetUpdateK8s.prototype['use-gw-service-account'] = undefined;






export default TargetUpdateK8s;

