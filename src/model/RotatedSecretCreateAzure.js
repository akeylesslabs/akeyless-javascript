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
 * The RotatedSecretCreateAzure model module.
 * @module model/RotatedSecretCreateAzure
 * @version 4.2.4
 */
class RotatedSecretCreateAzure {
    /**
     * Constructs a new <code>RotatedSecretCreateAzure</code>.
     * @alias module:model/RotatedSecretCreateAzure
     * @param name {String} Rotated secret name
     * @param rotatorType {String} The rotator type. options: [target/password/api-key/azure-storage-account]
     * @param targetName {String} Target name
     */
    constructor(name, rotatorType, targetName) { 
        
        RotatedSecretCreateAzure.initialize(this, name, rotatorType, targetName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, rotatorType, targetName) { 
        obj['name'] = name;
        obj['rotator-type'] = rotatorType;
        obj['target-name'] = targetName;
    }

    /**
     * Constructs a <code>RotatedSecretCreateAzure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotatedSecretCreateAzure} obj Optional instance to populate.
     * @return {module:model/RotatedSecretCreateAzure} The populated <code>RotatedSecretCreateAzure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotatedSecretCreateAzure();

            if (data.hasOwnProperty('api-id')) {
                obj['api-id'] = ApiClient.convertToType(data['api-id'], 'String');
            }
            if (data.hasOwnProperty('api-key')) {
                obj['api-key'] = ApiClient.convertToType(data['api-key'], 'String');
            }
            if (data.hasOwnProperty('application-id')) {
                obj['application-id'] = ApiClient.convertToType(data['application-id'], 'String');
            }
            if (data.hasOwnProperty('authentication-credentials')) {
                obj['authentication-credentials'] = ApiClient.convertToType(data['authentication-credentials'], 'String');
            }
            if (data.hasOwnProperty('auto-rotate')) {
                obj['auto-rotate'] = ApiClient.convertToType(data['auto-rotate'], 'String');
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
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
            }
            if (data.hasOwnProperty('rotate-after-disconnect')) {
                obj['rotate-after-disconnect'] = ApiClient.convertToType(data['rotate-after-disconnect'], 'String');
            }
            if (data.hasOwnProperty('rotation-event-in')) {
                obj['rotation-event-in'] = ApiClient.convertToType(data['rotation-event-in'], ['String']);
            }
            if (data.hasOwnProperty('rotation-hour')) {
                obj['rotation-hour'] = ApiClient.convertToType(data['rotation-hour'], 'Number');
            }
            if (data.hasOwnProperty('rotation-interval')) {
                obj['rotation-interval'] = ApiClient.convertToType(data['rotation-interval'], 'String');
            }
            if (data.hasOwnProperty('rotator-type')) {
                obj['rotator-type'] = ApiClient.convertToType(data['rotator-type'], 'String');
            }
            if (data.hasOwnProperty('secure-access-disable-concurrent-connections')) {
                obj['secure-access-disable-concurrent-connections'] = ApiClient.convertToType(data['secure-access-disable-concurrent-connections'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-url')) {
                obj['secure-access-url'] = ApiClient.convertToType(data['secure-access-url'], 'String');
            }
            if (data.hasOwnProperty('secure-access-web')) {
                obj['secure-access-web'] = ApiClient.convertToType(data['secure-access-web'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-browsing')) {
                obj['secure-access-web-browsing'] = ApiClient.convertToType(data['secure-access-web-browsing'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-proxy')) {
                obj['secure-access-web-proxy'] = ApiClient.convertToType(data['secure-access-web-proxy'], 'Boolean');
            }
            if (data.hasOwnProperty('storage-account-key-name')) {
                obj['storage-account-key-name'] = ApiClient.convertToType(data['storage-account-key-name'], 'String');
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
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * API ID to rotate (relevant only for rotator-type=api-key)
 * @member {String} api-id
 */
RotatedSecretCreateAzure.prototype['api-id'] = undefined;

/**
 * API key to rotate (relevant only for rotator-type=api-key)
 * @member {String} api-key
 */
RotatedSecretCreateAzure.prototype['api-key'] = undefined;

/**
 * Id of the azure app that hold the serect to be rotated (relevant only for rotator-type=api-key & authentication-credentials=use-target-creds)
 * @member {String} application-id
 */
RotatedSecretCreateAzure.prototype['application-id'] = undefined;

/**
 * The credentials to connect with use-user-creds/use-target-creds
 * @member {String} authentication-credentials
 * @default 'use-user-creds'
 */
RotatedSecretCreateAzure.prototype['authentication-credentials'] = 'use-user-creds';

/**
 * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false]
 * @member {String} auto-rotate
 */
RotatedSecretCreateAzure.prototype['auto-rotate'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
RotatedSecretCreateAzure.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
RotatedSecretCreateAzure.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
RotatedSecretCreateAzure.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
RotatedSecretCreateAzure.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
RotatedSecretCreateAzure.prototype['max-versions'] = undefined;

/**
 * Rotated secret name
 * @member {String} name
 */
RotatedSecretCreateAzure.prototype['name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
RotatedSecretCreateAzure.prototype['password-length'] = undefined;

/**
 * Rotate the value of the secret after SRA session ends [true/false]
 * @member {String} rotate-after-disconnect
 * @default 'false'
 */
RotatedSecretCreateAzure.prototype['rotate-after-disconnect'] = 'false';

/**
 * How many days before the rotation of the item would you like to be notified
 * @member {Array.<String>} rotation-event-in
 */
RotatedSecretCreateAzure.prototype['rotation-event-in'] = undefined;

/**
 * The Hour of the rotation in UTC
 * @member {Number} rotation-hour
 */
RotatedSecretCreateAzure.prototype['rotation-hour'] = undefined;

/**
 * The number of days to wait between every automatic key rotation (1-365)
 * @member {String} rotation-interval
 */
RotatedSecretCreateAzure.prototype['rotation-interval'] = undefined;

/**
 * The rotator type. options: [target/password/api-key/azure-storage-account]
 * @member {String} rotator-type
 */
RotatedSecretCreateAzure.prototype['rotator-type'] = undefined;

/**
 * Enable this flag to prevent simultaneous use of the same secret
 * @member {Boolean} secure-access-disable-concurrent-connections
 */
RotatedSecretCreateAzure.prototype['secure-access-disable-concurrent-connections'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
RotatedSecretCreateAzure.prototype['secure-access-enable'] = undefined;

/**
 * Destination URL to inject secrets
 * @member {String} secure-access-url
 */
RotatedSecretCreateAzure.prototype['secure-access-url'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
RotatedSecretCreateAzure.prototype['secure-access-web'] = false;

/**
 * Secure browser via Akeyless Web Access Bastion
 * @member {Boolean} secure-access-web-browsing
 * @default false
 */
RotatedSecretCreateAzure.prototype['secure-access-web-browsing'] = false;

/**
 * Web-Proxy via Akeyless Web Access Bastion
 * @member {Boolean} secure-access-web-proxy
 * @default false
 */
RotatedSecretCreateAzure.prototype['secure-access-web-proxy'] = false;

/**
 * The name of the storage account key to rotate [key1/key2/kerb1/kerb2] (relevat to azure-storage-account)
 * @member {String} storage-account-key-name
 */
RotatedSecretCreateAzure.prototype['storage-account-key-name'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
RotatedSecretCreateAzure.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
RotatedSecretCreateAzure.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RotatedSecretCreateAzure.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RotatedSecretCreateAzure.prototype['uid-token'] = undefined;

/**
 * The user principal name to rotate his password (relevant only for rotator-type=password)
 * @member {String} username
 */
RotatedSecretCreateAzure.prototype['username'] = undefined;






export default RotatedSecretCreateAzure;

