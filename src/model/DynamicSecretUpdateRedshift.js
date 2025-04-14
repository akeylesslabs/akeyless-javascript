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
 * The DynamicSecretUpdateRedshift model module.
 * @module model/DynamicSecretUpdateRedshift
 * @version 5.0.3
 */
class DynamicSecretUpdateRedshift {
    /**
     * Constructs a new <code>DynamicSecretUpdateRedshift</code>.
     * dynamicSecretUpdateRedshift is a command that updates redshift dynamic secret
     * @alias module:model/DynamicSecretUpdateRedshift
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        DynamicSecretUpdateRedshift.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['json'] = false;
        obj['name'] = name;
        obj['redshift-host'] = '127.0.0.1';
        obj['redshift-port'] = '5439';
        obj['ssl'] = false;
        obj['user-ttl'] = '60m';
    }

    /**
     * Constructs a <code>DynamicSecretUpdateRedshift</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretUpdateRedshift} obj Optional instance to populate.
     * @return {module:model/DynamicSecretUpdateRedshift} The populated <code>DynamicSecretUpdateRedshift</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretUpdateRedshift();

            if (data.hasOwnProperty('creation-statements')) {
                obj['creation-statements'] = ApiClient.convertToType(data['creation-statements'], 'String');
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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key')) {
                obj['producer-encryption-key'] = ApiClient.convertToType(data['producer-encryption-key'], 'String');
            }
            if (data.hasOwnProperty('redshift-db-name')) {
                obj['redshift-db-name'] = ApiClient.convertToType(data['redshift-db-name'], 'String');
            }
            if (data.hasOwnProperty('redshift-host')) {
                obj['redshift-host'] = ApiClient.convertToType(data['redshift-host'], 'String');
            }
            if (data.hasOwnProperty('redshift-password')) {
                obj['redshift-password'] = ApiClient.convertToType(data['redshift-password'], 'String');
            }
            if (data.hasOwnProperty('redshift-port')) {
                obj['redshift-port'] = ApiClient.convertToType(data['redshift-port'], 'String');
            }
            if (data.hasOwnProperty('redshift-username')) {
                obj['redshift-username'] = ApiClient.convertToType(data['redshift-username'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-host')) {
                obj['secure-access-host'] = ApiClient.convertToType(data['secure-access-host'], ['String']);
            }
            if (data.hasOwnProperty('ssl')) {
                obj['ssl'] = ApiClient.convertToType(data['ssl'], 'Boolean');
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

    /**
     * Validates the JSON data with respect to <code>DynamicSecretUpdateRedshift</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DynamicSecretUpdateRedshift</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DynamicSecretUpdateRedshift.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['creation-statements'] && !(typeof data['creation-statements'] === 'string' || data['creation-statements'] instanceof String)) {
            throw new Error("Expected the field `creation-statements` to be a primitive type in the JSON string but got " + data['creation-statements']);
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
        // ensure the json data is a string
        if (data['producer-encryption-key'] && !(typeof data['producer-encryption-key'] === 'string' || data['producer-encryption-key'] instanceof String)) {
            throw new Error("Expected the field `producer-encryption-key` to be a primitive type in the JSON string but got " + data['producer-encryption-key']);
        }
        // ensure the json data is a string
        if (data['redshift-db-name'] && !(typeof data['redshift-db-name'] === 'string' || data['redshift-db-name'] instanceof String)) {
            throw new Error("Expected the field `redshift-db-name` to be a primitive type in the JSON string but got " + data['redshift-db-name']);
        }
        // ensure the json data is a string
        if (data['redshift-host'] && !(typeof data['redshift-host'] === 'string' || data['redshift-host'] instanceof String)) {
            throw new Error("Expected the field `redshift-host` to be a primitive type in the JSON string but got " + data['redshift-host']);
        }
        // ensure the json data is a string
        if (data['redshift-password'] && !(typeof data['redshift-password'] === 'string' || data['redshift-password'] instanceof String)) {
            throw new Error("Expected the field `redshift-password` to be a primitive type in the JSON string but got " + data['redshift-password']);
        }
        // ensure the json data is a string
        if (data['redshift-port'] && !(typeof data['redshift-port'] === 'string' || data['redshift-port'] instanceof String)) {
            throw new Error("Expected the field `redshift-port` to be a primitive type in the JSON string but got " + data['redshift-port']);
        }
        // ensure the json data is a string
        if (data['redshift-username'] && !(typeof data['redshift-username'] === 'string' || data['redshift-username'] instanceof String)) {
            throw new Error("Expected the field `redshift-username` to be a primitive type in the JSON string but got " + data['redshift-username']);
        }
        // ensure the json data is a string
        if (data['secure-access-enable'] && !(typeof data['secure-access-enable'] === 'string' || data['secure-access-enable'] instanceof String)) {
            throw new Error("Expected the field `secure-access-enable` to be a primitive type in the JSON string but got " + data['secure-access-enable']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['secure-access-host'])) {
            throw new Error("Expected the field `secure-access-host` to be an array in the JSON data but got " + data['secure-access-host']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['target-name'] && !(typeof data['target-name'] === 'string' || data['target-name'] instanceof String)) {
            throw new Error("Expected the field `target-name` to be a primitive type in the JSON string but got " + data['target-name']);
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
        if (data['user-ttl'] && !(typeof data['user-ttl'] === 'string' || data['user-ttl'] instanceof String)) {
            throw new Error("Expected the field `user-ttl` to be a primitive type in the JSON string but got " + data['user-ttl']);
        }

        return true;
    }


}

DynamicSecretUpdateRedshift.RequiredProperties = ["name"];

/**
 * Redshift Creation statements
 * @member {String} creation-statements
 */
DynamicSecretUpdateRedshift.prototype['creation-statements'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
DynamicSecretUpdateRedshift.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretUpdateRedshift.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretUpdateRedshift.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretUpdateRedshift.prototype['name'] = undefined;

/**
 * Dynamic secret name
 * @member {String} new-name
 */
DynamicSecretUpdateRedshift.prototype['new-name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
DynamicSecretUpdateRedshift.prototype['password-length'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key
 */
DynamicSecretUpdateRedshift.prototype['producer-encryption-key'] = undefined;

/**
 * Redshift DB Name
 * @member {String} redshift-db-name
 */
DynamicSecretUpdateRedshift.prototype['redshift-db-name'] = undefined;

/**
 * Redshift Host
 * @member {String} redshift-host
 * @default '127.0.0.1'
 */
DynamicSecretUpdateRedshift.prototype['redshift-host'] = '127.0.0.1';

/**
 * Redshift Password
 * @member {String} redshift-password
 */
DynamicSecretUpdateRedshift.prototype['redshift-password'] = undefined;

/**
 * Redshift Port
 * @member {String} redshift-port
 * @default '5439'
 */
DynamicSecretUpdateRedshift.prototype['redshift-port'] = '5439';

/**
 * Redshift Username
 * @member {String} redshift-username
 */
DynamicSecretUpdateRedshift.prototype['redshift-username'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
DynamicSecretUpdateRedshift.prototype['secure-access-enable'] = undefined;

/**
 * Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts)
 * @member {Array.<String>} secure-access-host
 */
DynamicSecretUpdateRedshift.prototype['secure-access-host'] = undefined;

/**
 * Enable/Disable SSL [true/false]
 * @member {Boolean} ssl
 * @default false
 */
DynamicSecretUpdateRedshift.prototype['ssl'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretUpdateRedshift.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretUpdateRedshift.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretUpdateRedshift.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretUpdateRedshift.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
DynamicSecretUpdateRedshift.prototype['user-ttl'] = '60m';






export default DynamicSecretUpdateRedshift;

