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
 * The GatewayUpdateProducerRabbitMQ model module.
 * @module model/GatewayUpdateProducerRabbitMQ
 * @version 4.3.0
 */
class GatewayUpdateProducerRabbitMQ {
    /**
     * Constructs a new <code>GatewayUpdateProducerRabbitMQ</code>.
     * gatewayUpdateProducerRabbitMQ is a command that updates rabbitmq producer [Deprecated: Use dynamic-secret-update-rabbitmq command]
     * @alias module:model/GatewayUpdateProducerRabbitMQ
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        GatewayUpdateProducerRabbitMQ.initialize(this, name);
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
     * Constructs a <code>GatewayUpdateProducerRabbitMQ</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerRabbitMQ} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerRabbitMQ} The populated <code>GatewayUpdateProducerRabbitMQ</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerRabbitMQ();

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
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
GatewayUpdateProducerRabbitMQ.prototype['delete_protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateProducerRabbitMQ.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
GatewayUpdateProducerRabbitMQ.prototype['name'] = undefined;

/**
 * Dynamic secret name
 * @member {String} new-name
 */
GatewayUpdateProducerRabbitMQ.prototype['new-name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
GatewayUpdateProducerRabbitMQ.prototype['password-length'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayUpdateProducerRabbitMQ.prototype['producer-encryption-key-name'] = undefined;

/**
 * RabbitMQ Admin password
 * @member {String} rabbitmq-admin-pwd
 */
GatewayUpdateProducerRabbitMQ.prototype['rabbitmq-admin-pwd'] = undefined;

/**
 * RabbitMQ Admin User
 * @member {String} rabbitmq-admin-user
 */
GatewayUpdateProducerRabbitMQ.prototype['rabbitmq-admin-user'] = undefined;

/**
 * Server URI
 * @member {String} rabbitmq-server-uri
 */
GatewayUpdateProducerRabbitMQ.prototype['rabbitmq-server-uri'] = undefined;

/**
 * User configuration permission
 * @member {String} rabbitmq-user-conf-permission
 */
GatewayUpdateProducerRabbitMQ.prototype['rabbitmq-user-conf-permission'] = undefined;

/**
 * User read permission
 * @member {String} rabbitmq-user-read-permission
 */
GatewayUpdateProducerRabbitMQ.prototype['rabbitmq-user-read-permission'] = undefined;

/**
 * User Tags
 * @member {String} rabbitmq-user-tags
 */
GatewayUpdateProducerRabbitMQ.prototype['rabbitmq-user-tags'] = undefined;

/**
 * User Virtual Host
 * @member {String} rabbitmq-user-vhost
 */
GatewayUpdateProducerRabbitMQ.prototype['rabbitmq-user-vhost'] = undefined;

/**
 * User write permission
 * @member {String} rabbitmq-user-write-permission
 */
GatewayUpdateProducerRabbitMQ.prototype['rabbitmq-user-write-permission'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
GatewayUpdateProducerRabbitMQ.prototype['secure-access-enable'] = undefined;

/**
 * Destination URL to inject secrets
 * @member {String} secure-access-url
 */
GatewayUpdateProducerRabbitMQ.prototype['secure-access-url'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default true
 */
GatewayUpdateProducerRabbitMQ.prototype['secure-access-web'] = true;

/**
 * Secure browser via Akeyless Web Access Bastion
 * @member {Boolean} secure-access-web-browsing
 * @default false
 */
GatewayUpdateProducerRabbitMQ.prototype['secure-access-web-browsing'] = false;

/**
 * Web-Proxy via Akeyless Web Access Bastion
 * @member {Boolean} secure-access-web-proxy
 * @default false
 */
GatewayUpdateProducerRabbitMQ.prototype['secure-access-web-proxy'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerRabbitMQ.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerRabbitMQ.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerRabbitMQ.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerRabbitMQ.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerRabbitMQ.prototype['user-ttl'] = '60m';






export default GatewayUpdateProducerRabbitMQ;

