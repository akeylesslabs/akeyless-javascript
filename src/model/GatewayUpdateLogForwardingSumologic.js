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
 * The GatewayUpdateLogForwardingSumologic model module.
 * @module model/GatewayUpdateLogForwardingSumologic
 * @version 4.2.4
 */
class GatewayUpdateLogForwardingSumologic {
    /**
     * Constructs a new <code>GatewayUpdateLogForwardingSumologic</code>.
     * gatewayUpdateLogForwardingSumologic is a command that updates log forwarding config (sumologic target)
     * @alias module:model/GatewayUpdateLogForwardingSumologic
     */
    constructor() { 
        
        GatewayUpdateLogForwardingSumologic.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayUpdateLogForwardingSumologic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateLogForwardingSumologic} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateLogForwardingSumologic} The populated <code>GatewayUpdateLogForwardingSumologic</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateLogForwardingSumologic();

            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'String');
            }
            if (data.hasOwnProperty('endpoint')) {
                obj['endpoint'] = ApiClient.convertToType(data['endpoint'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
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
            if (data.hasOwnProperty('sumologic-tags')) {
                obj['sumologic-tags'] = ApiClient.convertToType(data['sumologic-tags'], 'String');
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
GatewayUpdateLogForwardingSumologic.prototype['enable'] = 'true';

/**
 * Sumologic endpoint URL
 * @member {String} endpoint
 */
GatewayUpdateLogForwardingSumologic.prototype['endpoint'] = undefined;

/**
 * Sumologic host
 * @member {String} host
 * @default 'use-existing'
 */
GatewayUpdateLogForwardingSumologic.prototype['host'] = 'use-existing';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateLogForwardingSumologic.prototype['json'] = false;

/**
 * Logs format [text/json]
 * @member {String} output-format
 * @default 'text'
 */
GatewayUpdateLogForwardingSumologic.prototype['output-format'] = 'text';

/**
 * Pull interval in seconds
 * @member {String} pull-interval
 * @default '10'
 */
GatewayUpdateLogForwardingSumologic.prototype['pull-interval'] = '10';

/**
 * A comma-separated list of Sumologic tags
 * @member {String} sumologic-tags
 * @default 'use-existing'
 */
GatewayUpdateLogForwardingSumologic.prototype['sumologic-tags'] = 'use-existing';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateLogForwardingSumologic.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateLogForwardingSumologic.prototype['uid-token'] = undefined;






export default GatewayUpdateLogForwardingSumologic;

