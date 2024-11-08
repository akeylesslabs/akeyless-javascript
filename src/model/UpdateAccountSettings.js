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
 * @version 4.3.0
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
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
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
            if (data.hasOwnProperty('default-key-name')) {
                obj['default-key-name'] = ApiClient.convertToType(data['default-key-name'], 'String');
            }
            if (data.hasOwnProperty('default-share-link-ttl-minutes')) {
                obj['default-share-link-ttl-minutes'] = ApiClient.convertToType(data['default-share-link-ttl-minutes'], 'String');
            }
            if (data.hasOwnProperty('default-versioning')) {
                obj['default-versioning'] = ApiClient.convertToType(data['default-versioning'], 'String');
            }
            if (data.hasOwnProperty('dp-enable-classic-key-protection')) {
                obj['dp-enable-classic-key-protection'] = ApiClient.convertToType(data['dp-enable-classic-key-protection'], 'String');
            }
            if (data.hasOwnProperty('dynamic-secret-max-ttl')) {
                obj['dynamic-secret-max-ttl'] = ApiClient.convertToType(data['dynamic-secret-max-ttl'], 'Number');
            }
            if (data.hasOwnProperty('dynamic-secret-max-ttl-enable')) {
                obj['dynamic-secret-max-ttl-enable'] = ApiClient.convertToType(data['dynamic-secret-max-ttl-enable'], 'String');
            }
            if (data.hasOwnProperty('enable-item-sharing')) {
                obj['enable-item-sharing'] = ApiClient.convertToType(data['enable-item-sharing'], 'String');
            }
            if (data.hasOwnProperty('enable-password-expiration')) {
                obj['enable-password-expiration'] = ApiClient.convertToType(data['enable-password-expiration'], 'String');
            }
            if (data.hasOwnProperty('force-new-versions')) {
                obj['force-new-versions'] = ApiClient.convertToType(data['force-new-versions'], 'String');
            }
            if (data.hasOwnProperty('gw-bound-ips')) {
                obj['gw-bound-ips'] = ApiClient.convertToType(data['gw-bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('invalid-characters')) {
                obj['invalid-characters'] = ApiClient.convertToType(data['invalid-characters'], 'String');
            }
            if (data.hasOwnProperty('item-type')) {
                obj['item-type'] = ApiClient.convertToType(data['item-type'], 'String');
            }
            if (data.hasOwnProperty('items-deletion-protection')) {
                obj['items-deletion-protection'] = ApiClient.convertToType(data['items-deletion-protection'], 'String');
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
            if (data.hasOwnProperty('lock-bound-ips')) {
                obj['lock-bound-ips'] = ApiClient.convertToType(data['lock-bound-ips'], 'String');
            }
            if (data.hasOwnProperty('lock-default-key')) {
                obj['lock-default-key'] = ApiClient.convertToType(data['lock-default-key'], 'String');
            }
            if (data.hasOwnProperty('lock-gw-bound-ips')) {
                obj['lock-gw-bound-ips'] = ApiClient.convertToType(data['lock-gw-bound-ips'], 'String');
            }
            if (data.hasOwnProperty('max-rotation-interval')) {
                obj['max-rotation-interval'] = ApiClient.convertToType(data['max-rotation-interval'], 'Number');
            }
            if (data.hasOwnProperty('max-rotation-interval-enable')) {
                obj['max-rotation-interval-enable'] = ApiClient.convertToType(data['max-rotation-interval-enable'], 'String');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
            }
            if (data.hasOwnProperty('password-expiration-days')) {
                obj['password-expiration-days'] = ApiClient.convertToType(data['password-expiration-days'], 'String');
            }
            if (data.hasOwnProperty('password-expiration-notification-days')) {
                obj['password-expiration-notification-days'] = ApiClient.convertToType(data['password-expiration-notification-days'], 'String');
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
            if (data.hasOwnProperty('usage-event-enable')) {
                obj['usage-event-enable'] = ApiClient.convertToType(data['usage-event-enable'], 'String');
            }
            if (data.hasOwnProperty('usage-event-interval')) {
                obj['usage-event-interval'] = ApiClient.convertToType(data['usage-event-interval'], 'Number');
            }
            if (data.hasOwnProperty('usage-event-object-type')) {
                obj['usage-event-object-type'] = ApiClient.convertToType(data['usage-event-object-type'], 'String');
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
 * A default list of comma-separated CIDR block that are allowed to authenticate.
 * @member {Array.<String>} bound-ips
 */
UpdateAccountSettings.prototype['bound-ips'] = undefined;

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
 * Set the account default key based on the DFC key name. Use \"set-original-akeyless-default-key\" to revert to using the original default key of the account.
 * @member {String} default-key-name
 */
UpdateAccountSettings.prototype['default-key-name'] = undefined;

/**
 * Set the default ttl in minutes for sharing item number between 60 and 43200
 * @member {String} default-share-link-ttl-minutes
 */
UpdateAccountSettings.prototype['default-share-link-ttl-minutes'] = undefined;

/**
 * If set to true, new versions is enabled by default
 * @member {String} default-versioning
 */
UpdateAccountSettings.prototype['default-versioning'] = undefined;

/**
 * Set to update protection with classic keys state [true/false]
 * @member {String} dp-enable-classic-key-protection
 */
UpdateAccountSettings.prototype['dp-enable-classic-key-protection'] = undefined;

/**
 * Set the maximum ttl for dynamic secrets
 * @member {Number} dynamic-secret-max-ttl
 */
UpdateAccountSettings.prototype['dynamic-secret-max-ttl'] = undefined;

/**
 * Set a maximum ttl for dynamic secrets [true/false]
 * @member {String} dynamic-secret-max-ttl-enable
 */
UpdateAccountSettings.prototype['dynamic-secret-max-ttl-enable'] = undefined;

/**
 * Enable sharing items [true/false]
 * @member {String} enable-item-sharing
 */
UpdateAccountSettings.prototype['enable-item-sharing'] = undefined;

/**
 * Enable password expiration policy [true/false]
 * @member {String} enable-password-expiration
 */
UpdateAccountSettings.prototype['enable-password-expiration'] = undefined;

/**
 * If set to true, new version will be created on update
 * @member {String} force-new-versions
 */
UpdateAccountSettings.prototype['force-new-versions'] = undefined;

/**
 * A default list of comma-separated CIDR block that acts as a trusted Gateway entity.
 * @member {Array.<String>} gw-bound-ips
 */
UpdateAccountSettings.prototype['gw-bound-ips'] = undefined;

/**
 * Characters that cannot be used for items/targets/roles/auths/event_forwarder names. Empty string will enforce nothing.
 * @member {String} invalid-characters
 * @default 'notReceivedInvalidCharacter'
 */
UpdateAccountSettings.prototype['invalid-characters'] = 'notReceivedInvalidCharacter';

/**
 * VersionSettingsObjectType defines object types for account version settings
 * @member {String} item-type
 */
UpdateAccountSettings.prototype['item-type'] = undefined;

/**
 * Set or unset the default behaviour of items deletion protection [true/false]
 * @member {String} items-deletion-protection
 */
UpdateAccountSettings.prototype['items-deletion-protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateAccountSettings.prototype['json'] = false;

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
 * Lock bound-ips setting globally in the account.
 * @member {String} lock-bound-ips
 */
UpdateAccountSettings.prototype['lock-bound-ips'] = undefined;

/**
 * Lock the account's default protection key, if set - users will not be able to use a different protection key, relevant only if default-key-name is configured [true/false]
 * @member {String} lock-default-key
 */
UpdateAccountSettings.prototype['lock-default-key'] = undefined;

/**
 * Lock gw-bound-ips setting in the account.
 * @member {String} lock-gw-bound-ips
 */
UpdateAccountSettings.prototype['lock-gw-bound-ips'] = undefined;

/**
 * Set the maximum rotation interval for rotated secrets auto rotation settings
 * @member {Number} max-rotation-interval
 */
UpdateAccountSettings.prototype['max-rotation-interval'] = undefined;

/**
 * Set a maximum rotation interval for rotated secrets auto rotation settings [true/false]
 * @member {String} max-rotation-interval-enable
 */
UpdateAccountSettings.prototype['max-rotation-interval-enable'] = undefined;

/**
 * Max versions
 * @member {String} max-versions
 */
UpdateAccountSettings.prototype['max-versions'] = undefined;

/**
 * Specifies the number of days that a password is valid before it must be changed. A default value of 90 days is used.
 * @member {String} password-expiration-days
 */
UpdateAccountSettings.prototype['password-expiration-days'] = undefined;

/**
 * Specifies the number of days before a user receives notification that their password will expire. A default value of 14 days is used.
 * @member {String} password-expiration-notification-days
 */
UpdateAccountSettings.prototype['password-expiration-notification-days'] = undefined;

/**
 * Password length between 5 - to 50 characters
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
 * Enable event for objects that have not been used or changed [true/false]
 * @member {String} usage-event-enable
 */
UpdateAccountSettings.prototype['usage-event-enable'] = undefined;

/**
 * Interval by days for unused objects. Default and minimum interval is 90 days
 * @member {Number} usage-event-interval
 */
UpdateAccountSettings.prototype['usage-event-interval'] = undefined;

/**
 * Usage event is supported for auth method or secrets-and-keys [auth/item]
 * @member {String} usage-event-object-type
 */
UpdateAccountSettings.prototype['usage-event-object-type'] = undefined;

/**
 * Password must contain lower case letters [true/false]
 * @member {String} use-lower-letters
 */
UpdateAccountSettings.prototype['use-lower-letters'] = undefined;

/**
 * Password must contain numbers [true/false]
 * @member {String} use-numbers
 */
UpdateAccountSettings.prototype['use-numbers'] = undefined;

/**
 * Password must contain special characters [true/false]
 * @member {String} use-special-characters
 */
UpdateAccountSettings.prototype['use-special-characters'] = undefined;

/**
 * Password must contain capital letters [true/false]
 * @member {String} use_capital-letters
 */
UpdateAccountSettings.prototype['use_capital-letters'] = undefined;






export default UpdateAccountSettings;

