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
 * The NativeK8sTargetDetails model module.
 * @module model/NativeK8sTargetDetails
 * @version 5.0.6
 */
class NativeK8sTargetDetails {
    /**
     * Constructs a new <code>NativeK8sTargetDetails</code>.
     * @alias module:model/NativeK8sTargetDetails
     */
    constructor() { 
        
        NativeK8sTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NativeK8sTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NativeK8sTargetDetails} obj Optional instance to populate.
     * @return {module:model/NativeK8sTargetDetails} The populated <code>NativeK8sTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NativeK8sTargetDetails();

            if (data.hasOwnProperty('k8s_auth_type')) {
                obj['k8s_auth_type'] = ApiClient.convertToType(data['k8s_auth_type'], 'String');
            }
            if (data.hasOwnProperty('k8s_bearer_token')) {
                obj['k8s_bearer_token'] = ApiClient.convertToType(data['k8s_bearer_token'], 'String');
            }
            if (data.hasOwnProperty('k8s_client_cert_data')) {
                obj['k8s_client_cert_data'] = ApiClient.convertToType(data['k8s_client_cert_data'], 'String');
            }
            if (data.hasOwnProperty('k8s_client_key_data')) {
                obj['k8s_client_key_data'] = ApiClient.convertToType(data['k8s_client_key_data'], 'String');
            }
            if (data.hasOwnProperty('k8s_cluster_ca_certificate')) {
                obj['k8s_cluster_ca_certificate'] = ApiClient.convertToType(data['k8s_cluster_ca_certificate'], 'String');
            }
            if (data.hasOwnProperty('k8s_cluster_endpoint')) {
                obj['k8s_cluster_endpoint'] = ApiClient.convertToType(data['k8s_cluster_endpoint'], 'String');
            }
            if (data.hasOwnProperty('k8s_cluster_name')) {
                obj['k8s_cluster_name'] = ApiClient.convertToType(data['k8s_cluster_name'], 'String');
            }
            if (data.hasOwnProperty('use_gw_service_account')) {
                obj['use_gw_service_account'] = ApiClient.convertToType(data['use_gw_service_account'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NativeK8sTargetDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NativeK8sTargetDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['k8s_auth_type'] && !(typeof data['k8s_auth_type'] === 'string' || data['k8s_auth_type'] instanceof String)) {
            throw new Error("Expected the field `k8s_auth_type` to be a primitive type in the JSON string but got " + data['k8s_auth_type']);
        }
        // ensure the json data is a string
        if (data['k8s_bearer_token'] && !(typeof data['k8s_bearer_token'] === 'string' || data['k8s_bearer_token'] instanceof String)) {
            throw new Error("Expected the field `k8s_bearer_token` to be a primitive type in the JSON string but got " + data['k8s_bearer_token']);
        }
        // ensure the json data is a string
        if (data['k8s_client_cert_data'] && !(typeof data['k8s_client_cert_data'] === 'string' || data['k8s_client_cert_data'] instanceof String)) {
            throw new Error("Expected the field `k8s_client_cert_data` to be a primitive type in the JSON string but got " + data['k8s_client_cert_data']);
        }
        // ensure the json data is a string
        if (data['k8s_client_key_data'] && !(typeof data['k8s_client_key_data'] === 'string' || data['k8s_client_key_data'] instanceof String)) {
            throw new Error("Expected the field `k8s_client_key_data` to be a primitive type in the JSON string but got " + data['k8s_client_key_data']);
        }
        // ensure the json data is a string
        if (data['k8s_cluster_ca_certificate'] && !(typeof data['k8s_cluster_ca_certificate'] === 'string' || data['k8s_cluster_ca_certificate'] instanceof String)) {
            throw new Error("Expected the field `k8s_cluster_ca_certificate` to be a primitive type in the JSON string but got " + data['k8s_cluster_ca_certificate']);
        }
        // ensure the json data is a string
        if (data['k8s_cluster_endpoint'] && !(typeof data['k8s_cluster_endpoint'] === 'string' || data['k8s_cluster_endpoint'] instanceof String)) {
            throw new Error("Expected the field `k8s_cluster_endpoint` to be a primitive type in the JSON string but got " + data['k8s_cluster_endpoint']);
        }
        // ensure the json data is a string
        if (data['k8s_cluster_name'] && !(typeof data['k8s_cluster_name'] === 'string' || data['k8s_cluster_name'] instanceof String)) {
            throw new Error("Expected the field `k8s_cluster_name` to be a primitive type in the JSON string but got " + data['k8s_cluster_name']);
        }

        return true;
    }


}



/**
 * @member {String} k8s_auth_type
 */
NativeK8sTargetDetails.prototype['k8s_auth_type'] = undefined;

/**
 * @member {String} k8s_bearer_token
 */
NativeK8sTargetDetails.prototype['k8s_bearer_token'] = undefined;

/**
 * For K8s Client certificates authentication
 * @member {String} k8s_client_cert_data
 */
NativeK8sTargetDetails.prototype['k8s_client_cert_data'] = undefined;

/**
 * @member {String} k8s_client_key_data
 */
NativeK8sTargetDetails.prototype['k8s_client_key_data'] = undefined;

/**
 * @member {String} k8s_cluster_ca_certificate
 */
NativeK8sTargetDetails.prototype['k8s_cluster_ca_certificate'] = undefined;

/**
 * @member {String} k8s_cluster_endpoint
 */
NativeK8sTargetDetails.prototype['k8s_cluster_endpoint'] = undefined;

/**
 * @member {String} k8s_cluster_name
 */
NativeK8sTargetDetails.prototype['k8s_cluster_name'] = undefined;

/**
 * @member {Boolean} use_gw_service_account
 */
NativeK8sTargetDetails.prototype['use_gw_service_account'] = undefined;






export default NativeK8sTargetDetails;

