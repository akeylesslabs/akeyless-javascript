/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TargetCreateK8s model module.
 * @module model/TargetCreateK8s
 * @version 5.0.3
 */
class TargetCreateK8s {
    /**
     * Constructs a new <code>TargetCreateK8s</code>.
     * targetCreateK8s is a command that creates a new k8s target
     * @alias module:model/TargetCreateK8s
     * @param name {String} Target name
     */
    constructor(name) { 
        
        TargetCreateK8s.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['json'] = false;
        obj['k8s-auth-type'] = 'token';
        obj['name'] = name;
    }

    /**
     * Constructs a <code>TargetCreateK8s</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetCreateK8s} obj Optional instance to populate.
     * @return {module:model/TargetCreateK8s} The populated <code>TargetCreateK8s</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetCreateK8s();

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
            if (data.hasOwnProperty('use-gw-service-account')) {
                obj['use-gw-service-account'] = ApiClient.convertToType(data['use-gw-service-account'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TargetCreateK8s</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TargetCreateK8s</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TargetCreateK8s.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['k8s-auth-type'] && !(typeof data['k8s-auth-type'] === 'string' || data['k8s-auth-type'] instanceof String)) {
            throw new Error("Expected the field `k8s-auth-type` to be a primitive type in the JSON string but got " + data['k8s-auth-type']);
        }
        // ensure the json data is a string
        if (data['k8s-client-certificate'] && !(typeof data['k8s-client-certificate'] === 'string' || data['k8s-client-certificate'] instanceof String)) {
            throw new Error("Expected the field `k8s-client-certificate` to be a primitive type in the JSON string but got " + data['k8s-client-certificate']);
        }
        // ensure the json data is a string
        if (data['k8s-client-key'] && !(typeof data['k8s-client-key'] === 'string' || data['k8s-client-key'] instanceof String)) {
            throw new Error("Expected the field `k8s-client-key` to be a primitive type in the JSON string but got " + data['k8s-client-key']);
        }
        // ensure the json data is a string
        if (data['k8s-cluster-ca-cert'] && !(typeof data['k8s-cluster-ca-cert'] === 'string' || data['k8s-cluster-ca-cert'] instanceof String)) {
            throw new Error("Expected the field `k8s-cluster-ca-cert` to be a primitive type in the JSON string but got " + data['k8s-cluster-ca-cert']);
        }
        // ensure the json data is a string
        if (data['k8s-cluster-endpoint'] && !(typeof data['k8s-cluster-endpoint'] === 'string' || data['k8s-cluster-endpoint'] instanceof String)) {
            throw new Error("Expected the field `k8s-cluster-endpoint` to be a primitive type in the JSON string but got " + data['k8s-cluster-endpoint']);
        }
        // ensure the json data is a string
        if (data['k8s-cluster-name'] && !(typeof data['k8s-cluster-name'] === 'string' || data['k8s-cluster-name'] instanceof String)) {
            throw new Error("Expected the field `k8s-cluster-name` to be a primitive type in the JSON string but got " + data['k8s-cluster-name']);
        }
        // ensure the json data is a string
        if (data['k8s-cluster-token'] && !(typeof data['k8s-cluster-token'] === 'string' || data['k8s-cluster-token'] instanceof String)) {
            throw new Error("Expected the field `k8s-cluster-token` to be a primitive type in the JSON string but got " + data['k8s-cluster-token']);
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

TargetCreateK8s.RequiredProperties = ["name"];

/**
 * Description of the object
 * @member {String} description
 */
TargetCreateK8s.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetCreateK8s.prototype['json'] = false;

/**
 * K8S auth type [token/certificate]
 * @member {String} k8s-auth-type
 * @default 'token'
 */
TargetCreateK8s.prototype['k8s-auth-type'] = 'token';

/**
 * Content of the k8 client certificate (PEM format) in a Base64 format
 * @member {String} k8s-client-certificate
 */
TargetCreateK8s.prototype['k8s-client-certificate'] = undefined;

/**
 * Content of the k8 client private key (PEM format) in a Base64 format
 * @member {String} k8s-client-key
 */
TargetCreateK8s.prototype['k8s-client-key'] = undefined;

/**
 * K8S cluster CA certificate
 * @member {String} k8s-cluster-ca-cert
 */
TargetCreateK8s.prototype['k8s-cluster-ca-cert'] = undefined;

/**
 * K8S cluster URL endpoint
 * @member {String} k8s-cluster-endpoint
 */
TargetCreateK8s.prototype['k8s-cluster-endpoint'] = undefined;

/**
 * K8S cluster name
 * @member {String} k8s-cluster-name
 */
TargetCreateK8s.prototype['k8s-cluster-name'] = undefined;

/**
 * K8S cluster Bearer token
 * @member {String} k8s-cluster-token
 */
TargetCreateK8s.prototype['k8s-cluster-token'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetCreateK8s.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetCreateK8s.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetCreateK8s.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetCreateK8s.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetCreateK8s.prototype['uid-token'] = undefined;

/**
 * Use the GW's service account
 * @member {Boolean} use-gw-service-account
 */
TargetCreateK8s.prototype['use-gw-service-account'] = undefined;






export default TargetCreateK8s;

