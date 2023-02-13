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
 * The UpdateEventForwarder model module.
 * @module model/UpdateEventForwarder
 * @version 3.2.4
 */
class UpdateEventForwarder {
    /**
     * Constructs a new <code>UpdateEventForwarder</code>.
     * @alias module:model/UpdateEventForwarder
     * @param name {String} EventForwarder name
     */
    constructor(name) { 
        
        UpdateEventForwarder.initialize(this, name);
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
     * Constructs a <code>UpdateEventForwarder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateEventForwarder} obj Optional instance to populate.
     * @return {module:model/UpdateEventForwarder} The populated <code>UpdateEventForwarder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateEventForwarder();

            if (data.hasOwnProperty('admin-name')) {
                obj['admin-name'] = ApiClient.convertToType(data['admin-name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('email-to')) {
                obj['email-to'] = ApiClient.convertToType(data['email-to'], 'String');
            }
            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'String');
            }
            if (data.hasOwnProperty('event-source-locations')) {
                obj['event-source-locations'] = ApiClient.convertToType(data['event-source-locations'], ['String']);
            }
            if (data.hasOwnProperty('event-types')) {
                obj['event-types'] = ApiClient.convertToType(data['event-types'], ['String']);
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-comment')) {
                obj['new-comment'] = ApiClient.convertToType(data['new-comment'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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
UpdateEventForwarder.prototype['admin-name'] = undefined;

/**
 * Description of the object
 * @member {String} description
 * @default 'default_comment'
 */
UpdateEventForwarder.prototype['description'] = 'default_comment';

/**
 * A comma seperated list of email addresses to send event to (relevant only for \\\"email\\\" Event Forwarder)
 * @member {String} email-to
 */
UpdateEventForwarder.prototype['email-to'] = undefined;

/**
 * Enable/Disable Event Forwarder [true/false]
 * @member {String} enable
 * @default 'true'
 */
UpdateEventForwarder.prototype['enable'] = 'true';

/**
 * Event sources
 * @member {Array.<String>} event-source-locations
 */
UpdateEventForwarder.prototype['event-source-locations'] = undefined;

/**
 * Event types
 * @member {Array.<String>} event-types
 */
UpdateEventForwarder.prototype['event-types'] = undefined;

/**
 * Workstation Host
 * @member {String} host
 */
UpdateEventForwarder.prototype['host'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateEventForwarder.prototype['json'] = false;

/**
 * EventForwarder name
 * @member {String} name
 */
UpdateEventForwarder.prototype['name'] = undefined;

/**
 * Deprecated - use description
 * @member {String} new-comment
 * @default 'default_comment'
 */
UpdateEventForwarder.prototype['new-comment'] = 'default_comment';

/**
 * New EventForwarder name
 * @member {String} new-name
 */
UpdateEventForwarder.prototype['new-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateEventForwarder.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateEventForwarder.prototype['uid-token'] = undefined;






export default UpdateEventForwarder;

