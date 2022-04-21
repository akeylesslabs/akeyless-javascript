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
 * The GatewayCreateProducerHanaDb model module.
 * @module model/GatewayCreateProducerHanaDb
 * @version 2.16.3
 */
class GatewayCreateProducerHanaDb {
    /**
     * Constructs a new <code>GatewayCreateProducerHanaDb</code>.
     * gatewayCreateProducerHanaDb is a command that creates hanadb producer
     * @alias module:model/GatewayCreateProducerHanaDb
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayCreateProducerHanaDb.initialize(this, name);
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
     * Constructs a <code>GatewayCreateProducerHanaDb</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerHanaDb} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerHanaDb} The populated <code>GatewayCreateProducerHanaDb</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerHanaDb();

            if (data.hasOwnProperty('hana-dbname')) {
                obj['hana-dbname'] = ApiClient.convertToType(data['hana-dbname'], 'String');
            }
            if (data.hasOwnProperty('hanadb-create-statements')) {
                obj['hanadb-create-statements'] = ApiClient.convertToType(data['hanadb-create-statements'], 'String');
            }
            if (data.hasOwnProperty('hanadb-host')) {
                obj['hanadb-host'] = ApiClient.convertToType(data['hanadb-host'], 'String');
            }
            if (data.hasOwnProperty('hanadb-password')) {
                obj['hanadb-password'] = ApiClient.convertToType(data['hanadb-password'], 'String');
            }
            if (data.hasOwnProperty('hanadb-port')) {
                obj['hanadb-port'] = ApiClient.convertToType(data['hanadb-port'], 'String');
            }
            if (data.hasOwnProperty('hanadb-revocation-statements')) {
                obj['hanadb-revocation-statements'] = ApiClient.convertToType(data['hanadb-revocation-statements'], 'String');
            }
            if (data.hasOwnProperty('hanadb-username')) {
                obj['hanadb-username'] = ApiClient.convertToType(data['hanadb-username'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
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
 * HanaDb Name
 * @member {String} hana-dbname
 */
GatewayCreateProducerHanaDb.prototype['hana-dbname'] = undefined;

/**
 * HanaDb Creation statements
 * @member {String} hanadb-create-statements
 */
GatewayCreateProducerHanaDb.prototype['hanadb-create-statements'] = undefined;

/**
 * HanaDb Host
 * @member {String} hanadb-host
 * @default '127.0.0.1'
 */
GatewayCreateProducerHanaDb.prototype['hanadb-host'] = '127.0.0.1';

/**
 * HanaDb Password
 * @member {String} hanadb-password
 */
GatewayCreateProducerHanaDb.prototype['hanadb-password'] = undefined;

/**
 * HanaDb Port
 * @member {String} hanadb-port
 * @default '443'
 */
GatewayCreateProducerHanaDb.prototype['hanadb-port'] = '443';

/**
 * HanaDb Revocation statements
 * @member {String} hanadb-revocation-statements
 */
GatewayCreateProducerHanaDb.prototype['hanadb-revocation-statements'] = undefined;

/**
 * HanaDb Username
 * @member {String} hanadb-username
 */
GatewayCreateProducerHanaDb.prototype['hanadb-username'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerHanaDb.prototype['name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerHanaDb.prototype['producer-encryption-key-name'] = undefined;

/**
 * @member {String} secure-access-bastion-issuer
 */
GatewayCreateProducerHanaDb.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * @member {String} secure-access-db-schema
 */
GatewayCreateProducerHanaDb.prototype['secure-access-db-schema'] = undefined;

/**
 * @member {String} secure-access-enable
 */
GatewayCreateProducerHanaDb.prototype['secure-access-enable'] = undefined;

/**
 * @member {Array.<String>} secure-access-host
 */
GatewayCreateProducerHanaDb.prototype['secure-access-host'] = undefined;

/**
 * @member {Boolean} secure-access-web
 */
GatewayCreateProducerHanaDb.prototype['secure-access-web'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayCreateProducerHanaDb.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayCreateProducerHanaDb.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerHanaDb.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerHanaDb.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerHanaDb.prototype['user-ttl'] = '60m';






export default GatewayCreateProducerHanaDb;

