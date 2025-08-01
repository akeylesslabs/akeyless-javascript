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
 * The KubernetesAccessRules model module.
 * @module model/KubernetesAccessRules
 * @version 5.0.6
 */
class KubernetesAccessRules {
    /**
     * Constructs a new <code>KubernetesAccessRules</code>.
     * @alias module:model/KubernetesAccessRules
     */
    constructor() { 
        
        KubernetesAccessRules.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KubernetesAccessRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KubernetesAccessRules} obj Optional instance to populate.
     * @return {module:model/KubernetesAccessRules} The populated <code>KubernetesAccessRules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KubernetesAccessRules();

            if (data.hasOwnProperty('alg')) {
                obj['alg'] = ApiClient.convertToType(data['alg'], 'String');
            }
            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], 'String');
            }
            if (data.hasOwnProperty('bound_namespaces')) {
                obj['bound_namespaces'] = ApiClient.convertToType(data['bound_namespaces'], ['String']);
            }
            if (data.hasOwnProperty('bound_pod_names')) {
                obj['bound_pod_names'] = ApiClient.convertToType(data['bound_pod_names'], ['String']);
            }
            if (data.hasOwnProperty('bound_service_account_names')) {
                obj['bound_service_account_names'] = ApiClient.convertToType(data['bound_service_account_names'], ['String']);
            }
            if (data.hasOwnProperty('gen_key_pair')) {
                obj['gen_key_pair'] = ApiClient.convertToType(data['gen_key_pair'], 'String');
            }
            if (data.hasOwnProperty('pub_key')) {
                obj['pub_key'] = ApiClient.convertToType(data['pub_key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>KubernetesAccessRules</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>KubernetesAccessRules</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['alg'] && !(typeof data['alg'] === 'string' || data['alg'] instanceof String)) {
            throw new Error("Expected the field `alg` to be a primitive type in the JSON string but got " + data['alg']);
        }
        // ensure the json data is a string
        if (data['audience'] && !(typeof data['audience'] === 'string' || data['audience'] instanceof String)) {
            throw new Error("Expected the field `audience` to be a primitive type in the JSON string but got " + data['audience']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound_namespaces'])) {
            throw new Error("Expected the field `bound_namespaces` to be an array in the JSON data but got " + data['bound_namespaces']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound_pod_names'])) {
            throw new Error("Expected the field `bound_pod_names` to be an array in the JSON data but got " + data['bound_pod_names']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['bound_service_account_names'])) {
            throw new Error("Expected the field `bound_service_account_names` to be an array in the JSON data but got " + data['bound_service_account_names']);
        }
        // ensure the json data is a string
        if (data['gen_key_pair'] && !(typeof data['gen_key_pair'] === 'string' || data['gen_key_pair'] instanceof String)) {
            throw new Error("Expected the field `gen_key_pair` to be a primitive type in the JSON string but got " + data['gen_key_pair']);
        }
        // ensure the json data is a string
        if (data['pub_key'] && !(typeof data['pub_key'] === 'string' || data['pub_key'] instanceof String)) {
            throw new Error("Expected the field `pub_key` to be a primitive type in the JSON string but got " + data['pub_key']);
        }

        return true;
    }


}



/**
 * @member {String} alg
 */
KubernetesAccessRules.prototype['alg'] = undefined;

/**
 * Audience is an optional Kubernetes jwt claim to verify
 * @member {String} audience
 */
KubernetesAccessRules.prototype['audience'] = undefined;

/**
 * A list of namespaces that the authentication is restricted to.
 * @member {Array.<String>} bound_namespaces
 */
KubernetesAccessRules.prototype['bound_namespaces'] = undefined;

/**
 * A list of pods names that the authentication is restricted to.
 * @member {Array.<String>} bound_pod_names
 */
KubernetesAccessRules.prototype['bound_pod_names'] = undefined;

/**
 * A list of service account names that the authentication is restricted to.
 * @member {Array.<String>} bound_service_account_names
 */
KubernetesAccessRules.prototype['bound_service_account_names'] = undefined;

/**
 * Generate public/private key (the private key is required for the K8S Auth Config in the Akeyless Gateway)
 * @member {String} gen_key_pair
 */
KubernetesAccessRules.prototype['gen_key_pair'] = undefined;

/**
 * The public key value of the Kubernetes auth method configuration in the Akeyless Gateway.
 * @member {String} pub_key
 */
KubernetesAccessRules.prototype['pub_key'] = undefined;






export default KubernetesAccessRules;

