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
 * The EventForwarderCreateServiceNow model module.
 * @module model/EventForwarderCreateServiceNow
 * @version 3.6.3
 */
class EventForwarderCreateServiceNow {
    /**
     * Constructs a new <code>EventForwarderCreateServiceNow</code>.
     * eventForwarderCreateServiceNow is a command that creates service-now event forwarder
     * @alias module:model/EventForwarderCreateServiceNow
     * @param gatewaysEventSourceLocations {Array.<String>} Event sources
     * @param name {String} EventForwarder name
     * @param runnerType {String} 
     */
    constructor(gatewaysEventSourceLocations, name, runnerType) { 
        
        EventForwarderCreateServiceNow.initialize(this, gatewaysEventSourceLocations, name, runnerType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gatewaysEventSourceLocations, name, runnerType) { 
        obj['gateways-event-source-locations'] = gatewaysEventSourceLocations;
        obj['name'] = name;
        obj['runner-type'] = runnerType;
    }

    /**
     * Constructs a <code>EventForwarderCreateServiceNow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventForwarderCreateServiceNow} obj Optional instance to populate.
     * @return {module:model/EventForwarderCreateServiceNow} The populated <code>EventForwarderCreateServiceNow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventForwarderCreateServiceNow();

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
            if (data.hasOwnProperty('event-types')) {
                obj['event-types'] = ApiClient.convertToType(data['event-types'], ['String']);
            }
            if (data.hasOwnProperty('every')) {
                obj['every'] = ApiClient.convertToType(data['every'], 'String');
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
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('runner-type')) {
                obj['runner-type'] = ApiClient.convertToType(data['runner-type'], 'String');
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
EventForwarderCreateServiceNow.prototype['admin-name'] = undefined;

/**
 * Workstation Admin Password
 * @member {String} admin-pwd
 */
EventForwarderCreateServiceNow.prototype['admin-pwd'] = undefined;

/**
 * The RSA Private Key to use when connecting with jwt authentication
 * @member {String} app-private-key-base64
 */
EventForwarderCreateServiceNow.prototype['app-private-key-base64'] = undefined;

/**
 * Auth Method Event sources
 * @member {Array.<String>} auth-methods-event-source-locations
 */
EventForwarderCreateServiceNow.prototype['auth-methods-event-source-locations'] = undefined;

/**
 * The authentication type to use [user-pass/jwt]
 * @member {String} auth-type
 * @default 'user-pass'
 */
EventForwarderCreateServiceNow.prototype['auth-type'] = 'user-pass';

/**
 * The client ID to use when connecting with jwt authentication
 * @member {String} client-id
 */
EventForwarderCreateServiceNow.prototype['client-id'] = undefined;

/**
 * The client secret to use when connecting with jwt authentication
 * @member {String} client-secret
 */
EventForwarderCreateServiceNow.prototype['client-secret'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
EventForwarderCreateServiceNow.prototype['description'] = undefined;

/**
 * List of event types to notify about [request-access, certificate-pending-expiration, certificate-expired, certificate-provisioning-success, certificate-provisioning-failure, auth-method-pending-expiration, auth-method-expired, rotated-secret-success, rotated-secret-failure, dynamic-secret-failure, multi-auth-failure, uid-rotation-failure, apply-justification, email-auth-method-approved, usage, rotation-usage, gateway-inactive, static-secret-updated]
 * @member {Array.<String>} event-types
 */
EventForwarderCreateServiceNow.prototype['event-types'] = undefined;

/**
 * Rate of periodic runner repetition in hours
 * @member {String} every
 */
EventForwarderCreateServiceNow.prototype['every'] = undefined;

/**
 * Event sources
 * @member {Array.<String>} gateways-event-source-locations
 */
EventForwarderCreateServiceNow.prototype['gateways-event-source-locations'] = undefined;

/**
 * Workstation Host
 * @member {String} host
 */
EventForwarderCreateServiceNow.prototype['host'] = undefined;

/**
 * Items Event sources
 * @member {Array.<String>} items-event-source-locations
 */
EventForwarderCreateServiceNow.prototype['items-event-source-locations'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
EventForwarderCreateServiceNow.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the EventForwarder secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
EventForwarderCreateServiceNow.prototype['key'] = undefined;

/**
 * EventForwarder name
 * @member {String} name
 */
EventForwarderCreateServiceNow.prototype['name'] = undefined;

/**
 * @member {String} runner-type
 */
EventForwarderCreateServiceNow.prototype['runner-type'] = undefined;

/**
 * Targets Event sources
 * @member {Array.<String>} targets-event-source-locations
 */
EventForwarderCreateServiceNow.prototype['targets-event-source-locations'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
EventForwarderCreateServiceNow.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
EventForwarderCreateServiceNow.prototype['uid-token'] = undefined;

/**
 * The user email to identify with when connecting with jwt authentication
 * @member {String} user-email
 */
EventForwarderCreateServiceNow.prototype['user-email'] = undefined;






export default EventForwarderCreateServiceNow;

