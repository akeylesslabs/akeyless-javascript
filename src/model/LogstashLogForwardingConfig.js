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
 * The LogstashLogForwardingConfig model module.
 * @module model/LogstashLogForwardingConfig
 * @version 5.0.3
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
            if (data.hasOwnProperty('logstash_enable_tls')) {
                obj['logstash_enable_tls'] = ApiClient.convertToType(data['logstash_enable_tls'], 'Boolean');
            }
            if (data.hasOwnProperty('logstash_protocol')) {
                obj['logstash_protocol'] = ApiClient.convertToType(data['logstash_protocol'], 'String');
            }
            if (data.hasOwnProperty('logstash_tls_certificate')) {
                obj['logstash_tls_certificate'] = ApiClient.convertToType(data['logstash_tls_certificate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LogstashLogForwardingConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LogstashLogForwardingConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['logstash_dns'] && !(typeof data['logstash_dns'] === 'string' || data['logstash_dns'] instanceof String)) {
            throw new Error("Expected the field `logstash_dns` to be a primitive type in the JSON string but got " + data['logstash_dns']);
        }
        // ensure the json data is a string
        if (data['logstash_protocol'] && !(typeof data['logstash_protocol'] === 'string' || data['logstash_protocol'] instanceof String)) {
            throw new Error("Expected the field `logstash_protocol` to be a primitive type in the JSON string but got " + data['logstash_protocol']);
        }
        // ensure the json data is a string
        if (data['logstash_tls_certificate'] && !(typeof data['logstash_tls_certificate'] === 'string' || data['logstash_tls_certificate'] instanceof String)) {
            throw new Error("Expected the field `logstash_tls_certificate` to be a primitive type in the JSON string but got " + data['logstash_tls_certificate']);
        }

        return true;
    }


}



/**
 * @member {String} logstash_dns
 */
LogstashLogForwardingConfig.prototype['logstash_dns'] = undefined;

/**
 * @member {Boolean} logstash_enable_tls
 */
LogstashLogForwardingConfig.prototype['logstash_enable_tls'] = undefined;

/**
 * @member {String} logstash_protocol
 */
LogstashLogForwardingConfig.prototype['logstash_protocol'] = undefined;

/**
 * @member {String} logstash_tls_certificate
 */
LogstashLogForwardingConfig.prototype['logstash_tls_certificate'] = undefined;






export default LogstashLogForwardingConfig;

