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
import AwsS3LogForwardingConfig from './AwsS3LogForwardingConfig';
import AzureLogAnalyticsForwardingConfig from './AzureLogAnalyticsForwardingConfig';
import DatadogForwardingConfig from './DatadogForwardingConfig';
import ElasticsearchLogForwardingConfig from './ElasticsearchLogForwardingConfig';
import GoogleChronicleForwardingConfig from './GoogleChronicleForwardingConfig';
import LogstashLogForwardingConfig from './LogstashLogForwardingConfig';
import LogzIoLogForwardingConfig from './LogzIoLogForwardingConfig';
import SplunkLogForwardingConfig from './SplunkLogForwardingConfig';
import SumologicLogForwardingConfig from './SumologicLogForwardingConfig';
import SyslogLogForwardingConfig from './SyslogLogForwardingConfig';

/**
 * The LogForwardingConfigPart model module.
 * @module model/LogForwardingConfigPart
 * @version 5.0.3
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
            if (data.hasOwnProperty('google_chronicle_config')) {
                obj['google_chronicle_config'] = GoogleChronicleForwardingConfig.constructFromObject(data['google_chronicle_config']);
            }
            if (data.hasOwnProperty('json_output')) {
                obj['json_output'] = ApiClient.convertToType(data['json_output'], 'Boolean');
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
            if (data.hasOwnProperty('sumo_logic_config')) {
                obj['sumo_logic_config'] = SumologicLogForwardingConfig.constructFromObject(data['sumo_logic_config']);
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

    /**
     * Validates the JSON data with respect to <code>LogForwardingConfigPart</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LogForwardingConfigPart</code>.
     */
    static validateJSON(data) {
        // validate the optional field `aws_s3_config`
        if (data['aws_s3_config']) { // data not null
          AwsS3LogForwardingConfig.validateJSON(data['aws_s3_config']);
        }
        // validate the optional field `azure_analytics_config`
        if (data['azure_analytics_config']) { // data not null
          AzureLogAnalyticsForwardingConfig.validateJSON(data['azure_analytics_config']);
        }
        // validate the optional field `datadog_config`
        if (data['datadog_config']) { // data not null
          DatadogForwardingConfig.validateJSON(data['datadog_config']);
        }
        // validate the optional field `elasticsearch_config`
        if (data['elasticsearch_config']) { // data not null
          ElasticsearchLogForwardingConfig.validateJSON(data['elasticsearch_config']);
        }
        // validate the optional field `google_chronicle_config`
        if (data['google_chronicle_config']) { // data not null
          GoogleChronicleForwardingConfig.validateJSON(data['google_chronicle_config']);
        }
        // ensure the json data is a string
        if (data['logan_url'] && !(typeof data['logan_url'] === 'string' || data['logan_url'] instanceof String)) {
            throw new Error("Expected the field `logan_url` to be a primitive type in the JSON string but got " + data['logan_url']);
        }
        // validate the optional field `logstash_config`
        if (data['logstash_config']) { // data not null
          LogstashLogForwardingConfig.validateJSON(data['logstash_config']);
        }
        // validate the optional field `logz_io_config`
        if (data['logz_io_config']) { // data not null
          LogzIoLogForwardingConfig.validateJSON(data['logz_io_config']);
        }
        // ensure the json data is a string
        if (data['pull_interval_sec'] && !(typeof data['pull_interval_sec'] === 'string' || data['pull_interval_sec'] instanceof String)) {
            throw new Error("Expected the field `pull_interval_sec` to be a primitive type in the JSON string but got " + data['pull_interval_sec']);
        }
        // validate the optional field `splunk_config`
        if (data['splunk_config']) { // data not null
          SplunkLogForwardingConfig.validateJSON(data['splunk_config']);
        }
        // validate the optional field `sumo_logic_config`
        if (data['sumo_logic_config']) { // data not null
          SumologicLogForwardingConfig.validateJSON(data['sumo_logic_config']);
        }
        // validate the optional field `syslog_config`
        if (data['syslog_config']) { // data not null
          SyslogLogForwardingConfig.validateJSON(data['syslog_config']);
        }
        // ensure the json data is a string
        if (data['target_log_type'] && !(typeof data['target_log_type'] === 'string' || data['target_log_type'] instanceof String)) {
            throw new Error("Expected the field `target_log_type` to be a primitive type in the JSON string but got " + data['target_log_type']);
        }

        return true;
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
 * @member {module:model/GoogleChronicleForwardingConfig} google_chronicle_config
 */
LogForwardingConfigPart.prototype['google_chronicle_config'] = undefined;

/**
 * @member {Boolean} json_output
 */
LogForwardingConfigPart.prototype['json_output'] = undefined;

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
 * @member {module:model/SumologicLogForwardingConfig} sumo_logic_config
 */
LogForwardingConfigPart.prototype['sumo_logic_config'] = undefined;

/**
 * @member {module:model/SyslogLogForwardingConfig} syslog_config
 */
LogForwardingConfigPart.prototype['syslog_config'] = undefined;

/**
 * @member {String} target_log_type
 */
LogForwardingConfigPart.prototype['target_log_type'] = undefined;






export default LogForwardingConfigPart;

