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
 * The LogstashLogForwardingConfig model module.
 * @module model/LogstashLogForwardingConfig
 * @version 2.4.1
 */
class LogstashLogForwardingConfig {
    /**
     * Constructs a new <code>LogstashLogForwardingConfig</code>.
     * @alias module:model/LogstashLogForwardingConfig
     */
    constructor() { 
        
        LogstashLogForwardingConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogstashLogForwardingConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogstashLogForwardingConfig} obj Optional instance to populate.
     * @return {module:model/LogstashLogForwardingConfig} The populated <code>LogstashLogForwardingConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogstashLogForwardingConfig();

            if (data.hasOwnProperty('logstash_dns')) {
                obj['logstash_dns'] = ApiClient.convertToType(data['logstash_dns'], 'String');
            }
            if (data.hasOwnProperty('logstash_protocol')) {
                obj['logstash_protocol'] = ApiClient.convertToType(data['logstash_protocol'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} logstash_dns
 */
LogstashLogForwardingConfig.prototype['logstash_dns'] = undefined;

/**
 * @member {String} logstash_protocol
 */
LogstashLogForwardingConfig.prototype['logstash_protocol'] = undefined;






export default LogstashLogForwardingConfig;

