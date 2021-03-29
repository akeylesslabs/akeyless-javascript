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
 * The GatewayCreateProducerPostgreSQL model module.
 * @module model/GatewayCreateProducerPostgreSQL
 * @version 2.0.14
 */
class GatewayCreateProducerPostgreSQL {
    /**
     * Constructs a new <code>GatewayCreateProducerPostgreSQL</code>.
     * gatewayCreateProducerPostgreSQL is a command that creates postgresql producer
     * @alias module:model/GatewayCreateProducerPostgreSQL
     * @param name {String} Producer name
     * @param postgresqlDbName {String} PostgreSQL DB Name
     * @param postgresqlPassword {String} PostgreSQL Password
     * @param postgresqlUsername {String} PostgreSQL Username
     */
    constructor(name, postgresqlDbName, postgresqlPassword, postgresqlUsername) { 
        
        GatewayCreateProducerPostgreSQL.initialize(this, name, postgresqlDbName, postgresqlPassword, postgresqlUsername);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, postgresqlDbName, postgresqlPassword, postgresqlUsername) { 
        obj['name'] = name;
        obj['postgresql-db-name'] = postgresqlDbName;
        obj['postgresql-password'] = postgresqlPassword;
        obj['postgresql-username'] = postgresqlUsername;
    }

    /**
     * Constructs a <code>GatewayCreateProducerPostgreSQL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerPostgreSQL} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerPostgreSQL} The populated <code>GatewayCreateProducerPostgreSQL</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerPostgreSQL();

            if (data.hasOwnProperty('creation-statements')) {
                obj['creation-statements'] = ApiClient.convertToType(data['creation-statements'], 'String');
            }
            if (data.hasOwnProperty('gateway-url')) {
                obj['gateway-url'] = ApiClient.convertToType(data['gateway-url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('postgresql-db-name')) {
                obj['postgresql-db-name'] = ApiClient.convertToType(data['postgresql-db-name'], 'String');
            }
            if (data.hasOwnProperty('postgresql-host')) {
                obj['postgresql-host'] = ApiClient.convertToType(data['postgresql-host'], 'String');
            }
            if (data.hasOwnProperty('postgresql-password')) {
                obj['postgresql-password'] = ApiClient.convertToType(data['postgresql-password'], 'String');
            }
            if (data.hasOwnProperty('postgresql-port')) {
                obj['postgresql-port'] = ApiClient.convertToType(data['postgresql-port'], 'String');
            }
            if (data.hasOwnProperty('postgresql-username')) {
                obj['postgresql-username'] = ApiClient.convertToType(data['postgresql-username'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key')) {
                obj['producer-encryption-key'] = ApiClient.convertToType(data['producer-encryption-key'], 'String');
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
        }
        return obj;
    }


}

/**
 * PostgreSQL Creation statements
 * @member {String} creation-statements
 */
GatewayCreateProducerPostgreSQL.prototype['creation-statements'] = undefined;

/**
 * Gateway url
 * @member {String} gateway-url
 * @default 'http://localhost:8000'
 */
GatewayCreateProducerPostgreSQL.prototype['gateway-url'] = 'http://localhost:8000';

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerPostgreSQL.prototype['name'] = undefined;

/**
 * PostgreSQL DB Name
 * @member {String} postgresql-db-name
 */
GatewayCreateProducerPostgreSQL.prototype['postgresql-db-name'] = undefined;

/**
 * PostgreSQL Host
 * @member {String} postgresql-host
 * @default '127.0.0.1'
 */
GatewayCreateProducerPostgreSQL.prototype['postgresql-host'] = '127.0.0.1';

/**
 * PostgreSQL Password
 * @member {String} postgresql-password
 */
GatewayCreateProducerPostgreSQL.prototype['postgresql-password'] = undefined;

/**
 * PostgreSQL Port
 * @member {String} postgresql-port
 * @default '5432'
 */
GatewayCreateProducerPostgreSQL.prototype['postgresql-port'] = '5432';

/**
 * PostgreSQL Username
 * @member {String} postgresql-username
 */
GatewayCreateProducerPostgreSQL.prototype['postgresql-username'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key
 */
GatewayCreateProducerPostgreSQL.prototype['producer-encryption-key'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerPostgreSQL.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerPostgreSQL.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerPostgreSQL.prototype['user-ttl'] = '60m';






export default GatewayCreateProducerPostgreSQL;

