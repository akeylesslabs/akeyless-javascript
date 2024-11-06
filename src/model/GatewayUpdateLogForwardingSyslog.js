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
 * The GatewayUpdateLogForwardingSyslog model module.
 * @module model/GatewayUpdateLogForwardingSyslog
 * @version 4.3.0
 */
class GatewayUpdateLogForwardingSyslog {
    /**
     * Constructs a new <code>GatewayUpdateLogForwardingSyslog</code>.
     * gatewayUpdateLogForwardingSyslog is a command that updates log forwarding config (syslog target)
     * @alias module:model/GatewayUpdateLogForwardingSyslog
     */
    constructor() { 
        
        GatewayUpdateLogForwardingSyslog.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayUpdateLogForwardingSyslog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateLogForwardingSyslog} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateLogForwardingSyslog} The populated <code>GatewayUpdateLogForwardingSyslog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateLogForwardingSyslog();

            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'String');
            }
            if (data.hasOwnProperty('enable-tls')) {
                obj['enable-tls'] = ApiClient.convertToType(data['enable-tls'], 'Boolean');
            }
            if (data.hasOwnProperty('formatter')) {
                obj['formatter'] = ApiClient.convertToType(data['formatter'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('output-format')) {
                obj['output-format'] = ApiClient.convertToType(data['output-format'], 'String');
            }
            if (data.hasOwnProperty('pull-interval')) {
                obj['pull-interval'] = ApiClient.convertToType(data['pull-interval'], 'String');
            }
            if (data.hasOwnProperty('target-tag')) {
                obj['target-tag'] = ApiClient.convertToType(data['target-tag'], 'String');
            }
            if (data.hasOwnProperty('tls-certificate')) {
                obj['tls-certificate'] = ApiClient.convertToType(data['tls-certificate'], 'String');
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
 * Enable Log Forwarding [true/false]
 * @member {String} enable
 * @default 'true'
 */
GatewayUpdateLogForwardingSyslog.prototype['enable'] = 'true';

/**
 * Enable tls relevant only for network type TCP
 * @member {Boolean} enable-tls
 */
GatewayUpdateLogForwardingSyslog.prototype['enable-tls'] = undefined;

/**
 * Syslog formatter [text/cef]
 * @member {String} formatter
 * @default 'text'
 */
GatewayUpdateLogForwardingSyslog.prototype['formatter'] = 'text';

/**
 * Syslog host
 * @member {String} host
 */
GatewayUpdateLogForwardingSyslog.prototype['host'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateLogForwardingSyslog.prototype['json'] = false;

/**
 * Syslog network [tcp/udp]
 * @member {String} network
 * @default 'tcp'
 */
GatewayUpdateLogForwardingSyslog.prototype['network'] = 'tcp';

/**
 * Logs format [text/json]
 * @member {String} output-format
 * @default 'text'
 */
GatewayUpdateLogForwardingSyslog.prototype['output-format'] = 'text';

/**
 * Pull interval in seconds
 * @member {String} pull-interval
 * @default '10'
 */
GatewayUpdateLogForwardingSyslog.prototype['pull-interval'] = '10';

/**
 * Syslog target tag
 * @member {String} target-tag
 * @default 'use-existing'
 */
GatewayUpdateLogForwardingSyslog.prototype['target-tag'] = 'use-existing';

/**
 * Syslog tls certificate
 * @member {String} tls-certificate
 * @default 'use-existing'
 */
GatewayUpdateLogForwardingSyslog.prototype['tls-certificate'] = 'use-existing';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateLogForwardingSyslog.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateLogForwardingSyslog.prototype['uid-token'] = undefined;






export default GatewayUpdateLogForwardingSyslog;

