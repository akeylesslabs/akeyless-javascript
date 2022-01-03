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
 * The GatewayUpdateProducerOracleDb model module.
 * @module model/GatewayUpdateProducerOracleDb
 * @version 2.15.24
 */
class GatewayUpdateProducerOracleDb {
    /**
     * Constructs a new <code>GatewayUpdateProducerOracleDb</code>.
     * gatewayUpdateProducerOracleDb is a command that updates oracle db producer
     * @alias module:model/GatewayUpdateProducerOracleDb
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayUpdateProducerOracleDb.initialize(this, name);
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
     * Constructs a <code>GatewayUpdateProducerOracleDb</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerOracleDb} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerOracleDb} The populated <code>GatewayUpdateProducerOracleDb</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerOracleDb();

            if (data.hasOwnProperty('db-server-certificates')) {
                obj['db-server-certificates'] = ApiClient.convertToType(data['db-server-certificates'], 'String');
            }
            if (data.hasOwnProperty('db-server-name')) {
                obj['db-server-name'] = ApiClient.convertToType(data['db-server-name'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('oracle-host')) {
                obj['oracle-host'] = ApiClient.convertToType(data['oracle-host'], 'String');
            }
            if (data.hasOwnProperty('oracle-password')) {
                obj['oracle-password'] = ApiClient.convertToType(data['oracle-password'], 'String');
            }
            if (data.hasOwnProperty('oracle-port')) {
                obj['oracle-port'] = ApiClient.convertToType(data['oracle-port'], 'String');
            }
            if (data.hasOwnProperty('oracle-screation-statements')) {
                obj['oracle-screation-statements'] = ApiClient.convertToType(data['oracle-screation-statements'], 'String');
            }
            if (data.hasOwnProperty('oracle-service-name')) {
                obj['oracle-service-name'] = ApiClient.convertToType(data['oracle-service-name'], 'String');
            }
            if (data.hasOwnProperty('oracle-username')) {
                obj['oracle-username'] = ApiClient.convertToType(data['oracle-username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
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
        }
        return obj;
    }


}

/**
 * (Optional) DB server certificates
 * @member {String} db-server-certificates
 */
GatewayUpdateProducerOracleDb.prototype['db-server-certificates'] = undefined;

/**
 * (Optional) Server name for certificate verification
 * @member {String} db-server-name
 */
GatewayUpdateProducerOracleDb.prototype['db-server-name'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayUpdateProducerOracleDb.prototype['name'] = undefined;

/**
 * Producer name
 * @member {String} new-name
 */
GatewayUpdateProducerOracleDb.prototype['new-name'] = undefined;

/**
 * Oracle Host
 * @member {String} oracle-host
 * @default '127.0.0.1'
 */
GatewayUpdateProducerOracleDb.prototype['oracle-host'] = '127.0.0.1';

/**
 * Oracle Password
 * @member {String} oracle-password
 */
GatewayUpdateProducerOracleDb.prototype['oracle-password'] = undefined;

/**
 * Oracle Port
 * @member {String} oracle-port
 * @default '1521'
 */
GatewayUpdateProducerOracleDb.prototype['oracle-port'] = '1521';

/**
 * Oracle Creation statements
 * @member {String} oracle-screation-statements
 */
GatewayUpdateProducerOracleDb.prototype['oracle-screation-statements'] = undefined;

/**
 * Oracle DB Name
 * @member {String} oracle-service-name
 */
GatewayUpdateProducerOracleDb.prototype['oracle-service-name'] = undefined;

/**
 * Oracle Username
 * @member {String} oracle-username
 */
GatewayUpdateProducerOracleDb.prototype['oracle-username'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
GatewayUpdateProducerOracleDb.prototype['password'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayUpdateProducerOracleDb.prototype['producer-encryption-key-name'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerOracleDb.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerOracleDb.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerOracleDb.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerOracleDb.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerOracleDb.prototype['user-ttl'] = '60m';

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
GatewayUpdateProducerOracleDb.prototype['username'] = undefined;






export default GatewayUpdateProducerOracleDb;

