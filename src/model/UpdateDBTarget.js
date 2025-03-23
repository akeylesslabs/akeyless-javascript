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
 * @version 5.0.1
 */
class UpdateDBTarget {
    /**
     * Constructs a new <code>UpdateDBTarget</code>.
     * updateDBTarget is a command that updates an existing target. [Deprecated: Use target-update-db command]
     * @alias module:model/UpdateDBTarget
     * @param connectionType {String} Type of connection to mssql database [credentials/cloud-identity/wallet/parent-target]
     * @param dbType {String} 
     * @param name {String} Target name
     */
    constructor(connectionType, dbType, name) { 
        
        UpdateDBTarget.initialize(this, connectionType, dbType, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, connectionType, dbType, name) { 
        obj['connection-type'] = connectionType || 'credentials';
        obj['db-type'] = dbType;
        obj['json'] = false;
        obj['name'] = name;
        obj['ssl'] = false;
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

            if (data.hasOwnProperty('azure-client-id')) {
                obj['azure-client-id'] = ApiClient.convertToType(data['azure-client-id'], 'String');
            }
            if (data.hasOwnProperty('azure-client-secret')) {
                obj['azure-client-secret'] = ApiClient.convertToType(data['azure-client-secret'], 'String');
            }
            if (data.hasOwnProperty('azure-tenant-id')) {
                obj['azure-tenant-id'] = ApiClient.convertToType(data['azure-tenant-id'], 'String');
            }
            if (data.hasOwnProperty('cloud-service-provider')) {
                obj['cloud-service-provider'] = ApiClient.convertToType(data['cloud-service-provider'], 'String');
            }
            if (data.hasOwnProperty('cluster-mode')) {
                obj['cluster-mode'] = ApiClient.convertToType(data['cluster-mode'], 'Boolean');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('connection-type')) {
                obj['connection-type'] = ApiClient.convertToType(data['connection-type'], 'String');
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
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
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
            if (data.hasOwnProperty('oracle-wallet-login-type')) {
                obj['oracle-wallet-login-type'] = ApiClient.convertToType(data['oracle-wallet-login-type'], 'String');
            }
            if (data.hasOwnProperty('oracle-wallet-p12-file-data')) {
                obj['oracle-wallet-p12-file-data'] = ApiClient.convertToType(data['oracle-wallet-p12-file-data'], 'String');
            }
            if (data.hasOwnProperty('oracle-wallet-sso-file-data')) {
                obj['oracle-wallet-sso-file-data'] = ApiClient.convertToType(data['oracle-wallet-sso-file-data'], 'String');
            }
            if (data.hasOwnProperty('parent-target-name')) {
                obj['parent-target-name'] = ApiClient.convertToType(data['parent-target-name'], 'String');
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

    /**
     * Validates the JSON data with respect to <code>UpdateDBTarget</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateDBTarget</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateDBTarget.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['azure-client-id'] && !(typeof data['azure-client-id'] === 'string' || data['azure-client-id'] instanceof String)) {
            throw new Error("Expected the field `azure-client-id` to be a primitive type in the JSON string but got " + data['azure-client-id']);
        }
        // ensure the json data is a string
        if (data['azure-client-secret'] && !(typeof data['azure-client-secret'] === 'string' || data['azure-client-secret'] instanceof String)) {
            throw new Error("Expected the field `azure-client-secret` to be a primitive type in the JSON string but got " + data['azure-client-secret']);
        }
        // ensure the json data is a string
        if (data['azure-tenant-id'] && !(typeof data['azure-tenant-id'] === 'string' || data['azure-tenant-id'] instanceof String)) {
            throw new Error("Expected the field `azure-tenant-id` to be a primitive type in the JSON string but got " + data['azure-tenant-id']);
        }
        // ensure the json data is a string
        if (data['cloud-service-provider'] && !(typeof data['cloud-service-provider'] === 'string' || data['cloud-service-provider'] instanceof String)) {
            throw new Error("Expected the field `cloud-service-provider` to be a primitive type in the JSON string but got " + data['cloud-service-provider']);
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }
        // ensure the json data is a string
        if (data['connection-type'] && !(typeof data['connection-type'] === 'string' || data['connection-type'] instanceof String)) {
            throw new Error("Expected the field `connection-type` to be a primitive type in the JSON string but got " + data['connection-type']);
        }
        // ensure the json data is a string
        if (data['db-name'] && !(typeof data['db-name'] === 'string' || data['db-name'] instanceof String)) {
            throw new Error("Expected the field `db-name` to be a primitive type in the JSON string but got " + data['db-name']);
        }
        // ensure the json data is a string
        if (data['db-server-certificates'] && !(typeof data['db-server-certificates'] === 'string' || data['db-server-certificates'] instanceof String)) {
            throw new Error("Expected the field `db-server-certificates` to be a primitive type in the JSON string but got " + data['db-server-certificates']);
        }
        // ensure the json data is a string
        if (data['db-server-name'] && !(typeof data['db-server-name'] === 'string' || data['db-server-name'] instanceof String)) {
            throw new Error("Expected the field `db-server-name` to be a primitive type in the JSON string but got " + data['db-server-name']);
        }
        // ensure the json data is a string
        if (data['db-type'] && !(typeof data['db-type'] === 'string' || data['db-type'] instanceof String)) {
            throw new Error("Expected the field `db-type` to be a primitive type in the JSON string but got " + data['db-type']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
            throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
        }
        // ensure the json data is a string
        if (data['keep-prev-version'] && !(typeof data['keep-prev-version'] === 'string' || data['keep-prev-version'] instanceof String)) {
            throw new Error("Expected the field `keep-prev-version` to be a primitive type in the JSON string but got " + data['keep-prev-version']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['max-versions'] && !(typeof data['max-versions'] === 'string' || data['max-versions'] instanceof String)) {
            throw new Error("Expected the field `max-versions` to be a primitive type in the JSON string but got " + data['max-versions']);
        }
        // ensure the json data is a string
        if (data['mongodb-atlas-api-private-key'] && !(typeof data['mongodb-atlas-api-private-key'] === 'string' || data['mongodb-atlas-api-private-key'] instanceof String)) {
            throw new Error("Expected the field `mongodb-atlas-api-private-key` to be a primitive type in the JSON string but got " + data['mongodb-atlas-api-private-key']);
        }
        // ensure the json data is a string
        if (data['mongodb-atlas-api-public-key'] && !(typeof data['mongodb-atlas-api-public-key'] === 'string' || data['mongodb-atlas-api-public-key'] instanceof String)) {
            throw new Error("Expected the field `mongodb-atlas-api-public-key` to be a primitive type in the JSON string but got " + data['mongodb-atlas-api-public-key']);
        }
        // ensure the json data is a string
        if (data['mongodb-atlas-project-id'] && !(typeof data['mongodb-atlas-project-id'] === 'string' || data['mongodb-atlas-project-id'] instanceof String)) {
            throw new Error("Expected the field `mongodb-atlas-project-id` to be a primitive type in the JSON string but got " + data['mongodb-atlas-project-id']);
        }
        // ensure the json data is a string
        if (data['mongodb-default-auth-db'] && !(typeof data['mongodb-default-auth-db'] === 'string' || data['mongodb-default-auth-db'] instanceof String)) {
            throw new Error("Expected the field `mongodb-default-auth-db` to be a primitive type in the JSON string but got " + data['mongodb-default-auth-db']);
        }
        // ensure the json data is a string
        if (data['mongodb-uri-options'] && !(typeof data['mongodb-uri-options'] === 'string' || data['mongodb-uri-options'] instanceof String)) {
            throw new Error("Expected the field `mongodb-uri-options` to be a primitive type in the JSON string but got " + data['mongodb-uri-options']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['new-name'] && !(typeof data['new-name'] === 'string' || data['new-name'] instanceof String)) {
            throw new Error("Expected the field `new-name` to be a primitive type in the JSON string but got " + data['new-name']);
        }
        // ensure the json data is a string
        if (data['oracle-service-name'] && !(typeof data['oracle-service-name'] === 'string' || data['oracle-service-name'] instanceof String)) {
            throw new Error("Expected the field `oracle-service-name` to be a primitive type in the JSON string but got " + data['oracle-service-name']);
        }
        // ensure the json data is a string
        if (data['oracle-wallet-login-type'] && !(typeof data['oracle-wallet-login-type'] === 'string' || data['oracle-wallet-login-type'] instanceof String)) {
            throw new Error("Expected the field `oracle-wallet-login-type` to be a primitive type in the JSON string but got " + data['oracle-wallet-login-type']);
        }
        // ensure the json data is a string
        if (data['oracle-wallet-p12-file-data'] && !(typeof data['oracle-wallet-p12-file-data'] === 'string' || data['oracle-wallet-p12-file-data'] instanceof String)) {
            throw new Error("Expected the field `oracle-wallet-p12-file-data` to be a primitive type in the JSON string but got " + data['oracle-wallet-p12-file-data']);
        }
        // ensure the json data is a string
        if (data['oracle-wallet-sso-file-data'] && !(typeof data['oracle-wallet-sso-file-data'] === 'string' || data['oracle-wallet-sso-file-data'] instanceof String)) {
            throw new Error("Expected the field `oracle-wallet-sso-file-data` to be a primitive type in the JSON string but got " + data['oracle-wallet-sso-file-data']);
        }
        // ensure the json data is a string
        if (data['parent-target-name'] && !(typeof data['parent-target-name'] === 'string' || data['parent-target-name'] instanceof String)) {
            throw new Error("Expected the field `parent-target-name` to be a primitive type in the JSON string but got " + data['parent-target-name']);
        }
        // ensure the json data is a string
        if (data['port'] && !(typeof data['port'] === 'string' || data['port'] instanceof String)) {
            throw new Error("Expected the field `port` to be a primitive type in the JSON string but got " + data['port']);
        }
        // ensure the json data is a string
        if (data['pwd'] && !(typeof data['pwd'] === 'string' || data['pwd'] instanceof String)) {
            throw new Error("Expected the field `pwd` to be a primitive type in the JSON string but got " + data['pwd']);
        }
        // ensure the json data is a string
        if (data['snowflake-account'] && !(typeof data['snowflake-account'] === 'string' || data['snowflake-account'] instanceof String)) {
            throw new Error("Expected the field `snowflake-account` to be a primitive type in the JSON string but got " + data['snowflake-account']);
        }
        // ensure the json data is a string
        if (data['snowflake-api-private-key'] && !(typeof data['snowflake-api-private-key'] === 'string' || data['snowflake-api-private-key'] instanceof String)) {
            throw new Error("Expected the field `snowflake-api-private-key` to be a primitive type in the JSON string but got " + data['snowflake-api-private-key']);
        }
        // ensure the json data is a string
        if (data['snowflake-api-private-key-password'] && !(typeof data['snowflake-api-private-key-password'] === 'string' || data['snowflake-api-private-key-password'] instanceof String)) {
            throw new Error("Expected the field `snowflake-api-private-key-password` to be a primitive type in the JSON string but got " + data['snowflake-api-private-key-password']);
        }
        // ensure the json data is a string
        if (data['ssl-certificate'] && !(typeof data['ssl-certificate'] === 'string' || data['ssl-certificate'] instanceof String)) {
            throw new Error("Expected the field `ssl-certificate` to be a primitive type in the JSON string but got " + data['ssl-certificate']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }
        // ensure the json data is a string
        if (data['user-name'] && !(typeof data['user-name'] === 'string' || data['user-name'] instanceof String)) {
            throw new Error("Expected the field `user-name` to be a primitive type in the JSON string but got " + data['user-name']);
        }

        return true;
    }


}

UpdateDBTarget.RequiredProperties = ["connection-type", "db-type", "name"];

/**
 * (Optional) Client id (relevant for \"cloud-service-provider\" only)
 * @member {String} azure-client-id
 */
UpdateDBTarget.prototype['azure-client-id'] = undefined;

/**
 * (Optional) Client secret (relevant for \"cloud-service-provider\" only)
 * @member {String} azure-client-secret
 */
UpdateDBTarget.prototype['azure-client-secret'] = undefined;

/**
 * (Optional) Tenant id (relevant for \"cloud-service-provider\" only)
 * @member {String} azure-tenant-id
 */
UpdateDBTarget.prototype['azure-tenant-id'] = undefined;

/**
 * (Optional) Cloud service provider (currently only supports Azure)
 * @member {String} cloud-service-provider
 */
UpdateDBTarget.prototype['cloud-service-provider'] = undefined;

/**
 * Cluster Mode
 * @member {Boolean} cluster-mode
 */
UpdateDBTarget.prototype['cluster-mode'] = undefined;

/**
 * Deprecated - use description
 * @member {String} comment
 */
UpdateDBTarget.prototype['comment'] = undefined;

/**
 * Type of connection to mssql database [credentials/cloud-identity/wallet/parent-target]
 * @member {String} connection-type
 * @default 'credentials'
 */
UpdateDBTarget.prototype['connection-type'] = 'credentials';

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
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
UpdateDBTarget.prototype['max-versions'] = undefined;

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
 * Oracle db service name
 * @member {String} oracle-service-name
 */
UpdateDBTarget.prototype['oracle-service-name'] = undefined;

/**
 * Oracle Wallet login type (password/mtls)
 * @member {String} oracle-wallet-login-type
 */
UpdateDBTarget.prototype['oracle-wallet-login-type'] = undefined;

/**
 * Oracle wallet p12 file data in base64
 * @member {String} oracle-wallet-p12-file-data
 */
UpdateDBTarget.prototype['oracle-wallet-p12-file-data'] = undefined;

/**
 * Oracle wallet sso file data in base64
 * @member {String} oracle-wallet-sso-file-data
 */
UpdateDBTarget.prototype['oracle-wallet-sso-file-data'] = undefined;

/**
 * Name of the parent target, relevant only when connection-type is parent-target
 * @member {String} parent-target-name
 */
UpdateDBTarget.prototype['parent-target-name'] = undefined;

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

