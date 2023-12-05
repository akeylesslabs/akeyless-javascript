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
import ConfigHash from './ConfigHash';
import LastConfigChange from './LastConfigChange';
import LastStatusInfo from './LastStatusInfo';
import RequiredActivity from './RequiredActivity';

/**
 * The ConfigChange model module.
 * @module model/ConfigChange
 * @version 3.5.2
 */
class ConfigChange {
    /**
     * Constructs a new <code>ConfigChange</code>.
     * @alias module:model/ConfigChange
     */
    constructor() { 
        
        ConfigChange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConfigChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigChange} obj Optional instance to populate.
     * @return {module:model/ConfigChange} The populated <code>ConfigChange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigChange();

            if (data.hasOwnProperty('config_hash')) {
                obj['config_hash'] = ConfigHash.constructFromObject(data['config_hash']);
            }
            if (data.hasOwnProperty('last_change')) {
                obj['last_change'] = LastConfigChange.constructFromObject(data['last_change']);
            }
            if (data.hasOwnProperty('last_status')) {
                obj['last_status'] = LastStatusInfo.constructFromObject(data['last_status']);
            }
            if (data.hasOwnProperty('required_activity')) {
                obj['required_activity'] = RequiredActivity.constructFromObject(data['required_activity']);
            }
            if (data.hasOwnProperty('update_stamp')) {
                obj['update_stamp'] = ApiClient.convertToType(data['update_stamp'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ConfigHash} config_hash
 */
ConfigChange.prototype['config_hash'] = undefined;

/**
 * @member {module:model/LastConfigChange} last_change
 */
ConfigChange.prototype['last_change'] = undefined;

/**
 * @member {module:model/LastStatusInfo} last_status
 */
ConfigChange.prototype['last_status'] = undefined;

/**
 * @member {module:model/RequiredActivity} required_activity
 */
ConfigChange.prototype['required_activity'] = undefined;

/**
 * @member {Number} update_stamp
 */
ConfigChange.prototype['update_stamp'] = undefined;






export default ConfigChange;

