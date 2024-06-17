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
 * The GatewayBasicInfo model module.
 * @module model/GatewayBasicInfo
 * @version 4.1.0
 */
class GatewayBasicInfo {
    /**
     * Constructs a new <code>GatewayBasicInfo</code>.
     * @alias module:model/GatewayBasicInfo
     */
    constructor() { 
        
        GatewayBasicInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayBasicInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayBasicInfo} obj Optional instance to populate.
     * @return {module:model/GatewayBasicInfo} The populated <code>GatewayBasicInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayBasicInfo();

            if (data.hasOwnProperty('cluster_display_name')) {
                obj['cluster_display_name'] = ApiClient.convertToType(data['cluster_display_name'], 'String');
            }
            if (data.hasOwnProperty('cluster_id')) {
                obj['cluster_id'] = ApiClient.convertToType(data['cluster_id'], 'Number');
            }
            if (data.hasOwnProperty('cluster_name')) {
                obj['cluster_name'] = ApiClient.convertToType(data['cluster_name'], 'String');
            }
            if (data.hasOwnProperty('cluster_url')) {
                obj['cluster_url'] = ApiClient.convertToType(data['cluster_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} cluster_display_name
 */
GatewayBasicInfo.prototype['cluster_display_name'] = undefined;

/**
 * @member {Number} cluster_id
 */
GatewayBasicInfo.prototype['cluster_id'] = undefined;

/**
 * @member {String} cluster_name
 */
GatewayBasicInfo.prototype['cluster_name'] = undefined;

/**
 * @member {String} cluster_url
 */
GatewayBasicInfo.prototype['cluster_url'] = undefined;






export default GatewayBasicInfo;

