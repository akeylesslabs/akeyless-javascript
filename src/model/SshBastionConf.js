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
import LogForwardingConfigPart from './LogForwardingConfigPart';
import SshBastionSessionTermination from './SshBastionSessionTermination';

/**
 * The SshBastionConf model module.
 * @module model/SshBastionConf
 * @version 5.0.0
 */
class SshBastionConf {
    /**
     * Constructs a new <code>SshBastionConf</code>.
     * @alias module:model/SshBastionConf
     */
    constructor() { 
        
        SshBastionConf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SshBastionConf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SshBastionConf} obj Optional instance to populate.
     * @return {module:model/SshBastionConf} The populated <code>SshBastionConf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SshBastionConf();

            if (data.hasOwnProperty('hide_session_recording')) {
                obj['hide_session_recording'] = ApiClient.convertToType(data['hide_session_recording'], 'Boolean');
            }
            if (data.hasOwnProperty('kexalgs')) {
                obj['kexalgs'] = ApiClient.convertToType(data['kexalgs'], 'String');
            }
            if (data.hasOwnProperty('log_forwarding')) {
                obj['log_forwarding'] = LogForwardingConfigPart.constructFromObject(data['log_forwarding']);
            }
            if (data.hasOwnProperty('session_termination')) {
                obj['session_termination'] = SshBastionSessionTermination.constructFromObject(data['session_termination']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SshBastionConf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SshBastionConf</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['kexalgs'] && !(typeof data['kexalgs'] === 'string' || data['kexalgs'] instanceof String)) {
            throw new Error("Expected the field `kexalgs` to be a primitive type in the JSON string but got " + data['kexalgs']);
        }
        // validate the optional field `log_forwarding`
        if (data['log_forwarding']) { // data not null
          LogForwardingConfigPart.validateJSON(data['log_forwarding']);
        }
        // validate the optional field `session_termination`
        if (data['session_termination']) { // data not null
          SshBastionSessionTermination.validateJSON(data['session_termination']);
        }

        return true;
    }


}



/**
 * @member {Boolean} hide_session_recording
 */
SshBastionConf.prototype['hide_session_recording'] = undefined;

/**
 * @member {String} kexalgs
 */
SshBastionConf.prototype['kexalgs'] = undefined;

/**
 * @member {module:model/LogForwardingConfigPart} log_forwarding
 */
SshBastionConf.prototype['log_forwarding'] = undefined;

/**
 * @member {module:model/SshBastionSessionTermination} session_termination
 */
SshBastionConf.prototype['session_termination'] = undefined;






export default SshBastionConf;

