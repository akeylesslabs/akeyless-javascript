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
 * The GatewayCreateProducerOracleDb model module.
 * @module model/GatewayCreateProducerOracleDb
 * @version 3.5.4
 */
class GatewayCreateProducerOracleDb {
    /**
     * Constructs a new <code>GatewayCreateProducerOracleDb</code>.
     * gatewayCreateProducerOracleDb is a command that creates oracle db producer
     * @alias module:model/GatewayCreateProducerOracleDb
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayCreateProducerOracleDb.initialize(this, name);
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
     * Constructs a <code>GatewayCreateProducerOracleDb</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerOracleDb} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerOracleDb} The populated <code>GatewayCreateProducerOracleDb</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerOracleDb();

            if (data.hasOwnProperty('db-server-certificates')) {
                obj['db-server-certificates'] = ApiClient.convertToType(data['db-server-certificates'], 'String');
            }
            if (data.hasOwnProperty('db-server-name')) {
                obj['db-server-name'] = ApiClient.convertToType(data['db-server-name'], 'String');
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
            if (data.hasOwnProperty('oracle-host')) {
                obj['oracle-host'] = ApiClient.convertToType(data['oracle-host'], 'String');
            }
            if (data.hasOwnProperty('oracle-password')) {
                obj['oracle-password'] = ApiClient.convertToType(data['oracle-password'], 'String');
            }
            if (data.hasOwnProperty('oracle-port')) {
                obj['oracle-port'] = ApiClient.convertToType(data['oracle-port'], 'String');
            }
            if (data.hasOwnProperty('oracle-revocation-statements')) {
                obj['oracle-revocation-statements'] = ApiClient.convertToType(data['oracle-revocation-statements'], 'String');
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
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('secure-access-bastion-issuer')) {
                obj['secure-access-bastion-issuer'] = ApiClient.convertToType(data['secure-access-bastion-issuer'], 'String');
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
 * (Optional) DB server certificates
 * @member {String} db-server-certificates
 */
GatewayCreateProducerOracleDb.prototype['db-server-certificates'] = undefined;

/**
 * (Optional) Server name for certificate verification
 * @member {String} db-server-name
 */
GatewayCreateProducerOracleDb.prototype['db-server-name'] = undefined;

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
GatewayCreateProducerOracleDb.prototype['delete_protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayCreateProducerOracleDb.prototype['json'] = false;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerOracleDb.prototype['name'] = undefined;

/**
 * Oracle Host
 * @member {String} oracle-host
 * @default '127.0.0.1'
 */
GatewayCreateProducerOracleDb.prototype['oracle-host'] = '127.0.0.1';

/**
 * Oracle Password
 * @member {String} oracle-password
 */
GatewayCreateProducerOracleDb.prototype['oracle-password'] = undefined;

/**
 * Oracle Port
 * @member {String} oracle-port
 * @default '1521'
 */
GatewayCreateProducerOracleDb.prototype['oracle-port'] = '1521';

/**
 * Oracle Revocation statements
 * @member {String} oracle-revocation-statements
 */
GatewayCreateProducerOracleDb.prototype['oracle-revocation-statements'] = undefined;

/**
 * Oracle Creation statements
 * @member {String} oracle-screation-statements
 */
GatewayCreateProducerOracleDb.prototype['oracle-screation-statements'] = undefined;

/**
 * Oracle DB Name
 * @member {String} oracle-service-name
 */
GatewayCreateProducerOracleDb.prototype['oracle-service-name'] = undefined;

/**
 * Oracle Username
 * @member {String} oracle-username
 */
GatewayCreateProducerOracleDb.prototype['oracle-username'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerOracleDb.prototype['producer-encryption-key-name'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Bastion
 * @member {String} secure-access-bastion-issuer
 */
GatewayCreateProducerOracleDb.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 * @default 'false'
 */
GatewayCreateProducerOracleDb.prototype['secure-access-enable'] = 'false';

/**
 * Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts)
 * @member {Array.<String>} secure-access-host
 */
GatewayCreateProducerOracleDb.prototype['secure-access-host'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
GatewayCreateProducerOracleDb.prototype['secure-access-web'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayCreateProducerOracleDb.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayCreateProducerOracleDb.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerOracleDb.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerOracleDb.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerOracleDb.prototype['user-ttl'] = '60m';






export default GatewayCreateProducerOracleDb;

