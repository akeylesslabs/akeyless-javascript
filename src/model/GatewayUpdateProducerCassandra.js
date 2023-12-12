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
 * The GatewayUpdateProducerCassandra model module.
 * @module model/GatewayUpdateProducerCassandra
 * @version 3.5.2
 */
class GatewayUpdateProducerCassandra {
    /**
     * Constructs a new <code>GatewayUpdateProducerCassandra</code>.
     * gatewayUpdateProducerCassandra is a command that updates a Cassandra producer
     * @alias module:model/GatewayUpdateProducerCassandra
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayUpdateProducerCassandra.initialize(this, name);
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
     * Constructs a <code>GatewayUpdateProducerCassandra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerCassandra} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerCassandra} The populated <code>GatewayUpdateProducerCassandra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerCassandra();

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
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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
GatewayUpdateProducerCassandra.prototype['cassandra-creation-statements'] = undefined;

/**
 * Cassandra hosts IP or addresses, comma separated
 * @member {String} cassandra-hosts
 */
GatewayUpdateProducerCassandra.prototype['cassandra-hosts'] = undefined;

/**
 * Cassandra superuser password
 * @member {String} cassandra-password
 */
GatewayUpdateProducerCassandra.prototype['cassandra-password'] = undefined;

/**
 * Cassandra port
 * @member {String} cassandra-port
 * @default '9042'
 */
GatewayUpdateProducerCassandra.prototype['cassandra-port'] = '9042';

/**
 * Cassandra superuser username
 * @member {String} cassandra-username
 */
GatewayUpdateProducerCassandra.prototype['cassandra-username'] = undefined;

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
GatewayUpdateProducerCassandra.prototype['delete_protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateProducerCassandra.prototype['json'] = false;

/**
 * Producer name
 * @member {String} name
 */
GatewayUpdateProducerCassandra.prototype['name'] = undefined;

/**
 * Producer name
 * @member {String} new-name
 */
GatewayUpdateProducerCassandra.prototype['new-name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayUpdateProducerCassandra.prototype['producer-encryption-key-name'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerCassandra.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerCassandra.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerCassandra.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerCassandra.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerCassandra.prototype['user-ttl'] = '60m';






export default GatewayUpdateProducerCassandra;

