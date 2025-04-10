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
 * The GatewayUpdateProducerPostgreSQL model module.
 * @module model/GatewayUpdateProducerPostgreSQL
 * @version 5.0.2
 */
class GatewayUpdateProducerPostgreSQL {
    /**
     * Constructs a new <code>GatewayUpdateProducerPostgreSQL</code>.
     * gatewayUpdateProducerPostgreSQL is a command that updates postgresql producer [Deprecated: Use dynamic-secret-update-postgresql command]
     * @alias module:model/GatewayUpdateProducerPostgreSQL
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        GatewayUpdateProducerPostgreSQL.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['json'] = false;
        obj['name'] = name;
        obj['postgresql-host'] = '127.0.0.1';
        obj['postgresql-port'] = '5432';
        obj['secure-access-web'] = false;
        obj['ssl'] = false;
        obj['user-ttl'] = '60m';
    }

    /**
     * Constructs a <code>GatewayUpdateProducerPostgreSQL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerPostgreSQL} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerPostgreSQL} The populated <code>GatewayUpdateProducerPostgreSQL</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerPostgreSQL();

            if (data.hasOwnProperty('creation-statements')) {
                obj['creation-statements'] = ApiClient.convertToType(data['creation-statements'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
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
            if (data.hasOwnProperty('postgresql-db-name')) {
                obj['postgresql-db-name'] = ApiClient.convertToType(data['postgresql-db-name'], 'String');
            }
            if (data.hasOwnProperty('postgresql-host')) {
                obj['postgresql-host'] = ApiClient.convertToType(data['postgresql-host'], 'String');
            }
            if (data.hasOwnProperty('postgresql-password')) {
                obj['postgresql-password'] = ApiClient.convertToType(data['postgresql-password'], 'String');
            }
            if (data.hasOwnProperty('postgresql-port')) {
                obj['postgresql-port'] = ApiClient.convertToType(data['postgresql-port'], 'String');
            }
            if (data.hasOwnProperty('postgresql-username')) {
                obj['postgresql-username'] = ApiClient.convertToType(data['postgresql-username'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key')) {
                obj['producer-encryption-key'] = ApiClient.convertToType(data['producer-encryption-key'], 'String');
            }
            if (data.hasOwnProperty('revocation-statement')) {
                obj['revocation-statement'] = ApiClient.convertToType(data['revocation-statement'], 'String');
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
            if (data.hasOwnProperty('secure-access-delay')) {
                obj['secure-access-delay'] = ApiClient.convertToType(data['secure-access-delay'], 'Number');
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
     * Validates the JSON data with respect to <code>GatewayUpdateProducerPostgreSQL</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayUpdateProducerPostgreSQL</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GatewayUpdateProducerPostgreSQL.RequiredProperties) {
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
        if (data['postgresql-db-name'] && !(typeof data['postgresql-db-name'] === 'string' || data['postgresql-db-name'] instanceof String)) {
            throw new Error("Expected the field `postgresql-db-name` to be a primitive type in the JSON string but got " + data['postgresql-db-name']);
        }
        // ensure the json data is a string
        if (data['postgresql-host'] && !(typeof data['postgresql-host'] === 'string' || data['postgresql-host'] instanceof String)) {
            throw new Error("Expected the field `postgresql-host` to be a primitive type in the JSON string but got " + data['postgresql-host']);
        }
        // ensure the json data is a string
        if (data['postgresql-password'] && !(typeof data['postgresql-password'] === 'string' || data['postgresql-password'] instanceof String)) {
            throw new Error("Expected the field `postgresql-password` to be a primitive type in the JSON string but got " + data['postgresql-password']);
        }
        // ensure the json data is a string
        if (data['postgresql-port'] && !(typeof data['postgresql-port'] === 'string' || data['postgresql-port'] instanceof String)) {
            throw new Error("Expected the field `postgresql-port` to be a primitive type in the JSON string but got " + data['postgresql-port']);
        }
        // ensure the json data is a string
        if (data['postgresql-username'] && !(typeof data['postgresql-username'] === 'string' || data['postgresql-username'] instanceof String)) {
            throw new Error("Expected the field `postgresql-username` to be a primitive type in the JSON string but got " + data['postgresql-username']);
        }
        // ensure the json data is a string
        if (data['producer-encryption-key'] && !(typeof data['producer-encryption-key'] === 'string' || data['producer-encryption-key'] instanceof String)) {
            throw new Error("Expected the field `producer-encryption-key` to be a primitive type in the JSON string but got " + data['producer-encryption-key']);
        }
        // ensure the json data is a string
        if (data['revocation-statement'] && !(typeof data['revocation-statement'] === 'string' || data['revocation-statement'] instanceof String)) {
            throw new Error("Expected the field `revocation-statement` to be a primitive type in the JSON string but got " + data['revocation-statement']);
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

GatewayUpdateProducerPostgreSQL.RequiredProperties = ["name"];

/**
 * PostgreSQL Creation statements
 * @member {String} creation-statements
 */
GatewayUpdateProducerPostgreSQL.prototype['creation-statements'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
GatewayUpdateProducerPostgreSQL.prototype['delete_protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateProducerPostgreSQL.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
GatewayUpdateProducerPostgreSQL.prototype['name'] = undefined;

/**
 * Dynamic secret name
 * @member {String} new-name
 */
GatewayUpdateProducerPostgreSQL.prototype['new-name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
GatewayUpdateProducerPostgreSQL.prototype['password-length'] = undefined;

/**
 * PostgreSQL DB Name
 * @member {String} postgresql-db-name
 */
GatewayUpdateProducerPostgreSQL.prototype['postgresql-db-name'] = undefined;

/**
 * PostgreSQL Host
 * @member {String} postgresql-host
 * @default '127.0.0.1'
 */
GatewayUpdateProducerPostgreSQL.prototype['postgresql-host'] = '127.0.0.1';

/**
 * PostgreSQL Password
 * @member {String} postgresql-password
 */
GatewayUpdateProducerPostgreSQL.prototype['postgresql-password'] = undefined;

/**
 * PostgreSQL Port
 * @member {String} postgresql-port
 * @default '5432'
 */
GatewayUpdateProducerPostgreSQL.prototype['postgresql-port'] = '5432';

/**
 * PostgreSQL Username
 * @member {String} postgresql-username
 */
GatewayUpdateProducerPostgreSQL.prototype['postgresql-username'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key
 */
GatewayUpdateProducerPostgreSQL.prototype['producer-encryption-key'] = undefined;

/**
 * PostgreSQL Revocation statements
 * @member {String} revocation-statement
 */
GatewayUpdateProducerPostgreSQL.prototype['revocation-statement'] = undefined;

/**
 * Deprecated. use secure-access-certificate-issuer
 * @member {String} secure-access-bastion-issuer
 */
GatewayUpdateProducerPostgreSQL.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Secure Access
 * @member {String} secure-access-certificate-issuer
 */
GatewayUpdateProducerPostgreSQL.prototype['secure-access-certificate-issuer'] = undefined;

/**
 * The DB schema
 * @member {String} secure-access-db-schema
 */
GatewayUpdateProducerPostgreSQL.prototype['secure-access-db-schema'] = undefined;

/**
 * The delay duration, in seconds, to wait after generating just-in-time credentials. Accepted range: 0-120 seconds
 * @member {Number} secure-access-delay
 */
GatewayUpdateProducerPostgreSQL.prototype['secure-access-delay'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
GatewayUpdateProducerPostgreSQL.prototype['secure-access-enable'] = undefined;

/**
 * Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts)
 * @member {Array.<String>} secure-access-host
 */
GatewayUpdateProducerPostgreSQL.prototype['secure-access-host'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
GatewayUpdateProducerPostgreSQL.prototype['secure-access-web'] = false;

/**
 * Enable/Disable SSL [true/false]
 * @member {Boolean} ssl
 * @default false
 */
GatewayUpdateProducerPostgreSQL.prototype['ssl'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerPostgreSQL.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerPostgreSQL.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerPostgreSQL.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerPostgreSQL.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerPostgreSQL.prototype['user-ttl'] = '60m';






export default GatewayUpdateProducerPostgreSQL;

