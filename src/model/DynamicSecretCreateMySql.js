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
 * The DynamicSecretCreateMySql model module.
 * @module model/DynamicSecretCreateMySql
 * @version 4.3.0
 */
class DynamicSecretCreateMySql {
    /**
     * Constructs a new <code>DynamicSecretCreateMySql</code>.
     * dynamicSecretCreateMySql is a command that creates mysql dynamic secret
     * @alias module:model/DynamicSecretCreateMySql
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        DynamicSecretCreateMySql.initialize(this, name);
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
     * Constructs a <code>DynamicSecretCreateMySql</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretCreateMySql} obj Optional instance to populate.
     * @return {module:model/DynamicSecretCreateMySql} The populated <code>DynamicSecretCreateMySql</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretCreateMySql();

            if (data.hasOwnProperty('db-server-certificates')) {
                obj['db-server-certificates'] = ApiClient.convertToType(data['db-server-certificates'], 'String');
            }
            if (data.hasOwnProperty('db-server-name')) {
                obj['db-server-name'] = ApiClient.convertToType(data['db-server-name'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
            if (data.hasOwnProperty('mysql-revocation-statements')) {
                obj['mysql-revocation-statements'] = ApiClient.convertToType(data['mysql-revocation-statements'], 'String');
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
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
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
DynamicSecretCreateMySql.prototype['db-server-certificates'] = undefined;

/**
 * (Optional) Server name for certificate verification
 * @member {String} db-server-name
 */
DynamicSecretCreateMySql.prototype['db-server-name'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
DynamicSecretCreateMySql.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretCreateMySql.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretCreateMySql.prototype['json'] = false;

/**
 * MySQL DB Name
 * @member {String} mysql-dbname
 */
DynamicSecretCreateMySql.prototype['mysql-dbname'] = undefined;

/**
 * MySQL Host
 * @member {String} mysql-host
 * @default '127.0.0.1'
 */
DynamicSecretCreateMySql.prototype['mysql-host'] = '127.0.0.1';

/**
 * MySQL Password
 * @member {String} mysql-password
 */
DynamicSecretCreateMySql.prototype['mysql-password'] = undefined;

/**
 * MySQL Port
 * @member {String} mysql-port
 * @default '3306'
 */
DynamicSecretCreateMySql.prototype['mysql-port'] = '3306';

/**
 * MySQL Revocation statements
 * @member {String} mysql-revocation-statements
 */
DynamicSecretCreateMySql.prototype['mysql-revocation-statements'] = undefined;

/**
 * MySQL Creation statements
 * @member {String} mysql-screation-statements
 */
DynamicSecretCreateMySql.prototype['mysql-screation-statements'] = undefined;

/**
 * MySQL Username
 * @member {String} mysql-username
 */
DynamicSecretCreateMySql.prototype['mysql-username'] = undefined;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretCreateMySql.prototype['name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
DynamicSecretCreateMySql.prototype['password-length'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
DynamicSecretCreateMySql.prototype['producer-encryption-key-name'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Bastion
 * @member {String} secure-access-bastion-issuer
 */
DynamicSecretCreateMySql.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
DynamicSecretCreateMySql.prototype['secure-access-enable'] = undefined;

/**
 * Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts)
 * @member {Array.<String>} secure-access-host
 */
DynamicSecretCreateMySql.prototype['secure-access-host'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
DynamicSecretCreateMySql.prototype['secure-access-web'] = false;

/**
 * Enable/Disable SSL [true/false]
 * @member {Boolean} ssl
 * @default false
 */
DynamicSecretCreateMySql.prototype['ssl'] = false;

/**
 * SSL connection certificate
 * @member {String} ssl-certificate
 */
DynamicSecretCreateMySql.prototype['ssl-certificate'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretCreateMySql.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretCreateMySql.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretCreateMySql.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretCreateMySql.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
DynamicSecretCreateMySql.prototype['user-ttl'] = '60m';






export default DynamicSecretCreateMySql;

