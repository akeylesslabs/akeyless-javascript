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
 * The TargetCreateRabbitMq model module.
 * @module model/TargetCreateRabbitMq
 * @version 4.2.3
 */
class TargetCreateRabbitMq {
    /**
     * Constructs a new <code>TargetCreateRabbitMq</code>.
     * targetCreateRabbitMq is a command that creates a new rabbitmq target
     * @alias module:model/TargetCreateRabbitMq
     * @param name {String} Target name
     */
    constructor(name) { 
        
        TargetCreateRabbitMq.initialize(this, name);
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
     * Constructs a <code>TargetCreateRabbitMq</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetCreateRabbitMq} obj Optional instance to populate.
     * @return {module:model/TargetCreateRabbitMq} The populated <code>TargetCreateRabbitMq</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetCreateRabbitMq();

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


}

/**
 * Description of the object
 * @member {String} description
 */
TargetCreateRabbitMq.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetCreateRabbitMq.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetCreateRabbitMq.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetCreateRabbitMq.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetCreateRabbitMq.prototype['name'] = undefined;

/**
 * @member {String} rabbitmq-server-password
 */
TargetCreateRabbitMq.prototype['rabbitmq-server-password'] = undefined;

/**
 * @member {String} rabbitmq-server-uri
 */
TargetCreateRabbitMq.prototype['rabbitmq-server-uri'] = undefined;

/**
 * @member {String} rabbitmq-server-user
 */
TargetCreateRabbitMq.prototype['rabbitmq-server-user'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetCreateRabbitMq.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetCreateRabbitMq.prototype['uid-token'] = undefined;






export default TargetCreateRabbitMq;

