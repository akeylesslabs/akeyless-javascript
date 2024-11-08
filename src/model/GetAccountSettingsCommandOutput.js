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
import AccountGeneralSettings from './AccountGeneralSettings';
import AccountObjectVersionSettingsOutput from './AccountObjectVersionSettingsOutput';
import CustomerFullAddress from './CustomerFullAddress';
import SmInfo from './SmInfo';
import SraInfo from './SraInfo';
import SystemAccessCredsSettings from './SystemAccessCredsSettings';

/**
 * The GetAccountSettingsCommandOutput model module.
 * @module model/GetAccountSettingsCommandOutput
 * @version 4.3.0
 */
class GetAccountSettingsCommandOutput {
    /**
     * Constructs a new <code>GetAccountSettingsCommandOutput</code>.
     * @alias module:model/GetAccountSettingsCommandOutput
     */
    constructor() { 
        
        GetAccountSettingsCommandOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountSettingsCommandOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountSettingsCommandOutput} obj Optional instance to populate.
     * @return {module:model/GetAccountSettingsCommandOutput} The populated <code>GetAccountSettingsCommandOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountSettingsCommandOutput();

            if (data.hasOwnProperty('account_id')) {
                obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = CustomerFullAddress.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('company_name')) {
                obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('general_settings')) {
                obj['general_settings'] = AccountGeneralSettings.constructFromObject(data['general_settings']);
            }
            if (data.hasOwnProperty('object_version_settings')) {
                obj['object_version_settings'] = AccountObjectVersionSettingsOutput.constructFromObject(data['object_version_settings']);
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('secret_management')) {
                obj['secret_management'] = SmInfo.constructFromObject(data['secret_management']);
            }
            if (data.hasOwnProperty('secure_remote_access')) {
                obj['secure_remote_access'] = SraInfo.constructFromObject(data['secure_remote_access']);
            }
            if (data.hasOwnProperty('system_access_creds_settings')) {
                obj['system_access_creds_settings'] = SystemAccessCredsSettings.constructFromObject(data['system_access_creds_settings']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} account_id
 */
GetAccountSettingsCommandOutput.prototype['account_id'] = undefined;

/**
 * @member {module:model/CustomerFullAddress} address
 */
GetAccountSettingsCommandOutput.prototype['address'] = undefined;

/**
 * @member {String} company_name
 */
GetAccountSettingsCommandOutput.prototype['company_name'] = undefined;

/**
 * @member {String} email
 */
GetAccountSettingsCommandOutput.prototype['email'] = undefined;

/**
 * @member {module:model/AccountGeneralSettings} general_settings
 */
GetAccountSettingsCommandOutput.prototype['general_settings'] = undefined;

/**
 * @member {module:model/AccountObjectVersionSettingsOutput} object_version_settings
 */
GetAccountSettingsCommandOutput.prototype['object_version_settings'] = undefined;

/**
 * @member {String} phone
 */
GetAccountSettingsCommandOutput.prototype['phone'] = undefined;

/**
 * @member {module:model/SmInfo} secret_management
 */
GetAccountSettingsCommandOutput.prototype['secret_management'] = undefined;

/**
 * @member {module:model/SraInfo} secure_remote_access
 */
GetAccountSettingsCommandOutput.prototype['secure_remote_access'] = undefined;

/**
 * @member {module:model/SystemAccessCredsSettings} system_access_creds_settings
 */
GetAccountSettingsCommandOutput.prototype['system_access_creds_settings'] = undefined;






export default GetAccountSettingsCommandOutput;

