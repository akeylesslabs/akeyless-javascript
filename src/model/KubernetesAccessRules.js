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
 * The KubernetesAccessRules model module.
 * @module model/KubernetesAccessRules
 * @version 3.4.0
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

