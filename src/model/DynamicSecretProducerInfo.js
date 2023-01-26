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
 * The DynamicSecretProducerInfo model module.
 * @module model/DynamicSecretProducerInfo
 * @version 3.2.1
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
        }
        return obj;
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






export default DynamicSecretProducerInfo;

