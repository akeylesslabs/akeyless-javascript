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
 * The GatewayUpdateProducerHanaDb model module.
 * @module model/GatewayUpdateProducerHanaDb
 * @version 3.3.9
 */
class GatewayUpdateProducerHanaDb {
    /**
     * Constructs a new <code>GatewayUpdateProducerHanaDb</code>.
     * gatewayUpdateProducerHanaDb is a command that updates hanadb producer
     * @alias module:model/GatewayUpdateProducerHanaDb
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayUpdateProducerHanaDb.initialize(this, name);
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
     * Constructs a <code>GatewayUpdateProducerHanaDb</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerHanaDb} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerHanaDb} The populated <code>GatewayUpdateProducerHanaDb</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerHanaDb();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
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
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
GatewayUpdateProducerHanaDb.prototype['delete_protection'] = undefined;

/**
 * HanaDb Name
 * @member {String} hana-dbname
 */
GatewayUpdateProducerHanaDb.prototype['hana-dbname'] = undefined;

/**
 * HanaDb Creation statements
 * @member {String} hanadb-create-statements
 */
GatewayUpdateProducerHanaDb.prototype['hanadb-create-statements'] = undefined;

/**
 * HanaDb Host
 * @member {String} hanadb-host
 * @default '127.0.0.1'
 */
GatewayUpdateProducerHanaDb.prototype['hanadb-host'] = '127.0.0.1';

/**
 * HanaDb Password
 * @member {String} hanadb-password
 */
GatewayUpdateProducerHanaDb.prototype['hanadb-password'] = undefined;

/**
 * HanaDb Port
 * @member {String} hanadb-port
 * @default '443'
 */
GatewayUpdateProducerHanaDb.prototype['hanadb-port'] = '443';

/**
 * HanaDb Revocation statements
 * @member {String} hanadb-revocation-statements
 */
GatewayUpdateProducerHanaDb.prototype['hanadb-revocation-statements'] = undefined;

/**
 * HanaDb Username
 * @member {String} hanadb-username
 */
GatewayUpdateProducerHanaDb.prototype['hanadb-username'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateProducerHanaDb.prototype['json'] = false;

/**
 * Producer name
 * @member {String} name
 */
GatewayUpdateProducerHanaDb.prototype['name'] = undefined;

/**
 * Producer name
 * @member {String} new-name
 */
GatewayUpdateProducerHanaDb.prototype['new-name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayUpdateProducerHanaDb.prototype['producer-encryption-key-name'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Bastion
 * @member {String} secure-access-bastion-issuer
 */
GatewayUpdateProducerHanaDb.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * The DB schema
 * @member {String} secure-access-db-schema
 */
GatewayUpdateProducerHanaDb.prototype['secure-access-db-schema'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
GatewayUpdateProducerHanaDb.prototype['secure-access-enable'] = undefined;

/**
 * Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts)
 * @member {Array.<String>} secure-access-host
 */
GatewayUpdateProducerHanaDb.prototype['secure-access-host'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
GatewayUpdateProducerHanaDb.prototype['secure-access-web'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerHanaDb.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerHanaDb.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerHanaDb.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerHanaDb.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerHanaDb.prototype['user-ttl'] = '60m';






export default GatewayUpdateProducerHanaDb;

