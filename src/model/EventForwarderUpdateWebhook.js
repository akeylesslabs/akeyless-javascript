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
 * The EventForwarderUpdateWebhook model module.
 * @module model/EventForwarderUpdateWebhook
 * @version 5.0.1
 */
class EventForwarderUpdateWebhook {
    /**
     * Constructs a new <code>EventForwarderUpdateWebhook</code>.
     * eventForwarderUpdateWebhook is a command that updates webhook event forwarder
     * @alias module:model/EventForwarderUpdateWebhook
     * @param gatewaysEventSourceLocations {Array.<String>} Event sources
     * @param name {String} EventForwarder name
     */
    constructor(gatewaysEventSourceLocations, name) { 
        
        EventForwarderUpdateWebhook.initialize(this, gatewaysEventSourceLocations, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gatewaysEventSourceLocations, name) { 
        obj['auth-type'] = 'user-pass';
        obj['enable'] = 'true';
        obj['gateways-event-source-locations'] = gatewaysEventSourceLocations;
        obj['json'] = false;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>EventForwarderUpdateWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventForwarderUpdateWebhook} obj Optional instance to populate.
     * @return {module:model/EventForwarderUpdateWebhook} The populated <code>EventForwarderUpdateWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventForwarderUpdateWebhook();

            if (data.hasOwnProperty('auth-methods-event-source-locations')) {
                obj['auth-methods-event-source-locations'] = ApiClient.convertToType(data['auth-methods-event-source-locations'], ['String']);
            }
            if (data.hasOwnProperty('auth-token')) {
                obj['auth-token'] = ApiClient.convertToType(data['auth-token'], 'String');
            }
            if (data.hasOwnProperty('auth-type')) {
                obj['auth-type'] = ApiClient.convertToType(data['auth-type'], 'String');
            }
            if (data.hasOwnProperty('client-cert-data')) {
                obj['client-cert-data'] = ApiClient.convertToType(data['client-cert-data'], 'String');
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
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('private-key-data')) {
                obj['private-key-data'] = ApiClient.convertToType(data['private-key-data'], 'String');
            }
            if (data.hasOwnProperty('server-certificates')) {
                obj['server-certificates'] = ApiClient.convertToType(data['server-certificates'], 'String');
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
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventForwarderUpdateWebhook</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventForwarderUpdateWebhook</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EventForwarderUpdateWebhook.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['auth-methods-event-source-locations'])) {
            throw new Error("Expected the field `auth-methods-event-source-locations` to be an array in the JSON data but got " + data['auth-methods-event-source-locations']);
        }
        // ensure the json data is a string
        if (data['auth-token'] && !(typeof data['auth-token'] === 'string' || data['auth-token'] instanceof String)) {
            throw new Error("Expected the field `auth-token` to be a primitive type in the JSON string but got " + data['auth-token']);
        }
        // ensure the json data is a string
        if (data['auth-type'] && !(typeof data['auth-type'] === 'string' || data['auth-type'] instanceof String)) {
            throw new Error("Expected the field `auth-type` to be a primitive type in the JSON string but got " + data['auth-type']);
        }
        // ensure the json data is a string
        if (data['client-cert-data'] && !(typeof data['client-cert-data'] === 'string' || data['client-cert-data'] instanceof String)) {
            throw new Error("Expected the field `client-cert-data` to be a primitive type in the JSON string but got " + data['client-cert-data']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['enable'] && !(typeof data['enable'] === 'string' || data['enable'] instanceof String)) {
            throw new Error("Expected the field `enable` to be a primitive type in the JSON string but got " + data['enable']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['event-types'])) {
            throw new Error("Expected the field `event-types` to be an array in the JSON data but got " + data['event-types']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['gateways-event-source-locations'])) {
            throw new Error("Expected the field `gateways-event-source-locations` to be an array in the JSON data but got " + data['gateways-event-source-locations']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['items-event-source-locations'])) {
            throw new Error("Expected the field `items-event-source-locations` to be an array in the JSON data but got " + data['items-event-source-locations']);
        }
        // ensure the json data is a string
        if (data['keep-prev-version'] && !(typeof data['keep-prev-version'] === 'string' || data['keep-prev-version'] instanceof String)) {
            throw new Error("Expected the field `keep-prev-version` to be a primitive type in the JSON string but got " + data['keep-prev-version']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['new-name'] && !(typeof data['new-name'] === 'string' || data['new-name'] instanceof String)) {
            throw new Error("Expected the field `new-name` to be a primitive type in the JSON string but got " + data['new-name']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['private-key-data'] && !(typeof data['private-key-data'] === 'string' || data['private-key-data'] instanceof String)) {
            throw new Error("Expected the field `private-key-data` to be a primitive type in the JSON string but got " + data['private-key-data']);
        }
        // ensure the json data is a string
        if (data['server-certificates'] && !(typeof data['server-certificates'] === 'string' || data['server-certificates'] instanceof String)) {
            throw new Error("Expected the field `server-certificates` to be a primitive type in the JSON string but got " + data['server-certificates']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['targets-event-source-locations'])) {
            throw new Error("Expected the field `targets-event-source-locations` to be an array in the JSON data but got " + data['targets-event-source-locations']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }

        return true;
    }


}

EventForwarderUpdateWebhook.RequiredProperties = ["gateways-event-source-locations", "name"];

/**
 * Auth Method Event sources
 * @member {Array.<String>} auth-methods-event-source-locations
 */
EventForwarderUpdateWebhook.prototype['auth-methods-event-source-locations'] = undefined;

/**
 * Base64 encoded Token string for authentication type Token
 * @member {String} auth-token
 */
EventForwarderUpdateWebhook.prototype['auth-token'] = undefined;

/**
 * The Webhook authentication type [user-pass, bearer-token, certificate]
 * @member {String} auth-type
 * @default 'user-pass'
 */
EventForwarderUpdateWebhook.prototype['auth-type'] = 'user-pass';

/**
 * Base64 encoded PEM certificate, relevant for certificate auth-type
 * @member {String} client-cert-data
 */
EventForwarderUpdateWebhook.prototype['client-cert-data'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
EventForwarderUpdateWebhook.prototype['description'] = undefined;

/**
 * Enable/Disable Event Forwarder [true/false]
 * @member {String} enable
 * @default 'true'
 */
EventForwarderUpdateWebhook.prototype['enable'] = 'true';

/**
 * List of event types to notify about [request-access, certificate-pending-expiration, certificate-expired, certificate-provisioning-success, certificate-provisioning-failure, auth-method-pending-expiration, auth-method-expired, next-automatic-rotation, rotated-secret-success, rotated-secret-failure, dynamic-secret-failure, multi-auth-failure, uid-rotation-failure, apply-justification, email-auth-method-approved, usage, rotation-usage, gateway-inactive, static-secret-updated, rate-limiting, usage-report, secret-sync]
 * @member {Array.<String>} event-types
 */
EventForwarderUpdateWebhook.prototype['event-types'] = undefined;

/**
 * Event sources
 * @member {Array.<String>} gateways-event-source-locations
 */
EventForwarderUpdateWebhook.prototype['gateways-event-source-locations'] = undefined;

/**
 * Items Event sources
 * @member {Array.<String>} items-event-source-locations
 */
EventForwarderUpdateWebhook.prototype['items-event-source-locations'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
EventForwarderUpdateWebhook.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
EventForwarderUpdateWebhook.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the EventForwarder secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
EventForwarderUpdateWebhook.prototype['key'] = undefined;

/**
 * EventForwarder name
 * @member {String} name
 */
EventForwarderUpdateWebhook.prototype['name'] = undefined;

/**
 * New EventForwarder name
 * @member {String} new-name
 */
EventForwarderUpdateWebhook.prototype['new-name'] = undefined;

/**
 * Password for authentication relevant for user-pass auth-type
 * @member {String} password
 */
EventForwarderUpdateWebhook.prototype['password'] = undefined;

/**
 * Base64 encoded PEM RSA Private Key, relevant for certificate auth-type
 * @member {String} private-key-data
 */
EventForwarderUpdateWebhook.prototype['private-key-data'] = undefined;

/**
 * Base64 encoded PEM certificate of the Webhook
 * @member {String} server-certificates
 */
EventForwarderUpdateWebhook.prototype['server-certificates'] = undefined;

/**
 * Targets Event sources
 * @member {Array.<String>} targets-event-source-locations
 */
EventForwarderUpdateWebhook.prototype['targets-event-source-locations'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
EventForwarderUpdateWebhook.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
EventForwarderUpdateWebhook.prototype['uid-token'] = undefined;

/**
 * Webhook URL
 * @member {String} url
 */
EventForwarderUpdateWebhook.prototype['url'] = undefined;

/**
 * Username for authentication relevant for user-pass auth-type
 * @member {String} username
 */
EventForwarderUpdateWebhook.prototype['username'] = undefined;






export default EventForwarderUpdateWebhook;

