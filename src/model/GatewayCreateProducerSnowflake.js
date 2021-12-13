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
 * The GatewayCreateProducerSnowflake model module.
 * @module model/GatewayCreateProducerSnowflake
 * @version 2.5.17
 */
class GatewayCreateProducerSnowflake {
    /**
     * Constructs a new <code>GatewayCreateProducerSnowflake</code>.
     * gatewayCreateProducerSnowflakeCmd is a command that creates a Snowflake producer
     * @alias module:model/GatewayCreateProducerSnowflake
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayCreateProducerSnowflake.initialize(this, name);
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
     * Constructs a <code>GatewayCreateProducerSnowflake</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerSnowflake} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerSnowflake} The populated <code>GatewayCreateProducerSnowflake</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerSnowflake();

            if (data.hasOwnProperty('account')) {
                obj['account'] = ApiClient.convertToType(data['account'], 'String');
            }
            if (data.hasOwnProperty('db-name')) {
                obj['db-name'] = ApiClient.convertToType(data['db-name'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
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
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
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
GatewayCreateProducerSnowflake.prototype['account'] = undefined;

/**
 * Database name
 * @member {String} db-name
 */
GatewayCreateProducerSnowflake.prototype['db-name'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerSnowflake.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
GatewayCreateProducerSnowflake.prototype['password'] = undefined;

/**
 * User role
 * @member {String} role
 */
GatewayCreateProducerSnowflake.prototype['role'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayCreateProducerSnowflake.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayCreateProducerSnowflake.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerSnowflake.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerSnowflake.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '24h'
 */
GatewayCreateProducerSnowflake.prototype['user-ttl'] = '24h';

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
GatewayCreateProducerSnowflake.prototype['username'] = undefined;

/**
 * Warehouse name
 * @member {String} warehouse
 */
GatewayCreateProducerSnowflake.prototype['warehouse'] = undefined;






export default GatewayCreateProducerSnowflake;

