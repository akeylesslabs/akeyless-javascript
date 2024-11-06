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
 * The DynamicSecretCreateMsSql model module.
 * @module model/DynamicSecretCreateMsSql
 * @version 4.3.0
 */
class DynamicSecretCreateMsSql {
    /**
     * Constructs a new <code>DynamicSecretCreateMsSql</code>.
     * dynamicSecretCreateMsSql is a command that creates mssql dynamic secret
     * @alias module:model/DynamicSecretCreateMsSql
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        DynamicSecretCreateMsSql.initialize(this, name);
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
     * Constructs a <code>DynamicSecretCreateMsSql</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretCreateMsSql} obj Optional instance to populate.
     * @return {module:model/DynamicSecretCreateMsSql} The populated <code>DynamicSecretCreateMsSql</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretCreateMsSql();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
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
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
DynamicSecretCreateMsSql.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretCreateMsSql.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretCreateMsSql.prototype['json'] = false;

/**
 * MSSQL Creation statements
 * @member {String} mssql-create-statements
 */
DynamicSecretCreateMsSql.prototype['mssql-create-statements'] = undefined;

/**
 * MSSQL Name
 * @member {String} mssql-dbname
 */
DynamicSecretCreateMsSql.prototype['mssql-dbname'] = undefined;

/**
 * MSSQL Host
 * @member {String} mssql-host
 * @default '127.0.0.1'
 */
DynamicSecretCreateMsSql.prototype['mssql-host'] = '127.0.0.1';

/**
 * MSSQL Password
 * @member {String} mssql-password
 */
DynamicSecretCreateMsSql.prototype['mssql-password'] = undefined;

/**
 * MSSQL Port
 * @member {String} mssql-port
 * @default '1433'
 */
DynamicSecretCreateMsSql.prototype['mssql-port'] = '1433';

/**
 * MSSQL Revocation statements
 * @member {String} mssql-revocation-statements
 */
DynamicSecretCreateMsSql.prototype['mssql-revocation-statements'] = undefined;

/**
 * MSSQL Username
 * @member {String} mssql-username
 */
DynamicSecretCreateMsSql.prototype['mssql-username'] = undefined;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretCreateMsSql.prototype['name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
DynamicSecretCreateMsSql.prototype['password-length'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
DynamicSecretCreateMsSql.prototype['producer-encryption-key-name'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Bastion
 * @member {String} secure-access-bastion-issuer
 */
DynamicSecretCreateMsSql.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * The DB schema
 * @member {String} secure-access-db-schema
 */
DynamicSecretCreateMsSql.prototype['secure-access-db-schema'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
DynamicSecretCreateMsSql.prototype['secure-access-enable'] = undefined;

/**
 * Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts)
 * @member {Array.<String>} secure-access-host
 */
DynamicSecretCreateMsSql.prototype['secure-access-host'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
DynamicSecretCreateMsSql.prototype['secure-access-web'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretCreateMsSql.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretCreateMsSql.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretCreateMsSql.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretCreateMsSql.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
DynamicSecretCreateMsSql.prototype['user-ttl'] = '60m';






export default DynamicSecretCreateMsSql;

