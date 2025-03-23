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
 * The GatewayPartialUpdateK8SAuthConfig model module.
 * @module model/GatewayPartialUpdateK8SAuthConfig
 * @version 5.0.1
 */
class GatewayPartialUpdateK8SAuthConfig {
    /**
     * Constructs a new <code>GatewayPartialUpdateK8SAuthConfig</code>.
     * @alias module:model/GatewayPartialUpdateK8SAuthConfig
     */
    constructor() { 
        
        GatewayPartialUpdateK8SAuthConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['json'] = false;
        obj['k8s-auth-type'] = 'token';
    }

    /**
     * Constructs a <code>GatewayPartialUpdateK8SAuthConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayPartialUpdateK8SAuthConfig} obj Optional instance to populate.
     * @return {module:model/GatewayPartialUpdateK8SAuthConfig} The populated <code>GatewayPartialUpdateK8SAuthConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayPartialUpdateK8SAuthConfig();

            if (data.hasOwnProperty('UseDefaultIdentityBool')) {
                obj['UseDefaultIdentityBool'] = ApiClient.convertToType(data['UseDefaultIdentityBool'], 'Boolean');
            }
            if (data.hasOwnProperty('access-id')) {
                obj['access-id'] = ApiClient.convertToType(data['access-id'], 'String');
            }
            if (data.hasOwnProperty('disable-issuer-validation')) {
                obj['disable-issuer-validation'] = ApiClient.convertToType(data['disable-issuer-validation'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('k8s-auth-type')) {
                obj['k8s-auth-type'] = ApiClient.convertToType(data['k8s-auth-type'], 'String');
            }
            if (data.hasOwnProperty('k8s-ca-cert')) {
                obj['k8s-ca-cert'] = ApiClient.convertToType(data['k8s-ca-cert'], 'String');
            }
            if (data.hasOwnProperty('k8s-client-certificate')) {
                obj['k8s-client-certificate'] = ApiClient.convertToType(data['k8s-client-certificate'], 'String');
            }
            if (data.hasOwnProperty('k8s-client-key')) {
                obj['k8s-client-key'] = ApiClient.convertToType(data['k8s-client-key'], 'String');
            }
            if (data.hasOwnProperty('k8s-host')) {
                obj['k8s-host'] = ApiClient.convertToType(data['k8s-host'], 'String');
            }
            if (data.hasOwnProperty('k8s-issuer')) {
                obj['k8s-issuer'] = ApiClient.convertToType(data['k8s-issuer'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('rancher-api-key')) {
                obj['rancher-api-key'] = ApiClient.convertToType(data['rancher-api-key'], 'String');
            }
            if (data.hasOwnProperty('rancher-cluster-id')) {
                obj['rancher-cluster-id'] = ApiClient.convertToType(data['rancher-cluster-id'], 'String');
            }
            if (data.hasOwnProperty('signing-key')) {
                obj['signing-key'] = ApiClient.convertToType(data['signing-key'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('token-exp')) {
                obj['token-exp'] = ApiClient.convertToType(data['token-exp'], 'Number');
            }
            if (data.hasOwnProperty('token-reviewer-jwt')) {
                obj['token-reviewer-jwt'] = ApiClient.convertToType(data['token-reviewer-jwt'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('use-gw-service-account')) {
                obj['use-gw-service-account'] = ApiClient.convertToType(data['use-gw-service-account'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GatewayPartialUpdateK8SAuthConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayPartialUpdateK8SAuthConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['access-id'] && !(typeof data['access-id'] === 'string' || data['access-id'] instanceof String)) {
            throw new Error("Expected the field `access-id` to be a primitive type in the JSON string but got " + data['access-id']);
        }
        // ensure the json data is a string
        if (data['disable-issuer-validation'] && !(typeof data['disable-issuer-validation'] === 'string' || data['disable-issuer-validation'] instanceof String)) {
            throw new Error("Expected the field `disable-issuer-validation` to be a primitive type in the JSON string but got " + data['disable-issuer-validation']);
        }
        // ensure the json data is a string
        if (data['k8s-auth-type'] && !(typeof data['k8s-auth-type'] === 'string' || data['k8s-auth-type'] instanceof String)) {
            throw new Error("Expected the field `k8s-auth-type` to be a primitive type in the JSON string but got " + data['k8s-auth-type']);
        }
        // ensure the json data is a string
        if (data['k8s-ca-cert'] && !(typeof data['k8s-ca-cert'] === 'string' || data['k8s-ca-cert'] instanceof String)) {
            throw new Error("Expected the field `k8s-ca-cert` to be a primitive type in the JSON string but got " + data['k8s-ca-cert']);
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
        if (data['k8s-host'] && !(typeof data['k8s-host'] === 'string' || data['k8s-host'] instanceof String)) {
            throw new Error("Expected the field `k8s-host` to be a primitive type in the JSON string but got " + data['k8s-host']);
        }
        // ensure the json data is a string
        if (data['k8s-issuer'] && !(typeof data['k8s-issuer'] === 'string' || data['k8s-issuer'] instanceof String)) {
            throw new Error("Expected the field `k8s-issuer` to be a primitive type in the JSON string but got " + data['k8s-issuer']);
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
        if (data['rancher-api-key'] && !(typeof data['rancher-api-key'] === 'string' || data['rancher-api-key'] instanceof String)) {
            throw new Error("Expected the field `rancher-api-key` to be a primitive type in the JSON string but got " + data['rancher-api-key']);
        }
        // ensure the json data is a string
        if (data['rancher-cluster-id'] && !(typeof data['rancher-cluster-id'] === 'string' || data['rancher-cluster-id'] instanceof String)) {
            throw new Error("Expected the field `rancher-cluster-id` to be a primitive type in the JSON string but got " + data['rancher-cluster-id']);
        }
        // ensure the json data is a string
        if (data['signing-key'] && !(typeof data['signing-key'] === 'string' || data['signing-key'] instanceof String)) {
            throw new Error("Expected the field `signing-key` to be a primitive type in the JSON string but got " + data['signing-key']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['token-reviewer-jwt'] && !(typeof data['token-reviewer-jwt'] === 'string' || data['token-reviewer-jwt'] instanceof String)) {
            throw new Error("Expected the field `token-reviewer-jwt` to be a primitive type in the JSON string but got " + data['token-reviewer-jwt']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }
        // ensure the json data is a string
        if (data['use-gw-service-account'] && !(typeof data['use-gw-service-account'] === 'string' || data['use-gw-service-account'] instanceof String)) {
            throw new Error("Expected the field `use-gw-service-account` to be a primitive type in the JSON string but got " + data['use-gw-service-account']);
        }

        return true;
    }


}



/**
 * @member {Boolean} UseDefaultIdentityBool
 */
GatewayPartialUpdateK8SAuthConfig.prototype['UseDefaultIdentityBool'] = undefined;

/**
 * The access ID of the Kubernetes auth method
 * @member {String} access-id
 */
GatewayPartialUpdateK8SAuthConfig.prototype['access-id'] = undefined;

/**
 * Disable issuer validation [true/false]
 * @member {String} disable-issuer-validation
 */
GatewayPartialUpdateK8SAuthConfig.prototype['disable-issuer-validation'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayPartialUpdateK8SAuthConfig.prototype['json'] = false;

/**
 * K8S auth type [token/certificate]. (relevant for \"native_k8s\" only)
 * @member {String} k8s-auth-type
 * @default 'token'
 */
GatewayPartialUpdateK8SAuthConfig.prototype['k8s-auth-type'] = 'token';

/**
 * The CA Certificate (base64 encoded) to use to call into the kubernetes API server
 * @member {String} k8s-ca-cert
 */
GatewayPartialUpdateK8SAuthConfig.prototype['k8s-ca-cert'] = undefined;

/**
 * Content of the k8 client certificate (PEM format) in a Base64 format (relevant for \"native_k8s\" only)
 * @member {String} k8s-client-certificate
 */
GatewayPartialUpdateK8SAuthConfig.prototype['k8s-client-certificate'] = undefined;

/**
 * Content of the k8 client private key (PEM format) in a Base64 format (relevant for \"native_k8s\" only)
 * @member {String} k8s-client-key
 */
GatewayPartialUpdateK8SAuthConfig.prototype['k8s-client-key'] = undefined;

/**
 * The URL of the kubernetes API server
 * @member {String} k8s-host
 */
GatewayPartialUpdateK8SAuthConfig.prototype['k8s-host'] = undefined;

/**
 * The Kubernetes JWT issuer name. K8SIssuer is the claim that specifies who issued the Kubernetes token
 * @member {String} k8s-issuer
 */
GatewayPartialUpdateK8SAuthConfig.prototype['k8s-issuer'] = undefined;

/**
 * K8S Auth config name
 * @member {String} name
 */
GatewayPartialUpdateK8SAuthConfig.prototype['name'] = undefined;

/**
 * K8S Auth config new name
 * @member {String} new-name
 */
GatewayPartialUpdateK8SAuthConfig.prototype['new-name'] = undefined;

/**
 * The api key used to access the TokenReview API to validate other JWTs (relevant for \"rancher\" only)
 * @member {String} rancher-api-key
 */
GatewayPartialUpdateK8SAuthConfig.prototype['rancher-api-key'] = undefined;

/**
 * The cluster id as define in rancher (relevant for \"rancher\" only)
 * @member {String} rancher-cluster-id
 */
GatewayPartialUpdateK8SAuthConfig.prototype['rancher-cluster-id'] = undefined;

/**
 * The private key (base64 encoded) associated with the public key defined in the Kubernetes auth
 * @member {String} signing-key
 */
GatewayPartialUpdateK8SAuthConfig.prototype['signing-key'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayPartialUpdateK8SAuthConfig.prototype['token'] = undefined;

/**
 * Time in seconds of expiration of the Akeyless Kube Auth Method token
 * @member {Number} token-exp
 */
GatewayPartialUpdateK8SAuthConfig.prototype['token-exp'] = undefined;

/**
 * A Kubernetes service account JWT used to access the TokenReview API to validate other JWTs (relevant for \"native_k8s\" only). If not set, the JWT submitted in the authentication process will be used to access the Kubernetes TokenReview API.
 * @member {String} token-reviewer-jwt
 */
GatewayPartialUpdateK8SAuthConfig.prototype['token-reviewer-jwt'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayPartialUpdateK8SAuthConfig.prototype['uid-token'] = undefined;

/**
 * Use the GW's service account
 * @member {String} use-gw-service-account
 */
GatewayPartialUpdateK8SAuthConfig.prototype['use-gw-service-account'] = undefined;






export default GatewayPartialUpdateK8SAuthConfig;

