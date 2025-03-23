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
 * The DynamicSecretUpdateEks model module.
 * @module model/DynamicSecretUpdateEks
 * @version 5.0.1
 */
class DynamicSecretUpdateEks {
    /**
     * Constructs a new <code>DynamicSecretUpdateEks</code>.
     * dynamicSecretUpdateEks is a command that updates eks dynamic secret
     * @alias module:model/DynamicSecretUpdateEks
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        DynamicSecretUpdateEks.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['eks-region'] = 'us-east-2';
        obj['json'] = false;
        obj['name'] = name;
        obj['secure-access-web'] = false;
        obj['user-ttl'] = '15m';
    }

    /**
     * Constructs a <code>DynamicSecretUpdateEks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretUpdateEks} obj Optional instance to populate.
     * @return {module:model/DynamicSecretUpdateEks} The populated <code>DynamicSecretUpdateEks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretUpdateEks();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
            if (data.hasOwnProperty('secure-access-certificate-issuer')) {
                obj['secure-access-certificate-issuer'] = ApiClient.convertToType(data['secure-access-certificate-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-cluster-endpoint')) {
                obj['secure-access-cluster-endpoint'] = ApiClient.convertToType(data['secure-access-cluster-endpoint'], 'String');
            }
            if (data.hasOwnProperty('secure-access-delay')) {
                obj['secure-access-delay'] = ApiClient.convertToType(data['secure-access-delay'], 'Number');
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

    /**
     * Validates the JSON data with respect to <code>DynamicSecretUpdateEks</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DynamicSecretUpdateEks</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DynamicSecretUpdateEks.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
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
        if (data['eks-assume-role'] && !(typeof data['eks-assume-role'] === 'string' || data['eks-assume-role'] instanceof String)) {
            throw new Error("Expected the field `eks-assume-role` to be a primitive type in the JSON string but got " + data['eks-assume-role']);
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
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['new-name'] && !(typeof data['new-name'] === 'string' || data['new-name'] instanceof String)) {
            throw new Error("Expected the field `new-name` to be a primitive type in the JSON string but got " + data['new-name']);
        }
        // ensure the json data is a string
        if (data['producer-encryption-key-name'] && !(typeof data['producer-encryption-key-name'] === 'string' || data['producer-encryption-key-name'] instanceof String)) {
            throw new Error("Expected the field `producer-encryption-key-name` to be a primitive type in the JSON string but got " + data['producer-encryption-key-name']);
        }
        // ensure the json data is a string
        if (data['secure-access-bastion-issuer'] && !(typeof data['secure-access-bastion-issuer'] === 'string' || data['secure-access-bastion-issuer'] instanceof String)) {
            throw new Error("Expected the field `secure-access-bastion-issuer` to be a primitive type in the JSON string but got " + data['secure-access-bastion-issuer']);
        }
        // ensure the json data is a string
        if (data['secure-access-certificate-issuer'] && !(typeof data['secure-access-certificate-issuer'] === 'string' || data['secure-access-certificate-issuer'] instanceof String)) {
            throw new Error("Expected the field `secure-access-certificate-issuer` to be a primitive type in the JSON string but got " + data['secure-access-certificate-issuer']);
        }
        // ensure the json data is a string
        if (data['secure-access-cluster-endpoint'] && !(typeof data['secure-access-cluster-endpoint'] === 'string' || data['secure-access-cluster-endpoint'] instanceof String)) {
            throw new Error("Expected the field `secure-access-cluster-endpoint` to be a primitive type in the JSON string but got " + data['secure-access-cluster-endpoint']);
        }
        // ensure the json data is a string
        if (data['secure-access-enable'] && !(typeof data['secure-access-enable'] === 'string' || data['secure-access-enable'] instanceof String)) {
            throw new Error("Expected the field `secure-access-enable` to be a primitive type in the JSON string but got " + data['secure-access-enable']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['target-name'] && !(typeof data['target-name'] === 'string' || data['target-name'] instanceof String)) {
            throw new Error("Expected the field `target-name` to be a primitive type in the JSON string but got " + data['target-name']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }
        // ensure the json data is a string
        if (data['user-ttl'] && !(typeof data['user-ttl'] === 'string' || data['user-ttl'] instanceof String)) {
            throw new Error("Expected the field `user-ttl` to be a primitive type in the JSON string but got " + data['user-ttl']);
        }

        return true;
    }


}

DynamicSecretUpdateEks.RequiredProperties = ["name"];

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
DynamicSecretUpdateEks.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretUpdateEks.prototype['description'] = undefined;

/**
 * Access Key ID
 * @member {String} eks-access-key-id
 */
DynamicSecretUpdateEks.prototype['eks-access-key-id'] = undefined;

/**
 * IAM assume role
 * @member {String} eks-assume-role
 */
DynamicSecretUpdateEks.prototype['eks-assume-role'] = undefined;

/**
 * EKS cluster CA certificate
 * @member {String} eks-cluster-ca-cert
 */
DynamicSecretUpdateEks.prototype['eks-cluster-ca-cert'] = undefined;

/**
 * EKS cluster URL endpoint
 * @member {String} eks-cluster-endpoint
 */
DynamicSecretUpdateEks.prototype['eks-cluster-endpoint'] = undefined;

/**
 * EKS cluster name
 * @member {String} eks-cluster-name
 */
DynamicSecretUpdateEks.prototype['eks-cluster-name'] = undefined;

/**
 * Region
 * @member {String} eks-region
 * @default 'us-east-2'
 */
DynamicSecretUpdateEks.prototype['eks-region'] = 'us-east-2';

/**
 * Secret Access Key
 * @member {String} eks-secret-access-key
 */
DynamicSecretUpdateEks.prototype['eks-secret-access-key'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretUpdateEks.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretUpdateEks.prototype['name'] = undefined;

/**
 * Dynamic secret name
 * @member {String} new-name
 */
DynamicSecretUpdateEks.prototype['new-name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
DynamicSecretUpdateEks.prototype['producer-encryption-key-name'] = undefined;

/**
 * Enable Port forwarding while using CLI access
 * @member {Boolean} secure-access-allow-port-forwading
 */
DynamicSecretUpdateEks.prototype['secure-access-allow-port-forwading'] = undefined;

/**
 * Deprecated. use secure-access-certificate-issuer
 * @member {String} secure-access-bastion-issuer
 */
DynamicSecretUpdateEks.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Secure Access
 * @member {String} secure-access-certificate-issuer
 */
DynamicSecretUpdateEks.prototype['secure-access-certificate-issuer'] = undefined;

/**
 * The K8s cluster endpoint URL
 * @member {String} secure-access-cluster-endpoint
 */
DynamicSecretUpdateEks.prototype['secure-access-cluster-endpoint'] = undefined;

/**
 * The delay duration, in seconds, to wait after generating just-in-time credentials. Accepted range: 0-120 seconds
 * @member {Number} secure-access-delay
 */
DynamicSecretUpdateEks.prototype['secure-access-delay'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
DynamicSecretUpdateEks.prototype['secure-access-enable'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
DynamicSecretUpdateEks.prototype['secure-access-web'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretUpdateEks.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretUpdateEks.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretUpdateEks.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretUpdateEks.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '15m'
 */
DynamicSecretUpdateEks.prototype['user-ttl'] = '15m';






export default DynamicSecretUpdateEks;

