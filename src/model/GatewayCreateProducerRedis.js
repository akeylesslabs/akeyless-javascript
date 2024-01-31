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
 * The GatewayCreateProducerRedis model module.
 * @module model/GatewayCreateProducerRedis
 * @version 3.6.0
 */
class GatewayCreateProducerRedis {
    /**
     * Constructs a new <code>GatewayCreateProducerRedis</code>.
     * gatewayCreateProducerRedis is a command that creates Redis producer
     * @alias module:model/GatewayCreateProducerRedis
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayCreateProducerRedis.initialize(this, name);
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
     * Constructs a <code>GatewayCreateProducerRedis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerRedis} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerRedis} The populated <code>GatewayCreateProducerRedis</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerRedis();

            if (data.hasOwnProperty('acl-rules')) {
                obj['acl-rules'] = ApiClient.convertToType(data['acl-rules'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'String');
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
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A JSON array list of redis ACL rules to attach to the created user. For available rules see the ACL CAT command https://redis.io/commands/acl-cat By default the user will have permissions to read all keys '[\"~*\", \"+@read\"]'
 * @member {String} acl-rules
 */
GatewayCreateProducerRedis.prototype['acl-rules'] = undefined;

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
GatewayCreateProducerRedis.prototype['delete_protection'] = undefined;

/**
 * Redis Host
 * @member {String} host
 * @default '127.0.0.1'
 */
GatewayCreateProducerRedis.prototype['host'] = '127.0.0.1';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayCreateProducerRedis.prototype['json'] = false;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerRedis.prototype['name'] = undefined;

/**
 * Redis Password
 * @member {String} password
 */
GatewayCreateProducerRedis.prototype['password'] = undefined;

/**
 * Redis Port
 * @member {String} port
 * @default '6379'
 */
GatewayCreateProducerRedis.prototype['port'] = '6379';

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerRedis.prototype['producer-encryption-key-name'] = undefined;

/**
 * Enable/Disable SSL [true/false]
 * @member {Boolean} ssl
 * @default false
 */
GatewayCreateProducerRedis.prototype['ssl'] = false;

/**
 * SSL CA certificate in base64 encoding generated from a trusted Certificate Authority (CA)
 * @member {String} ssl-certificate
 */
GatewayCreateProducerRedis.prototype['ssl-certificate'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayCreateProducerRedis.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayCreateProducerRedis.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerRedis.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerRedis.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerRedis.prototype['user-ttl'] = '60m';

/**
 * Redis Username
 * @member {String} username
 */
GatewayCreateProducerRedis.prototype['username'] = undefined;






export default GatewayCreateProducerRedis;

