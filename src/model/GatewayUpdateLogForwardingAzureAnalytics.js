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
 * The GatewayUpdateLogForwardingAzureAnalytics model module.
 * @module model/GatewayUpdateLogForwardingAzureAnalytics
 * @version 4.1.0
 */
class GatewayUpdateLogForwardingAzureAnalytics {
    /**
     * Constructs a new <code>GatewayUpdateLogForwardingAzureAnalytics</code>.
     * gatewayUpdateLogForwardingAzureAnalytics is a command that updates log forwarding config (azure-analytics target)
     * @alias module:model/GatewayUpdateLogForwardingAzureAnalytics
     */
    constructor() { 
        
        GatewayUpdateLogForwardingAzureAnalytics.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayUpdateLogForwardingAzureAnalytics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateLogForwardingAzureAnalytics} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateLogForwardingAzureAnalytics} The populated <code>GatewayUpdateLogForwardingAzureAnalytics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateLogForwardingAzureAnalytics();

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
            if (data.hasOwnProperty('workspace-id')) {
                obj['workspace-id'] = ApiClient.convertToType(data['workspace-id'], 'String');
            }
            if (data.hasOwnProperty('workspace-key')) {
                obj['workspace-key'] = ApiClient.convertToType(data['workspace-key'], 'String');
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
GatewayUpdateLogForwardingAzureAnalytics.prototype['enable'] = 'true';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateLogForwardingAzureAnalytics.prototype['json'] = false;

/**
 * Logs format [text/json]
 * @member {String} output-format
 * @default 'text'
 */
GatewayUpdateLogForwardingAzureAnalytics.prototype['output-format'] = 'text';

/**
 * Pull interval in seconds
 * @member {String} pull-interval
 * @default '10'
 */
GatewayUpdateLogForwardingAzureAnalytics.prototype['pull-interval'] = '10';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateLogForwardingAzureAnalytics.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateLogForwardingAzureAnalytics.prototype['uid-token'] = undefined;

/**
 * Azure workspace id
 * @member {String} workspace-id
 */
GatewayUpdateLogForwardingAzureAnalytics.prototype['workspace-id'] = undefined;

/**
 * Azure workspace key
 * @member {String} workspace-key
 */
GatewayUpdateLogForwardingAzureAnalytics.prototype['workspace-key'] = undefined;






export default GatewayUpdateLogForwardingAzureAnalytics;

