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
 * The GatewayNameInfo model module.
 * @module model/GatewayNameInfo
 * @version 5.0.6
 */
class GatewayNameInfo {
    /**
     * Constructs a new <code>GatewayNameInfo</code>.
     * @alias module:model/GatewayNameInfo
     */
    constructor() { 
        
        GatewayNameInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayNameInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayNameInfo} obj Optional instance to populate.
     * @return {module:model/GatewayNameInfo} The populated <code>GatewayNameInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayNameInfo();

            if (data.hasOwnProperty('cluster_display_name')) {
                obj['cluster_display_name'] = ApiClient.convertToType(data['cluster_display_name'], 'String');
            }
            if (data.hasOwnProperty('cluster_name')) {
                obj['cluster_name'] = ApiClient.convertToType(data['cluster_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GatewayNameInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayNameInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cluster_display_name'] && !(typeof data['cluster_display_name'] === 'string' || data['cluster_display_name'] instanceof String)) {
            throw new Error("Expected the field `cluster_display_name` to be a primitive type in the JSON string but got " + data['cluster_display_name']);
        }
        // ensure the json data is a string
        if (data['cluster_name'] && !(typeof data['cluster_name'] === 'string' || data['cluster_name'] instanceof String)) {
            throw new Error("Expected the field `cluster_name` to be a primitive type in the JSON string but got " + data['cluster_name']);
        }

        return true;
    }


}



/**
 * @member {String} cluster_display_name
 */
GatewayNameInfo.prototype['cluster_display_name'] = undefined;

/**
 * @member {String} cluster_name
 */
GatewayNameInfo.prototype['cluster_name'] = undefined;






export default GatewayNameInfo;

