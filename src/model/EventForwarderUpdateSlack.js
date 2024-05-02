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
 * The EventForwarderUpdateSlack model module.
 * @module model/EventForwarderUpdateSlack
 * @version 4.0.0
 */
class EventForwarderUpdateSlack {
    /**
     * Constructs a new <code>EventForwarderUpdateSlack</code>.
     * eventForwarderUpdateSlack is a command that updates slack event forwarder
     * @alias module:model/EventForwarderUpdateSlack
     * @param gatewaysEventSourceLocations {Array.<String>} Event sources
     * @param name {String} EventForwarder name
     * @param url {String} Slack Webhook URL
     */
    constructor(gatewaysEventSourceLocations, name, url) { 
        
        EventForwarderUpdateSlack.initialize(this, gatewaysEventSourceLocations, name, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gatewaysEventSourceLocations, name, url) { 
        obj['gateways-event-source-locations'] = gatewaysEventSourceLocations;
        obj['name'] = name;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>EventForwarderUpdateSlack</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventForwarderUpdateSlack} obj Optional instance to populate.
     * @return {module:model/EventForwarderUpdateSlack} The populated <code>EventForwarderUpdateSlack</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventForwarderUpdateSlack();

            if (data.hasOwnProperty('auth-methods-event-source-locations')) {
                obj['auth-methods-event-source-locations'] = ApiClient.convertToType(data['auth-methods-event-source-locations'], ['String']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
            if (data.hasOwnProperty('targets-event-source-locations')) {
                obj['targets-event-source-locations'] = ApiClient.convertToType(data['targets-event-source-locations'], ['String']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Auth Method Event sources
 * @member {Array.<String>} auth-methods-event-source-locations
 */
EventForwarderUpdateSlack.prototype['auth-methods-event-source-locations'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
EventForwarderUpdateSlack.prototype['description'] = undefined;

/**
 * Enable/Disable Event Forwarder [true/false]
 * @member {String} enable
 * @default 'true'
 */
EventForwarderUpdateSlack.prototype['enable'] = 'true';

/**
 * List of event types to notify about [request-access, certificate-pending-expiration, certificate-expired, certificate-provisioning-success, certificate-provisioning-failure, auth-method-pending-expiration, auth-method-expired, rotated-secret-success, rotated-secret-failure, dynamic-secret-failure, multi-auth-failure, uid-rotation-failure, apply-justification, email-auth-method-approved, usage, rotation-usage, gateway-inactive, static-secret-updated]
 * @member {Array.<String>} event-types
 */
EventForwarderUpdateSlack.prototype['event-types'] = undefined;

/**
 * Event sources
 * @member {Array.<String>} gateways-event-source-locations
 */
EventForwarderUpdateSlack.prototype['gateways-event-source-locations'] = undefined;

/**
 * Items Event sources
 * @member {Array.<String>} items-event-source-locations
 */
EventForwarderUpdateSlack.prototype['items-event-source-locations'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
EventForwarderUpdateSlack.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
EventForwarderUpdateSlack.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the EventForwarder secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
EventForwarderUpdateSlack.prototype['key'] = undefined;

/**
 * EventForwarder name
 * @member {String} name
 */
EventForwarderUpdateSlack.prototype['name'] = undefined;

/**
 * New EventForwarder name
 * @member {String} new-name
 */
EventForwarderUpdateSlack.prototype['new-name'] = undefined;

/**
 * Targets Event sources
 * @member {Array.<String>} targets-event-source-locations
 */
EventForwarderUpdateSlack.prototype['targets-event-source-locations'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
EventForwarderUpdateSlack.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
EventForwarderUpdateSlack.prototype['uid-token'] = undefined;

/**
 * Slack Webhook URL
 * @member {String} url
 */
EventForwarderUpdateSlack.prototype['url'] = undefined;






export default EventForwarderUpdateSlack;

