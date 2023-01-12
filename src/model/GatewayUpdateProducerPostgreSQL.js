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
 * The GatewayUpdateProducerPostgreSQL model module.
 * @module model/GatewayUpdateProducerPostgreSQL
 * @version 3.1.1
 */
class GatewayUpdateProducerPostgreSQL {
    /**
     * Constructs a new <code>GatewayUpdateProducerPostgreSQL</code>.
     * gatewayUpdateProducerPostgreSQL is a command that updates postgresql producer
     * @alias module:model/GatewayUpdateProducerPostgreSQL
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayUpdateProducerPostgreSQL.initialize(this, name);
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
     * Constructs a <code>GatewayUpdateProducerPostgreSQL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerPostgreSQL} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerPostgreSQL} The populated <code>GatewayUpdateProducerPostgreSQL</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerPostgreSQL();

            if (data.hasOwnProperty('creation-statements')) {
                obj['creation-statements'] = ApiClient.convertToType(data['creation-statements'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
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
            if (data.hasOwnProperty('revocation-statement')) {
                obj['revocation-statement'] = ApiClient.convertToType(data['revocation-statement'], 'String');
            }
            if (data.hasOwnProperty('secure-access-bastion-issuer')) {
                obj['secure-access-bastion-issuer'] = ApiClient.convertToType(data['secure-access-bastion-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-db-schema')) {
                obj['secure-access-db-schema'] = ApiClient.convertToType(data['secure-access-db-schema'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-host')) {
                obj['secure-access-host'] = ApiClient.convertToType(data['secure-access-host'], ['String']);
            }
            if (data.hasOwnProperty('secure-access-web')) {
                obj['secure-access-web'] = ApiClient.convertToType(data['secure-access-web'], 'Boolean');
            }
            if (data.hasOwnProperty('ssl')) {
                obj['ssl'] = ApiClient.convertToType(data['ssl'], 'Boolean');
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
        }
        return obj;
    }


}

/**
 * PostgreSQL Creation statements
 * @member {String} creation-statements
 */
GatewayUpdateProducerPostgreSQL.prototype['creation-statements'] = undefined;

/**
 * Protection from accidental deletion of this item
 * @member {String} delete_protection
 */
GatewayUpdateProducerPostgreSQL.prototype['delete_protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
GatewayUpdateProducerPostgreSQL.prototype['json'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayUpdateProducerPostgreSQL.prototype['name'] = undefined;

/**
 * Producer name
 * @member {String} new-name
 */
GatewayUpdateProducerPostgreSQL.prototype['new-name'] = undefined;

/**
 * PostgreSQL DB Name
 * @member {String} postgresql-db-name
 */
GatewayUpdateProducerPostgreSQL.prototype['postgresql-db-name'] = undefined;

/**
 * PostgreSQL Host
 * @member {String} postgresql-host
 * @default '127.0.0.1'
 */
GatewayUpdateProducerPostgreSQL.prototype['postgresql-host'] = '127.0.0.1';

/**
 * PostgreSQL Password
 * @member {String} postgresql-password
 */
GatewayUpdateProducerPostgreSQL.prototype['postgresql-password'] = undefined;

/**
 * PostgreSQL Port
 * @member {String} postgresql-port
 * @default '5432'
 */
GatewayUpdateProducerPostgreSQL.prototype['postgresql-port'] = '5432';

/**
 * PostgreSQL Username
 * @member {String} postgresql-username
 */
GatewayUpdateProducerPostgreSQL.prototype['postgresql-username'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key
 */
GatewayUpdateProducerPostgreSQL.prototype['producer-encryption-key'] = undefined;

/**
 * PostgreSQL Revocation statements
 * @member {String} revocation-statement
 */
GatewayUpdateProducerPostgreSQL.prototype['revocation-statement'] = undefined;

/**
 * @member {String} secure-access-bastion-issuer
 */
GatewayUpdateProducerPostgreSQL.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * @member {String} secure-access-db-schema
 */
GatewayUpdateProducerPostgreSQL.prototype['secure-access-db-schema'] = undefined;

/**
 * @member {String} secure-access-enable
 */
GatewayUpdateProducerPostgreSQL.prototype['secure-access-enable'] = undefined;

/**
 * @member {Array.<String>} secure-access-host
 */
GatewayUpdateProducerPostgreSQL.prototype['secure-access-host'] = undefined;

/**
 * @member {Boolean} secure-access-web
 */
GatewayUpdateProducerPostgreSQL.prototype['secure-access-web'] = undefined;

/**
 * SSL connection mode
 * @member {Boolean} ssl
 */
GatewayUpdateProducerPostgreSQL.prototype['ssl'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerPostgreSQL.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerPostgreSQL.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerPostgreSQL.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerPostgreSQL.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerPostgreSQL.prototype['user-ttl'] = '60m';






export default GatewayUpdateProducerPostgreSQL;

