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
import ObjectVersionSettingsOutput from './ObjectVersionSettingsOutput';

/**
 * The AccountObjectVersionSettingsOutput model module.
 * @module model/AccountObjectVersionSettingsOutput
 * @version 2.16.2
 */
class AccountObjectVersionSettingsOutput {
    /**
     * Constructs a new <code>AccountObjectVersionSettingsOutput</code>.
     * @alias module:model/AccountObjectVersionSettingsOutput
     */
    constructor() { 
        
        AccountObjectVersionSettingsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountObjectVersionSettingsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountObjectVersionSettingsOutput} obj Optional instance to populate.
     * @return {module:model/AccountObjectVersionSettingsOutput} The populated <code>AccountObjectVersionSettingsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountObjectVersionSettingsOutput();

            if (data.hasOwnProperty('default-versioning')) {
                obj['default-versioning'] = ApiClient.convertToType(data['default-versioning'], 'Boolean');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ObjectVersionSettingsOutput]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} default-versioning
 */
AccountObjectVersionSettingsOutput.prototype['default-versioning'] = undefined;

/**
 * @member {Array.<module:model/ObjectVersionSettingsOutput>} items
 */
AccountObjectVersionSettingsOutput.prototype['items'] = undefined;






export default AccountObjectVersionSettingsOutput;
