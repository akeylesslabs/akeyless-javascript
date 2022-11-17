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
 * The UpdateAccountSettings model module.
 * @module model/UpdateAccountSettings
 * @version 2.20.1
 */
class UpdateAccountSettings {
    /**
     * Constructs a new <code>UpdateAccountSettings</code>.
     * @alias module:model/UpdateAccountSettings
     */
    constructor() { 
        
        UpdateAccountSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateAccountSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAccountSettings} obj Optional instance to populate.
     * @return {module:model/UpdateAccountSettings} The populated <code>UpdateAccountSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAccountSettings();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('company-name')) {
                obj['company-name'] = ApiClient.convertToType(data['company-name'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('default-versioning')) {
                obj['default-versioning'] = ApiClient.convertToType(data['default-versioning'], 'String');
            }
            if (data.hasOwnProperty('dp-enable-classic-key-protection')) {
                obj['dp-enable-classic-key-protection'] = ApiClient.convertToType(data['dp-enable-classic-key-protection'], 'String');
            }
            if (data.hasOwnProperty('item-type')) {
                obj['item-type'] = ApiClient.convertToType(data['item-type'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('jwt-ttl-default')) {
                obj['jwt-ttl-default'] = ApiClient.convertToType(data['jwt-ttl-default'], 'Number');
            }
            if (data.hasOwnProperty('jwt-ttl-max')) {
                obj['jwt-ttl-max'] = ApiClient.convertToType(data['jwt-ttl-max'], 'Number');
            }
            if (data.hasOwnProperty('jwt-ttl-min')) {
                obj['jwt-ttl-min'] = ApiClient.convertToType(data['jwt-ttl-min'], 'Number');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
            }
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'Number');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('postal-code')) {
                obj['postal-code'] = ApiClient.convertToType(data['postal-code'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('use-lower-letters')) {
                obj['use-lower-letters'] = ApiClient.convertToType(data['use-lower-letters'], 'String');
            }
            if (data.hasOwnProperty('use-numbers')) {
                obj['use-numbers'] = ApiClient.convertToType(data['use-numbers'], 'String');
            }
            if (data.hasOwnProperty('use-special-characters')) {
                obj['use-special-characters'] = ApiClient.convertToType(data['use-special-characters'], 'String');
            }
            if (data.hasOwnProperty('use_capital-letters')) {
                obj['use_capital-letters'] = ApiClient.convertToType(data['use_capital-letters'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Address
 * @member {String} address
 */
UpdateAccountSettings.prototype['address'] = undefined;

/**
 * City
 * @member {String} city
 */
UpdateAccountSettings.prototype['city'] = undefined;

/**
 * Company name
 * @member {String} company-name
 */
UpdateAccountSettings.prototype['company-name'] = undefined;

/**
 * Country
 * @member {String} country
 */
UpdateAccountSettings.prototype['country'] = undefined;

/**
 * Should create version by default
 * @member {String} default-versioning
 */
UpdateAccountSettings.prototype['default-versioning'] = undefined;

/**
 * Enable classic key protection [\"true\"/\"false\"]
 * @member {String} dp-enable-classic-key-protection
 */
UpdateAccountSettings.prototype['dp-enable-classic-key-protection'] = undefined;

/**
 * VersionSettingsObjectType defines object types for account version settings
 * @member {String} item-type
 */
UpdateAccountSettings.prototype['item-type'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
UpdateAccountSettings.prototype['json'] = undefined;

/**
 * Default ttl
 * @member {Number} jwt-ttl-default
 */
UpdateAccountSettings.prototype['jwt-ttl-default'] = undefined;

/**
 * Maximum ttl
 * @member {Number} jwt-ttl-max
 */
UpdateAccountSettings.prototype['jwt-ttl-max'] = undefined;

/**
 * Minimum ttl
 * @member {Number} jwt-ttl-min
 */
UpdateAccountSettings.prototype['jwt-ttl-min'] = undefined;

/**
 * Max versions
 * @member {String} max-versions
 */
UpdateAccountSettings.prototype['max-versions'] = undefined;

/**
 * For PasswordPolicy use
 * @member {Number} password-length
 */
UpdateAccountSettings.prototype['password-length'] = undefined;

/**
 * Phone number
 * @member {String} phone
 */
UpdateAccountSettings.prototype['phone'] = undefined;

/**
 * Postal code
 * @member {String} postal-code
 */
UpdateAccountSettings.prototype['postal-code'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateAccountSettings.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateAccountSettings.prototype['uid-token'] = undefined;

/**
 * For PasswordPolicy use
 * @member {String} use-lower-letters
 */
UpdateAccountSettings.prototype['use-lower-letters'] = undefined;

/**
 * For PasswordPolicy use
 * @member {String} use-numbers
 */
UpdateAccountSettings.prototype['use-numbers'] = undefined;

/**
 * For PasswordPolicy use
 * @member {String} use-special-characters
 */
UpdateAccountSettings.prototype['use-special-characters'] = undefined;

/**
 * For PasswordPolicy use
 * @member {String} use_capital-letters
 */
UpdateAccountSettings.prototype['use_capital-letters'] = undefined;






export default UpdateAccountSettings;

