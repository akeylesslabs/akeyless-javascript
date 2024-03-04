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
 * The DynamicSecretUpdateSnowflake model module.
 * @module model/DynamicSecretUpdateSnowflake
 * @version 3.6.2
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
        obj['name'] = name;
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


}

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
 * Database name
 * @member {String} db-name
 */
DynamicSecretUpdateSnowflake.prototype['db-name'] = undefined;

/**
 * Protection from accidental deletion of this item [true/false]
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

