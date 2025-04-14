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
 * The GatewayUpdateProducerMySQL model module.
 * @module model/GatewayUpdateProducerMySQL
 * @version 5.0.3
 */
class GatewayUpdateProducerMySQL {
    /**
     * Constructs a new <code>GatewayUpdateProducerMySQL</code>.
     * gatewayUpdateProducerMySQL is a command that updates mysql producer [Deprecated: Use dynamic-secret-update-mysql command]
     * @alias module:model/GatewayUpdateProducerMySQL
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        GatewayUpdateProducerMySQL.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['json'] = false;
        obj['mysql-host'] = '127.0.0.1';
        obj['mysql-port'] = '3306';
        obj['name'] = name;
        obj['secure-access-web'] = false;
        obj['ssl'] = false;
        obj['user-ttl'] = '60m';
    }

    /**
     * Constructs a <code>GatewayUpdateProducerMySQL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerMySQL} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerMySQL} The populated <code>GatewayUpdateProducerMySQL</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerMySQL();

            if (data.hasOwnProperty('db-server-certificates')) {
                obj['db-server-certificates'] = ApiClient.convertToType(data['db-server-certificates'], 'String');
            }
            if (data.hasOwnProperty('db-server-name')) {
                obj['db-server-name'] = ApiClient.convertToType(data['db-server-name'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('mysql-dbname')) {
                obj['mysql-dbname'] = ApiClient.convertToType(data['mysql-dbname'], 'String');
            }
            if (data.hasOwnProperty('mysql-host')) {
                obj['mysql-host'] = ApiClient.convertToType(data['mysql-host'], 'String');
            }
            if (data.hasOwnProperty('mysql-password')) {
                obj['mysql-password'] = ApiClient.convertToType(data['mysql-password'], 'String');
            }
            if (data.hasOwnProperty('mysql-port')) {
                obj['mysql-port'] = ApiClient.convertToType(data['mysql-port'], 'String');
            }
            if (data.hasOwnProperty('mysql-revocation-statements')) {
                obj['mysql-revocation-statements'] = ApiClient.convertToType(data['mysql-revocation-statements'], 'String');
            }
            if (data.hasOwnProperty('mysql-screation-statements')) {
                obj['mysql-screation-statements'] = ApiClient.convertToType(data['mysql-screation-statements'], 'String');
            }
            if (data.hasOwnProperty('mysql-username')) {
                obj['mysql-username'] = ApiClient.convertToType(data['mysql-username'], 'String');
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
            if (data.hasOwnProperty('ssl-certificate')) {
                obj['ssl-certificate'] = ApiClient.convertToType(data['ssl-certificate'], 'String');
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
     * Validates the JSON data with respect to <code>GatewayUpdateProducerMySQL</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayUpdateProducerMySQL</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GatewayUpdateProducerMySQL.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['mysql-dbname'] && !(typeof data['mysql-dbname'] === 'string' || data['mysql-dbname'] instanceof String)) {
            throw new Error("Expected the field `mysql-dbname` to be a primitive type in the JSON string but got " + data['mysql-dbname']);
        }
        // ensure the json data is a string
        if (data['mysql-host'] && !(typeof data['mysql-host'] === 'string' || data['mysql-host'] instanceof String)) {
            throw new Error("Expected the field `mysql-host` to be a primitive type in the JSON string but got " + data['mysql-host']);
        }
        // ensure the json data is a string
        if (data['mysql-password'] && !(typeof data['mysql-password'] === 'string' || data['mysql-password'] instanceof String)) {
            throw new Error("Expected the field `mysql-password` to be a primitive type in the JSON string but got " + data['mysql-password']);
        }
        // ensure the json data is a string
        if (data['mysql-port'] && !(typeof data['mysql-port'] === 'string' || data['mysql-port'] instanceof String)) {
            throw new Error("Expected the field `mysql-port` to be a primitive type in the JSON string but got " + data['mysql-port']);
        }
        // ensure the json data is a string
        if (data['mysql-revocation-statements'] && !(typeof data['mysql-revocation-statements'] === 'string' || data['mysql-revocation-statements'] instanceof String)) {
            throw new Error("Expected the field `mysql-revocation-statements` to be a primitive type in the JSON string but got " + data['mysql-revocation-statements']);
        }
        // ensure the json data is a string
        if (data['mysql-screation-statements'] && !(typeof data['mysql-screation-statements'] === 'string' || data['mysql-screation-statements'] instanceof String)) {
            throw new Error("Expected the field `mysql-screation-statements` to be a primitive type in the JSON string but got " + data['mysql-screation-statements']);
        }
        // ensure the json data is a string
        if (data['mysql-username'] && !(typeof data['mysql-username'] === 'string' || data['mysql-username'] instanceof String)) {
            throw new Error("Expected the field `mysql-username` to be a primitive type in the JSON string but got " + data['mysql-username']);
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
        if (data['secure-access-enable'] && !(typeof data['secure-access-enable'] === 'string' || data['secure-access-enable'] instanceof String)) {
            throw new Error("Expected the field `secure-access-enable` to be a primitive type in the JSON string but got " + data['secure-access-enable']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['secure-access-host'])) {
            throw new Error("Expected the field `secure-access-host` to be an array in the JSON data but got " + data['secure-access-host']);
        }
        // ensure the json data is a string
        if (data['ssl-certificate'] && !(typeof data['ssl-certificate'] === 'string' || data['ssl-certificate'] instanceof String)) {
            throw new Error("Expected the field `ssl-certificate` to be a primitive type in the JSON string but got " + data['ssl-certificate']);
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

GatewayUpdateProducerMySQL.RequiredProperties = ["name"];

/**
 * (Optional) DB server certificates
 * @member {String} db-server-certificates
 */
GatewayUpdateProducerMySQL.prototype['db-server-certificates'] = undefined;

/**
 * (Optional) Server name for certificate verification
 * @member {String} db-server-name
 */
GatewayUpdateProducerMySQL.prototype['db-server-name'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
GatewayUpdateProducerMySQL.prototype['delete_protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateProducerMySQL.prototype['json'] = false;

/**
 * MySQL DB Name
 * @member {String} mysql-dbname
 */
GatewayUpdateProducerMySQL.prototype['mysql-dbname'] = undefined;

/**
 * MySQL Host
 * @member {String} mysql-host
 * @default '127.0.0.1'
 */
GatewayUpdateProducerMySQL.prototype['mysql-host'] = '127.0.0.1';

/**
 * MySQL Password
 * @member {String} mysql-password
 */
GatewayUpdateProducerMySQL.prototype['mysql-password'] = undefined;

/**
 * MySQL Port
 * @member {String} mysql-port
 * @default '3306'
 */
GatewayUpdateProducerMySQL.prototype['mysql-port'] = '3306';

/**
 * MySQL Revocation statements
 * @member {String} mysql-revocation-statements
 */
GatewayUpdateProducerMySQL.prototype['mysql-revocation-statements'] = undefined;

/**
 * MySQL Creation statements
 * @member {String} mysql-screation-statements
 */
GatewayUpdateProducerMySQL.prototype['mysql-screation-statements'] = undefined;

/**
 * MySQL Username
 * @member {String} mysql-username
 */
GatewayUpdateProducerMySQL.prototype['mysql-username'] = undefined;

/**
 * Dynamic secret name
 * @member {String} name
 */
GatewayUpdateProducerMySQL.prototype['name'] = undefined;

/**
 * Dynamic secret name
 * @member {String} new-name
 */
GatewayUpdateProducerMySQL.prototype['new-name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
GatewayUpdateProducerMySQL.prototype['password-length'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayUpdateProducerMySQL.prototype['producer-encryption-key-name'] = undefined;

/**
 * Deprecated. use secure-access-certificate-issuer
 * @member {String} secure-access-bastion-issuer
 */
GatewayUpdateProducerMySQL.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Secure Access
 * @member {String} secure-access-certificate-issuer
 */
GatewayUpdateProducerMySQL.prototype['secure-access-certificate-issuer'] = undefined;

/**
 * The delay duration, in seconds, to wait after generating just-in-time credentials. Accepted range: 0-120 seconds
 * @member {Number} secure-access-delay
 */
GatewayUpdateProducerMySQL.prototype['secure-access-delay'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
GatewayUpdateProducerMySQL.prototype['secure-access-enable'] = undefined;

/**
 * Target DB servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts)
 * @member {Array.<String>} secure-access-host
 */
GatewayUpdateProducerMySQL.prototype['secure-access-host'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
GatewayUpdateProducerMySQL.prototype['secure-access-web'] = false;

/**
 * Enable/Disable SSL [true/false]
 * @member {Boolean} ssl
 * @default false
 */
GatewayUpdateProducerMySQL.prototype['ssl'] = false;

/**
 * SSL connection certificate
 * @member {String} ssl-certificate
 */
GatewayUpdateProducerMySQL.prototype['ssl-certificate'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerMySQL.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerMySQL.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerMySQL.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerMySQL.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerMySQL.prototype['user-ttl'] = '60m';






export default GatewayUpdateProducerMySQL;

