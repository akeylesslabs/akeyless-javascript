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
 * The UpdateDBTarget model module.
 * @module model/UpdateDBTarget
 * @version 3.3.16
 */
class UpdateDBTarget {
    /**
     * Constructs a new <code>UpdateDBTarget</code>.
     * @alias module:model/UpdateDBTarget
     * @param dbType {String} 
     * @param name {String} Target name
     */
    constructor(dbType, name) { 
        
        UpdateDBTarget.initialize(this, dbType, name);
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
     * Constructs a <code>UpdateDBTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateDBTarget} obj Optional instance to populate.
     * @return {module:model/UpdateDBTarget} The populated <code>UpdateDBTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateDBTarget();

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
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('keep-prev-version')) {
                obj['keep-prev-version'] = ApiClient.convertToType(data['keep-prev-version'], 'String');
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
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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
            if (data.hasOwnProperty('update-version')) {
                obj['update-version'] = ApiClient.convertToType(data['update-version'], 'Boolean');
            }
            if (data.hasOwnProperty('user-name')) {
                obj['user-name'] = ApiClient.convertToType(data['user-name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Deprecated - use description
 * @member {String} comment
 */
UpdateDBTarget.prototype['comment'] = undefined;

/**
 * @member {String} db-name
 */
UpdateDBTarget.prototype['db-name'] = undefined;

/**
 * (Optional) DB server certificates
 * @member {String} db-server-certificates
 */
UpdateDBTarget.prototype['db-server-certificates'] = undefined;

/**
 * (Optional) Server name for certificate verification
 * @member {String} db-server-name
 */
UpdateDBTarget.prototype['db-server-name'] = undefined;

/**
 * @member {String} db-type
 */
UpdateDBTarget.prototype['db-type'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
UpdateDBTarget.prototype['description'] = undefined;

/**
 * @member {String} host
 */
UpdateDBTarget.prototype['host'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateDBTarget.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
UpdateDBTarget.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateDBTarget.prototype['key'] = undefined;

/**
 * @member {Boolean} mongodb-atlas
 */
UpdateDBTarget.prototype['mongodb-atlas'] = undefined;

/**
 * MongoDB Atlas private key
 * @member {String} mongodb-atlas-api-private-key
 */
UpdateDBTarget.prototype['mongodb-atlas-api-private-key'] = undefined;

/**
 * MongoDB Atlas public key
 * @member {String} mongodb-atlas-api-public-key
 */
UpdateDBTarget.prototype['mongodb-atlas-api-public-key'] = undefined;

/**
 * MongoDB Atlas project ID
 * @member {String} mongodb-atlas-project-id
 */
UpdateDBTarget.prototype['mongodb-atlas-project-id'] = undefined;

/**
 * MongoDB server default authentication database
 * @member {String} mongodb-default-auth-db
 */
UpdateDBTarget.prototype['mongodb-default-auth-db'] = undefined;

/**
 * MongoDB server URI options
 * @member {String} mongodb-uri-options
 */
UpdateDBTarget.prototype['mongodb-uri-options'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateDBTarget.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
UpdateDBTarget.prototype['new-name'] = undefined;

/**
 * @member {String} oracle-service-name
 */
UpdateDBTarget.prototype['oracle-service-name'] = undefined;

/**
 * @member {String} port
 */
UpdateDBTarget.prototype['port'] = undefined;

/**
 * @member {String} pwd
 */
UpdateDBTarget.prototype['pwd'] = undefined;

/**
 * @member {String} snowflake-account
 */
UpdateDBTarget.prototype['snowflake-account'] = undefined;

/**
 * RSA Private key (base64 encoded)
 * @member {String} snowflake-api-private-key
 */
UpdateDBTarget.prototype['snowflake-api-private-key'] = undefined;

/**
 * The Private key passphrase
 * @member {String} snowflake-api-private-key-password
 */
UpdateDBTarget.prototype['snowflake-api-private-key-password'] = undefined;

/**
 * Enable/Disable SSL [true/false]
 * @member {Boolean} ssl
 * @default false
 */
UpdateDBTarget.prototype['ssl'] = false;

/**
 * SSL connection certificate
 * @member {String} ssl-certificate
 */
UpdateDBTarget.prototype['ssl-certificate'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateDBTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateDBTarget.prototype['uid-token'] = undefined;

/**
 * Deprecated
 * @member {Boolean} update-version
 */
UpdateDBTarget.prototype['update-version'] = undefined;

/**
 * @member {String} user-name
 */
UpdateDBTarget.prototype['user-name'] = undefined;






export default UpdateDBTarget;

