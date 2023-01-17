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
 * The CreateDBTarget model module.
 * @module model/CreateDBTarget
 * @version 3.1.2
 */
class CreateDBTarget {
    /**
     * Constructs a new <code>CreateDBTarget</code>.
     * @alias module:model/CreateDBTarget
     * @param dbType {String} 
     * @param name {String} Target name
     */
    constructor(dbType, name) { 
        
        CreateDBTarget.initialize(this, dbType, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dbType, name) { 
        obj['db-type'] = dbType;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateDBTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateDBTarget} obj Optional instance to populate.
     * @return {module:model/CreateDBTarget} The populated <code>CreateDBTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateDBTarget();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('db-name')) {
                obj['db-name'] = ApiClient.convertToType(data['db-name'], 'String');
            }
            if (data.hasOwnProperty('db-server-certificates')) {
                obj['db-server-certificates'] = ApiClient.convertToType(data['db-server-certificates'], 'String');
            }
            if (data.hasOwnProperty('db-server-name')) {
                obj['db-server-name'] = ApiClient.convertToType(data['db-server-name'], 'String');
            }
            if (data.hasOwnProperty('db-type')) {
                obj['db-type'] = ApiClient.convertToType(data['db-type'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('mongodb-atlas')) {
                obj['mongodb-atlas'] = ApiClient.convertToType(data['mongodb-atlas'], 'Boolean');
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
            if (data.hasOwnProperty('mongodb-default-auth-db')) {
                obj['mongodb-default-auth-db'] = ApiClient.convertToType(data['mongodb-default-auth-db'], 'String');
            }
            if (data.hasOwnProperty('mongodb-uri-options')) {
                obj['mongodb-uri-options'] = ApiClient.convertToType(data['mongodb-uri-options'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('oracle-service-name')) {
                obj['oracle-service-name'] = ApiClient.convertToType(data['oracle-service-name'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'String');
            }
            if (data.hasOwnProperty('pwd')) {
                obj['pwd'] = ApiClient.convertToType(data['pwd'], 'String');
            }
            if (data.hasOwnProperty('snowflake-account')) {
                obj['snowflake-account'] = ApiClient.convertToType(data['snowflake-account'], 'String');
            }
            if (data.hasOwnProperty('snowflake-api-private-key')) {
                obj['snowflake-api-private-key'] = ApiClient.convertToType(data['snowflake-api-private-key'], 'String');
            }
            if (data.hasOwnProperty('snowflake-api-private-key-password')) {
                obj['snowflake-api-private-key-password'] = ApiClient.convertToType(data['snowflake-api-private-key-password'], 'String');
            }
            if (data.hasOwnProperty('ssl')) {
                obj['ssl'] = ApiClient.convertToType(data['ssl'], 'Boolean');
            }
            if (data.hasOwnProperty('ssl-certificate')) {
                obj['ssl-certificate'] = ApiClient.convertToType(data['ssl-certificate'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user-name')) {
                obj['user-name'] = ApiClient.convertToType(data['user-name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Comment about the target
 * @member {String} comment
 */
CreateDBTarget.prototype['comment'] = undefined;

/**
 * @member {String} db-name
 */
CreateDBTarget.prototype['db-name'] = undefined;

/**
 * (Optional) DB server certificates
 * @member {String} db-server-certificates
 */
CreateDBTarget.prototype['db-server-certificates'] = undefined;

/**
 * (Optional) Server name for certificate verification
 * @member {String} db-server-name
 */
CreateDBTarget.prototype['db-server-name'] = undefined;

/**
 * @member {String} db-type
 */
CreateDBTarget.prototype['db-type'] = undefined;

/**
 * @member {String} host
 */
CreateDBTarget.prototype['host'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
CreateDBTarget.prototype['json'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateDBTarget.prototype['key'] = undefined;

/**
 * @member {Boolean} mongodb-atlas
 */
CreateDBTarget.prototype['mongodb-atlas'] = undefined;

/**
 * MongoDB Atlas private key
 * @member {String} mongodb-atlas-api-private-key
 */
CreateDBTarget.prototype['mongodb-atlas-api-private-key'] = undefined;

/**
 * MongoDB Atlas public key
 * @member {String} mongodb-atlas-api-public-key
 */
CreateDBTarget.prototype['mongodb-atlas-api-public-key'] = undefined;

/**
 * MongoDB Atlas project ID
 * @member {String} mongodb-atlas-project-id
 */
CreateDBTarget.prototype['mongodb-atlas-project-id'] = undefined;

/**
 * MongoDB server default authentication database
 * @member {String} mongodb-default-auth-db
 */
CreateDBTarget.prototype['mongodb-default-auth-db'] = undefined;

/**
 * MongoDB server URI options
 * @member {String} mongodb-uri-options
 */
CreateDBTarget.prototype['mongodb-uri-options'] = undefined;

/**
 * Target name
 * @member {String} name
 */
CreateDBTarget.prototype['name'] = undefined;

/**
 * @member {String} oracle-service-name
 */
CreateDBTarget.prototype['oracle-service-name'] = undefined;

/**
 * @member {String} port
 */
CreateDBTarget.prototype['port'] = undefined;

/**
 * @member {String} pwd
 */
CreateDBTarget.prototype['pwd'] = undefined;

/**
 * @member {String} snowflake-account
 */
CreateDBTarget.prototype['snowflake-account'] = undefined;

/**
 * RSA Private key (base64 encoded)
 * @member {String} snowflake-api-private-key
 */
CreateDBTarget.prototype['snowflake-api-private-key'] = undefined;

/**
 * The Private key passphrase
 * @member {String} snowflake-api-private-key-password
 */
CreateDBTarget.prototype['snowflake-api-private-key-password'] = undefined;

/**
 * SSL connection mode
 * @member {Boolean} ssl
 */
CreateDBTarget.prototype['ssl'] = undefined;

/**
 * SSL connection certificate
 * @member {String} ssl-certificate
 */
CreateDBTarget.prototype['ssl-certificate'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateDBTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateDBTarget.prototype['uid-token'] = undefined;

/**
 * @member {String} user-name
 */
CreateDBTarget.prototype['user-name'] = undefined;






export default CreateDBTarget;

