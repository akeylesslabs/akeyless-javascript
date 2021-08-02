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
 * The UpdateRabbitMQTarget model module.
 * @module model/UpdateRabbitMQTarget
 * @version 2.5.4
 */
class UpdateRabbitMQTarget {
    /**
     * Constructs a new <code>UpdateRabbitMQTarget</code>.
     * @alias module:model/UpdateRabbitMQTarget
     * @param name {String} Target name
     */
    constructor(name) { 
        
        UpdateRabbitMQTarget.initialize(this, name);
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
     * Constructs a <code>UpdateRabbitMQTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRabbitMQTarget} obj Optional instance to populate.
     * @return {module:model/UpdateRabbitMQTarget} The populated <code>UpdateRabbitMQTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRabbitMQTarget();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq-server-password')) {
                obj['rabbitmq-server-password'] = ApiClient.convertToType(data['rabbitmq-server-password'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq-server-uri')) {
                obj['rabbitmq-server-uri'] = ApiClient.convertToType(data['rabbitmq-server-uri'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq-server-user')) {
                obj['rabbitmq-server-user'] = ApiClient.convertToType(data['rabbitmq-server-user'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('update-version')) {
                obj['update-version'] = ApiClient.convertToType(data['update-version'], 'Boolean');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Comment about the target
 * @member {String} comment
 */
UpdateRabbitMQTarget.prototype['comment'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateRabbitMQTarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateRabbitMQTarget.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
UpdateRabbitMQTarget.prototype['new-name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
UpdateRabbitMQTarget.prototype['password'] = undefined;

/**
 * @member {String} rabbitmq-server-password
 */
UpdateRabbitMQTarget.prototype['rabbitmq-server-password'] = undefined;

/**
 * @member {String} rabbitmq-server-uri
 */
UpdateRabbitMQTarget.prototype['rabbitmq-server-uri'] = undefined;

/**
 * @member {String} rabbitmq-server-user
 */
UpdateRabbitMQTarget.prototype['rabbitmq-server-user'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateRabbitMQTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateRabbitMQTarget.prototype['uid-token'] = undefined;

/**
 * Create new version for the target
 * @member {Boolean} update-version
 * @default false
 */
UpdateRabbitMQTarget.prototype['update-version'] = false;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
UpdateRabbitMQTarget.prototype['username'] = undefined;






export default UpdateRabbitMQTarget;

