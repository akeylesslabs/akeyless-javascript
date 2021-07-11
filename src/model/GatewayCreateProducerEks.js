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
 * The GatewayCreateProducerEks model module.
 * @module model/GatewayCreateProducerEks
 * @version 2.5.2
 */
class GatewayCreateProducerEks {
    /**
     * Constructs a new <code>GatewayCreateProducerEks</code>.
     * gatewayCreateProducerEks is a command that creates eks producer
     * @alias module:model/GatewayCreateProducerEks
     * @param eksAccessKeyId {String} Access Key ID
     * @param eksClusterCaCert {String} EKS cluster CA certificate
     * @param eksClusterEndpoint {String} EKS cluster URL endpoint
     * @param eksClusterName {String} EKS cluster name
     * @param eksSecretAccessKey {String} Secret Access Key
     * @param name {String} Producer name
     */
    constructor(eksAccessKeyId, eksClusterCaCert, eksClusterEndpoint, eksClusterName, eksSecretAccessKey, name) { 
        
        GatewayCreateProducerEks.initialize(this, eksAccessKeyId, eksClusterCaCert, eksClusterEndpoint, eksClusterName, eksSecretAccessKey, name);
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
     * Constructs a <code>GatewayCreateProducerEks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerEks} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerEks} The populated <code>GatewayCreateProducerEks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerEks();

            if (data.hasOwnProperty('eks-access-key-id')) {
                obj['eks-access-key-id'] = ApiClient.convertToType(data['eks-access-key-id'], 'String');
            }
            if (data.hasOwnProperty('eks-assume-role')) {
                obj['eks-assume-role'] = ApiClient.convertToType(data['eks-assume-role'], 'String');
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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
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
 * Access Key ID
 * @member {String} eks-access-key-id
 */
GatewayCreateProducerEks.prototype['eks-access-key-id'] = undefined;

/**
 * IAM assume role
 * @member {String} eks-assume-role
 */
GatewayCreateProducerEks.prototype['eks-assume-role'] = undefined;

/**
 * EKS cluster CA certificate
 * @member {String} eks-cluster-ca-cert
 */
GatewayCreateProducerEks.prototype['eks-cluster-ca-cert'] = undefined;

/**
 * EKS cluster URL endpoint
 * @member {String} eks-cluster-endpoint
 */
GatewayCreateProducerEks.prototype['eks-cluster-endpoint'] = undefined;

/**
 * EKS cluster name
 * @member {String} eks-cluster-name
 */
GatewayCreateProducerEks.prototype['eks-cluster-name'] = undefined;

/**
 * Region
 * @member {String} eks-region
 * @default 'us-east-2'
 */
GatewayCreateProducerEks.prototype['eks-region'] = 'us-east-2';

/**
 * Secret Access Key
 * @member {String} eks-secret-access-key
 */
GatewayCreateProducerEks.prototype['eks-secret-access-key'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerEks.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
GatewayCreateProducerEks.prototype['password'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerEks.prototype['producer-encryption-key-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerEks.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerEks.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerEks.prototype['user-ttl'] = '60m';

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
GatewayCreateProducerEks.prototype['username'] = undefined;






export default GatewayCreateProducerEks;

