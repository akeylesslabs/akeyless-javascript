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
import AwsS3LogForwardingConfig from './AwsS3LogForwardingConfig';
import AzureLogAnalyticsForwardingConfig from './AzureLogAnalyticsForwardingConfig';
import DatadogForwardingConfig from './DatadogForwardingConfig';
import ElasticsearchLogForwardingConfig from './ElasticsearchLogForwardingConfig';
import LogstashLogForwardingConfig from './LogstashLogForwardingConfig';
import LogzIoLogForwardingConfig from './LogzIoLogForwardingConfig';
import SplunkLogForwardingConfig from './SplunkLogForwardingConfig';
import SyslogLogForwardingConfig from './SyslogLogForwardingConfig';

/**
 * The LogForwardingConfigPart model module.
 * @module model/LogForwardingConfigPart
 * @version 2.16.2
 */
class LogForwardingConfigPart {
    /**
     * Constructs a new <code>LogForwardingConfigPart</code>.
     * @alias module:model/LogForwardingConfigPart
     */
    constructor() { 
        
        LogForwardingConfigPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogForwardingConfigPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogForwardingConfigPart} obj Optional instance to populate.
     * @return {module:model/LogForwardingConfigPart} The populated <code>LogForwardingConfigPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogForwardingConfigPart();

            if (data.hasOwnProperty('aws_s3_config')) {
                obj['aws_s3_config'] = AwsS3LogForwardingConfig.constructFromObject(data['aws_s3_config']);
            }
            if (data.hasOwnProperty('azure_analytics_config')) {
                obj['azure_analytics_config'] = AzureLogAnalyticsForwardingConfig.constructFromObject(data['azure_analytics_config']);
            }
            if (data.hasOwnProperty('datadog_config')) {
                obj['datadog_config'] = DatadogForwardingConfig.constructFromObject(data['datadog_config']);
            }
            if (data.hasOwnProperty('elasticsearch_config')) {
                obj['elasticsearch_config'] = ElasticsearchLogForwardingConfig.constructFromObject(data['elasticsearch_config']);
            }
            if (data.hasOwnProperty('logan_enable')) {
                obj['logan_enable'] = ApiClient.convertToType(data['logan_enable'], 'Boolean');
            }
            if (data.hasOwnProperty('logan_url')) {
                obj['logan_url'] = ApiClient.convertToType(data['logan_url'], 'String');
            }
            if (data.hasOwnProperty('logstash_config')) {
                obj['logstash_config'] = LogstashLogForwardingConfig.constructFromObject(data['logstash_config']);
            }
            if (data.hasOwnProperty('logz_io_config')) {
                obj['logz_io_config'] = LogzIoLogForwardingConfig.constructFromObject(data['logz_io_config']);
            }
            if (data.hasOwnProperty('pull_interval_sec')) {
                obj['pull_interval_sec'] = ApiClient.convertToType(data['pull_interval_sec'], 'String');
            }
            if (data.hasOwnProperty('splunk_config')) {
                obj['splunk_config'] = SplunkLogForwardingConfig.constructFromObject(data['splunk_config']);
            }
            if (data.hasOwnProperty('std_out')) {
                obj['std_out'] = ApiClient.convertToType(data['std_out'], 'Boolean');
            }
            if (data.hasOwnProperty('syslog_config')) {
                obj['syslog_config'] = SyslogLogForwardingConfig.constructFromObject(data['syslog_config']);
            }
            if (data.hasOwnProperty('target_log_type')) {
                obj['target_log_type'] = ApiClient.convertToType(data['target_log_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AwsS3LogForwardingConfig} aws_s3_config
 */
LogForwardingConfigPart.prototype['aws_s3_config'] = undefined;

/**
 * @member {module:model/AzureLogAnalyticsForwardingConfig} azure_analytics_config
 */
LogForwardingConfigPart.prototype['azure_analytics_config'] = undefined;

/**
 * @member {module:model/DatadogForwardingConfig} datadog_config
 */
LogForwardingConfigPart.prototype['datadog_config'] = undefined;

/**
 * @member {module:model/ElasticsearchLogForwardingConfig} elasticsearch_config
 */
LogForwardingConfigPart.prototype['elasticsearch_config'] = undefined;

/**
 * @member {Boolean} logan_enable
 */
LogForwardingConfigPart.prototype['logan_enable'] = undefined;

/**
 * @member {String} logan_url
 */
LogForwardingConfigPart.prototype['logan_url'] = undefined;

/**
 * @member {module:model/LogstashLogForwardingConfig} logstash_config
 */
LogForwardingConfigPart.prototype['logstash_config'] = undefined;

/**
 * @member {module:model/LogzIoLogForwardingConfig} logz_io_config
 */
LogForwardingConfigPart.prototype['logz_io_config'] = undefined;

/**
 * @member {String} pull_interval_sec
 */
LogForwardingConfigPart.prototype['pull_interval_sec'] = undefined;

/**
 * @member {module:model/SplunkLogForwardingConfig} splunk_config
 */
LogForwardingConfigPart.prototype['splunk_config'] = undefined;

/**
 * @member {Boolean} std_out
 */
LogForwardingConfigPart.prototype['std_out'] = undefined;

/**
 * @member {module:model/SyslogLogForwardingConfig} syslog_config
 */
LogForwardingConfigPart.prototype['syslog_config'] = undefined;

/**
 * @member {String} target_log_type
 */
LogForwardingConfigPart.prototype['target_log_type'] = undefined;






export default LogForwardingConfigPart;

