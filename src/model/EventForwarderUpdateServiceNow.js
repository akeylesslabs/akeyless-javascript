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
 * The EventForwarderUpdateServiceNow model module.
 * @module model/EventForwarderUpdateServiceNow
 * @version 3.6.3
 */
class EventForwarderUpdateServiceNow {
    /**
     * Constructs a new <code>EventForwarderUpdateServiceNow</code>.
     * eventForwarderUpdateServiceNow is a command that updates service now event forwarder
     * @alias module:model/EventForwarderUpdateServiceNow
     * @param gatewaysEventSourceLocations {Array.<String>} Event sources
     * @param name {String} EventForwarder name
     */
    constructor(gatewaysEventSourceLocations, name) { 
        
        EventForwarderUpdateServiceNow.initialize(this, gatewaysEventSourceLocations, name);
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
     * Constructs a <code>EventForwarderUpdateServiceNow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventForwarderUpdateServiceNow} obj Optional instance to populate.
     * @return {module:model/EventForwarderUpdateServiceNow} The populated <code>EventForwarderUpdateServiceNow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventForwarderUpdateServiceNow();

            if (data.hasOwnProperty('admin-name')) {
                obj['admin-name'] = ApiClient.convertToType(data['admin-name'], 'String');
            }
            if (data.hasOwnProperty('admin-pwd')) {
                obj['admin-pwd'] = ApiClient.convertToType(data['admin-pwd'], 'String');
            }
            if (data.hasOwnProperty('app-private-key-base64')) {
                obj['app-private-key-base64'] = ApiClient.convertToType(data['app-private-key-base64'], 'String');
            }
            if (data.hasOwnProperty('auth-methods-event-source-locations')) {
                obj['auth-methods-event-source-locations'] = ApiClient.convertToType(data['auth-methods-event-source-locations'], ['String']);
            }
            if (data.hasOwnProperty('auth-type')) {
                obj['auth-type'] = ApiClient.convertToType(data['auth-type'], 'String');
            }
            if (data.hasOwnProperty('client-id')) {
                obj['client-id'] = ApiClient.convertToType(data['client-id'], 'String');
            }
            if (data.hasOwnProperty('client-secret')) {
                obj['client-secret'] = ApiClient.convertToType(data['client-secret'], 'String');
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
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
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
            if (data.hasOwnProperty('user-email')) {
                obj['user-email'] = ApiClient.convertToType(data['user-email'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Workstation Admin Name
 * @member {String} admin-name
 */
EventForwarderUpdateServiceNow.prototype['admin-name'] = undefined;

/**
 * Workstation Admin Password
 * @member {String} admin-pwd
 */
EventForwarderUpdateServiceNow.prototype['admin-pwd'] = undefined;

/**
 * The RSA Private Key to use when connecting with jwt authentication
 * @member {String} app-private-key-base64
 */
EventForwarderUpdateServiceNow.prototype['app-private-key-base64'] = undefined;

/**
 * Auth Method Event sources
 * @member {Array.<String>} auth-methods-event-source-locations
 */
EventForwarderUpdateServiceNow.prototype['auth-methods-event-source-locations'] = undefined;

/**
 * The authentication type to use [user-pass/jwt]
 * @member {String} auth-type
 * @default 'user-pass'
 */
EventForwarderUpdateServiceNow.prototype['auth-type'] = 'user-pass';

/**
 * The client ID to use when connecting with jwt authentication
 * @member {String} client-id
 */
EventForwarderUpdateServiceNow.prototype['client-id'] = undefined;

/**
 * The client secret to use when connecting with jwt authentication
 * @member {String} client-secret
 */
EventForwarderUpdateServiceNow.prototype['client-secret'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
EventForwarderUpdateServiceNow.prototype['description'] = undefined;

/**
 * Enable/Disable Event Forwarder [true/false]
 * @member {String} enable
 * @default 'true'
 */
EventForwarderUpdateServiceNow.prototype['enable'] = 'true';

/**
 * List of event types to notify about [request-access, certificate-pending-expiration, certificate-expired, certificate-provisioning-success, certificate-provisioning-failure, auth-method-pending-expiration, auth-method-expired, rotated-secret-success, rotated-secret-failure, dynamic-secret-failure, multi-auth-failure, uid-rotation-failure, apply-justification, email-auth-method-approved, usage, rotation-usage, gateway-inactive, static-secret-updated]
 * @member {Array.<String>} event-types
 */
EventForwarderUpdateServiceNow.prototype['event-types'] = undefined;

/**
 * Event sources
 * @member {Array.<String>} gateways-event-source-locations
 */
EventForwarderUpdateServiceNow.prototype['gateways-event-source-locations'] = undefined;

/**
 * Workstation Host
 * @member {String} host
 */
EventForwarderUpdateServiceNow.prototype['host'] = undefined;

/**
 * Items Event sources
 * @member {Array.<String>} items-event-source-locations
 */
EventForwarderUpdateServiceNow.prototype['items-event-source-locations'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
EventForwarderUpdateServiceNow.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
EventForwarderUpdateServiceNow.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the EventForwarder secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
EventForwarderUpdateServiceNow.prototype['key'] = undefined;

/**
 * EventForwarder name
 * @member {String} name
 */
EventForwarderUpdateServiceNow.prototype['name'] = undefined;

/**
 * New EventForwarder name
 * @member {String} new-name
 */
EventForwarderUpdateServiceNow.prototype['new-name'] = undefined;

/**
 * Targets Event sources
 * @member {Array.<String>} targets-event-source-locations
 */
EventForwarderUpdateServiceNow.prototype['targets-event-source-locations'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
EventForwarderUpdateServiceNow.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
EventForwarderUpdateServiceNow.prototype['uid-token'] = undefined;

/**
 * The user email to identify with when connecting with jwt authentication
 * @member {String} user-email
 */
EventForwarderUpdateServiceNow.prototype['user-email'] = undefined;






export default EventForwarderUpdateServiceNow;

