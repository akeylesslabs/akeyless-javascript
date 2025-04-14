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
 * The GatewayUpdateLogForwardingStdout model module.
 * @module model/GatewayUpdateLogForwardingStdout
 * @version 5.0.3
 */
class GatewayUpdateLogForwardingStdout {
    /**
     * Constructs a new <code>GatewayUpdateLogForwardingStdout</code>.
     * gatewayUpdateLogForwardingStdout is a command that updates log forwarding config (stdout target)
     * @alias module:model/GatewayUpdateLogForwardingStdout
     */
    constructor() { 
        
        GatewayUpdateLogForwardingStdout.initialize(this);
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
     * Constructs a <code>GatewayUpdateLogForwardingStdout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateLogForwardingStdout} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateLogForwardingStdout} The populated <code>GatewayUpdateLogForwardingStdout</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateLogForwardingStdout();

            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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

    /**
     * Validates the JSON data with respect to <code>GatewayUpdateLogForwardingStdout</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayUpdateLogForwardingStdout</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['enable'] && !(typeof data['enable'] === 'string' || data['enable'] instanceof String)) {
            throw new Error("Expected the field `enable` to be a primitive type in the JSON string but got " + data['enable']);
        }
        // ensure the json data is a string
        if (data['output-format'] && !(typeof data['output-format'] === 'string' || data['output-format'] instanceof String)) {
            throw new Error("Expected the field `output-format` to be a primitive type in the JSON string but got " + data['output-format']);
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
GatewayUpdateLogForwardingStdout.prototype['enable'] = 'true';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateLogForwardingStdout.prototype['json'] = false;

/**
 * Logs format [text/json]
 * @member {String} output-format
 * @default 'text'
 */
GatewayUpdateLogForwardingStdout.prototype['output-format'] = 'text';

/**
 * Pull interval in seconds
 * @member {String} pull-interval
 * @default '10'
 */
GatewayUpdateLogForwardingStdout.prototype['pull-interval'] = '10';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateLogForwardingStdout.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateLogForwardingStdout.prototype['uid-token'] = undefined;






export default GatewayUpdateLogForwardingStdout;

