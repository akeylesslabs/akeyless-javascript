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
 * The LogzIoLogForwardingConfig model module.
 * @module model/LogzIoLogForwardingConfig
 * @version 3.2.2
 */
class LogzIoLogForwardingConfig {
    /**
     * Constructs a new <code>LogzIoLogForwardingConfig</code>.
     * @alias module:model/LogzIoLogForwardingConfig
     */
    constructor() { 
        
        LogzIoLogForwardingConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogzIoLogForwardingConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogzIoLogForwardingConfig} obj Optional instance to populate.
     * @return {module:model/LogzIoLogForwardingConfig} The populated <code>LogzIoLogForwardingConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogzIoLogForwardingConfig();

            if (data.hasOwnProperty('target_logz_io_protocol')) {
                obj['target_logz_io_protocol'] = ApiClient.convertToType(data['target_logz_io_protocol'], 'String');
            }
            if (data.hasOwnProperty('target_logz_io_token')) {
                obj['target_logz_io_token'] = ApiClient.convertToType(data['target_logz_io_token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} target_logz_io_protocol
 */
LogzIoLogForwardingConfig.prototype['target_logz_io_protocol'] = undefined;

/**
 * @member {String} target_logz_io_token
 */
LogzIoLogForwardingConfig.prototype['target_logz_io_token'] = undefined;






export default LogzIoLogForwardingConfig;

