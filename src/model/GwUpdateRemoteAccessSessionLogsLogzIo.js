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
 * The GwUpdateRemoteAccessSessionLogsLogzIo model module.
 * @module model/GwUpdateRemoteAccessSessionLogsLogzIo
 * @version 4.3.0
 */
class GwUpdateRemoteAccessSessionLogsLogzIo {
    /**
     * Constructs a new <code>GwUpdateRemoteAccessSessionLogsLogzIo</code>.
     * gwUpdateRemoteAccessSessionLogsLogzIo is a command that updates session log forwarding config (logz-io target)
     * @alias module:model/GwUpdateRemoteAccessSessionLogsLogzIo
     */
    constructor() { 
        
        GwUpdateRemoteAccessSessionLogsLogzIo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GwUpdateRemoteAccessSessionLogsLogzIo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GwUpdateRemoteAccessSessionLogsLogzIo} obj Optional instance to populate.
     * @return {module:model/GwUpdateRemoteAccessSessionLogsLogzIo} The populated <code>GwUpdateRemoteAccessSessionLogsLogzIo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GwUpdateRemoteAccessSessionLogsLogzIo();

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


}

/**
 * Enable Log Forwarding [true/false]
 * @member {String} enable
 * @default 'true'
 */
GwUpdateRemoteAccessSessionLogsLogzIo.prototype['enable'] = 'true';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GwUpdateRemoteAccessSessionLogsLogzIo.prototype['json'] = false;

/**
 * Logz-io token
 * @member {String} logz-io-token
 */
GwUpdateRemoteAccessSessionLogsLogzIo.prototype['logz-io-token'] = undefined;

/**
 * Logs format [text/json]
 * @member {String} output-format
 * @default 'text'
 */
GwUpdateRemoteAccessSessionLogsLogzIo.prototype['output-format'] = 'text';

/**
 * LogzIo protocol [tcp/https]
 * @member {String} protocol
 */
GwUpdateRemoteAccessSessionLogsLogzIo.prototype['protocol'] = undefined;

/**
 * Pull interval in seconds
 * @member {String} pull-interval
 * @default '10'
 */
GwUpdateRemoteAccessSessionLogsLogzIo.prototype['pull-interval'] = '10';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GwUpdateRemoteAccessSessionLogsLogzIo.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GwUpdateRemoteAccessSessionLogsLogzIo.prototype['uid-token'] = undefined;






export default GwUpdateRemoteAccessSessionLogsLogzIo;

