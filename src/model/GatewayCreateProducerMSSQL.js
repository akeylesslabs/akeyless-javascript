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
 * The GatewayCreateProducerMSSQL model module.
 * @module model/GatewayCreateProducerMSSQL
 * @version 2.4.2
 */
class GatewayCreateProducerMSSQL {
    /**
     * Constructs a new <code>GatewayCreateProducerMSSQL</code>.
     * gatewayCreateProducerMSSQL is a command that creates mssql producer
     * @alias module:model/GatewayCreateProducerMSSQL
     * @param mssqlDbname {String} MSSQL Name
     * @param mssqlPassword {String} MSSQL Password
     * @param mssqlUsername {String} MSSQL Username
     * @param name {String} Producer name
     */
    constructor(mssqlDbname, mssqlPassword, mssqlUsername, name) { 
        
        GatewayCreateProducerMSSQL.initialize(this, mssqlDbname, mssqlPassword, mssqlUsername, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mssqlDbname, mssqlPassword, mssqlUsername, name) { 
        obj['mssql-dbname'] = mssqlDbname;
        obj['mssql-password'] = mssqlPassword;
        obj['mssql-username'] = mssqlUsername;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GatewayCreateProducerMSSQL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerMSSQL} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerMSSQL} The populated <code>GatewayCreateProducerMSSQL</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerMSSQL();

            if (data.hasOwnProperty('gateway-url')) {
                obj['gateway-url'] = ApiClient.convertToType(data['gateway-url'], 'String');
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
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
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
 * Gateway url
 * @member {String} gateway-url
 * @default 'http://localhost:8000'
 */
GatewayCreateProducerMSSQL.prototype['gateway-url'] = 'http://localhost:8000';

/**
 * MSSQL Creation statements
 * @member {String} mssql-create-statements
 */
GatewayCreateProducerMSSQL.prototype['mssql-create-statements'] = undefined;

/**
 * MSSQL Name
 * @member {String} mssql-dbname
 */
GatewayCreateProducerMSSQL.prototype['mssql-dbname'] = undefined;

/**
 * MSSQL Host
 * @member {String} mssql-host
 * @default '127.0.0.1'
 */
GatewayCreateProducerMSSQL.prototype['mssql-host'] = '127.0.0.1';

/**
 * MSSQL Password
 * @member {String} mssql-password
 */
GatewayCreateProducerMSSQL.prototype['mssql-password'] = undefined;

/**
 * MSSQL Port
 * @member {String} mssql-port
 * @default '1433'
 */
GatewayCreateProducerMSSQL.prototype['mssql-port'] = '1433';

/**
 * MSSQL Revocation statements
 * @member {String} mssql-revocation-statements
 */
GatewayCreateProducerMSSQL.prototype['mssql-revocation-statements'] = undefined;

/**
 * MSSQL Username
 * @member {String} mssql-username
 */
GatewayCreateProducerMSSQL.prototype['mssql-username'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerMSSQL.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
GatewayCreateProducerMSSQL.prototype['password'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerMSSQL.prototype['producer-encryption-key-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerMSSQL.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerMSSQL.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerMSSQL.prototype['user-ttl'] = '60m';

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
GatewayCreateProducerMSSQL.prototype['username'] = undefined;






export default GatewayCreateProducerMSSQL;

