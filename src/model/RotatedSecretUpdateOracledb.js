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
 * The RotatedSecretUpdateOracledb model module.
 * @module model/RotatedSecretUpdateOracledb
 * @version 3.6.2
 */
class RotatedSecretUpdateOracledb {
    /**
     * Constructs a new <code>RotatedSecretUpdateOracledb</code>.
     * @alias module:model/RotatedSecretUpdateOracledb
     * @param name {String} Rotated secret name
     */
    constructor(name) { 
        
        RotatedSecretUpdateOracledb.initialize(this, name);
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
     * Constructs a <code>RotatedSecretUpdateOracledb</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotatedSecretUpdateOracledb} obj Optional instance to populate.
     * @return {module:model/RotatedSecretUpdateOracledb} The populated <code>RotatedSecretUpdateOracledb</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotatedSecretUpdateOracledb();

            if (data.hasOwnProperty('add-tag')) {
                obj['add-tag'] = ApiClient.convertToType(data['add-tag'], ['String']);
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
            if (data.hasOwnProperty('keep-prev-version')) {
                obj['keep-prev-version'] = ApiClient.convertToType(data['keep-prev-version'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
            }
            if (data.hasOwnProperty('rm-tag')) {
                obj['rm-tag'] = ApiClient.convertToType(data['rm-tag'], ['String']);
            }
            if (data.hasOwnProperty('rotate-after-disconnect')) {
                obj['rotate-after-disconnect'] = ApiClient.convertToType(data['rotate-after-disconnect'], 'String');
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
            if (data.hasOwnProperty('secure-access-db-name')) {
                obj['secure-access-db-name'] = ApiClient.convertToType(data['secure-access-db-name'], 'String');
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
 * List of the new tags that will be attached to this item
 * @member {Array.<String>} add-tag
 */
RotatedSecretUpdateOracledb.prototype['add-tag'] = undefined;

/**
 * The credentials to connect with use-user-creds/use-target-creds
 * @member {String} authentication-credentials
 * @default 'use-user-creds'
 */
RotatedSecretUpdateOracledb.prototype['authentication-credentials'] = 'use-user-creds';

/**
 * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false]
 * @member {String} auto-rotate
 */
RotatedSecretUpdateOracledb.prototype['auto-rotate'] = undefined;

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
RotatedSecretUpdateOracledb.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 * @default 'default_metadata'
 */
RotatedSecretUpdateOracledb.prototype['description'] = 'default_metadata';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
RotatedSecretUpdateOracledb.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
RotatedSecretUpdateOracledb.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
RotatedSecretUpdateOracledb.prototype['key'] = undefined;

/**
 * Rotated secret name
 * @member {String} name
 */
RotatedSecretUpdateOracledb.prototype['name'] = undefined;

/**
 * New item name
 * @member {String} new-name
 */
RotatedSecretUpdateOracledb.prototype['new-name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
RotatedSecretUpdateOracledb.prototype['password-length'] = undefined;

/**
 * List of the existent tags that will be removed from this item
 * @member {Array.<String>} rm-tag
 */
RotatedSecretUpdateOracledb.prototype['rm-tag'] = undefined;

/**
 * Rotate the value of the secret after SRA session ends [true/false]
 * @member {String} rotate-after-disconnect
 * @default 'false'
 */
RotatedSecretUpdateOracledb.prototype['rotate-after-disconnect'] = 'false';

/**
 * rotated-username password (relevant only for rotator-type=password)
 * @member {String} rotated-password
 */
RotatedSecretUpdateOracledb.prototype['rotated-password'] = undefined;

/**
 * username to be rotated, if selected use-self-creds at rotator-creds-type, this username will try to rotate it's own password, if use-target-creds is selected, target credentials will be use to rotate the rotated-password (relevant only for rotator-type=password)
 * @member {String} rotated-username
 */
RotatedSecretUpdateOracledb.prototype['rotated-username'] = undefined;

/**
 * The Hour of the rotation in UTC
 * @member {Number} rotation-hour
 */
RotatedSecretUpdateOracledb.prototype['rotation-hour'] = undefined;

/**
 * The number of days to wait between every automatic key rotation (1-365)
 * @member {String} rotation-interval
 */
RotatedSecretUpdateOracledb.prototype['rotation-interval'] = undefined;

/**
 * The DB name (relevant only for DB Dynamic-Secret)
 * @member {String} secure-access-db-name
 */
RotatedSecretUpdateOracledb.prototype['secure-access-db-name'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
RotatedSecretUpdateOracledb.prototype['secure-access-enable'] = undefined;

/**
 * Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers)
 * @member {Array.<String>} secure-access-host
 */
RotatedSecretUpdateOracledb.prototype['secure-access-host'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
RotatedSecretUpdateOracledb.prototype['secure-access-web'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RotatedSecretUpdateOracledb.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RotatedSecretUpdateOracledb.prototype['uid-token'] = undefined;






export default RotatedSecretUpdateOracledb;

