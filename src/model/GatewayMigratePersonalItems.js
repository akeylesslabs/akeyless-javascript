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

/**
 * The GatewayMigratePersonalItems model module.
 * @module model/GatewayMigratePersonalItems
 * @version 5.0.0
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
        obj['json'] = false;
        obj['type'] = '1password';
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

    /**
     * Validates the JSON data with respect to <code>GatewayMigratePersonalItems</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayMigratePersonalItems</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['1password-email'] && !(typeof data['1password-email'] === 'string' || data['1password-email'] instanceof String)) {
            throw new Error("Expected the field `1password-email` to be a primitive type in the JSON string but got " + data['1password-email']);
        }
        // ensure the json data is a string
        if (data['1password-password'] && !(typeof data['1password-password'] === 'string' || data['1password-password'] instanceof String)) {
            throw new Error("Expected the field `1password-password` to be a primitive type in the JSON string but got " + data['1password-password']);
        }
        // ensure the json data is a string
        if (data['1password-secret-key'] && !(typeof data['1password-secret-key'] === 'string' || data['1password-secret-key'] instanceof String)) {
            throw new Error("Expected the field `1password-secret-key` to be a primitive type in the JSON string but got " + data['1password-secret-key']);
        }
        // ensure the json data is a string
        if (data['1password-url'] && !(typeof data['1password-url'] === 'string' || data['1password-url'] instanceof String)) {
            throw new Error("Expected the field `1password-url` to be a primitive type in the JSON string but got " + data['1password-url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['1password-vaults'])) {
            throw new Error("Expected the field `1password-vaults` to be an array in the JSON data but got " + data['1password-vaults']);
        }
        // ensure the json data is a string
        if (data['protection-key'] && !(typeof data['protection-key'] === 'string' || data['protection-key'] instanceof String)) {
            throw new Error("Expected the field `protection-key` to be a primitive type in the JSON string but got " + data['protection-key']);
        }
        // ensure the json data is a string
        if (data['target-location'] && !(typeof data['target-location'] === 'string' || data['target-location'] instanceof String)) {
            throw new Error("Expected the field `target-location` to be a primitive type in the JSON string but got " + data['target-location']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
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

