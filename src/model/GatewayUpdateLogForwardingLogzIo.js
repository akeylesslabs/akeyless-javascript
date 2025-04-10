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
 * The GatewayUpdateLogForwardingLogzIo model module.
 * @module model/GatewayUpdateLogForwardingLogzIo
 * @version 5.0.2
 */
class GatewayUpdateLogForwardingLogzIo {
    /**
     * Constructs a new <code>GatewayUpdateLogForwardingLogzIo</code>.
     * gatewayUpdateLogForwardingLogzIo is a command that updates log forwarding config (logz-io target)
     * @alias module:model/GatewayUpdateLogForwardingLogzIo
     */
    constructor() { 
        
        GatewayUpdateLogForwardingLogzIo.initialize(this);
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
    }

    /**
     * Constructs a <code>GatewayUpdateLogForwardingLogzIo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateLogForwardingLogzIo} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateLogForwardingLogzIo} The populated <code>GatewayUpdateLogForwardingLogzIo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateLogForwardingLogzIo();

            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('logz-io-token')) {
                obj['logz-io-token'] = ApiClient.convertToType(data['logz-io-token'], 'String');
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
     * Validates the JSON data with respect to <code>GatewayUpdateLogForwardingLogzIo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayUpdateLogForwardingLogzIo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['enable'] && !(typeof data['enable'] === 'string' || data['enable'] instanceof String)) {
            throw new Error("Expected the field `enable` to be a primitive type in the JSON string but got " + data['enable']);
        }
        // ensure the json data is a string
        if (data['logz-io-token'] && !(typeof data['logz-io-token'] === 'string' || data['logz-io-token'] instanceof String)) {
            throw new Error("Expected the field `logz-io-token` to be a primitive type in the JSON string but got " + data['logz-io-token']);
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
 * Enable Log Forwarding [true/false]
 * @member {String} enable
 * @default 'true'
 */
GatewayUpdateLogForwardingLogzIo.prototype['enable'] = 'true';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateLogForwardingLogzIo.prototype['json'] = false;

/**
 * Logz-io token
 * @member {String} logz-io-token
 */
GatewayUpdateLogForwardingLogzIo.prototype['logz-io-token'] = undefined;

/**
 * Logs format [text/json]
 * @member {String} output-format
 * @default 'text'
 */
GatewayUpdateLogForwardingLogzIo.prototype['output-format'] = 'text';

/**
 * LogzIo protocol [tcp/https]
 * @member {String} protocol
 */
GatewayUpdateLogForwardingLogzIo.prototype['protocol'] = undefined;

/**
 * Pull interval in seconds
 * @member {String} pull-interval
 * @default '10'
 */
GatewayUpdateLogForwardingLogzIo.prototype['pull-interval'] = '10';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateLogForwardingLogzIo.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateLogForwardingLogzIo.prototype['uid-token'] = undefined;






export default GatewayUpdateLogForwardingLogzIo;

