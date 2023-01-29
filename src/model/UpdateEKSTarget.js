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
 * The UpdateEKSTarget model module.
 * @module model/UpdateEKSTarget
 * @version 3.2.2
 */
class UpdateEKSTarget {
    /**
     * Constructs a new <code>UpdateEKSTarget</code>.
     * @alias module:model/UpdateEKSTarget
     * @param eksAccessKeyId {String} Access Key ID
     * @param eksClusterCaCert {String} EKS cluster CA certificate
     * @param eksClusterEndpoint {String} EKS cluster URL endpoint
     * @param eksClusterName {String} EKS cluster name
     * @param eksSecretAccessKey {String} Secret Access Key
     * @param name {String} Target name
     */
    constructor(eksAccessKeyId, eksClusterCaCert, eksClusterEndpoint, eksClusterName, eksSecretAccessKey, name) { 
        
        UpdateEKSTarget.initialize(this, eksAccessKeyId, eksClusterCaCert, eksClusterEndpoint, eksClusterName, eksSecretAccessKey, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eksAccessKeyId, eksClusterCaCert, eksClusterEndpoint, eksClusterName, eksSecretAccessKey, name) { 
        obj['eks-access-key-id'] = eksAccessKeyId;
        obj['eks-cluster-ca-cert'] = eksClusterCaCert;
        obj['eks-cluster-endpoint'] = eksClusterEndpoint;
        obj['eks-cluster-name'] = eksClusterName;
        obj['eks-secret-access-key'] = eksSecretAccessKey;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>UpdateEKSTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateEKSTarget} obj Optional instance to populate.
     * @return {module:model/UpdateEKSTarget} The populated <code>UpdateEKSTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateEKSTarget();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('eks-access-key-id')) {
                obj['eks-access-key-id'] = ApiClient.convertToType(data['eks-access-key-id'], 'String');
            }
            if (data.hasOwnProperty('eks-cluster-ca-cert')) {
                obj['eks-cluster-ca-cert'] = ApiClient.convertToType(data['eks-cluster-ca-cert'], 'String');
            }
            if (data.hasOwnProperty('eks-cluster-endpoint')) {
                obj['eks-cluster-endpoint'] = ApiClient.convertToType(data['eks-cluster-endpoint'], 'String');
            }
            if (data.hasOwnProperty('eks-cluster-name')) {
                obj['eks-cluster-name'] = ApiClient.convertToType(data['eks-cluster-name'], 'String');
            }
            if (data.hasOwnProperty('eks-region')) {
                obj['eks-region'] = ApiClient.convertToType(data['eks-region'], 'String');
            }
            if (data.hasOwnProperty('eks-secret-access-key')) {
                obj['eks-secret-access-key'] = ApiClient.convertToType(data['eks-secret-access-key'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('keep-prev-version')) {
                obj['keep-prev-version'] = ApiClient.convertToType(data['keep-prev-version'], 'String');
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
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('update-version')) {
                obj['update-version'] = ApiClient.convertToType(data['update-version'], 'Boolean');
            }
            if (data.hasOwnProperty('use-gw-cloud-identity')) {
                obj['use-gw-cloud-identity'] = ApiClient.convertToType(data['use-gw-cloud-identity'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Deprecated - use description
 * @member {String} comment
 */
UpdateEKSTarget.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
UpdateEKSTarget.prototype['description'] = undefined;

/**
 * Access Key ID
 * @member {String} eks-access-key-id
 */
UpdateEKSTarget.prototype['eks-access-key-id'] = undefined;

/**
 * EKS cluster CA certificate
 * @member {String} eks-cluster-ca-cert
 */
UpdateEKSTarget.prototype['eks-cluster-ca-cert'] = undefined;

/**
 * EKS cluster URL endpoint
 * @member {String} eks-cluster-endpoint
 */
UpdateEKSTarget.prototype['eks-cluster-endpoint'] = undefined;

/**
 * EKS cluster name
 * @member {String} eks-cluster-name
 */
UpdateEKSTarget.prototype['eks-cluster-name'] = undefined;

/**
 * Region
 * @member {String} eks-region
 * @default 'us-east-2'
 */
UpdateEKSTarget.prototype['eks-region'] = 'us-east-2';

/**
 * Secret Access Key
 * @member {String} eks-secret-access-key
 */
UpdateEKSTarget.prototype['eks-secret-access-key'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
UpdateEKSTarget.prototype['json'] = undefined;

/**
 * @member {String} keep-prev-version
 */
UpdateEKSTarget.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateEKSTarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateEKSTarget.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
UpdateEKSTarget.prototype['new-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateEKSTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateEKSTarget.prototype['uid-token'] = undefined;

/**
 * Deprecated
 * @member {Boolean} update-version
 */
UpdateEKSTarget.prototype['update-version'] = undefined;

/**
 * @member {Boolean} use-gw-cloud-identity
 */
UpdateEKSTarget.prototype['use-gw-cloud-identity'] = undefined;






export default UpdateEKSTarget;

