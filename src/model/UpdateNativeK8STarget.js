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
 * The UpdateNativeK8STarget model module.
 * @module model/UpdateNativeK8STarget
 * @version 2.4.5
 */
class UpdateNativeK8STarget {
    /**
     * Constructs a new <code>UpdateNativeK8STarget</code>.
     * @alias module:model/UpdateNativeK8STarget
     * @param k8sClusterCaCert {String} K8S cluster CA certificate
     * @param k8sClusterEndpoint {String} K8S cluster URL endpoint
     * @param k8sClusterToken {String} K8S cluster Bearer token
     * @param name {String} Target name
     */
    constructor(k8sClusterCaCert, k8sClusterEndpoint, k8sClusterToken, name) { 
        
        UpdateNativeK8STarget.initialize(this, k8sClusterCaCert, k8sClusterEndpoint, k8sClusterToken, name);
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
     * Constructs a <code>UpdateNativeK8STarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateNativeK8STarget} obj Optional instance to populate.
     * @return {module:model/UpdateNativeK8STarget} The populated <code>UpdateNativeK8STarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateNativeK8STarget();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('k8s-cluster-ca-cert')) {
                obj['k8s-cluster-ca-cert'] = ApiClient.convertToType(data['k8s-cluster-ca-cert'], 'String');
            }
            if (data.hasOwnProperty('k8s-cluster-endpoint')) {
                obj['k8s-cluster-endpoint'] = ApiClient.convertToType(data['k8s-cluster-endpoint'], 'String');
            }
            if (data.hasOwnProperty('k8s-cluster-token')) {
                obj['k8s-cluster-token'] = ApiClient.convertToType(data['k8s-cluster-token'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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
            if (data.hasOwnProperty('update-version')) {
                obj['update-version'] = ApiClient.convertToType(data['update-version'], 'Boolean');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Comment about the target
 * @member {String} comment
 */
UpdateNativeK8STarget.prototype['comment'] = undefined;

/**
 * K8S cluster CA certificate
 * @member {String} k8s-cluster-ca-cert
 */
UpdateNativeK8STarget.prototype['k8s-cluster-ca-cert'] = undefined;

/**
 * K8S cluster URL endpoint
 * @member {String} k8s-cluster-endpoint
 */
UpdateNativeK8STarget.prototype['k8s-cluster-endpoint'] = undefined;

/**
 * K8S cluster Bearer token
 * @member {String} k8s-cluster-token
 */
UpdateNativeK8STarget.prototype['k8s-cluster-token'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateNativeK8STarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateNativeK8STarget.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
UpdateNativeK8STarget.prototype['new-name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
UpdateNativeK8STarget.prototype['password'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateNativeK8STarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateNativeK8STarget.prototype['uid-token'] = undefined;

/**
 * Create new version for the target
 * @member {Boolean} update-version
 * @default false
 */
UpdateNativeK8STarget.prototype['update-version'] = false;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
UpdateNativeK8STarget.prototype['username'] = undefined;






export default UpdateNativeK8STarget;

