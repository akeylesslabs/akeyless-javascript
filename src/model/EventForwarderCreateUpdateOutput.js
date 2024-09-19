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
 * The EventForwarderCreateUpdateOutput model module.
 * @module model/EventForwarderCreateUpdateOutput
 * @version 4.2.4
 */
class EventForwarderCreateUpdateOutput {
    /**
     * Constructs a new <code>EventForwarderCreateUpdateOutput</code>.
     * @alias module:model/EventForwarderCreateUpdateOutput
     */
    constructor() { 
        
        EventForwarderCreateUpdateOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventForwarderCreateUpdateOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventForwarderCreateUpdateOutput} obj Optional instance to populate.
     * @return {module:model/EventForwarderCreateUpdateOutput} The populated <code>EventForwarderCreateUpdateOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventForwarderCreateUpdateOutput();

            if (data.hasOwnProperty('event_forwarder_id')) {
                obj['event_forwarder_id'] = ApiClient.convertToType(data['event_forwarder_id'], 'Number');
            }
            if (data.hasOwnProperty('event_forwarder_name')) {
                obj['event_forwarder_name'] = ApiClient.convertToType(data['event_forwarder_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} event_forwarder_id
 */
EventForwarderCreateUpdateOutput.prototype['event_forwarder_id'] = undefined;

/**
 * @member {String} event_forwarder_name
 */
EventForwarderCreateUpdateOutput.prototype['event_forwarder_name'] = undefined;






export default EventForwarderCreateUpdateOutput;

