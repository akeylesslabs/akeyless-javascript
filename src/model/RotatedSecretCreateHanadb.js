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
 * The RotatedSecretCreateHanadb model module.
 * @module model/RotatedSecretCreateHanadb
 * @version 4.2.2
 */
class RotatedSecretCreateHanadb {
    /**
     * Constructs a new <code>RotatedSecretCreateHanadb</code>.
     * @alias module:model/RotatedSecretCreateHanadb
     * @param name {String} Rotated secret name
     * @param rotatorType {String} The rotator type. options: [target/password]
     * @param targetName {String} Target name
     */
    constructor(name, rotatorType, targetName) { 
        
        RotatedSecretCreateHanadb.initialize(this, name, rotatorType, targetName);
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
     * Constructs a <code>RotatedSecretCreateHanadb</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotatedSecretCreateHanadb} obj Optional instance to populate.
     * @return {module:model/RotatedSecretCreateHanadb} The populated <code>RotatedSecretCreateHanadb</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotatedSecretCreateHanadb();

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
            if (data.hasOwnProperty('rotated-password')) {
                obj['rotated-password'] = ApiClient.convertToType(data['rotated-password'], 'String');
            }
            if (data.hasOwnProperty('rotated-username')) {
                obj['rotated-username'] = ApiClient.convertToType(data['rotated-username'], 'String');
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
        }
        return obj;
    }


}

/**
 * The credentials to connect with use-user-creds/use-target-creds
 * @member {String} authentication-credentials
 * @default 'use-user-creds'
 */
RotatedSecretCreateHanadb.prototype['authentication-credentials'] = 'use-user-creds';

/**
 * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false]
 * @member {String} auto-rotate
 */
RotatedSecretCreateHanadb.prototype['auto-rotate'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
RotatedSecretCreateHanadb.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
RotatedSecretCreateHanadb.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
RotatedSecretCreateHanadb.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
RotatedSecretCreateHanadb.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
RotatedSecretCreateHanadb.prototype['max-versions'] = undefined;

/**
 * Rotated secret name
 * @member {String} name
 */
RotatedSecretCreateHanadb.prototype['name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
RotatedSecretCreateHanadb.prototype['password-length'] = undefined;

/**
 * rotated-username password (relevant only for rotator-type=password)
 * @member {String} rotated-password
 */
RotatedSecretCreateHanadb.prototype['rotated-password'] = undefined;

/**
 * username to be rotated, if selected use-self-creds at rotator-creds-type, this username will try to rotate it's own password, if use-target-creds is selected, target credentials will be use to rotate the rotated-password (relevant only for rotator-type=password)
 * @member {String} rotated-username
 */
RotatedSecretCreateHanadb.prototype['rotated-username'] = undefined;

/**
 * The Hour of the rotation in UTC
 * @member {Number} rotation-hour
 */
RotatedSecretCreateHanadb.prototype['rotation-hour'] = undefined;

/**
 * The number of days to wait between every automatic key rotation (1-365)
 * @member {String} rotation-interval
 */
RotatedSecretCreateHanadb.prototype['rotation-interval'] = undefined;

/**
 * The rotator type. options: [target/password]
 * @member {String} rotator-type
 */
RotatedSecretCreateHanadb.prototype['rotator-type'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
RotatedSecretCreateHanadb.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
RotatedSecretCreateHanadb.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RotatedSecretCreateHanadb.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RotatedSecretCreateHanadb.prototype['uid-token'] = undefined;






export default RotatedSecretCreateHanadb;

