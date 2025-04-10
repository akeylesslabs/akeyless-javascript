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
 * @version 5.0.2
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
        obj['enable'] = 'true';
        obj['json'] = false;
        obj['output-format'] = 'text';
        obj['pull-interval'] = '10';
        obj['tls-certificate'] = 'use-existing';
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

    /**
     * Validates the JSON data with respect to <code>GwUpdateRemoteAccessSessionLogsLogstash</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GwUpdateRemoteAccessSessionLogsLogstash</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['dns'] && !(typeof data['dns'] === 'string' || data['dns'] instanceof String)) {
            throw new Error("Expected the field `dns` to be a primitive type in the JSON string but got " + data['dns']);
        }
        // ensure the json data is a string
        if (data['enable'] && !(typeof data['enable'] === 'string' || data['enable'] instanceof String)) {
            throw new Error("Expected the field `enable` to be a primitive type in the JSON string but got " + data['enable']);
        }
        // ensure the json data is a string
        if (data['output-format'] && !(typeof data['output-format'] === 'string' || data['output-format'] instanceof String)) {
            throw new Error("Expected the field `output-format` to be a primitive type in the JSON string but got " + data['output-format']);
        }
        // ensure the json data is a string
        if (data['protocol'] && !(typeof data['protocol'] === 'string' || data['protocol'] instanceof String)) {
            throw new Error("Expected the field `protocol` to be a primitive type in the JSON string but got " + data['protocol']);
        }
        // ensure the json data is a string
        if (data['pull-interval'] && !(typeof data['pull-interval'] === 'string' || data['pull-interval'] instanceof String)) {
            throw new Error("Expected the field `pull-interval` to be a primitive type in the JSON string but got " + data['pull-interval']);
        }
        // ensure the json data is a string
        if (data['tls-certificate'] && !(typeof data['tls-certificate'] === 'string' || data['tls-certificate'] instanceof String)) {
            throw new Error("Expected the field `tls-certificate` to be a primitive type in the JSON string but got " + data['tls-certificate']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
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

