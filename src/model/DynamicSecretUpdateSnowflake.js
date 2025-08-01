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
 * The DynamicSecretUpdateSnowflake model module.
 * @module model/DynamicSecretUpdateSnowflake
 * @version 5.0.6
 */
class DynamicSecretUpdateSnowflake {
    /**
     * Constructs a new <code>DynamicSecretUpdateSnowflake</code>.
     * GatewayUpdateProducerSnowflakeCmd is a command that updates a Snowflake dynamic secret
     * @alias module:model/DynamicSecretUpdateSnowflake
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        DynamicSecretUpdateSnowflake.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['auth-mode'] = 'password';
        obj['json'] = false;
        obj['name'] = name;
        obj['user-ttl'] = '24h';
    }

    /**
     * Constructs a <code>DynamicSecretUpdateSnowflake</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretUpdateSnowflake} obj Optional instance to populate.
     * @return {module:model/DynamicSecretUpdateSnowflake} The populated <code>DynamicSecretUpdateSnowflake</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretUpdateSnowflake();

            if (data.hasOwnProperty('account')) {
                obj['account'] = ApiClient.convertToType(data['account'], 'String');
            }
            if (data.hasOwnProperty('account-password')) {
                obj['account-password'] = ApiClient.convertToType(data['account-password'], 'String');
            }
            if (data.hasOwnProperty('account-username')) {
                obj['account-username'] = ApiClient.convertToType(data['account-username'], 'String');
            }
            if (data.hasOwnProperty('auth-mode')) {
                obj['auth-mode'] = ApiClient.convertToType(data['auth-mode'], 'String');
            }
            if (data.hasOwnProperty('custom-username-template')) {
                obj['custom-username-template'] = ApiClient.convertToType(data['custom-username-template'], 'String');
            }
            if (data.hasOwnProperty('db-name')) {
                obj['db-name'] = ApiClient.convertToType(data['db-name'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key-algo')) {
                obj['key-algo'] = ApiClient.convertToType(data['key-algo'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
            }
            if (data.hasOwnProperty('private-key')) {
                obj['private-key'] = ApiClient.convertToType(data['private-key'], 'String');
            }
            if (data.hasOwnProperty('private-key-passphrase')) {
                obj['private-key-passphrase'] = ApiClient.convertToType(data['private-key-passphrase'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user-ttl')) {
                obj['user-ttl'] = ApiClient.convertToType(data['user-ttl'], 'String');
            }
            if (data.hasOwnProperty('warehouse')) {
                obj['warehouse'] = ApiClient.convertToType(data['warehouse'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DynamicSecretUpdateSnowflake</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DynamicSecretUpdateSnowflake</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DynamicSecretUpdateSnowflake.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['account'] && !(typeof data['account'] === 'string' || data['account'] instanceof String)) {
            throw new Error("Expected the field `account` to be a primitive type in the JSON string but got " + data['account']);
        }
        // ensure the json data is a string
        if (data['account-password'] && !(typeof data['account-password'] === 'string' || data['account-password'] instanceof String)) {
            throw new Error("Expected the field `account-password` to be a primitive type in the JSON string but got " + data['account-password']);
        }
        // ensure the json data is a string
        if (data['account-username'] && !(typeof data['account-username'] === 'string' || data['account-username'] instanceof String)) {
            throw new Error("Expected the field `account-username` to be a primitive type in the JSON string but got " + data['account-username']);
        }
        // ensure the json data is a string
        if (data['auth-mode'] && !(typeof data['auth-mode'] === 'string' || data['auth-mode'] instanceof String)) {
            throw new Error("Expected the field `auth-mode` to be a primitive type in the JSON string but got " + data['auth-mode']);
        }
        // ensure the json data is a string
        if (data['custom-username-template'] && !(typeof data['custom-username-template'] === 'string' || data['custom-username-template'] instanceof String)) {
            throw new Error("Expected the field `custom-username-template` to be a primitive type in the JSON string but got " + data['custom-username-template']);
        }
        // ensure the json data is a string
        if (data['db-name'] && !(typeof data['db-name'] === 'string' || data['db-name'] instanceof String)) {
            throw new Error("Expected the field `db-name` to be a primitive type in the JSON string but got " + data['db-name']);
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['key-algo'] && !(typeof data['key-algo'] === 'string' || data['key-algo'] instanceof String)) {
            throw new Error("Expected the field `key-algo` to be a primitive type in the JSON string but got " + data['key-algo']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['new-name'] && !(typeof data['new-name'] === 'string' || data['new-name'] instanceof String)) {
            throw new Error("Expected the field `new-name` to be a primitive type in the JSON string but got " + data['new-name']);
        }
        // ensure the json data is a string
        if (data['password-length'] && !(typeof data['password-length'] === 'string' || data['password-length'] instanceof String)) {
            throw new Error("Expected the field `password-length` to be a primitive type in the JSON string but got " + data['password-length']);
        }
        // ensure the json data is a string
        if (data['private-key'] && !(typeof data['private-key'] === 'string' || data['private-key'] instanceof String)) {
            throw new Error("Expected the field `private-key` to be a primitive type in the JSON string but got " + data['private-key']);
        }
        // ensure the json data is a string
        if (data['private-key-passphrase'] && !(typeof data['private-key-passphrase'] === 'string' || data['private-key-passphrase'] instanceof String)) {
            throw new Error("Expected the field `private-key-passphrase` to be a primitive type in the JSON string but got " + data['private-key-passphrase']);
        }
        // ensure the json data is a string
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['target-name'] && !(typeof data['target-name'] === 'string' || data['target-name'] instanceof String)) {
            throw new Error("Expected the field `target-name` to be a primitive type in the JSON string but got " + data['target-name']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }
        // ensure the json data is a string
        if (data['user-ttl'] && !(typeof data['user-ttl'] === 'string' || data['user-ttl'] instanceof String)) {
            throw new Error("Expected the field `user-ttl` to be a primitive type in the JSON string but got " + data['user-ttl']);
        }
        // ensure the json data is a string
        if (data['warehouse'] && !(typeof data['warehouse'] === 'string' || data['warehouse'] instanceof String)) {
            throw new Error("Expected the field `warehouse` to be a primitive type in the JSON string but got " + data['warehouse']);
        }

        return true;
    }


}

DynamicSecretUpdateSnowflake.RequiredProperties = ["name"];

/**
 * Account name
 * @member {String} account
 */
DynamicSecretUpdateSnowflake.prototype['account'] = undefined;

/**
 * Database Password
 * @member {String} account-password
 */
DynamicSecretUpdateSnowflake.prototype['account-password'] = undefined;

/**
 * Database Username
 * @member {String} account-username
 */
DynamicSecretUpdateSnowflake.prototype['account-username'] = undefined;

/**
 * The authentication mode for the temporary user [password/key]
 * @member {String} auth-mode
 * @default 'password'
 */
DynamicSecretUpdateSnowflake.prototype['auth-mode'] = 'password';

/**
 * Customize how temporary usernames are generated using go template
 * @member {String} custom-username-template
 */
DynamicSecretUpdateSnowflake.prototype['custom-username-template'] = undefined;

/**
 * Database name
 * @member {String} db-name
 */
DynamicSecretUpdateSnowflake.prototype['db-name'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
DynamicSecretUpdateSnowflake.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretUpdateSnowflake.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretUpdateSnowflake.prototype['json'] = false;

/**
 * @member {String} key-algo
 */
DynamicSecretUpdateSnowflake.prototype['key-algo'] = undefined;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretUpdateSnowflake.prototype['name'] = undefined;

/**
 * Dynamic secret name
 * @member {String} new-name
 */
DynamicSecretUpdateSnowflake.prototype['new-name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
DynamicSecretUpdateSnowflake.prototype['password-length'] = undefined;

/**
 * RSA Private key (base64 encoded)
 * @member {String} private-key
 */
DynamicSecretUpdateSnowflake.prototype['private-key'] = undefined;

/**
 * The Private key passphrase
 * @member {String} private-key-passphrase
 */
DynamicSecretUpdateSnowflake.prototype['private-key-passphrase'] = undefined;

/**
 * User role
 * @member {String} role
 */
DynamicSecretUpdateSnowflake.prototype['role'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretUpdateSnowflake.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretUpdateSnowflake.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretUpdateSnowflake.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretUpdateSnowflake.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '24h'
 */
DynamicSecretUpdateSnowflake.prototype['user-ttl'] = '24h';

/**
 * Warehouse name
 * @member {String} warehouse
 */
DynamicSecretUpdateSnowflake.prototype['warehouse'] = undefined;






export default DynamicSecretUpdateSnowflake;

