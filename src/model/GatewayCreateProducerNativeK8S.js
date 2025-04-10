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
 * The GatewayCreateProducerNativeK8S model module.
 * @module model/GatewayCreateProducerNativeK8S
 * @version 5.0.2
 */
class GatewayCreateProducerNativeK8S {
    /**
     * Constructs a new <code>GatewayCreateProducerNativeK8S</code>.
     * gatewayCreateProducerNativeK8S is a command that creates k8s producer [Deprecated: Use dynamic-secret-create-k8s command]
     * @alias module:model/GatewayCreateProducerNativeK8S
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        GatewayCreateProducerNativeK8S.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['json'] = false;
        obj['name'] = name;
        obj['secure-access-web'] = false;
        obj['secure-access-web-browsing'] = false;
        obj['secure-access-web-proxy'] = false;
        obj['user-ttl'] = '60m';
    }

    /**
     * Constructs a <code>GatewayCreateProducerNativeK8S</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerNativeK8S} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerNativeK8S} The populated <code>GatewayCreateProducerNativeK8S</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerNativeK8S();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('k8s-allowed-namespaces')) {
                obj['k8s-allowed-namespaces'] = ApiClient.convertToType(data['k8s-allowed-namespaces'], 'String');
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
            if (data.hasOwnProperty('k8s-namespace')) {
                obj['k8s-namespace'] = ApiClient.convertToType(data['k8s-namespace'], 'String');
            }
            if (data.hasOwnProperty('k8s-predefined-role-name')) {
                obj['k8s-predefined-role-name'] = ApiClient.convertToType(data['k8s-predefined-role-name'], 'String');
            }
            if (data.hasOwnProperty('k8s-predefined-role-type')) {
                obj['k8s-predefined-role-type'] = ApiClient.convertToType(data['k8s-predefined-role-type'], 'String');
            }
            if (data.hasOwnProperty('k8s-rolebinding-yaml-def')) {
                obj['k8s-rolebinding-yaml-def'] = ApiClient.convertToType(data['k8s-rolebinding-yaml-def'], 'String');
            }
            if (data.hasOwnProperty('k8s-service-account')) {
                obj['k8s-service-account'] = ApiClient.convertToType(data['k8s-service-account'], 'String');
            }
            if (data.hasOwnProperty('k8s-service-account-type')) {
                obj['k8s-service-account-type'] = ApiClient.convertToType(data['k8s-service-account-type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
            if (data.hasOwnProperty('secure-access-dashboard-url')) {
                obj['secure-access-dashboard-url'] = ApiClient.convertToType(data['secure-access-dashboard-url'], 'String');
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
            if (data.hasOwnProperty('secure-access-web-browsing')) {
                obj['secure-access-web-browsing'] = ApiClient.convertToType(data['secure-access-web-browsing'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-proxy')) {
                obj['secure-access-web-proxy'] = ApiClient.convertToType(data['secure-access-web-proxy'], 'Boolean');
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
            if (data.hasOwnProperty('use-gw-service-account')) {
                obj['use-gw-service-account'] = ApiClient.convertToType(data['use-gw-service-account'], 'Boolean');
            }
            if (data.hasOwnProperty('user-ttl')) {
                obj['user-ttl'] = ApiClient.convertToType(data['user-ttl'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GatewayCreateProducerNativeK8S</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayCreateProducerNativeK8S</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GatewayCreateProducerNativeK8S.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['k8s-allowed-namespaces'] && !(typeof data['k8s-allowed-namespaces'] === 'string' || data['k8s-allowed-namespaces'] instanceof String)) {
            throw new Error("Expected the field `k8s-allowed-namespaces` to be a primitive type in the JSON string but got " + data['k8s-allowed-namespaces']);
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
        if (data['k8s-namespace'] && !(typeof data['k8s-namespace'] === 'string' || data['k8s-namespace'] instanceof String)) {
            throw new Error("Expected the field `k8s-namespace` to be a primitive type in the JSON string but got " + data['k8s-namespace']);
        }
        // ensure the json data is a string
        if (data['k8s-predefined-role-name'] && !(typeof data['k8s-predefined-role-name'] === 'string' || data['k8s-predefined-role-name'] instanceof String)) {
            throw new Error("Expected the field `k8s-predefined-role-name` to be a primitive type in the JSON string but got " + data['k8s-predefined-role-name']);
        }
        // ensure the json data is a string
        if (data['k8s-predefined-role-type'] && !(typeof data['k8s-predefined-role-type'] === 'string' || data['k8s-predefined-role-type'] instanceof String)) {
            throw new Error("Expected the field `k8s-predefined-role-type` to be a primitive type in the JSON string but got " + data['k8s-predefined-role-type']);
        }
        // ensure the json data is a string
        if (data['k8s-rolebinding-yaml-def'] && !(typeof data['k8s-rolebinding-yaml-def'] === 'string' || data['k8s-rolebinding-yaml-def'] instanceof String)) {
            throw new Error("Expected the field `k8s-rolebinding-yaml-def` to be a primitive type in the JSON string but got " + data['k8s-rolebinding-yaml-def']);
        }
        // ensure the json data is a string
        if (data['k8s-service-account'] && !(typeof data['k8s-service-account'] === 'string' || data['k8s-service-account'] instanceof String)) {
            throw new Error("Expected the field `k8s-service-account` to be a primitive type in the JSON string but got " + data['k8s-service-account']);
        }
        // ensure the json data is a string
        if (data['k8s-service-account-type'] && !(typeof data['k8s-service-account-type'] === 'string' || data['k8s-service-account-type'] instanceof String)) {
            throw new Error("Expected the field `k8s-service-account-type` to be a primitive type in the JSON string but got " + data['k8s-service-account-type']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
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
        if (data['secure-access-dashboard-url'] && !(typeof data['secure-access-dashboard-url'] === 'string' || data['secure-access-dashboard-url'] instanceof String)) {
            throw new Error("Expected the field `secure-access-dashboard-url` to be a primitive type in the JSON string but got " + data['secure-access-dashboard-url']);
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

GatewayCreateProducerNativeK8S.RequiredProperties = ["name"];

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
GatewayCreateProducerNativeK8S.prototype['delete_protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayCreateProducerNativeK8S.prototype['json'] = false;

/**
 * Comma-separated list of allowed K8S namespaces for the generated ServiceAccount (relevant only for k8s-service-account-type=dynamic)
 * @member {String} k8s-allowed-namespaces
 */
GatewayCreateProducerNativeK8S.prototype['k8s-allowed-namespaces'] = undefined;

/**
 * K8S cluster CA certificate
 * @member {String} k8s-cluster-ca-cert
 */
GatewayCreateProducerNativeK8S.prototype['k8s-cluster-ca-cert'] = undefined;

/**
 * K8S cluster URL endpoint
 * @member {String} k8s-cluster-endpoint
 */
GatewayCreateProducerNativeK8S.prototype['k8s-cluster-endpoint'] = undefined;

/**
 * K8S cluster name
 * @member {String} k8s-cluster-name
 */
GatewayCreateProducerNativeK8S.prototype['k8s-cluster-name'] = undefined;

/**
 * K8S cluster Bearer token
 * @member {String} k8s-cluster-token
 */
GatewayCreateProducerNativeK8S.prototype['k8s-cluster-token'] = undefined;

/**
 * K8S Namespace where the ServiceAccount exists.
 * @member {String} k8s-namespace
 */
GatewayCreateProducerNativeK8S.prototype['k8s-namespace'] = undefined;

/**
 * The pre-existing Role or ClusterRole name to bind the generated ServiceAccount to (relevant only for k8s-service-account-type=dynamic)
 * @member {String} k8s-predefined-role-name
 */
GatewayCreateProducerNativeK8S.prototype['k8s-predefined-role-name'] = undefined;

/**
 * Specifies the type of the pre-existing K8S role [Role, ClusterRole] (relevant only for k8s-service-account-type=dynamic)
 * @member {String} k8s-predefined-role-type
 */
GatewayCreateProducerNativeK8S.prototype['k8s-predefined-role-type'] = undefined;

/**
 * Path to yaml file that contains definitions of K8S role and role binding (relevant only for k8s-service-account-type=dynamic)
 * @member {String} k8s-rolebinding-yaml-def
 */
GatewayCreateProducerNativeK8S.prototype['k8s-rolebinding-yaml-def'] = undefined;

/**
 * K8S ServiceAccount to extract token from.
 * @member {String} k8s-service-account
 */
GatewayCreateProducerNativeK8S.prototype['k8s-service-account'] = undefined;

/**
 * K8S ServiceAccount type [fixed, dynamic].
 * @member {String} k8s-service-account-type
 */
GatewayCreateProducerNativeK8S.prototype['k8s-service-account-type'] = undefined;

/**
 * Dynamic secret name
 * @member {String} name
 */
GatewayCreateProducerNativeK8S.prototype['name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerNativeK8S.prototype['producer-encryption-key-name'] = undefined;

/**
 * Enable Port forwarding while using CLI access
 * @member {Boolean} secure-access-allow-port-forwading
 */
GatewayCreateProducerNativeK8S.prototype['secure-access-allow-port-forwading'] = undefined;

/**
 * Deprecated. use secure-access-certificate-issuer
 * @member {String} secure-access-bastion-issuer
 */
GatewayCreateProducerNativeK8S.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Secure Access
 * @member {String} secure-access-certificate-issuer
 */
GatewayCreateProducerNativeK8S.prototype['secure-access-certificate-issuer'] = undefined;

/**
 * The K8s cluster endpoint URL
 * @member {String} secure-access-cluster-endpoint
 */
GatewayCreateProducerNativeK8S.prototype['secure-access-cluster-endpoint'] = undefined;

/**
 * The K8s dashboard url
 * @member {String} secure-access-dashboard-url
 */
GatewayCreateProducerNativeK8S.prototype['secure-access-dashboard-url'] = undefined;

/**
 * The delay duration, in seconds, to wait after generating just-in-time credentials. Accepted range: 0-120 seconds
 * @member {Number} secure-access-delay
 */
GatewayCreateProducerNativeK8S.prototype['secure-access-delay'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
GatewayCreateProducerNativeK8S.prototype['secure-access-enable'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
GatewayCreateProducerNativeK8S.prototype['secure-access-web'] = false;

/**
 * Secure browser via Akeyless's Secure Remote Access (SRA)
 * @member {Boolean} secure-access-web-browsing
 * @default false
 */
GatewayCreateProducerNativeK8S.prototype['secure-access-web-browsing'] = false;

/**
 * Web-Proxy via Akeyless's Secure Remote Access (SRA)
 * @member {Boolean} secure-access-web-proxy
 * @default false
 */
GatewayCreateProducerNativeK8S.prototype['secure-access-web-proxy'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayCreateProducerNativeK8S.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayCreateProducerNativeK8S.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerNativeK8S.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerNativeK8S.prototype['uid-token'] = undefined;

/**
 * Use the GW's service account
 * @member {Boolean} use-gw-service-account
 */
GatewayCreateProducerNativeK8S.prototype['use-gw-service-account'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerNativeK8S.prototype['user-ttl'] = '60m';






export default GatewayCreateProducerNativeK8S;

