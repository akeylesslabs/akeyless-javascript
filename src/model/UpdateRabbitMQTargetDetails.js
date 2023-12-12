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
 * The UpdateRabbitMQTargetDetails model module.
 * @module model/UpdateRabbitMQTargetDetails
 * @version 3.5.3
 */
class UpdateRabbitMQTargetDetails {
    /**
     * Constructs a new <code>UpdateRabbitMQTargetDetails</code>.
     * @alias module:model/UpdateRabbitMQTargetDetails
     * @param name {String} Target name
     */
    constructor(name) { 
        
        UpdateRabbitMQTargetDetails.initialize(this, name);
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
     * Constructs a <code>UpdateRabbitMQTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRabbitMQTargetDetails} obj Optional instance to populate.
     * @return {module:model/UpdateRabbitMQTargetDetails} The populated <code>UpdateRabbitMQTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRabbitMQTargetDetails();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('keep-prev-version')) {
                obj['keep-prev-version'] = ApiClient.convertToType(data['keep-prev-version'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-version')) {
                obj['new-version'] = ApiClient.convertToType(data['new-version'], 'Boolean');
            }
            if (data.hasOwnProperty('protection_key')) {
                obj['protection_key'] = ApiClient.convertToType(data['protection_key'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq_server_password')) {
                obj['rabbitmq_server_password'] = ApiClient.convertToType(data['rabbitmq_server_password'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq_server_uri')) {
                obj['rabbitmq_server_uri'] = ApiClient.convertToType(data['rabbitmq_server_uri'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq_server_user')) {
                obj['rabbitmq_server_user'] = ApiClient.convertToType(data['rabbitmq_server_user'], 'String');
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
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateRabbitMQTargetDetails.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
UpdateRabbitMQTargetDetails.prototype['keep-prev-version'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateRabbitMQTargetDetails.prototype['name'] = undefined;

/**
 * Deprecated
 * @member {Boolean} new-version
 */
UpdateRabbitMQTargetDetails.prototype['new-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} protection_key
 */
UpdateRabbitMQTargetDetails.prototype['protection_key'] = undefined;

/**
 * @member {String} rabbitmq_server_password
 */
UpdateRabbitMQTargetDetails.prototype['rabbitmq_server_password'] = undefined;

/**
 * @member {String} rabbitmq_server_uri
 */
UpdateRabbitMQTargetDetails.prototype['rabbitmq_server_uri'] = undefined;

/**
 * @member {String} rabbitmq_server_user
 */
UpdateRabbitMQTargetDetails.prototype['rabbitmq_server_user'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateRabbitMQTargetDetails.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateRabbitMQTargetDetails.prototype['uid-token'] = undefined;






export default UpdateRabbitMQTargetDetails;

