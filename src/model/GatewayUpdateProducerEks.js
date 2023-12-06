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
 * The GatewayUpdateProducerEks model module.
 * @module model/GatewayUpdateProducerEks
 * @version 3.5.1
 */
class GatewayUpdateProducerEks {
    /**
     * Constructs a new <code>GatewayUpdateProducerEks</code>.
     * gatewayUpdateProducerEks is a command that updates eks producer
     * @alias module:model/GatewayUpdateProducerEks
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayUpdateProducerEks.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GatewayUpdateProducerEks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerEks} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerEks} The populated <code>GatewayUpdateProducerEks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerEks();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
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
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-web')) {
                obj['secure-access-web'] = ApiClient.convertToType(data['secure-access-web'], 'Boolean');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
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
        }
        return obj;
    }


}

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
GatewayUpdateProducerEks.prototype['delete_protection'] = undefined;

/**
 * Access Key ID
 * @member {String} eks-access-key-id
 */
GatewayUpdateProducerEks.prototype['eks-access-key-id'] = undefined;

/**
 * IAM assume role
 * @member {String} eks-assume-role
 */
GatewayUpdateProducerEks.prototype['eks-assume-role'] = undefined;

/**
 * EKS cluster CA certificate
 * @member {String} eks-cluster-ca-cert
 */
GatewayUpdateProducerEks.prototype['eks-cluster-ca-cert'] = undefined;

/**
 * EKS cluster URL endpoint
 * @member {String} eks-cluster-endpoint
 */
GatewayUpdateProducerEks.prototype['eks-cluster-endpoint'] = undefined;

/**
 * EKS cluster name
 * @member {String} eks-cluster-name
 */
GatewayUpdateProducerEks.prototype['eks-cluster-name'] = undefined;

/**
 * Region
 * @member {String} eks-region
 * @default 'us-east-2'
 */
GatewayUpdateProducerEks.prototype['eks-region'] = 'us-east-2';

/**
 * Secret Access Key
 * @member {String} eks-secret-access-key
 */
GatewayUpdateProducerEks.prototype['eks-secret-access-key'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateProducerEks.prototype['json'] = false;

/**
 * Producer name
 * @member {String} name
 */
GatewayUpdateProducerEks.prototype['name'] = undefined;

/**
 * Producer name
 * @member {String} new-name
 */
GatewayUpdateProducerEks.prototype['new-name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayUpdateProducerEks.prototype['producer-encryption-key-name'] = undefined;

/**
 * Enable Port forwarding while using CLI access
 * @member {Boolean} secure-access-allow-port-forwading
 */
GatewayUpdateProducerEks.prototype['secure-access-allow-port-forwading'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Bastion
 * @member {String} secure-access-bastion-issuer
 */
GatewayUpdateProducerEks.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * The K8s cluster endpoint URL
 * @member {String} secure-access-cluster-endpoint
 */
GatewayUpdateProducerEks.prototype['secure-access-cluster-endpoint'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
GatewayUpdateProducerEks.prototype['secure-access-enable'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
GatewayUpdateProducerEks.prototype['secure-access-web'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerEks.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerEks.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerEks.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerEks.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '15m'
 */
GatewayUpdateProducerEks.prototype['user-ttl'] = '15m';






export default GatewayUpdateProducerEks;

