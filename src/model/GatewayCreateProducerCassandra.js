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
 * The GatewayCreateProducerCassandra model module.
 * @module model/GatewayCreateProducerCassandra
 * @version 5.0.0
 */
class GatewayCreateProducerCassandra {
    /**
     * Constructs a new <code>GatewayCreateProducerCassandra</code>.
     * gatewayCreateProducerCassandra is a command that creates a Cassandra producer [Deprecated: Use dynamic-secret-create-cassandra command]
     * @alias module:model/GatewayCreateProducerCassandra
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        GatewayCreateProducerCassandra.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['cassandra-port'] = '9042';
        obj['json'] = false;
        obj['name'] = name;
        obj['ssl'] = false;
        obj['user-ttl'] = '60m';
    }

    /**
     * Constructs a <code>GatewayCreateProducerCassandra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerCassandra} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerCassandra} The populated <code>GatewayCreateProducerCassandra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerCassandra();

            if (data.hasOwnProperty('cassandra-creation-statements')) {
                obj['cassandra-creation-statements'] = ApiClient.convertToType(data['cassandra-creation-statements'], 'String');
            }
            if (data.hasOwnProperty('cassandra-hosts')) {
                obj['cassandra-hosts'] = ApiClient.convertToType(data['cassandra-hosts'], 'String');
            }
            if (data.hasOwnProperty('cassandra-password')) {
                obj['cassandra-password'] = ApiClient.convertToType(data['cassandra-password'], 'String');
            }
            if (data.hasOwnProperty('cassandra-port')) {
                obj['cassandra-port'] = ApiClient.convertToType(data['cassandra-port'], 'String');
            }
            if (data.hasOwnProperty('cassandra-username')) {
                obj['cassandra-username'] = ApiClient.convertToType(data['cassandra-username'], 'String');
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
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
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
     * Validates the JSON data with respect to <code>GatewayCreateProducerCassandra</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayCreateProducerCassandra</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GatewayCreateProducerCassandra.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['cassandra-creation-statements'] && !(typeof data['cassandra-creation-statements'] === 'string' || data['cassandra-creation-statements'] instanceof String)) {
            throw new Error("Expected the field `cassandra-creation-statements` to be a primitive type in the JSON string but got " + data['cassandra-creation-statements']);
        }
        // ensure the json data is a string
        if (data['cassandra-hosts'] && !(typeof data['cassandra-hosts'] === 'string' || data['cassandra-hosts'] instanceof String)) {
            throw new Error("Expected the field `cassandra-hosts` to be a primitive type in the JSON string but got " + data['cassandra-hosts']);
        }
        // ensure the json data is a string
        if (data['cassandra-password'] && !(typeof data['cassandra-password'] === 'string' || data['cassandra-password'] instanceof String)) {
            throw new Error("Expected the field `cassandra-password` to be a primitive type in the JSON string but got " + data['cassandra-password']);
        }
        // ensure the json data is a string
        if (data['cassandra-port'] && !(typeof data['cassandra-port'] === 'string' || data['cassandra-port'] instanceof String)) {
            throw new Error("Expected the field `cassandra-port` to be a primitive type in the JSON string but got " + data['cassandra-port']);
        }
        // ensure the json data is a string
        if (data['cassandra-username'] && !(typeof data['cassandra-username'] === 'string' || data['cassandra-username'] instanceof String)) {
            throw new Error("Expected the field `cassandra-username` to be a primitive type in the JSON string but got " + data['cassandra-username']);
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
        if (data['password-length'] && !(typeof data['password-length'] === 'string' || data['password-length'] instanceof String)) {
            throw new Error("Expected the field `password-length` to be a primitive type in the JSON string but got " + data['password-length']);
        }
        // ensure the json data is a string
        if (data['producer-encryption-key-name'] && !(typeof data['producer-encryption-key-name'] === 'string' || data['producer-encryption-key-name'] instanceof String)) {
            throw new Error("Expected the field `producer-encryption-key-name` to be a primitive type in the JSON string but got " + data['producer-encryption-key-name']);
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

GatewayCreateProducerCassandra.RequiredProperties = ["name"];

/**
 * Cassandra creation statements
 * @member {String} cassandra-creation-statements
 */
GatewayCreateProducerCassandra.prototype['cassandra-creation-statements'] = undefined;

/**
 * Cassandra hosts IP or addresses, comma separated
 * @member {String} cassandra-hosts
 */
GatewayCreateProducerCassandra.prototype['cassandra-hosts'] = undefined;

/**
 * Cassandra superuser password
 * @member {String} cassandra-password
 */
GatewayCreateProducerCassandra.prototype['cassandra-password'] = undefined;

/**
 * Cassandra port
 * @member {String} cassandra-port
 * @default '9042'
 */
GatewayCreateProducerCassandra.prototype['cassandra-port'] = '9042';

/**
 * Cassandra superuser username
 * @member {String} cassandra-username
 */
GatewayCreateProducerCassandra.prototype['cassandra-username'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
GatewayCreateProducerCassandra.prototype['delete_protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayCreateProducerCassandra.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
GatewayCreateProducerCassandra.prototype['name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
GatewayCreateProducerCassandra.prototype['password-length'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerCassandra.prototype['producer-encryption-key-name'] = undefined;

/**
 * Enable/Disable SSL [true/false]
 * @member {Boolean} ssl
 * @default false
 */
GatewayCreateProducerCassandra.prototype['ssl'] = false;

/**
 * SSL CA certificate in base64 encoding generated from a trusted Certificate Authority (CA)
 * @member {String} ssl-certificate
 */
GatewayCreateProducerCassandra.prototype['ssl-certificate'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayCreateProducerCassandra.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayCreateProducerCassandra.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerCassandra.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerCassandra.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerCassandra.prototype['user-ttl'] = '60m';






export default GatewayCreateProducerCassandra;

