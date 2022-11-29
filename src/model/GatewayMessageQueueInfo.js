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
 * The GatewayMessageQueueInfo model module.
 * @module model/GatewayMessageQueueInfo
 * @version 2.20.3
 */
class GatewayMessageQueueInfo {
    /**
     * Constructs a new <code>GatewayMessageQueueInfo</code>.
     * @alias module:model/GatewayMessageQueueInfo
     */
    constructor() { 
        
        GatewayMessageQueueInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayMessageQueueInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayMessageQueueInfo} obj Optional instance to populate.
     * @return {module:model/GatewayMessageQueueInfo} The populated <code>GatewayMessageQueueInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayMessageQueueInfo();

            if (data.hasOwnProperty('mq_type')) {
                obj['mq_type'] = ApiClient.convertToType(data['mq_type'], 'String');
            }
            if (data.hasOwnProperty('queue_name')) {
                obj['queue_name'] = ApiClient.convertToType(data['queue_name'], 'String');
            }
            if (data.hasOwnProperty('queue_url')) {
                obj['queue_url'] = ApiClient.convertToType(data['queue_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} mq_type
 */
GatewayMessageQueueInfo.prototype['mq_type'] = undefined;

/**
 * @member {String} queue_name
 */
GatewayMessageQueueInfo.prototype['queue_name'] = undefined;

/**
 * @member {String} queue_url
 */
GatewayMessageQueueInfo.prototype['queue_url'] = undefined;






export default GatewayMessageQueueInfo;

