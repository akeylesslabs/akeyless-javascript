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
 * The GatewayCreateProducerMySQL model module.
 * @module model/GatewayCreateProducerMySQL
 * @version 2.16.10
 */
class GatewayCreateProducerMySQL {
    /**
     * Constructs a new <code>GatewayCreateProducerMySQL</code>.
     * gatewayCreateProducerMySQL is a command that creates mysql producer
     * @alias module:model/GatewayCreateProducerMySQL
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayCreateProducerMySQL.initialize(this, name);
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
     * Constructs a <code>GatewayCreateProducerMySQL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerMySQL} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerMySQL} The populated <code>GatewayCreateProducerMySQL</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerMySQL();

            if (data.hasOwnProperty('db-server-certificates')) {
                obj['db-server-certificates'] = ApiClient.convertToType(data['db-server-certificates'], 'String');
            }
            if (data.hasOwnProperty('db-server-name')) {
                obj['db-server-name'] = ApiClient.convertToType(data['db-server-name'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('mysql-dbname')) {
                obj['mysql-dbname'] = ApiClient.convertToType(data['mysql-dbname'], 'String');
            }
            if (data.hasOwnProperty('mysql-host')) {
                obj['mysql-host'] = ApiClient.convertToType(data['mysql-host'], 'String');
            }
            if (data.hasOwnProperty('mysql-password')) {
                obj['mysql-password'] = ApiClient.convertToType(data['mysql-password'], 'String');
            }
            if (data.hasOwnProperty('mysql-port')) {
                obj['mysql-port'] = ApiClient.convertToType(data['mysql-port'], 'String');
            }
            if (data.hasOwnProperty('mysql-screation-statements')) {
                obj['mysql-screation-statements'] = ApiClient.convertToType(data['mysql-screation-statements'], 'String');
            }
            if (data.hasOwnProperty('mysql-username')) {
                obj['mysql-username'] = ApiClient.convertToType(data['mysql-username'], 'String');
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
            if (data.hasOwnProperty('ssl-certificate')) {
                obj['ssl-certificate'] = ApiClient.convertToType(data['ssl-certificate'], 'String');
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
GatewayCreateProducerMySQL.prototype['db-server-certificates'] = undefined;

/**
 * (Optional) Server name for certificate verification
 * @member {String} db-server-name
 */
GatewayCreateProducerMySQL.prototype['db-server-name'] = undefined;

/**
 * Protection from accidental deletion of this item
 * @member {String} delete_protection
 */
GatewayCreateProducerMySQL.prototype['delete_protection'] = undefined;

/**
 * MySQL DB Name
 * @member {String} mysql-dbname
 */
GatewayCreateProducerMySQL.prototype['mysql-dbname'] = undefined;

/**
 * MySQL Host
 * @member {String} mysql-host
 * @default '127.0.0.1'
 */
GatewayCreateProducerMySQL.prototype['mysql-host'] = '127.0.0.1';

/**
 * MySQL Password
 * @member {String} mysql-password
 */
GatewayCreateProducerMySQL.prototype['mysql-password'] = undefined;

/**
 * MySQL Port
 * @member {String} mysql-port
 * @default '3306'
 */
GatewayCreateProducerMySQL.prototype['mysql-port'] = '3306';

/**
 * MySQL Creation statements
 * @member {String} mysql-screation-statements
 */
GatewayCreateProducerMySQL.prototype['mysql-screation-statements'] = undefined;

/**
 * MySQL Username
 * @member {String} mysql-username
 */
GatewayCreateProducerMySQL.prototype['mysql-username'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerMySQL.prototype['name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerMySQL.prototype['producer-encryption-key-name'] = undefined;

/**
 * @member {String} secure-access-bastion-issuer
 */
GatewayCreateProducerMySQL.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * @member {String} secure-access-enable
 */
GatewayCreateProducerMySQL.prototype['secure-access-enable'] = undefined;

/**
 * @member {Array.<String>} secure-access-host
 */
GatewayCreateProducerMySQL.prototype['secure-access-host'] = undefined;

/**
 * @member {Boolean} secure-access-web
 */
GatewayCreateProducerMySQL.prototype['secure-access-web'] = undefined;

/**
 * SSL connection mode
 * @member {Boolean} ssl
 */
GatewayCreateProducerMySQL.prototype['ssl'] = undefined;

/**
 * SSL connection certificate
 * @member {String} ssl-certificate
 */
GatewayCreateProducerMySQL.prototype['ssl-certificate'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayCreateProducerMySQL.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayCreateProducerMySQL.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerMySQL.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerMySQL.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerMySQL.prototype['user-ttl'] = '60m';






export default GatewayCreateProducerMySQL;

