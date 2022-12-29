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
 * The DatadogForwardingConfig model module.
 * @module model/DatadogForwardingConfig
 * @version 3.1.0
 */
class DatadogForwardingConfig {
    /**
     * Constructs a new <code>DatadogForwardingConfig</code>.
     * @alias module:model/DatadogForwardingConfig
     */
    constructor() { 
        
        DatadogForwardingConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatadogForwardingConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatadogForwardingConfig} obj Optional instance to populate.
     * @return {module:model/DatadogForwardingConfig} The populated <code>DatadogForwardingConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatadogForwardingConfig();

            if (data.hasOwnProperty('datadog_api_key')) {
                obj['datadog_api_key'] = ApiClient.convertToType(data['datadog_api_key'], 'String');
            }
            if (data.hasOwnProperty('datadog_host')) {
                obj['datadog_host'] = ApiClient.convertToType(data['datadog_host'], 'String');
            }
            if (data.hasOwnProperty('datadog_log_service')) {
                obj['datadog_log_service'] = ApiClient.convertToType(data['datadog_log_service'], 'String');
            }
            if (data.hasOwnProperty('datadog_log_source')) {
                obj['datadog_log_source'] = ApiClient.convertToType(data['datadog_log_source'], 'String');
            }
            if (data.hasOwnProperty('datadog_log_tags')) {
                obj['datadog_log_tags'] = ApiClient.convertToType(data['datadog_log_tags'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} datadog_api_key
 */
DatadogForwardingConfig.prototype['datadog_api_key'] = undefined;

/**
 * @member {String} datadog_host
 */
DatadogForwardingConfig.prototype['datadog_host'] = undefined;

/**
 * @member {String} datadog_log_service
 */
DatadogForwardingConfig.prototype['datadog_log_service'] = undefined;

/**
 * @member {String} datadog_log_source
 */
DatadogForwardingConfig.prototype['datadog_log_source'] = undefined;

/**
 * @member {String} datadog_log_tags
 */
DatadogForwardingConfig.prototype['datadog_log_tags'] = undefined;






export default DatadogForwardingConfig;

