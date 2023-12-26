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
 * The CreateUserEvent model module.
 * @module model/CreateUserEvent
 * @version 3.5.4
 */
class CreateUserEvent {
    /**
     * Constructs a new <code>CreateUserEvent</code>.
     * @alias module:model/CreateUserEvent
     * @param eventType {String} 
     * @param itemName {String} EventItemName Event item name
     * @param itemType {String} EventItemType Event item type
     */
    constructor(eventType, itemName, itemType) { 
        
        CreateUserEvent.initialize(this, eventType, itemName, itemType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eventType, itemName, itemType) { 
        obj['event-type'] = eventType;
        obj['item-name'] = itemName;
        obj['item-type'] = itemType;
    }

    /**
     * Constructs a <code>CreateUserEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUserEvent} obj Optional instance to populate.
     * @return {module:model/CreateUserEvent} The populated <code>CreateUserEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateUserEvent();

            if (data.hasOwnProperty('capabilities')) {
                obj['capabilities'] = ApiClient.convertToType(data['capabilities'], ['String']);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('event-source')) {
                obj['event-source'] = ApiClient.convertToType(data['event-source'], 'String');
            }
            if (data.hasOwnProperty('event-type')) {
                obj['event-type'] = ApiClient.convertToType(data['event-type'], 'String');
            }
            if (data.hasOwnProperty('item-name')) {
                obj['item-name'] = ApiClient.convertToType(data['item-name'], 'String');
            }
            if (data.hasOwnProperty('item-type')) {
                obj['item-type'] = ApiClient.convertToType(data['item-type'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('request-access-ttl')) {
                obj['request-access-ttl'] = ApiClient.convertToType(data['request-access-ttl'], 'Number');
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
 * List of the required capabilities options: [read, update, delete,sra_transparently_connect]. Relevant only for request-access event types
 * @member {Array.<String>} capabilities
 */
CreateUserEvent.prototype['capabilities'] = undefined;

/**
 * Deprecated - use description
 * @member {String} comment
 */
CreateUserEvent.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateUserEvent.prototype['description'] = undefined;

/**
 * @member {String} event-source
 */
CreateUserEvent.prototype['event-source'] = undefined;

/**
 * @member {String} event-type
 */
CreateUserEvent.prototype['event-type'] = undefined;

/**
 * EventItemName Event item name
 * @member {String} item-name
 */
CreateUserEvent.prototype['item-name'] = undefined;

/**
 * EventItemType Event item type
 * @member {String} item-type
 */
CreateUserEvent.prototype['item-type'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateUserEvent.prototype['json'] = false;

/**
 * For how long to grant the requested access, in minutes
 * @member {Number} request-access-ttl
 */
CreateUserEvent.prototype['request-access-ttl'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateUserEvent.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateUserEvent.prototype['uid-token'] = undefined;






export default CreateUserEvent;

