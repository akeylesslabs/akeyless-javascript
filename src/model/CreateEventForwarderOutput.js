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
 * The CreateEventForwarderOutput model module.
 * @module model/CreateEventForwarderOutput
 * @version 5.0.1
 */
class CreateEventForwarderOutput {
    /**
     * Constructs a new <code>CreateEventForwarderOutput</code>.
     * @alias module:model/CreateEventForwarderOutput
     */
    constructor() { 
        
        CreateEventForwarderOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateEventForwarderOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateEventForwarderOutput} obj Optional instance to populate.
     * @return {module:model/CreateEventForwarderOutput} The populated <code>CreateEventForwarderOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateEventForwarderOutput();

            if (data.hasOwnProperty('event_forwarder_id')) {
                obj['event_forwarder_id'] = ApiClient.convertToType(data['event_forwarder_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateEventForwarderOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateEventForwarderOutput</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} event_forwarder_id
 */
CreateEventForwarderOutput.prototype['event_forwarder_id'] = undefined;






export default CreateEventForwarderOutput;

