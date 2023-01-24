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
 * The CreateEventForwarder model module.
 * @module model/CreateEventForwarder
 * @version 3.2.0
 */
class CreateEventForwarder {
    /**
     * Constructs a new <code>CreateEventForwarder</code>.
     * @alias module:model/CreateEventForwarder
     * @param eventSourceLocations {Array.<String>} Event sources
     * @param forwarderType {String} 
     * @param name {String} EventForwarder name
     * @param runnerType {String} 
     */
    constructor(eventSourceLocations, forwarderType, name, runnerType) { 
        
        CreateEventForwarder.initialize(this, eventSourceLocations, forwarderType, name, runnerType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eventSourceLocations, forwarderType, name, runnerType) { 
        obj['event-source-locations'] = eventSourceLocations;
        obj['forwarder-type'] = forwarderType;
        obj['name'] = name;
        obj['runner-type'] = runnerType;
    }

    /**
     * Constructs a <code>CreateEventForwarder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateEventForwarder} obj Optional instance to populate.
     * @return {module:model/CreateEventForwarder} The populated <code>CreateEventForwarder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateEventForwarder();

            if (data.hasOwnProperty('admin-name')) {
                obj['admin-name'] = ApiClient.convertToType(data['admin-name'], 'String');
            }
            if (data.hasOwnProperty('admin-pwd')) {
                obj['admin-pwd'] = ApiClient.convertToType(data['admin-pwd'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('email-to')) {
                obj['email-to'] = ApiClient.convertToType(data['email-to'], 'String');
            }
            if (data.hasOwnProperty('event-source-locations')) {
                obj['event-source-locations'] = ApiClient.convertToType(data['event-source-locations'], ['String']);
            }
            if (data.hasOwnProperty('event-source-type')) {
                obj['event-source-type'] = ApiClient.convertToType(data['event-source-type'], 'String');
            }
            if (data.hasOwnProperty('event-types')) {
                obj['event-types'] = ApiClient.convertToType(data['event-types'], ['String']);
            }
            if (data.hasOwnProperty('every')) {
                obj['every'] = ApiClient.convertToType(data['every'], 'String');
            }
            if (data.hasOwnProperty('forwarder-type')) {
                obj['forwarder-type'] = ApiClient.convertToType(data['forwarder-type'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('runner-type')) {
                obj['runner-type'] = ApiClient.convertToType(data['runner-type'], 'String');
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
 * Workstation Admin Name
 * @member {String} admin-name
 */
CreateEventForwarder.prototype['admin-name'] = undefined;

/**
 * Workstation Admin password
 * @member {String} admin-pwd
 */
CreateEventForwarder.prototype['admin-pwd'] = undefined;

/**
 * Comment about the EventForwarder
 * @member {String} comment
 */
CreateEventForwarder.prototype['comment'] = undefined;

/**
 * A comma seperated list of email addresses to send event to (relevant only for \\\"email\\\" Event Forwarder)
 * @member {String} email-to
 */
CreateEventForwarder.prototype['email-to'] = undefined;

/**
 * Event sources
 * @member {Array.<String>} event-source-locations
 */
CreateEventForwarder.prototype['event-source-locations'] = undefined;

/**
 * Event Source type [item, target]
 * @member {String} event-source-type
 * @default 'item'
 */
CreateEventForwarder.prototype['event-source-type'] = 'item';

/**
 * Event types
 * @member {Array.<String>} event-types
 */
CreateEventForwarder.prototype['event-types'] = undefined;

/**
 * Rate of periodic runner repetition in hours
 * @member {String} every
 */
CreateEventForwarder.prototype['every'] = undefined;

/**
 * @member {String} forwarder-type
 */
CreateEventForwarder.prototype['forwarder-type'] = undefined;

/**
 * Workstation Host
 * @member {String} host
 */
CreateEventForwarder.prototype['host'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
CreateEventForwarder.prototype['json'] = undefined;

/**
 * The name of a key that used to encrypt the EventForwarder secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateEventForwarder.prototype['key'] = undefined;

/**
 * EventForwarder name
 * @member {String} name
 */
CreateEventForwarder.prototype['name'] = undefined;

/**
 * @member {String} runner-type
 */
CreateEventForwarder.prototype['runner-type'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateEventForwarder.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateEventForwarder.prototype['uid-token'] = undefined;






export default CreateEventForwarder;
