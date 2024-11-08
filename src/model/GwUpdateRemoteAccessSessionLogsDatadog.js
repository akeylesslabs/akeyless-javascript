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
 * The GwUpdateRemoteAccessSessionLogsDatadog model module.
 * @module model/GwUpdateRemoteAccessSessionLogsDatadog
 * @version 4.3.0
 */
class GwUpdateRemoteAccessSessionLogsDatadog {
    /**
     * Constructs a new <code>GwUpdateRemoteAccessSessionLogsDatadog</code>.
     * gwUpdateRemoteAccessSessionLogsDatadog is a command that updates session log forwarding config (datadog target)
     * @alias module:model/GwUpdateRemoteAccessSessionLogsDatadog
     */
    constructor() { 
        
        GwUpdateRemoteAccessSessionLogsDatadog.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GwUpdateRemoteAccessSessionLogsDatadog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GwUpdateRemoteAccessSessionLogsDatadog} obj Optional instance to populate.
     * @return {module:model/GwUpdateRemoteAccessSessionLogsDatadog} The populated <code>GwUpdateRemoteAccessSessionLogsDatadog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GwUpdateRemoteAccessSessionLogsDatadog();

            if (data.hasOwnProperty('api-key')) {
                obj['api-key'] = ApiClient.convertToType(data['api-key'], 'String');
            }
            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('log-service')) {
                obj['log-service'] = ApiClient.convertToType(data['log-service'], 'String');
            }
            if (data.hasOwnProperty('log-source')) {
                obj['log-source'] = ApiClient.convertToType(data['log-source'], 'String');
            }
            if (data.hasOwnProperty('log-tags')) {
                obj['log-tags'] = ApiClient.convertToType(data['log-tags'], 'String');
            }
            if (data.hasOwnProperty('output-format')) {
                obj['output-format'] = ApiClient.convertToType(data['output-format'], 'String');
            }
            if (data.hasOwnProperty('pull-interval')) {
                obj['pull-interval'] = ApiClient.convertToType(data['pull-interval'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Datadog api key
 * @member {String} api-key
 */
GwUpdateRemoteAccessSessionLogsDatadog.prototype['api-key'] = undefined;

/**
 * Enable Log Forwarding [true/false]
 * @member {String} enable
 * @default 'true'
 */
GwUpdateRemoteAccessSessionLogsDatadog.prototype['enable'] = 'true';

/**
 * Datadog host
 * @member {String} host
 */
GwUpdateRemoteAccessSessionLogsDatadog.prototype['host'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GwUpdateRemoteAccessSessionLogsDatadog.prototype['json'] = false;

/**
 * Datadog log service
 * @member {String} log-service
 * @default 'use-existing'
 */
GwUpdateRemoteAccessSessionLogsDatadog.prototype['log-service'] = 'use-existing';

/**
 * Datadog log source
 * @member {String} log-source
 * @default 'use-existing'
 */
GwUpdateRemoteAccessSessionLogsDatadog.prototype['log-source'] = 'use-existing';

/**
 * A comma-separated list of Datadog log tags formatted as \"key:value\" strings
 * @member {String} log-tags
 * @default 'use-existing'
 */
GwUpdateRemoteAccessSessionLogsDatadog.prototype['log-tags'] = 'use-existing';

/**
 * Logs format [text/json]
 * @member {String} output-format
 * @default 'text'
 */
GwUpdateRemoteAccessSessionLogsDatadog.prototype['output-format'] = 'text';

/**
 * Pull interval in seconds
 * @member {String} pull-interval
 * @default '10'
 */
GwUpdateRemoteAccessSessionLogsDatadog.prototype['pull-interval'] = '10';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GwUpdateRemoteAccessSessionLogsDatadog.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GwUpdateRemoteAccessSessionLogsDatadog.prototype['uid-token'] = undefined;






export default GwUpdateRemoteAccessSessionLogsDatadog;

