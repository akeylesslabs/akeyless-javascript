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
 * The EventForwarderUpdateEmail model module.
 * @module model/EventForwarderUpdateEmail
 * @version 3.6.3
 */
class EventForwarderUpdateEmail {
    /**
     * Constructs a new <code>EventForwarderUpdateEmail</code>.
     * eventForwarderUpdateEmail is a command that updates email event forwarder
     * @alias module:model/EventForwarderUpdateEmail
     * @param gatewaysEventSourceLocations {Array.<String>} Event sources
     * @param name {String} EventForwarder name
     */
    constructor(gatewaysEventSourceLocations, name) { 
        
        EventForwarderUpdateEmail.initialize(this, gatewaysEventSourceLocations, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gatewaysEventSourceLocations, name) { 
        obj['gateways-event-source-locations'] = gatewaysEventSourceLocations;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>EventForwarderUpdateEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventForwarderUpdateEmail} obj Optional instance to populate.
     * @return {module:model/EventForwarderUpdateEmail} The populated <code>EventForwarderUpdateEmail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventForwarderUpdateEmail();

            if (data.hasOwnProperty('auth-methods-event-source-locations')) {
                obj['auth-methods-event-source-locations'] = ApiClient.convertToType(data['auth-methods-event-source-locations'], ['String']);
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
            if (data.hasOwnProperty('event-types')) {
                obj['event-types'] = ApiClient.convertToType(data['event-types'], ['String']);
            }
            if (data.hasOwnProperty('gateways-event-source-locations')) {
                obj['gateways-event-source-locations'] = ApiClient.convertToType(data['gateways-event-source-locations'], ['String']);
            }
            if (data.hasOwnProperty('items-event-source-locations')) {
                obj['items-event-source-locations'] = ApiClient.convertToType(data['items-event-source-locations'], ['String']);
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('keep-prev-version')) {
                obj['keep-prev-version'] = ApiClient.convertToType(data['keep-prev-version'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('override-url')) {
                obj['override-url'] = ApiClient.convertToType(data['override-url'], 'String');
            }
            if (data.hasOwnProperty('targets-event-source-locations')) {
                obj['targets-event-source-locations'] = ApiClient.convertToType(data['targets-event-source-locations'], ['String']);
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
 * Auth Method Event sources
 * @member {Array.<String>} auth-methods-event-source-locations
 */
EventForwarderUpdateEmail.prototype['auth-methods-event-source-locations'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
EventForwarderUpdateEmail.prototype['description'] = undefined;

/**
 * A comma seperated list of email addresses to send event to
 * @member {String} email-to
 */
EventForwarderUpdateEmail.prototype['email-to'] = undefined;

/**
 * Enable/Disable Event Forwarder [true/false]
 * @member {String} enable
 * @default 'true'
 */
EventForwarderUpdateEmail.prototype['enable'] = 'true';

/**
 * List of event types to notify about [request-access, certificate-pending-expiration, certificate-expired, certificate-provisioning-success, certificate-provisioning-failure, auth-method-pending-expiration, auth-method-expired, rotated-secret-success, rotated-secret-failure, dynamic-secret-failure, multi-auth-failure, uid-rotation-failure, apply-justification, email-auth-method-approved, usage, rotation-usage, gateway-inactive, static-secret-updated]
 * @member {Array.<String>} event-types
 */
EventForwarderUpdateEmail.prototype['event-types'] = undefined;

/**
 * Event sources
 * @member {Array.<String>} gateways-event-source-locations
 */
EventForwarderUpdateEmail.prototype['gateways-event-source-locations'] = undefined;

/**
 * Items Event sources
 * @member {Array.<String>} items-event-source-locations
 */
EventForwarderUpdateEmail.prototype['items-event-source-locations'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
EventForwarderUpdateEmail.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
EventForwarderUpdateEmail.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the EventForwarder secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
EventForwarderUpdateEmail.prototype['key'] = undefined;

/**
 * EventForwarder name
 * @member {String} name
 */
EventForwarderUpdateEmail.prototype['name'] = undefined;

/**
 * New EventForwarder name
 * @member {String} new-name
 */
EventForwarderUpdateEmail.prototype['new-name'] = undefined;

/**
 * Override Akeyless default URL with your Gateway url (port 18888)
 * @member {String} override-url
 */
EventForwarderUpdateEmail.prototype['override-url'] = undefined;

/**
 * Targets Event sources
 * @member {Array.<String>} targets-event-source-locations
 */
EventForwarderUpdateEmail.prototype['targets-event-source-locations'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
EventForwarderUpdateEmail.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
EventForwarderUpdateEmail.prototype['uid-token'] = undefined;






export default EventForwarderUpdateEmail;
