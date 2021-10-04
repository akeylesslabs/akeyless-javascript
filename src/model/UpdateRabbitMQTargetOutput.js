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
 * The UpdateRabbitMQTargetOutput model module.
 * @module model/UpdateRabbitMQTargetOutput
 * @version 2.5.9
 */
class UpdateRabbitMQTargetOutput {
    /**
     * Constructs a new <code>UpdateRabbitMQTargetOutput</code>.
     * @alias module:model/UpdateRabbitMQTargetOutput
     */
    constructor() { 
        
        UpdateRabbitMQTargetOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateRabbitMQTargetOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRabbitMQTargetOutput} obj Optional instance to populate.
     * @return {module:model/UpdateRabbitMQTargetOutput} The populated <code>UpdateRabbitMQTargetOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRabbitMQTargetOutput();

            if (data.hasOwnProperty('target_id')) {
                obj['target_id'] = ApiClient.convertToType(data['target_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} target_id
 */
UpdateRabbitMQTargetOutput.prototype['target_id'] = undefined;






export default UpdateRabbitMQTargetOutput;

