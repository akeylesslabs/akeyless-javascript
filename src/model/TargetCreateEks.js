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
 * @version 5.0.2
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
        obj['eks-region'] = 'us-east-2';
        obj['eks-secret-access-key'] = eksSecretAccessKey;
        obj['json'] = false;
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

    /**
     * Validates the JSON data with respect to <code>TargetCreateEks</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TargetCreateEks</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TargetCreateEks.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['eks-access-key-id'] && !(typeof data['eks-access-key-id'] === 'string' || data['eks-access-key-id'] instanceof String)) {
            throw new Error("Expected the field `eks-access-key-id` to be a primitive type in the JSON string but got " + data['eks-access-key-id']);
        }
        // ensure the json data is a string
        if (data['eks-cluster-ca-cert'] && !(typeof data['eks-cluster-ca-cert'] === 'string' || data['eks-cluster-ca-cert'] instanceof String)) {
            throw new Error("Expected the field `eks-cluster-ca-cert` to be a primitive type in the JSON string but got " + data['eks-cluster-ca-cert']);
        }
        // ensure the json data is a string
        if (data['eks-cluster-endpoint'] && !(typeof data['eks-cluster-endpoint'] === 'string' || data['eks-cluster-endpoint'] instanceof String)) {
            throw new Error("Expected the field `eks-cluster-endpoint` to be a primitive type in the JSON string but got " + data['eks-cluster-endpoint']);
        }
        // ensure the json data is a string
        if (data['eks-cluster-name'] && !(typeof data['eks-cluster-name'] === 'string' || data['eks-cluster-name'] instanceof String)) {
            throw new Error("Expected the field `eks-cluster-name` to be a primitive type in the JSON string but got " + data['eks-cluster-name']);
        }
        // ensure the json data is a string
        if (data['eks-region'] && !(typeof data['eks-region'] === 'string' || data['eks-region'] instanceof String)) {
            throw new Error("Expected the field `eks-region` to be a primitive type in the JSON string but got " + data['eks-region']);
        }
        // ensure the json data is a string
        if (data['eks-secret-access-key'] && !(typeof data['eks-secret-access-key'] === 'string' || data['eks-secret-access-key'] instanceof String)) {
            throw new Error("Expected the field `eks-secret-access-key` to be a primitive type in the JSON string but got " + data['eks-secret-access-key']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['max-versions'] && !(typeof data['max-versions'] === 'string' || data['max-versions'] instanceof String)) {
            throw new Error("Expected the field `max-versions` to be a primitive type in the JSON string but got " + data['max-versions']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

TargetCreateEks.RequiredProperties = ["eks-access-key-id", "eks-cluster-ca-cert", "eks-cluster-endpoint", "eks-cluster-name", "eks-secret-access-key", "name"];

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

