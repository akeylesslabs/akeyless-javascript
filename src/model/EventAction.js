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
 * The EventAction model module.
 * @module model/EventAction
 * @version 3.3.7
 */
class EventAction {
    /**
     * Constructs a new <code>EventAction</code>.
     * @alias module:model/EventAction
     * @param action {String} The Event Action [approve/deny]
     * @param eventId {Number} The Event ID
     */
    constructor(action, eventId) { 
        
        EventAction.initialize(this, action, eventId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, eventId) { 
        obj['action'] = action;
        obj['event-id'] = eventId;
    }

    /**
     * Constructs a <code>EventAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventAction} obj Optional instance to populate.
     * @return {module:model/EventAction} The populated <code>EventAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventAction();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('event-id')) {
                obj['event-id'] = ApiClient.convertToType(data['event-id'], 'Number');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
 * The Event Action [approve/deny]
 * @member {String} action
 */
EventAction.prototype['action'] = undefined;

/**
 * The Event ID
 * @member {Number} event-id
 */
EventAction.prototype['event-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
EventAction.prototype['json'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
EventAction.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
EventAction.prototype['uid-token'] = undefined;






export default EventAction;

