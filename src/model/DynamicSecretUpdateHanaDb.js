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
 * The DynamicSecretUpdateHanaDb model module.
 * @module model/DynamicSecretUpdateHanaDb
 * @version 5.0.2
 */
class DynamicSecretUpdateHanaDb {
    /**
     * Constructs a new <code>DynamicSecretUpdateHanaDb</code>.
     * dynamicSecretUpdateHanaDb is a command that updates hanadb dynamic secret
     * @alias module:model/DynamicSecretUpdateHanaDb
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        DynamicSecretUpdateHanaDb.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['hanadb-host'] = '127.0.0.1';
        obj['hanadb-port'] = '443';
        obj['json'] = false;
        obj['name'] = name;
        obj['secure-access-web'] = false;
        obj['user-ttl'] = '60m';
    }

    /**
     * Constructs a <code>DynamicSecretUpdateHanaDb</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretUpdateHanaDb} obj Optional instance to populate.
     * @return {module:model/DynamicSecretUpdateHanaDb} The populated <code>DynamicSecretUpdateHanaDb</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretUpdateHanaDb();

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
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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
            if (data.hasOwnProperty('secure-access-certificate-issuer')) {
                obj['secure-access-certificate-issuer'] = ApiClient.convertToType(data['secure-access-certificate-issuer'], 'String');
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

    /**
     * Validates the JSON data with respect to <code>DynamicSecretUpdateHanaDb</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DynamicSecretUpdateHanaDb</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DynamicSecretUpdateHanaDb.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
        if (data['hana-dbname'] && !(typeof data['hana-dbname'] === 'string' || data['hana-dbname'] instanceof String)) {
            throw new Error("Expected the field `hana-dbname` to be a primitive type in the JSON string but got " + data['hana-dbname']);
        }
        // ensure the json data is a string
        if (data['hanadb-create-statements'] && !(typeof data['hanadb-create-statements'] === 'string' || data['hanadb-create-statements'] instanceof String)) {
            throw new Error("Expected the field `hanadb-create-statements` to be a primitive type in the JSON string but got " + data['hanadb-create-statements']);
        }
        // ensure the json data is a string
        if (data['hanadb-host'] && !(typeof data['hanadb-host'] === 'string' || data['hanadb-host'] instanceof String)) {
            throw new Error("Expected the field `hanadb-host` to be a primitive type in the JSON string but got " + data['hanadb-host']);
        }
        // ensure the json data is a string
        if (data['hanadb-password'] && !(typeof data['hanadb-password'] === 'string' || data['hanadb-password'] instanceof String)) {
            throw new Error("Expected the field `hanadb-password` to be a primitive type in the JSON string but got " + data['hanadb-password']);
        }
        // ensure the json data is a string
        if (data['hanadb-port'] && !(typeof data['hanadb-port'] === 'string' || data['hanadb-port'] instanceof String)) {
            throw new Error("Expected the field `hanadb-port` to be a primitive type in the JSON string but got " + data['hanadb-port']);
        }
        // ensure the json data is a string
        if (data['hanadb-revocation-statements'] && !(typeof data['hanadb-revocation-statements'] === 'string' || data['hanadb-revocation-statements'] instanceof String)) {
            throw new Error("Expected the field `hanadb-revocation-statements` to be a primitive type in the JSON string but got " + data['hanadb-revocation-statements']);
        }
        // ensure the json data is a string
        if (data['hanadb-username'] && !(typeof data['hanadb-username'] === 'string' || data['hanadb-username'] instanceof String)) {
            throw new Error("Expected the field `hanadb-username` to be a primitive type in the JSON string but got " + data['hanadb-username']);
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
        if (data['producer-encryption-key-name'] && !(typeof data['producer-encryption-key-name'] === 'string' || data['producer-encryption-key-name'] instanceof String)) {
            throw new Error("Expected the field `producer-encryption-key-name` to be a primitive type in the JSON string but got " + data['producer-encryption-key-name']);
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
        if (data['secure-access-db-schema'] && !(typeof data['secure-access-db-schema'] === 'string' || data['secure-access-db-schema'] instanceof String)) {
            throw new Error("Expected the field `secure-access-db-schema` to be a primitive type in the JSON string but got " + data['secure-access-db-schema']);
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

DynamicSecretUpdateHanaDb.RequiredProperties = ["name"];

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
DynamicSecretUpdateHanaDb.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretUpdateHanaDb.prototype['description'] = undefined;

/**
 * HanaDb Name
 * @member {String} hana-dbname
 */
DynamicSecretUpdateHanaDb.prototype['hana-dbname'] = undefined;

/**
 * HanaDb Creation statements
 * @member {String} hanadb-create-statements
 */
DynamicSecretUpdateHanaDb.prototype['hanadb-create-statements'] = undefined;

/**
 * HanaDb Host
 * @member {String} hanadb-host
 * @default '127.0.0.1'
 */
DynamicSecretUpdateHanaDb.prototype['hanadb-host'] = '127.0.0.1';

/**
 * HanaDb Password
 * @member {String} hanadb-password
 */
DynamicSecretUpdateHanaDb.prototype['hanadb-password'] = undefined;

/**
 * HanaDb Port
 * @member {String} hanadb-port
 * @default '443'
 */
DynamicSecretUpdateHanaDb.prototype['hanadb-port'] = '443';

/**
 * HanaDb Revocation statements
 * @member {String} hanadb-revocation-statements
 */
DynamicSecretUpdateHanaDb.prototype['hanadb-revocation-statements'] = undefined;

/**
 * HanaDb Username
 * @member {String} hanadb-username
 */
DynamicSecretUpdateHanaDb.prototype['hanadb-username'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretUpdateHanaDb.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretUpdateHanaDb.prototype['name'] = undefined;

/**
 * Dynamic secret name
 * @member {String} new-name
 */
DynamicSecretUpdateHanaDb.prototype['new-name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
DynamicSecretUpdateHanaDb.prototype['password-length'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
DynamicSecretUpdateHanaDb.prototype['producer-encryption-key-name'] = undefined;

/**
 * Deprecated. use secure-access-certificate-issuer
 * @member {String} secure-access-bastion-issuer
 */
DynamicSecretUpdateHanaDb.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Secure Access
 * @member {String} secure-access-certificate-issuer
 */
DynamicSecretUpdateHanaDb.prototype['secure-access-certificate-issuer'] = undefined;

/**
 * The DB schema
 * @member {String} secure-access-db-schema
 */
DynamicSecretUpdateHanaDb.prototype['secure-access-db-schema'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
DynamicSecretUpdateHanaDb.prototype['secure-access-enable'] = undefined;

/**
 * Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts)
 * @member {Array.<String>} secure-access-host
 */
DynamicSecretUpdateHanaDb.prototype['secure-access-host'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
DynamicSecretUpdateHanaDb.prototype['secure-access-web'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretUpdateHanaDb.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretUpdateHanaDb.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretUpdateHanaDb.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretUpdateHanaDb.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
DynamicSecretUpdateHanaDb.prototype['user-ttl'] = '60m';






export default DynamicSecretUpdateHanaDb;

