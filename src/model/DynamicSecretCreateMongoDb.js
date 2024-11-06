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
 * The DynamicSecretCreateMongoDb model module.
 * @module model/DynamicSecretCreateMongoDb
 * @version 4.3.0
 */
class DynamicSecretCreateMongoDb {
    /**
     * Constructs a new <code>DynamicSecretCreateMongoDb</code>.
     * dynamicSecretCreateMongoDb is a command that creates either mongodb  dynamic secret or mongodb atlas dynamic secret
     * @alias module:model/DynamicSecretCreateMongoDb
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        DynamicSecretCreateMongoDb.initialize(this, name);
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
     * Constructs a <code>DynamicSecretCreateMongoDb</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretCreateMongoDb} obj Optional instance to populate.
     * @return {module:model/DynamicSecretCreateMongoDb} The populated <code>DynamicSecretCreateMongoDb</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretCreateMongoDb();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('mongodb-atlas-api-private-key')) {
                obj['mongodb-atlas-api-private-key'] = ApiClient.convertToType(data['mongodb-atlas-api-private-key'], 'String');
            }
            if (data.hasOwnProperty('mongodb-atlas-api-public-key')) {
                obj['mongodb-atlas-api-public-key'] = ApiClient.convertToType(data['mongodb-atlas-api-public-key'], 'String');
            }
            if (data.hasOwnProperty('mongodb-atlas-project-id')) {
                obj['mongodb-atlas-project-id'] = ApiClient.convertToType(data['mongodb-atlas-project-id'], 'String');
            }
            if (data.hasOwnProperty('mongodb-custom-data')) {
                obj['mongodb-custom-data'] = ApiClient.convertToType(data['mongodb-custom-data'], 'String');
            }
            if (data.hasOwnProperty('mongodb-default-auth-db')) {
                obj['mongodb-default-auth-db'] = ApiClient.convertToType(data['mongodb-default-auth-db'], 'String');
            }
            if (data.hasOwnProperty('mongodb-host-port')) {
                obj['mongodb-host-port'] = ApiClient.convertToType(data['mongodb-host-port'], 'String');
            }
            if (data.hasOwnProperty('mongodb-name')) {
                obj['mongodb-name'] = ApiClient.convertToType(data['mongodb-name'], 'String');
            }
            if (data.hasOwnProperty('mongodb-password')) {
                obj['mongodb-password'] = ApiClient.convertToType(data['mongodb-password'], 'String');
            }
            if (data.hasOwnProperty('mongodb-roles')) {
                obj['mongodb-roles'] = ApiClient.convertToType(data['mongodb-roles'], 'String');
            }
            if (data.hasOwnProperty('mongodb-server-uri')) {
                obj['mongodb-server-uri'] = ApiClient.convertToType(data['mongodb-server-uri'], 'String');
            }
            if (data.hasOwnProperty('mongodb-uri-options')) {
                obj['mongodb-uri-options'] = ApiClient.convertToType(data['mongodb-uri-options'], 'String');
            }
            if (data.hasOwnProperty('mongodb-username')) {
                obj['mongodb-username'] = ApiClient.convertToType(data['mongodb-username'], 'String');
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
DynamicSecretCreateMongoDb.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretCreateMongoDb.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretCreateMongoDb.prototype['json'] = false;

/**
 * MongoDB Atlas private key
 * @member {String} mongodb-atlas-api-private-key
 */
DynamicSecretCreateMongoDb.prototype['mongodb-atlas-api-private-key'] = undefined;

/**
 * MongoDB Atlas public key
 * @member {String} mongodb-atlas-api-public-key
 */
DynamicSecretCreateMongoDb.prototype['mongodb-atlas-api-public-key'] = undefined;

/**
 * MongoDB Atlas project ID
 * @member {String} mongodb-atlas-project-id
 */
DynamicSecretCreateMongoDb.prototype['mongodb-atlas-project-id'] = undefined;

/**
 * MongoDB custom data
 * @member {String} mongodb-custom-data
 */
DynamicSecretCreateMongoDb.prototype['mongodb-custom-data'] = undefined;

/**
 * MongoDB server default authentication database
 * @member {String} mongodb-default-auth-db
 */
DynamicSecretCreateMongoDb.prototype['mongodb-default-auth-db'] = undefined;

/**
 * MongoDB server host and port
 * @member {String} mongodb-host-port
 */
DynamicSecretCreateMongoDb.prototype['mongodb-host-port'] = undefined;

/**
 * MongoDB Name
 * @member {String} mongodb-name
 */
DynamicSecretCreateMongoDb.prototype['mongodb-name'] = undefined;

/**
 * MongoDB server password. You will prompted to provide a password if it will not appear in CLI parameters
 * @member {String} mongodb-password
 */
DynamicSecretCreateMongoDb.prototype['mongodb-password'] = undefined;

/**
 * MongoDB Roles
 * @member {String} mongodb-roles
 * @default '[]'
 */
DynamicSecretCreateMongoDb.prototype['mongodb-roles'] = '[]';

/**
 * MongoDB server URI
 * @member {String} mongodb-server-uri
 */
DynamicSecretCreateMongoDb.prototype['mongodb-server-uri'] = undefined;

/**
 * MongoDB server URI options
 * @member {String} mongodb-uri-options
 */
DynamicSecretCreateMongoDb.prototype['mongodb-uri-options'] = undefined;

/**
 * MongoDB server username
 * @member {String} mongodb-username
 */
DynamicSecretCreateMongoDb.prototype['mongodb-username'] = undefined;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretCreateMongoDb.prototype['name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
DynamicSecretCreateMongoDb.prototype['password-length'] = undefined;

/**
 * Encrypt producer with following key
 * @member {String} producer-encryption-key-name
 */
DynamicSecretCreateMongoDb.prototype['producer-encryption-key-name'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Bastion
 * @member {String} secure-access-bastion-issuer
 */
DynamicSecretCreateMongoDb.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
DynamicSecretCreateMongoDb.prototype['secure-access-enable'] = undefined;

/**
 * Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts)
 * @member {Array.<String>} secure-access-host
 */
DynamicSecretCreateMongoDb.prototype['secure-access-host'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
DynamicSecretCreateMongoDb.prototype['secure-access-web'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretCreateMongoDb.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretCreateMongoDb.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretCreateMongoDb.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretCreateMongoDb.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
DynamicSecretCreateMongoDb.prototype['user-ttl'] = '60m';






export default DynamicSecretCreateMongoDb;

