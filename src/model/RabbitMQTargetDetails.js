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
 * The RabbitMQTargetDetails model module.
 * @module model/RabbitMQTargetDetails
 * @version 3.4.0
 */
class RabbitMQTargetDetails {
    /**
     * Constructs a new <code>RabbitMQTargetDetails</code>.
     * @alias module:model/RabbitMQTargetDetails
     */
    constructor() { 
        
        RabbitMQTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RabbitMQTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RabbitMQTargetDetails} obj Optional instance to populate.
     * @return {module:model/RabbitMQTargetDetails} The populated <code>RabbitMQTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RabbitMQTargetDetails();

            if (data.hasOwnProperty('rabbitmq_server_password')) {
                obj['rabbitmq_server_password'] = ApiClient.convertToType(data['rabbitmq_server_password'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq_server_uri')) {
                obj['rabbitmq_server_uri'] = ApiClient.convertToType(data['rabbitmq_server_uri'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq_server_user')) {
                obj['rabbitmq_server_user'] = ApiClient.convertToType(data['rabbitmq_server_user'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} rabbitmq_server_password
 */
RabbitMQTargetDetails.prototype['rabbitmq_server_password'] = undefined;

/**
 * @member {String} rabbitmq_server_uri
 */
RabbitMQTargetDetails.prototype['rabbitmq_server_uri'] = undefined;

/**
 * @member {String} rabbitmq_server_user
 */
RabbitMQTargetDetails.prototype['rabbitmq_server_user'] = undefined;






export default RabbitMQTargetDetails;

