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
 * The SplunkLogForwardingConfig model module.
 * @module model/SplunkLogForwardingConfig
 * @version 2.16.4
 */
class SplunkLogForwardingConfig {
    /**
     * Constructs a new <code>SplunkLogForwardingConfig</code>.
     * @alias module:model/SplunkLogForwardingConfig
     */
    constructor() { 
        
        SplunkLogForwardingConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SplunkLogForwardingConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SplunkLogForwardingConfig} obj Optional instance to populate.
     * @return {module:model/SplunkLogForwardingConfig} The populated <code>SplunkLogForwardingConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SplunkLogForwardingConfig();

            if (data.hasOwnProperty('splunk_index')) {
                obj['splunk_index'] = ApiClient.convertToType(data['splunk_index'], 'String');
            }
            if (data.hasOwnProperty('splunk_source')) {
                obj['splunk_source'] = ApiClient.convertToType(data['splunk_source'], 'String');
            }
            if (data.hasOwnProperty('splunk_sourcetype')) {
                obj['splunk_sourcetype'] = ApiClient.convertToType(data['splunk_sourcetype'], 'String');
            }
            if (data.hasOwnProperty('splunk_token')) {
                obj['splunk_token'] = ApiClient.convertToType(data['splunk_token'], 'String');
            }
            if (data.hasOwnProperty('splunk_url')) {
                obj['splunk_url'] = ApiClient.convertToType(data['splunk_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} splunk_index
 */
SplunkLogForwardingConfig.prototype['splunk_index'] = undefined;

/**
 * @member {String} splunk_source
 */
SplunkLogForwardingConfig.prototype['splunk_source'] = undefined;

/**
 * @member {String} splunk_sourcetype
 */
SplunkLogForwardingConfig.prototype['splunk_sourcetype'] = undefined;

/**
 * @member {String} splunk_token
 */
SplunkLogForwardingConfig.prototype['splunk_token'] = undefined;

/**
 * @member {String} splunk_url
 */
SplunkLogForwardingConfig.prototype['splunk_url'] = undefined;






export default SplunkLogForwardingConfig;

