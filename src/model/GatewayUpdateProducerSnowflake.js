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
 * The GatewayUpdateProducerSnowflake model module.
 * @module model/GatewayUpdateProducerSnowflake
 * @version 2.17.0
 */
class GatewayUpdateProducerSnowflake {
    /**
     * Constructs a new <code>GatewayUpdateProducerSnowflake</code>.
     * gatewayUpdateProducerSnowflakeCmd is a command that updates a Snowflake producer
     * @alias module:model/GatewayUpdateProducerSnowflake
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayUpdateProducerSnowflake.initialize(this, name);
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
     * Constructs a <code>GatewayUpdateProducerSnowflake</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerSnowflake} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerSnowflake} The populated <code>GatewayUpdateProducerSnowflake</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerSnowflake();

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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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
GatewayUpdateProducerSnowflake.prototype['account'] = undefined;

/**
 * Database Password
 * @member {String} account-password
 */
GatewayUpdateProducerSnowflake.prototype['account-password'] = undefined;

/**
 * Database Username
 * @member {String} account-username
 */
GatewayUpdateProducerSnowflake.prototype['account-username'] = undefined;

/**
 * Database name
 * @member {String} db-name
 */
GatewayUpdateProducerSnowflake.prototype['db-name'] = undefined;

/**
 * Protection from accidental deletion of this item
 * @member {String} delete_protection
 */
GatewayUpdateProducerSnowflake.prototype['delete_protection'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayUpdateProducerSnowflake.prototype['name'] = undefined;

/**
 * Producer name
 * @member {String} new-name
 */
GatewayUpdateProducerSnowflake.prototype['new-name'] = undefined;

/**
 * User role
 * @member {String} role
 */
GatewayUpdateProducerSnowflake.prototype['role'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerSnowflake.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerSnowflake.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerSnowflake.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerSnowflake.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '24h'
 */
GatewayUpdateProducerSnowflake.prototype['user-ttl'] = '24h';

/**
 * Warehouse name
 * @member {String} warehouse
 */
GatewayUpdateProducerSnowflake.prototype['warehouse'] = undefined;






export default GatewayUpdateProducerSnowflake;

