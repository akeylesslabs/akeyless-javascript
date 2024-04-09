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
 * The SumologicLogForwardingConfig model module.
 * @module model/SumologicLogForwardingConfig
 * @version 3.6.3
 */
class SumologicLogForwardingConfig {
    /**
     * Constructs a new <code>SumologicLogForwardingConfig</code>.
     * @alias module:model/SumologicLogForwardingConfig
     */
    constructor() { 
        
        SumologicLogForwardingConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SumologicLogForwardingConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SumologicLogForwardingConfig} obj Optional instance to populate.
     * @return {module:model/SumologicLogForwardingConfig} The populated <code>SumologicLogForwardingConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SumologicLogForwardingConfig();

            if (data.hasOwnProperty('sumo_logic_endpoint')) {
                obj['sumo_logic_endpoint'] = ApiClient.convertToType(data['sumo_logic_endpoint'], 'String');
            }
            if (data.hasOwnProperty('sumo_logic_host')) {
                obj['sumo_logic_host'] = ApiClient.convertToType(data['sumo_logic_host'], 'String');
            }
            if (data.hasOwnProperty('sumo_logic_tags')) {
                obj['sumo_logic_tags'] = ApiClient.convertToType(data['sumo_logic_tags'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} sumo_logic_endpoint
 */
SumologicLogForwardingConfig.prototype['sumo_logic_endpoint'] = undefined;

/**
 * @member {String} sumo_logic_host
 */
SumologicLogForwardingConfig.prototype['sumo_logic_host'] = undefined;

/**
 * @member {String} sumo_logic_tags
 */
SumologicLogForwardingConfig.prototype['sumo_logic_tags'] = undefined;






export default SumologicLogForwardingConfig;

