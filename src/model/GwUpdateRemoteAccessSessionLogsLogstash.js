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
 * The GwUpdateRemoteAccessSessionLogsLogstash model module.
 * @module model/GwUpdateRemoteAccessSessionLogsLogstash
 * @version 4.3.0
 */
class GwUpdateRemoteAccessSessionLogsLogstash {
    /**
     * Constructs a new <code>GwUpdateRemoteAccessSessionLogsLogstash</code>.
     * gwUpdateRemoteAccessSessionLogsLogstash is a command that updates session log forwarding config (logstash target)
     * @alias module:model/GwUpdateRemoteAccessSessionLogsLogstash
     */
    constructor() { 
        
        GwUpdateRemoteAccessSessionLogsLogstash.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GwUpdateRemoteAccessSessionLogsLogstash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GwUpdateRemoteAccessSessionLogsLogstash} obj Optional instance to populate.
     * @return {module:model/GwUpdateRemoteAccessSessionLogsLogstash} The populated <code>GwUpdateRemoteAccessSessionLogsLogstash</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GwUpdateRemoteAccessSessionLogsLogstash();

            if (data.hasOwnProperty('dns')) {
                obj['dns'] = ApiClient.convertToType(data['dns'], 'String');
            }
            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'String');
            }
            if (data.hasOwnProperty('enable-tls')) {
                obj['enable-tls'] = ApiClient.convertToType(data['enable-tls'], 'Boolean');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('output-format')) {
                obj['output-format'] = ApiClient.convertToType(data['output-format'], 'String');
            }
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
            }
            if (data.hasOwnProperty('pull-interval')) {
                obj['pull-interval'] = ApiClient.convertToType(data['pull-interval'], 'String');
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
 * Logstash dns
 * @member {String} dns
 */
GwUpdateRemoteAccessSessionLogsLogstash.prototype['dns'] = undefined;

/**
 * Enable Log Forwarding [true/false]
 * @member {String} enable
 * @default 'true'
 */
GwUpdateRemoteAccessSessionLogsLogstash.prototype['enable'] = 'true';

/**
 * Enable tls
 * @member {Boolean} enable-tls
 */
GwUpdateRemoteAccessSessionLogsLogstash.prototype['enable-tls'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GwUpdateRemoteAccessSessionLogsLogstash.prototype['json'] = false;

/**
 * Logs format [text/json]
 * @member {String} output-format
 * @default 'text'
 */
GwUpdateRemoteAccessSessionLogsLogstash.prototype['output-format'] = 'text';

/**
 * Logstash protocol [tcp/udp]
 * @member {String} protocol
 */
GwUpdateRemoteAccessSessionLogsLogstash.prototype['protocol'] = undefined;

/**
 * Pull interval in seconds
 * @member {String} pull-interval
 * @default '10'
 */
GwUpdateRemoteAccessSessionLogsLogstash.prototype['pull-interval'] = '10';

/**
 * Logstash tls certificate
 * @member {String} tls-certificate
 * @default 'use-existing'
 */
GwUpdateRemoteAccessSessionLogsLogstash.prototype['tls-certificate'] = 'use-existing';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GwUpdateRemoteAccessSessionLogsLogstash.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GwUpdateRemoteAccessSessionLogsLogstash.prototype['uid-token'] = undefined;






export default GwUpdateRemoteAccessSessionLogsLogstash;
