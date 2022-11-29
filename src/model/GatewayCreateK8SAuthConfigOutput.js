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
import ConfigChange from './ConfigChange';

/**
 * The GatewayCreateK8SAuthConfigOutput model module.
 * @module model/GatewayCreateK8SAuthConfigOutput
 * @version 2.20.3
 */
class GatewayCreateK8SAuthConfigOutput {
    /**
     * Constructs a new <code>GatewayCreateK8SAuthConfigOutput</code>.
     * @alias module:model/GatewayCreateK8SAuthConfigOutput
     */
    constructor() { 
        
        GatewayCreateK8SAuthConfigOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayCreateK8SAuthConfigOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateK8SAuthConfigOutput} obj Optional instance to populate.
     * @return {module:model/GatewayCreateK8SAuthConfigOutput} The populated <code>GatewayCreateK8SAuthConfigOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateK8SAuthConfigOutput();

            if (data.hasOwnProperty('cluster_id')) {
                obj['cluster_id'] = ApiClient.convertToType(data['cluster_id'], 'String');
            }
            if (data.hasOwnProperty('parts_change')) {
                obj['parts_change'] = ConfigChange.constructFromObject(data['parts_change']);
            }
            if (data.hasOwnProperty('total_hash')) {
                obj['total_hash'] = ApiClient.convertToType(data['total_hash'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} cluster_id
 */
GatewayCreateK8SAuthConfigOutput.prototype['cluster_id'] = undefined;

/**
 * @member {module:model/ConfigChange} parts_change
 */
GatewayCreateK8SAuthConfigOutput.prototype['parts_change'] = undefined;

/**
 * @member {String} total_hash
 */
GatewayCreateK8SAuthConfigOutput.prototype['total_hash'] = undefined;






export default GatewayCreateK8SAuthConfigOutput;

