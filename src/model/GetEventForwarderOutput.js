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
import NotiForwarder from './NotiForwarder';

/**
 * The GetEventForwarderOutput model module.
 * @module model/GetEventForwarderOutput
 * @version 4.2.1
 */
class GetEventForwarderOutput {
    /**
     * Constructs a new <code>GetEventForwarderOutput</code>.
     * @alias module:model/GetEventForwarderOutput
     */
    constructor() { 
        
        GetEventForwarderOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetEventForwarderOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEventForwarderOutput} obj Optional instance to populate.
     * @return {module:model/GetEventForwarderOutput} The populated <code>GetEventForwarderOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEventForwarderOutput();

            if (data.hasOwnProperty('event_forwarder')) {
                obj['event_forwarder'] = NotiForwarder.constructFromObject(data['event_forwarder']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NotiForwarder} event_forwarder
 */
GetEventForwarderOutput.prototype['event_forwarder'] = undefined;






export default GetEventForwarderOutput;

