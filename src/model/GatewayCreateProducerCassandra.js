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
 * The GatewayCreateProducerCassandra model module.
 * @module model/GatewayCreateProducerCassandra
 * @version 3.2.3
 */
class GatewayCreateProducerCassandra {
    /**
     * Constructs a new <code>GatewayCreateProducerCassandra</code>.
     * gatewayCreateProducerCassandra is a command that creates a Cassandra producer
     * @alias module:model/GatewayCreateProducerCassandra
     * @param name {String} Producer name
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
        obj['name'] = name;
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
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
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


}

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
 * Protection from accidental deletion of this item
 * @member {String} delete_protection
 */
GatewayCreateProducerCassandra.prototype['delete_protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
GatewayCreateProducerCassandra.prototype['json'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerCassandra.prototype['name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerCassandra.prototype['producer-encryption-key-name'] = undefined;

/**
 * List of the tags attached to this secret
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

