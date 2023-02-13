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
 * The GatewayMigratePersonalItems model module.
 * @module model/GatewayMigratePersonalItems
 * @version 3.2.4
 */
class GatewayMigratePersonalItems {
    /**
     * Constructs a new <code>GatewayMigratePersonalItems</code>.
     * gatewayMigratePersonalItems is a command that migrate personal items from external vault
     * @alias module:model/GatewayMigratePersonalItems
     */
    constructor() { 
        
        GatewayMigratePersonalItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayMigratePersonalItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayMigratePersonalItems} obj Optional instance to populate.
     * @return {module:model/GatewayMigratePersonalItems} The populated <code>GatewayMigratePersonalItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayMigratePersonalItems();

            if (data.hasOwnProperty('1password-email')) {
                obj['1password-email'] = ApiClient.convertToType(data['1password-email'], 'String');
            }
            if (data.hasOwnProperty('1password-password')) {
                obj['1password-password'] = ApiClient.convertToType(data['1password-password'], 'String');
            }
            if (data.hasOwnProperty('1password-secret-key')) {
                obj['1password-secret-key'] = ApiClient.convertToType(data['1password-secret-key'], 'String');
            }
            if (data.hasOwnProperty('1password-url')) {
                obj['1password-url'] = ApiClient.convertToType(data['1password-url'], 'String');
            }
            if (data.hasOwnProperty('1password-vaults')) {
                obj['1password-vaults'] = ApiClient.convertToType(data['1password-vaults'], ['String']);
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('protection-key')) {
                obj['protection-key'] = ApiClient.convertToType(data['protection-key'], 'String');
            }
            if (data.hasOwnProperty('target-location')) {
                obj['target-location'] = ApiClient.convertToType(data['target-location'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 1Password user email to connect to the API
 * @member {String} 1password-email
 */
GatewayMigratePersonalItems.prototype['1password-email'] = undefined;

/**
 * 1Password user password to connect to the API
 * @member {String} 1password-password
 */
GatewayMigratePersonalItems.prototype['1password-password'] = undefined;

/**
 * 1Password user secret key to connect to the API
 * @member {String} 1password-secret-key
 */
GatewayMigratePersonalItems.prototype['1password-secret-key'] = undefined;

/**
 * 1Password api container url
 * @member {String} 1password-url
 */
GatewayMigratePersonalItems.prototype['1password-url'] = undefined;

/**
 * 1Password list of vault to get the items from
 * @member {Array.<String>} 1password-vaults
 */
GatewayMigratePersonalItems.prototype['1password-vaults'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayMigratePersonalItems.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the secret value
 * @member {String} protection-key
 */
GatewayMigratePersonalItems.prototype['protection-key'] = undefined;

/**
 * Target location in your Akeyless personal folder for migrated secrets
 * @member {String} target-location
 */
GatewayMigratePersonalItems.prototype['target-location'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayMigratePersonalItems.prototype['token'] = undefined;

/**
 * Migration type for now only 1password.
 * @member {String} type
 * @default '1password'
 */
GatewayMigratePersonalItems.prototype['type'] = '1password';

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayMigratePersonalItems.prototype['uid-token'] = undefined;






export default GatewayMigratePersonalItems;

