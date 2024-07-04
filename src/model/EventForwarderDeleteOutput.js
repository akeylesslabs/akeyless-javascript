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
 * The EventForwarderDeleteOutput model module.
 * @module model/EventForwarderDeleteOutput
 * @version 4.2.0
 */
class EventForwarderDeleteOutput {
    /**
     * Constructs a new <code>EventForwarderDeleteOutput</code>.
     * @alias module:model/EventForwarderDeleteOutput
     */
    constructor() { 
        
        EventForwarderDeleteOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventForwarderDeleteOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventForwarderDeleteOutput} obj Optional instance to populate.
     * @return {module:model/EventForwarderDeleteOutput} The populated <code>EventForwarderDeleteOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventForwarderDeleteOutput();

            if (data.hasOwnProperty('event_forwarder_name')) {
                obj['event_forwarder_name'] = ApiClient.convertToType(data['event_forwarder_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} event_forwarder_name
 */
EventForwarderDeleteOutput.prototype['event_forwarder_name'] = undefined;






export default EventForwarderDeleteOutput;

