/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RotatedSecretUpdateMongodb model module.
 * @module model/RotatedSecretUpdateMongodb
 * @version 5.0.3
 */
class RotatedSecretUpdateMongodb {
    /**
     * Constructs a new <code>RotatedSecretUpdateMongodb</code>.
     * @alias module:model/RotatedSecretUpdateMongodb
     * @param name {String} Rotated secret name
     */
    constructor(name) { 
        
        RotatedSecretUpdateMongodb.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['authentication-credentials'] = 'use-user-creds';
        obj['description'] = 'default_metadata';
        obj['json'] = false;
        obj['name'] = name;
        obj['rotate-after-disconnect'] = 'false';
        obj['secure-access-web'] = false;
    }

    /**
     * Constructs a <code>RotatedSecretUpdateMongodb</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotatedSecretUpdateMongodb} obj Optional instance to populate.
     * @return {module:model/RotatedSecretUpdateMongodb} The populated <code>RotatedSecretUpdateMongodb</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotatedSecretUpdateMongodb();

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
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
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
            if (data.hasOwnProperty('rotation-event-in')) {
                obj['rotation-event-in'] = ApiClient.convertToType(data['rotation-event-in'], ['String']);
            }
            if (data.hasOwnProperty('rotation-hour')) {
                obj['rotation-hour'] = ApiClient.convertToType(data['rotation-hour'], 'Number');
            }
            if (data.hasOwnProperty('rotation-interval')) {
                obj['rotation-interval'] = ApiClient.convertToType(data['rotation-interval'], 'String');
            }
            if (data.hasOwnProperty('secure-access-bastion-issuer')) {
                obj['secure-access-bastion-issuer'] = ApiClient.convertToType(data['secure-access-bastion-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-certificate-issuer')) {
                obj['secure-access-certificate-issuer'] = ApiClient.convertToType(data['secure-access-certificate-issuer'], 'String');
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

    /**
     * Validates the JSON data with respect to <code>RotatedSecretUpdateMongodb</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RotatedSecretUpdateMongodb</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RotatedSecretUpdateMongodb.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['add-tag'])) {
            throw new Error("Expected the field `add-tag` to be an array in the JSON data but got " + data['add-tag']);
        }
        // ensure the json data is a string
        if (data['authentication-credentials'] && !(typeof data['authentication-credentials'] === 'string' || data['authentication-credentials'] instanceof String)) {
            throw new Error("Expected the field `authentication-credentials` to be a primitive type in the JSON string but got " + data['authentication-credentials']);
        }
        // ensure the json data is a string
        if (data['auto-rotate'] && !(typeof data['auto-rotate'] === 'string' || data['auto-rotate'] instanceof String)) {
            throw new Error("Expected the field `auto-rotate` to be a primitive type in the JSON string but got " + data['auto-rotate']);
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
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
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['new-name'] && !(typeof data['new-name'] === 'string' || data['new-name'] instanceof String)) {
            throw new Error("Expected the field `new-name` to be a primitive type in the JSON string but got " + data['new-name']);
        }
        // ensure the json data is a string
        if (data['password-length'] && !(typeof data['password-length'] === 'string' || data['password-length'] instanceof String)) {
            throw new Error("Expected the field `password-length` to be a primitive type in the JSON string but got " + data['password-length']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['rm-tag'])) {
            throw new Error("Expected the field `rm-tag` to be an array in the JSON data but got " + data['rm-tag']);
        }
        // ensure the json data is a string
        if (data['rotate-after-disconnect'] && !(typeof data['rotate-after-disconnect'] === 'string' || data['rotate-after-disconnect'] instanceof String)) {
            throw new Error("Expected the field `rotate-after-disconnect` to be a primitive type in the JSON string but got " + data['rotate-after-disconnect']);
        }
        // ensure the json data is a string
        if (data['rotated-password'] && !(typeof data['rotated-password'] === 'string' || data['rotated-password'] instanceof String)) {
            throw new Error("Expected the field `rotated-password` to be a primitive type in the JSON string but got " + data['rotated-password']);
        }
        // ensure the json data is a string
        if (data['rotated-username'] && !(typeof data['rotated-username'] === 'string' || data['rotated-username'] instanceof String)) {
            throw new Error("Expected the field `rotated-username` to be a primitive type in the JSON string but got " + data['rotated-username']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['rotation-event-in'])) {
            throw new Error("Expected the field `rotation-event-in` to be an array in the JSON data but got " + data['rotation-event-in']);
        }
        // ensure the json data is a string
        if (data['rotation-interval'] && !(typeof data['rotation-interval'] === 'string' || data['rotation-interval'] instanceof String)) {
            throw new Error("Expected the field `rotation-interval` to be a primitive type in the JSON string but got " + data['rotation-interval']);
        }
        // ensure the json data is a string
        if (data['secure-access-bastion-issuer'] && !(typeof data['secure-access-bastion-issuer'] === 'string' || data['secure-access-bastion-issuer'] instanceof String)) {
            throw new Error("Expected the field `secure-access-bastion-issuer` to be a primitive type in the JSON string but got " + data['secure-access-bastion-issuer']);
        }
        // ensure the json data is a string
        if (data['secure-access-certificate-issuer'] && !(typeof data['secure-access-certificate-issuer'] === 'string' || data['secure-access-certificate-issuer'] instanceof String)) {
            throw new Error("Expected the field `secure-access-certificate-issuer` to be a primitive type in the JSON string but got " + data['secure-access-certificate-issuer']);
        }
        // ensure the json data is a string
        if (data['secure-access-db-name'] && !(typeof data['secure-access-db-name'] === 'string' || data['secure-access-db-name'] instanceof String)) {
            throw new Error("Expected the field `secure-access-db-name` to be a primitive type in the JSON string but got " + data['secure-access-db-name']);
        }
        // ensure the json data is a string
        if (data['secure-access-enable'] && !(typeof data['secure-access-enable'] === 'string' || data['secure-access-enable'] instanceof String)) {
            throw new Error("Expected the field `secure-access-enable` to be a primitive type in the JSON string but got " + data['secure-access-enable']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['secure-access-host'])) {
            throw new Error("Expected the field `secure-access-host` to be an array in the JSON data but got " + data['secure-access-host']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

RotatedSecretUpdateMongodb.RequiredProperties = ["name"];

/**
 * List of the new tags that will be attached to this item
 * @member {Array.<String>} add-tag
 */
RotatedSecretUpdateMongodb.prototype['add-tag'] = undefined;

/**
 * The credentials to connect with use-user-creds/use-target-creds
 * @member {String} authentication-credentials
 * @default 'use-user-creds'
 */
RotatedSecretUpdateMongodb.prototype['authentication-credentials'] = 'use-user-creds';

/**
 * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false]
 * @member {String} auto-rotate
 */
RotatedSecretUpdateMongodb.prototype['auto-rotate'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
RotatedSecretUpdateMongodb.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 * @default 'default_metadata'
 */
RotatedSecretUpdateMongodb.prototype['description'] = 'default_metadata';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
RotatedSecretUpdateMongodb.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
RotatedSecretUpdateMongodb.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
RotatedSecretUpdateMongodb.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
RotatedSecretUpdateMongodb.prototype['max-versions'] = undefined;

/**
 * Rotated secret name
 * @member {String} name
 */
RotatedSecretUpdateMongodb.prototype['name'] = undefined;

/**
 * New item name
 * @member {String} new-name
 */
RotatedSecretUpdateMongodb.prototype['new-name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
RotatedSecretUpdateMongodb.prototype['password-length'] = undefined;

/**
 * List of the existent tags that will be removed from this item
 * @member {Array.<String>} rm-tag
 */
RotatedSecretUpdateMongodb.prototype['rm-tag'] = undefined;

/**
 * Rotate the value of the secret after SRA session ends [true/false]
 * @member {String} rotate-after-disconnect
 * @default 'false'
 */
RotatedSecretUpdateMongodb.prototype['rotate-after-disconnect'] = 'false';

/**
 * rotated-username password (relevant only for rotator-type=password)
 * @member {String} rotated-password
 */
RotatedSecretUpdateMongodb.prototype['rotated-password'] = undefined;

/**
 * username to be rotated, if selected use-self-creds at rotator-creds-type, this username will try to rotate it's own password, if use-target-creds is selected, target credentials will be use to rotate the rotated-password (relevant only for rotator-type=password)
 * @member {String} rotated-username
 */
RotatedSecretUpdateMongodb.prototype['rotated-username'] = undefined;

/**
 * How many days before the rotation of the item would you like to be notified
 * @member {Array.<String>} rotation-event-in
 */
RotatedSecretUpdateMongodb.prototype['rotation-event-in'] = undefined;

/**
 * The Hour of the rotation in UTC
 * @member {Number} rotation-hour
 */
RotatedSecretUpdateMongodb.prototype['rotation-hour'] = undefined;

/**
 * The number of days to wait between every automatic key rotation (1-365)
 * @member {String} rotation-interval
 */
RotatedSecretUpdateMongodb.prototype['rotation-interval'] = undefined;

/**
 * Deprecated. use secure-access-certificate-issuer
 * @member {String} secure-access-bastion-issuer
 */
RotatedSecretUpdateMongodb.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Secure Access
 * @member {String} secure-access-certificate-issuer
 */
RotatedSecretUpdateMongodb.prototype['secure-access-certificate-issuer'] = undefined;

/**
 * The DB name (relevant only for DB Dynamic-Secret)
 * @member {String} secure-access-db-name
 */
RotatedSecretUpdateMongodb.prototype['secure-access-db-name'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
RotatedSecretUpdateMongodb.prototype['secure-access-enable'] = undefined;

/**
 * Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers)
 * @member {Array.<String>} secure-access-host
 */
RotatedSecretUpdateMongodb.prototype['secure-access-host'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
RotatedSecretUpdateMongodb.prototype['secure-access-web'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RotatedSecretUpdateMongodb.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RotatedSecretUpdateMongodb.prototype['uid-token'] = undefined;






export default RotatedSecretUpdateMongodb;

