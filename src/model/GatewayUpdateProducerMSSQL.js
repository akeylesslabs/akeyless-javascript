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
 * The GatewayUpdateProducerMSSQL model module.
 * @module model/GatewayUpdateProducerMSSQL
 * @version 3.2.1
 */
class GatewayUpdateProducerMSSQL {
    /**
     * Constructs a new <code>GatewayUpdateProducerMSSQL</code>.
     * gatewayUpdateProducerMSSQL is a command that updates mssql producer
     * @alias module:model/GatewayUpdateProducerMSSQL
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayUpdateProducerMSSQL.initialize(this, name);
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
     * Constructs a <code>GatewayUpdateProducerMSSQL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerMSSQL} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerMSSQL} The populated <code>GatewayUpdateProducerMSSQL</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerMSSQL();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('mssql-create-statements')) {
                obj['mssql-create-statements'] = ApiClient.convertToType(data['mssql-create-statements'], 'String');
            }
            if (data.hasOwnProperty('mssql-dbname')) {
                obj['mssql-dbname'] = ApiClient.convertToType(data['mssql-dbname'], 'String');
            }
            if (data.hasOwnProperty('mssql-host')) {
                obj['mssql-host'] = ApiClient.convertToType(data['mssql-host'], 'String');
            }
            if (data.hasOwnProperty('mssql-password')) {
                obj['mssql-password'] = ApiClient.convertToType(data['mssql-password'], 'String');
            }
            if (data.hasOwnProperty('mssql-port')) {
                obj['mssql-port'] = ApiClient.convertToType(data['mssql-port'], 'String');
            }
            if (data.hasOwnProperty('mssql-revocation-statements')) {
                obj['mssql-revocation-statements'] = ApiClient.convertToType(data['mssql-revocation-statements'], 'String');
            }
            if (data.hasOwnProperty('mssql-username')) {
                obj['mssql-username'] = ApiClient.convertToType(data['mssql-username'], 'String');
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
 * Protection from accidental deletion of this item
 * @member {String} delete_protection
 */
GatewayUpdateProducerMSSQL.prototype['delete_protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
GatewayUpdateProducerMSSQL.prototype['json'] = undefined;

/**
 * MSSQL Creation statements
 * @member {String} mssql-create-statements
 */
GatewayUpdateProducerMSSQL.prototype['mssql-create-statements'] = undefined;

/**
 * MSSQL Name
 * @member {String} mssql-dbname
 */
GatewayUpdateProducerMSSQL.prototype['mssql-dbname'] = undefined;

/**
 * MSSQL Host
 * @member {String} mssql-host
 * @default '127.0.0.1'
 */
GatewayUpdateProducerMSSQL.prototype['mssql-host'] = '127.0.0.1';

/**
 * MSSQL Password
 * @member {String} mssql-password
 */
GatewayUpdateProducerMSSQL.prototype['mssql-password'] = undefined;

/**
 * MSSQL Port
 * @member {String} mssql-port
 * @default '1433'
 */
GatewayUpdateProducerMSSQL.prototype['mssql-port'] = '1433';

/**
 * MSSQL Revocation statements
 * @member {String} mssql-revocation-statements
 */
GatewayUpdateProducerMSSQL.prototype['mssql-revocation-statements'] = undefined;

/**
 * MSSQL Username
 * @member {String} mssql-username
 */
GatewayUpdateProducerMSSQL.prototype['mssql-username'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayUpdateProducerMSSQL.prototype['name'] = undefined;

/**
 * Producer name
 * @member {String} new-name
 */
GatewayUpdateProducerMSSQL.prototype['new-name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayUpdateProducerMSSQL.prototype['producer-encryption-key-name'] = undefined;

/**
 * @member {String} secure-access-bastion-issuer
 */
GatewayUpdateProducerMSSQL.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * @member {String} secure-access-db-schema
 */
GatewayUpdateProducerMSSQL.prototype['secure-access-db-schema'] = undefined;

/**
 * @member {String} secure-access-enable
 */
GatewayUpdateProducerMSSQL.prototype['secure-access-enable'] = undefined;

/**
 * @member {Array.<String>} secure-access-host
 */
GatewayUpdateProducerMSSQL.prototype['secure-access-host'] = undefined;

/**
 * @member {Boolean} secure-access-web
 */
GatewayUpdateProducerMSSQL.prototype['secure-access-web'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerMSSQL.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerMSSQL.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerMSSQL.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerMSSQL.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerMSSQL.prototype['user-ttl'] = '60m';






export default GatewayUpdateProducerMSSQL;

