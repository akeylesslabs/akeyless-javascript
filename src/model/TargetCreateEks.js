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
 * The TargetCreateEks model module.
 * @module model/TargetCreateEks
 * @version 4.2.0
 */
class TargetCreateEks {
    /**
     * Constructs a new <code>TargetCreateEks</code>.
     * @alias module:model/TargetCreateEks
     * @param eksAccessKeyId {String} Access Key ID
     * @param eksClusterCaCert {String} EKS cluster CA certificate
     * @param eksClusterEndpoint {String} EKS cluster URL endpoint
     * @param eksClusterName {String} EKS cluster name
     * @param eksSecretAccessKey {String} Secret Access Key
     * @param name {String} Target name
     */
    constructor(eksAccessKeyId, eksClusterCaCert, eksClusterEndpoint, eksClusterName, eksSecretAccessKey, name) { 
        
        TargetCreateEks.initialize(this, eksAccessKeyId, eksClusterCaCert, eksClusterEndpoint, eksClusterName, eksSecretAccessKey, name);
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
     * Constructs a <code>TargetCreateEks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetCreateEks} obj Optional instance to populate.
     * @return {module:model/TargetCreateEks} The populated <code>TargetCreateEks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetCreateEks();

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
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
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
            if (data.hasOwnProperty('use-gw-cloud-identity')) {
                obj['use-gw-cloud-identity'] = ApiClient.convertToType(data['use-gw-cloud-identity'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Description of the object
 * @member {String} description
 */
TargetCreateEks.prototype['description'] = undefined;

/**
 * Access Key ID
 * @member {String} eks-access-key-id
 */
TargetCreateEks.prototype['eks-access-key-id'] = undefined;

/**
 * EKS cluster CA certificate
 * @member {String} eks-cluster-ca-cert
 */
TargetCreateEks.prototype['eks-cluster-ca-cert'] = undefined;

/**
 * EKS cluster URL endpoint
 * @member {String} eks-cluster-endpoint
 */
TargetCreateEks.prototype['eks-cluster-endpoint'] = undefined;

/**
 * EKS cluster name
 * @member {String} eks-cluster-name
 */
TargetCreateEks.prototype['eks-cluster-name'] = undefined;

/**
 * Region
 * @member {String} eks-region
 * @default 'us-east-2'
 */
TargetCreateEks.prototype['eks-region'] = 'us-east-2';

/**
 * Secret Access Key
 * @member {String} eks-secret-access-key
 */
TargetCreateEks.prototype['eks-secret-access-key'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetCreateEks.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetCreateEks.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetCreateEks.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetCreateEks.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetCreateEks.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetCreateEks.prototype['uid-token'] = undefined;

/**
 * @member {Boolean} use-gw-cloud-identity
 */
TargetCreateEks.prototype['use-gw-cloud-identity'] = undefined;






export default TargetCreateEks;

