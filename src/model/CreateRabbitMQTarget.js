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
 * The CreateRabbitMQTarget model module.
 * @module model/CreateRabbitMQTarget
 * @version 2.16.12
 */
class CreateRabbitMQTarget {
    /**
     * Constructs a new <code>CreateRabbitMQTarget</code>.
     * @alias module:model/CreateRabbitMQTarget
     * @param name {String} Target name
     */
    constructor(name) { 
        
        CreateRabbitMQTarget.initialize(this, name);
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
     * Constructs a <code>CreateRabbitMQTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRabbitMQTarget} obj Optional instance to populate.
     * @return {module:model/CreateRabbitMQTarget} The populated <code>CreateRabbitMQTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRabbitMQTarget();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
        }
        return obj;
    }


}

/**
 * Comment about the target
 * @member {String} comment
 */
CreateRabbitMQTarget.prototype['comment'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateRabbitMQTarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
CreateRabbitMQTarget.prototype['name'] = undefined;

/**
 * @member {String} rabbitmq-server-password
 */
CreateRabbitMQTarget.prototype['rabbitmq-server-password'] = undefined;

/**
 * @member {String} rabbitmq-server-uri
 */
CreateRabbitMQTarget.prototype['rabbitmq-server-uri'] = undefined;

/**
 * @member {String} rabbitmq-server-user
 */
CreateRabbitMQTarget.prototype['rabbitmq-server-user'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateRabbitMQTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateRabbitMQTarget.prototype['uid-token'] = undefined;






export default CreateRabbitMQTarget;

