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
 * The CreateRabbitMQTarget model module.
 * @module model/CreateRabbitMQTarget
 * @version 5.0.3
 */
class CreateRabbitMQTarget {
    /**
     * Constructs a new <code>CreateRabbitMQTarget</code>.
     * createRabbitMQTarget is a command that creates a new target. [Deprecated: Use target-create-rabbitmq command]
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
        obj['json'] = false;
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
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
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

    /**
     * Validates the JSON data with respect to <code>CreateRabbitMQTarget</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateRabbitMQTarget</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateRabbitMQTarget.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['max-versions'] && !(typeof data['max-versions'] === 'string' || data['max-versions'] instanceof String)) {
            throw new Error("Expected the field `max-versions` to be a primitive type in the JSON string but got " + data['max-versions']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['rabbitmq-server-password'] && !(typeof data['rabbitmq-server-password'] === 'string' || data['rabbitmq-server-password'] instanceof String)) {
            throw new Error("Expected the field `rabbitmq-server-password` to be a primitive type in the JSON string but got " + data['rabbitmq-server-password']);
        }
        // ensure the json data is a string
        if (data['rabbitmq-server-uri'] && !(typeof data['rabbitmq-server-uri'] === 'string' || data['rabbitmq-server-uri'] instanceof String)) {
            throw new Error("Expected the field `rabbitmq-server-uri` to be a primitive type in the JSON string but got " + data['rabbitmq-server-uri']);
        }
        // ensure the json data is a string
        if (data['rabbitmq-server-user'] && !(typeof data['rabbitmq-server-user'] === 'string' || data['rabbitmq-server-user'] instanceof String)) {
            throw new Error("Expected the field `rabbitmq-server-user` to be a primitive type in the JSON string but got " + data['rabbitmq-server-user']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

CreateRabbitMQTarget.RequiredProperties = ["name"];

/**
 * Deprecated - use description
 * @member {String} comment
 */
CreateRabbitMQTarget.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateRabbitMQTarget.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateRabbitMQTarget.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateRabbitMQTarget.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
CreateRabbitMQTarget.prototype['max-versions'] = undefined;

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

