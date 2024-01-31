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
 * The GatewayCreateProducerRabbitMQ model module.
 * @module model/GatewayCreateProducerRabbitMQ
 * @version 3.6.1
 */
class GatewayCreateProducerRabbitMQ {
    /**
     * Constructs a new <code>GatewayCreateProducerRabbitMQ</code>.
     * gatewayCreateProducerRabbitMQ is a command that creates rabbitmq producer
     * @alias module:model/GatewayCreateProducerRabbitMQ
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayCreateProducerRabbitMQ.initialize(this, name);
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
     * Constructs a <code>GatewayCreateProducerRabbitMQ</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerRabbitMQ} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerRabbitMQ} The populated <code>GatewayCreateProducerRabbitMQ</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerRabbitMQ();

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
            if (data.hasOwnProperty('rabbitmq-admin-pwd')) {
                obj['rabbitmq-admin-pwd'] = ApiClient.convertToType(data['rabbitmq-admin-pwd'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq-admin-user')) {
                obj['rabbitmq-admin-user'] = ApiClient.convertToType(data['rabbitmq-admin-user'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq-server-uri')) {
                obj['rabbitmq-server-uri'] = ApiClient.convertToType(data['rabbitmq-server-uri'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq-user-conf-permission')) {
                obj['rabbitmq-user-conf-permission'] = ApiClient.convertToType(data['rabbitmq-user-conf-permission'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq-user-read-permission')) {
                obj['rabbitmq-user-read-permission'] = ApiClient.convertToType(data['rabbitmq-user-read-permission'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq-user-tags')) {
                obj['rabbitmq-user-tags'] = ApiClient.convertToType(data['rabbitmq-user-tags'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq-user-vhost')) {
                obj['rabbitmq-user-vhost'] = ApiClient.convertToType(data['rabbitmq-user-vhost'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq-user-write-permission')) {
                obj['rabbitmq-user-write-permission'] = ApiClient.convertToType(data['rabbitmq-user-write-permission'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-url')) {
                obj['secure-access-url'] = ApiClient.convertToType(data['secure-access-url'], 'String');
            }
            if (data.hasOwnProperty('secure-access-web')) {
                obj['secure-access-web'] = ApiClient.convertToType(data['secure-access-web'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-browsing')) {
                obj['secure-access-web-browsing'] = ApiClient.convertToType(data['secure-access-web-browsing'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-proxy')) {
                obj['secure-access-web-proxy'] = ApiClient.convertToType(data['secure-access-web-proxy'], 'Boolean');
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
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
GatewayCreateProducerRabbitMQ.prototype['delete_protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayCreateProducerRabbitMQ.prototype['json'] = false;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerRabbitMQ.prototype['name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerRabbitMQ.prototype['producer-encryption-key-name'] = undefined;

/**
 * RabbitMQ Admin password
 * @member {String} rabbitmq-admin-pwd
 */
GatewayCreateProducerRabbitMQ.prototype['rabbitmq-admin-pwd'] = undefined;

/**
 * RabbitMQ Admin User
 * @member {String} rabbitmq-admin-user
 */
GatewayCreateProducerRabbitMQ.prototype['rabbitmq-admin-user'] = undefined;

/**
 * Server URI
 * @member {String} rabbitmq-server-uri
 */
GatewayCreateProducerRabbitMQ.prototype['rabbitmq-server-uri'] = undefined;

/**
 * User configuration permission
 * @member {String} rabbitmq-user-conf-permission
 */
GatewayCreateProducerRabbitMQ.prototype['rabbitmq-user-conf-permission'] = undefined;

/**
 * User read permission
 * @member {String} rabbitmq-user-read-permission
 */
GatewayCreateProducerRabbitMQ.prototype['rabbitmq-user-read-permission'] = undefined;

/**
 * User Tags
 * @member {String} rabbitmq-user-tags
 */
GatewayCreateProducerRabbitMQ.prototype['rabbitmq-user-tags'] = undefined;

/**
 * User Virtual Host
 * @member {String} rabbitmq-user-vhost
 */
GatewayCreateProducerRabbitMQ.prototype['rabbitmq-user-vhost'] = undefined;

/**
 * User write permission
 * @member {String} rabbitmq-user-write-permission
 */
GatewayCreateProducerRabbitMQ.prototype['rabbitmq-user-write-permission'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
GatewayCreateProducerRabbitMQ.prototype['secure-access-enable'] = undefined;

/**
 * Destination URL to inject secrets
 * @member {String} secure-access-url
 */
GatewayCreateProducerRabbitMQ.prototype['secure-access-url'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default true
 */
GatewayCreateProducerRabbitMQ.prototype['secure-access-web'] = true;

/**
 * Secure browser via Akeyless Web Access Bastion
 * @member {Boolean} secure-access-web-browsing
 * @default false
 */
GatewayCreateProducerRabbitMQ.prototype['secure-access-web-browsing'] = false;

/**
 * Web-Proxy via Akeyless Web Access Bastion
 * @member {Boolean} secure-access-web-proxy
 * @default false
 */
GatewayCreateProducerRabbitMQ.prototype['secure-access-web-proxy'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayCreateProducerRabbitMQ.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayCreateProducerRabbitMQ.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerRabbitMQ.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerRabbitMQ.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerRabbitMQ.prototype['user-ttl'] = '60m';






export default GatewayCreateProducerRabbitMQ;

