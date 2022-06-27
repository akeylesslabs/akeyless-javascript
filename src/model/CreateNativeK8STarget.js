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
 * The CreateNativeK8STarget model module.
 * @module model/CreateNativeK8STarget
 * @version 2.16.9
 */
class CreateNativeK8STarget {
    /**
     * Constructs a new <code>CreateNativeK8STarget</code>.
     * @alias module:model/CreateNativeK8STarget
     * @param k8sClusterCaCert {String} K8S cluster CA certificate
     * @param k8sClusterEndpoint {String} K8S cluster URL endpoint
     * @param k8sClusterToken {String} K8S cluster Bearer token
     * @param name {String} Target name
     */
    constructor(k8sClusterCaCert, k8sClusterEndpoint, k8sClusterToken, name) { 
        
        CreateNativeK8STarget.initialize(this, k8sClusterCaCert, k8sClusterEndpoint, k8sClusterToken, name);
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
     * Constructs a <code>CreateNativeK8STarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateNativeK8STarget} obj Optional instance to populate.
     * @return {module:model/CreateNativeK8STarget} The populated <code>CreateNativeK8STarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateNativeK8STarget();

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
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Comment about the target
 * @member {String} comment
 */
CreateNativeK8STarget.prototype['comment'] = undefined;

/**
 * K8S cluster CA certificate
 * @member {String} k8s-cluster-ca-cert
 */
CreateNativeK8STarget.prototype['k8s-cluster-ca-cert'] = undefined;

/**
 * K8S cluster URL endpoint
 * @member {String} k8s-cluster-endpoint
 */
CreateNativeK8STarget.prototype['k8s-cluster-endpoint'] = undefined;

/**
 * K8S cluster Bearer token
 * @member {String} k8s-cluster-token
 */
CreateNativeK8STarget.prototype['k8s-cluster-token'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateNativeK8STarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
CreateNativeK8STarget.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateNativeK8STarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateNativeK8STarget.prototype['uid-token'] = undefined;






export default CreateNativeK8STarget;

