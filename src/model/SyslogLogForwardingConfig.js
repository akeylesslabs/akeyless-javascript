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
 * The SyslogLogForwardingConfig model module.
 * @module model/SyslogLogForwardingConfig
 * @version 4.0.0
 */
class SyslogLogForwardingConfig {
    /**
     * Constructs a new <code>SyslogLogForwardingConfig</code>.
     * @alias module:model/SyslogLogForwardingConfig
     */
    constructor() { 
        
        SyslogLogForwardingConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SyslogLogForwardingConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SyslogLogForwardingConfig} obj Optional instance to populate.
     * @return {module:model/SyslogLogForwardingConfig} The populated <code>SyslogLogForwardingConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SyslogLogForwardingConfig();

            if (data.hasOwnProperty('syslog_enable_tls')) {
                obj['syslog_enable_tls'] = ApiClient.convertToType(data['syslog_enable_tls'], 'Boolean');
            }
            if (data.hasOwnProperty('syslog_formatter')) {
                obj['syslog_formatter'] = ApiClient.convertToType(data['syslog_formatter'], 'String');
            }
            if (data.hasOwnProperty('syslog_host')) {
                obj['syslog_host'] = ApiClient.convertToType(data['syslog_host'], 'String');
            }
            if (data.hasOwnProperty('syslog_network')) {
                obj['syslog_network'] = ApiClient.convertToType(data['syslog_network'], 'String');
            }
            if (data.hasOwnProperty('syslog_target_tag')) {
                obj['syslog_target_tag'] = ApiClient.convertToType(data['syslog_target_tag'], 'String');
            }
            if (data.hasOwnProperty('syslog_tls_certificate')) {
                obj['syslog_tls_certificate'] = ApiClient.convertToType(data['syslog_tls_certificate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} syslog_enable_tls
 */
SyslogLogForwardingConfig.prototype['syslog_enable_tls'] = undefined;

/**
 * @member {String} syslog_formatter
 */
SyslogLogForwardingConfig.prototype['syslog_formatter'] = undefined;

/**
 * @member {String} syslog_host
 */
SyslogLogForwardingConfig.prototype['syslog_host'] = undefined;

/**
 * @member {String} syslog_network
 */
SyslogLogForwardingConfig.prototype['syslog_network'] = undefined;

/**
 * @member {String} syslog_target_tag
 */
SyslogLogForwardingConfig.prototype['syslog_target_tag'] = undefined;

/**
 * @member {String} syslog_tls_certificate
 */
SyslogLogForwardingConfig.prototype['syslog_tls_certificate'] = undefined;






export default SyslogLogForwardingConfig;

