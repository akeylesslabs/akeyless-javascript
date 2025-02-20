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
 * The DynamicSecretProducerInfo model module.
 * @module model/DynamicSecretProducerInfo
 * @version 5.0.0
 */
class DynamicSecretProducerInfo {
    /**
     * Constructs a new <code>DynamicSecretProducerInfo</code>.
     * DynamicSecretProducerInfo The dynamic secret producer info This parameter relevant and required only in case of create update dynamic secret.
     * @alias module:model/DynamicSecretProducerInfo
     */
    constructor() { 
        
        DynamicSecretProducerInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DynamicSecretProducerInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretProducerInfo} obj Optional instance to populate.
     * @return {module:model/DynamicSecretProducerInfo} The populated <code>DynamicSecretProducerInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretProducerInfo();

            if (data.hasOwnProperty('failure_message')) {
                obj['failure_message'] = ApiClient.convertToType(data['failure_message'], 'String');
            }
            if (data.hasOwnProperty('gw_cluster_id')) {
                obj['gw_cluster_id'] = ApiClient.convertToType(data['gw_cluster_id'], 'Number');
            }
            if (data.hasOwnProperty('k8s_allowed_namespaces')) {
                obj['k8s_allowed_namespaces'] = ApiClient.convertToType(data['k8s_allowed_namespaces'], 'String');
            }
            if (data.hasOwnProperty('k8s_dynamic_mode')) {
                obj['k8s_dynamic_mode'] = ApiClient.convertToType(data['k8s_dynamic_mode'], 'Boolean');
            }
            if (data.hasOwnProperty('producer_last_keep_alive')) {
                obj['producer_last_keep_alive'] = ApiClient.convertToType(data['producer_last_keep_alive'], 'String');
            }
            if (data.hasOwnProperty('producer_metadata')) {
                obj['producer_metadata'] = ApiClient.convertToType(data['producer_metadata'], 'String');
            }
            if (data.hasOwnProperty('producer_status')) {
                obj['producer_status'] = ApiClient.convertToType(data['producer_status'], 'String');
            }
            if (data.hasOwnProperty('producer_type')) {
                obj['producer_type'] = ApiClient.convertToType(data['producer_type'], 'String');
            }
            if (data.hasOwnProperty('user_ttl')) {
                obj['user_ttl'] = ApiClient.convertToType(data['user_ttl'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DynamicSecretProducerInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DynamicSecretProducerInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['failure_message'] && !(typeof data['failure_message'] === 'string' || data['failure_message'] instanceof String)) {
            throw new Error("Expected the field `failure_message` to be a primitive type in the JSON string but got " + data['failure_message']);
        }
        // ensure the json data is a string
        if (data['k8s_allowed_namespaces'] && !(typeof data['k8s_allowed_namespaces'] === 'string' || data['k8s_allowed_namespaces'] instanceof String)) {
            throw new Error("Expected the field `k8s_allowed_namespaces` to be a primitive type in the JSON string but got " + data['k8s_allowed_namespaces']);
        }
        // ensure the json data is a string
        if (data['producer_last_keep_alive'] && !(typeof data['producer_last_keep_alive'] === 'string' || data['producer_last_keep_alive'] instanceof String)) {
            throw new Error("Expected the field `producer_last_keep_alive` to be a primitive type in the JSON string but got " + data['producer_last_keep_alive']);
        }
        // ensure the json data is a string
        if (data['producer_metadata'] && !(typeof data['producer_metadata'] === 'string' || data['producer_metadata'] instanceof String)) {
            throw new Error("Expected the field `producer_metadata` to be a primitive type in the JSON string but got " + data['producer_metadata']);
        }
        // ensure the json data is a string
        if (data['producer_status'] && !(typeof data['producer_status'] === 'string' || data['producer_status'] instanceof String)) {
            throw new Error("Expected the field `producer_status` to be a primitive type in the JSON string but got " + data['producer_status']);
        }
        // ensure the json data is a string
        if (data['producer_type'] && !(typeof data['producer_type'] === 'string' || data['producer_type'] instanceof String)) {
            throw new Error("Expected the field `producer_type` to be a primitive type in the JSON string but got " + data['producer_type']);
        }
        // ensure the json data is a string
        if (data['user_ttl'] && !(typeof data['user_ttl'] === 'string' || data['user_ttl'] instanceof String)) {
            throw new Error("Expected the field `user_ttl` to be a primitive type in the JSON string but got " + data['user_ttl']);
        }

        return true;
    }


}



/**
 * @member {String} failure_message
 */
DynamicSecretProducerInfo.prototype['failure_message'] = undefined;

/**
 * @member {Number} gw_cluster_id
 */
DynamicSecretProducerInfo.prototype['gw_cluster_id'] = undefined;

/**
 * Relevant only for generic k8s producer
 * @member {String} k8s_allowed_namespaces
 */
DynamicSecretProducerInfo.prototype['k8s_allowed_namespaces'] = undefined;

/**
 * Relevant only for generic k8s producer
 * @member {Boolean} k8s_dynamic_mode
 */
DynamicSecretProducerInfo.prototype['k8s_dynamic_mode'] = undefined;

/**
 * @member {String} producer_last_keep_alive
 */
DynamicSecretProducerInfo.prototype['producer_last_keep_alive'] = undefined;

/**
 * @member {String} producer_metadata
 */
DynamicSecretProducerInfo.prototype['producer_metadata'] = undefined;

/**
 * RotationStatus defines types of rotation Status
 * @member {String} producer_status
 */
DynamicSecretProducerInfo.prototype['producer_status'] = undefined;

/**
 * @member {String} producer_type
 */
DynamicSecretProducerInfo.prototype['producer_type'] = undefined;

/**
 * @member {String} user_ttl
 */
DynamicSecretProducerInfo.prototype['user_ttl'] = undefined;






export default DynamicSecretProducerInfo;

