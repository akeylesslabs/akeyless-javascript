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
 * The DynamicSecretCreateHanaDb model module.
 * @module model/DynamicSecretCreateHanaDb
 * @version 4.2.0
 */
class DynamicSecretCreateHanaDb {
    /**
     * Constructs a new <code>DynamicSecretCreateHanaDb</code>.
     * dynamicSecretCreateHanaDb is a command that creates hanadb dynamic secret
     * @alias module:model/DynamicSecretCreateHanaDb
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        DynamicSecretCreateHanaDb.initialize(this, name);
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
     * Constructs a <code>DynamicSecretCreateHanaDb</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretCreateHanaDb} obj Optional instance to populate.
     * @return {module:model/DynamicSecretCreateHanaDb} The populated <code>DynamicSecretCreateHanaDb</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretCreateHanaDb();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
DynamicSecretCreateHanaDb.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretCreateHanaDb.prototype['description'] = undefined;

/**
 * HanaDb Name
 * @member {String} hana-dbname
 */
DynamicSecretCreateHanaDb.prototype['hana-dbname'] = undefined;

/**
 * HanaDb Creation statements
 * @member {String} hanadb-create-statements
 */
DynamicSecretCreateHanaDb.prototype['hanadb-create-statements'] = undefined;

/**
 * HanaDb Host
 * @member {String} hanadb-host
 * @default '127.0.0.1'
 */
DynamicSecretCreateHanaDb.prototype['hanadb-host'] = '127.0.0.1';

/**
 * HanaDb Password
 * @member {String} hanadb-password
 */
DynamicSecretCreateHanaDb.prototype['hanadb-password'] = undefined;

/**
 * HanaDb Port
 * @member {String} hanadb-port
 * @default '443'
 */
DynamicSecretCreateHanaDb.prototype['hanadb-port'] = '443';

/**
 * HanaDb Revocation statements
 * @member {String} hanadb-revocation-statements
 */
DynamicSecretCreateHanaDb.prototype['hanadb-revocation-statements'] = undefined;

/**
 * HanaDb Username
 * @member {String} hanadb-username
 */
DynamicSecretCreateHanaDb.prototype['hanadb-username'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretCreateHanaDb.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretCreateHanaDb.prototype['name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
DynamicSecretCreateHanaDb.prototype['password-length'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
DynamicSecretCreateHanaDb.prototype['producer-encryption-key-name'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Bastion
 * @member {String} secure-access-bastion-issuer
 */
DynamicSecretCreateHanaDb.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * The DB schema
 * @member {String} secure-access-db-schema
 */
DynamicSecretCreateHanaDb.prototype['secure-access-db-schema'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
DynamicSecretCreateHanaDb.prototype['secure-access-enable'] = undefined;

/**
 * Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts)
 * @member {Array.<String>} secure-access-host
 */
DynamicSecretCreateHanaDb.prototype['secure-access-host'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
DynamicSecretCreateHanaDb.prototype['secure-access-web'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretCreateHanaDb.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretCreateHanaDb.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretCreateHanaDb.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretCreateHanaDb.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
DynamicSecretCreateHanaDb.prototype['user-ttl'] = '60m';






export default DynamicSecretCreateHanaDb;

