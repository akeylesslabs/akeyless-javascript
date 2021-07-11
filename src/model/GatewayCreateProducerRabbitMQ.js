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
 * @version 2.5.2
 */
class GatewayCreateProducerRabbitMQ {
    /**
     * Constructs a new <code>GatewayCreateProducerRabbitMQ</code>.
     * gatewayCreateProducerRabbitMQ is a command that creates rabbitmq producer
     * @alias module:model/GatewayCreateProducerRabbitMQ
     * @param name {String} Producer name
     * @param rabbitmqAdminPwd {String} RabbitMQ Admin password
     * @param rabbitmqAdminUser {String} RabbitMQ Admin User
     * @param rabbitmqServerUri {String} Server URI
     * @param rabbitmqUserConfPermission {String} User configuration permission
     * @param rabbitmqUserReadPermission {String} User read permission
     * @param rabbitmqUserWritePermission {String} User write permission
     */
    constructor(name, rabbitmqAdminPwd, rabbitmqAdminUser, rabbitmqServerUri, rabbitmqUserConfPermission, rabbitmqUserReadPermission, rabbitmqUserWritePermission) { 
        
        GatewayCreateProducerRabbitMQ.initialize(this, name, rabbitmqAdminPwd, rabbitmqAdminUser, rabbitmqServerUri, rabbitmqUserConfPermission, rabbitmqUserReadPermission, rabbitmqUserWritePermission);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, rabbitmqAdminPwd, rabbitmqAdminUser, rabbitmqServerUri, rabbitmqUserConfPermission, rabbitmqUserReadPermission, rabbitmqUserWritePermission) { 
        obj['name'] = name;
        obj['rabbitmq-admin-pwd'] = rabbitmqAdminPwd;
        obj['rabbitmq-admin-user'] = rabbitmqAdminUser;
        obj['rabbitmq-server-uri'] = rabbitmqServerUri;
        obj['rabbitmq-user-conf-permission'] = rabbitmqUserConfPermission;
        obj['rabbitmq-user-read-permission'] = rabbitmqUserReadPermission;
        obj['rabbitmq-user-write-permission'] = rabbitmqUserWritePermission;
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

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
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
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerRabbitMQ.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
GatewayCreateProducerRabbitMQ.prototype['password'] = undefined;

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

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
GatewayCreateProducerRabbitMQ.prototype['username'] = undefined;






export default GatewayCreateProducerRabbitMQ;

