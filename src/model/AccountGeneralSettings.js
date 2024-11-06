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
import AllowedIpSettings from './AllowedIpSettings';
import DataProtectionSection from './DataProtectionSection';
import DynamicSecretMaxTtl from './DynamicSecretMaxTtl';
import PasswordExpirationInfo from './PasswordExpirationInfo';
import PasswordPolicyInfo from './PasswordPolicyInfo';
import RotationSecretMaxInterval from './RotationSecretMaxInterval';
import SharingPolicyInfo from './SharingPolicyInfo';
import UsageEventSetting from './UsageEventSetting';

/**
 * The AccountGeneralSettings model module.
 * @module model/AccountGeneralSettings
 * @version 4.3.0
 */
class AccountGeneralSettings {
    /**
     * Constructs a new <code>AccountGeneralSettings</code>.
     * AccountGeneralSettings describes general settings for an account
     * @alias module:model/AccountGeneralSettings
     */
    constructor() { 
        
        AccountGeneralSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountGeneralSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountGeneralSettings} obj Optional instance to populate.
     * @return {module:model/AccountGeneralSettings} The populated <code>AccountGeneralSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountGeneralSettings();

            if (data.hasOwnProperty('account_default_key_item_id')) {
                obj['account_default_key_item_id'] = ApiClient.convertToType(data['account_default_key_item_id'], 'Number');
            }
            if (data.hasOwnProperty('account_default_key_name')) {
                obj['account_default_key_name'] = ApiClient.convertToType(data['account_default_key_name'], 'String');
            }
            if (data.hasOwnProperty('allowed_clients_ips')) {
                obj['allowed_clients_ips'] = AllowedIpSettings.constructFromObject(data['allowed_clients_ips']);
            }
            if (data.hasOwnProperty('allowed_gateways_ips')) {
                obj['allowed_gateways_ips'] = AllowedIpSettings.constructFromObject(data['allowed_gateways_ips']);
            }
            if (data.hasOwnProperty('auth_usage_event')) {
                obj['auth_usage_event'] = UsageEventSetting.constructFromObject(data['auth_usage_event']);
            }
            if (data.hasOwnProperty('data_protection_section')) {
                obj['data_protection_section'] = DataProtectionSection.constructFromObject(data['data_protection_section']);
            }
            if (data.hasOwnProperty('dynamic_secret_max_ttl')) {
                obj['dynamic_secret_max_ttl'] = DynamicSecretMaxTtl.constructFromObject(data['dynamic_secret_max_ttl']);
            }
            if (data.hasOwnProperty('enable_request_for_access')) {
                obj['enable_request_for_access'] = ApiClient.convertToType(data['enable_request_for_access'], 'Boolean');
            }
            if (data.hasOwnProperty('invalid_characters')) {
                obj['invalid_characters'] = ApiClient.convertToType(data['invalid_characters'], 'String');
            }
            if (data.hasOwnProperty('item_usage_event')) {
                obj['item_usage_event'] = UsageEventSetting.constructFromObject(data['item_usage_event']);
            }
            if (data.hasOwnProperty('lock_default_key')) {
                obj['lock_default_key'] = ApiClient.convertToType(data['lock_default_key'], 'Boolean');
            }
            if (data.hasOwnProperty('password_expiration_info')) {
                obj['password_expiration_info'] = PasswordExpirationInfo.constructFromObject(data['password_expiration_info']);
            }
            if (data.hasOwnProperty('password_policy')) {
                obj['password_policy'] = PasswordPolicyInfo.constructFromObject(data['password_policy']);
            }
            if (data.hasOwnProperty('protect_items_by_default')) {
                obj['protect_items_by_default'] = ApiClient.convertToType(data['protect_items_by_default'], 'Boolean');
            }
            if (data.hasOwnProperty('rotation_secret_max_interval')) {
                obj['rotation_secret_max_interval'] = RotationSecretMaxInterval.constructFromObject(data['rotation_secret_max_interval']);
            }
            if (data.hasOwnProperty('sharing_policy')) {
                obj['sharing_policy'] = SharingPolicyInfo.constructFromObject(data['sharing_policy']);
            }
        }
        return obj;
    }


}

/**
 * AccountDefaultKeyItemID is the item ID of the DFC key item configured as the default protection key
 * @member {Number} account_default_key_item_id
 */
AccountGeneralSettings.prototype['account_default_key_item_id'] = undefined;

/**
 * AccountDefaultKeyName is the name of the DFC key item configured as the default key This is here simply for the response to include the item name in addition to the display ID so the client can properly show this to the user. It will not be saved to the DB, only the AccountDefaultKeyItemID will.
 * @member {String} account_default_key_name
 */
AccountGeneralSettings.prototype['account_default_key_name'] = undefined;

/**
 * @member {module:model/AllowedIpSettings} allowed_clients_ips
 */
AccountGeneralSettings.prototype['allowed_clients_ips'] = undefined;

/**
 * @member {module:model/AllowedIpSettings} allowed_gateways_ips
 */
AccountGeneralSettings.prototype['allowed_gateways_ips'] = undefined;

/**
 * @member {module:model/UsageEventSetting} auth_usage_event
 */
AccountGeneralSettings.prototype['auth_usage_event'] = undefined;

/**
 * @member {module:model/DataProtectionSection} data_protection_section
 */
AccountGeneralSettings.prototype['data_protection_section'] = undefined;

/**
 * @member {module:model/DynamicSecretMaxTtl} dynamic_secret_max_ttl
 */
AccountGeneralSettings.prototype['dynamic_secret_max_ttl'] = undefined;

/**
 * @member {Boolean} enable_request_for_access
 */
AccountGeneralSettings.prototype['enable_request_for_access'] = undefined;

/**
 * InvalidCharacters is the invalid characters for items/targets/roles/auths/notifier_forwarder naming convention
 * @member {String} invalid_characters
 */
AccountGeneralSettings.prototype['invalid_characters'] = undefined;

/**
 * @member {module:model/UsageEventSetting} item_usage_event
 */
AccountGeneralSettings.prototype['item_usage_event'] = undefined;

/**
 * LockDefaultKey determines whether the configured default key can be updated by end-users on a per-request basis true - all requests use the configured default key false - every request can determine its protection key (default) nil - change nothing (every request can determine its protection key (default)) This parameter is only relevant if AccountDefaultKeyItemID is not empty
 * @member {Boolean} lock_default_key
 */
AccountGeneralSettings.prototype['lock_default_key'] = undefined;

/**
 * @member {module:model/PasswordExpirationInfo} password_expiration_info
 */
AccountGeneralSettings.prototype['password_expiration_info'] = undefined;

/**
 * @member {module:model/PasswordPolicyInfo} password_policy
 */
AccountGeneralSettings.prototype['password_policy'] = undefined;

/**
 * @member {Boolean} protect_items_by_default
 */
AccountGeneralSettings.prototype['protect_items_by_default'] = undefined;

/**
 * @member {module:model/RotationSecretMaxInterval} rotation_secret_max_interval
 */
AccountGeneralSettings.prototype['rotation_secret_max_interval'] = undefined;

/**
 * @member {module:model/SharingPolicyInfo} sharing_policy
 */
AccountGeneralSettings.prototype['sharing_policy'] = undefined;






export default AccountGeneralSettings;

