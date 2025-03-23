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
 * The UpdatePingTarget model module.
 * @module model/UpdatePingTarget
 * @version 5.0.1
 */
class UpdatePingTarget {
    /**
     * Constructs a new <code>UpdatePingTarget</code>.
     * updatePingTarget is a command that updates an existing target. [Deprecated: Use target-update-ping command]
     * @alias module:model/UpdatePingTarget
     * @param name {String} Target name
     */
    constructor(name) { 
        
        UpdatePingTarget.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['administrative-port'] = '9999';
        obj['authorization-port'] = '9031';
        obj['json'] = false;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>UpdatePingTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePingTarget} obj Optional instance to populate.
     * @return {module:model/UpdatePingTarget} The populated <code>UpdatePingTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePingTarget();

            if (data.hasOwnProperty('administrative-port')) {
                obj['administrative-port'] = ApiClient.convertToType(data['administrative-port'], 'String');
            }
            if (data.hasOwnProperty('authorization-port')) {
                obj['authorization-port'] = ApiClient.convertToType(data['authorization-port'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
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
            if (data.hasOwnProperty('ping-url')) {
                obj['ping-url'] = ApiClient.convertToType(data['ping-url'], 'String');
            }
            if (data.hasOwnProperty('privileged-user')) {
                obj['privileged-user'] = ApiClient.convertToType(data['privileged-user'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('update-version')) {
                obj['update-version'] = ApiClient.convertToType(data['update-version'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdatePingTarget</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdatePingTarget</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdatePingTarget.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['administrative-port'] && !(typeof data['administrative-port'] === 'string' || data['administrative-port'] instanceof String)) {
            throw new Error("Expected the field `administrative-port` to be a primitive type in the JSON string but got " + data['administrative-port']);
        }
        // ensure the json data is a string
        if (data['authorization-port'] && !(typeof data['authorization-port'] === 'string' || data['authorization-port'] instanceof String)) {
            throw new Error("Expected the field `authorization-port` to be a primitive type in the JSON string but got " + data['authorization-port']);
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
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
        if (data['max-versions'] && !(typeof data['max-versions'] === 'string' || data['max-versions'] instanceof String)) {
            throw new Error("Expected the field `max-versions` to be a primitive type in the JSON string but got " + data['max-versions']);
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
        if (data['ping-url'] && !(typeof data['ping-url'] === 'string' || data['ping-url'] instanceof String)) {
            throw new Error("Expected the field `ping-url` to be a primitive type in the JSON string but got " + data['ping-url']);
        }
        // ensure the json data is a string
        if (data['privileged-user'] && !(typeof data['privileged-user'] === 'string' || data['privileged-user'] instanceof String)) {
            throw new Error("Expected the field `privileged-user` to be a primitive type in the JSON string but got " + data['privileged-user']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

UpdatePingTarget.RequiredProperties = ["name"];

/**
 * Ping Federate administrative port
 * @member {String} administrative-port
 * @default '9999'
 */
UpdatePingTarget.prototype['administrative-port'] = '9999';

/**
 * Ping Federate authorization port
 * @member {String} authorization-port
 * @default '9031'
 */
UpdatePingTarget.prototype['authorization-port'] = '9031';

/**
 * Deprecated - use description
 * @member {String} comment
 */
UpdatePingTarget.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
UpdatePingTarget.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdatePingTarget.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
UpdatePingTarget.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdatePingTarget.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
UpdatePingTarget.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdatePingTarget.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
UpdatePingTarget.prototype['new-name'] = undefined;

/**
 * Ping Federate privileged user password
 * @member {String} password
 */
UpdatePingTarget.prototype['password'] = undefined;

/**
 * Ping URL
 * @member {String} ping-url
 */
UpdatePingTarget.prototype['ping-url'] = undefined;

/**
 * Ping Federate privileged user
 * @member {String} privileged-user
 */
UpdatePingTarget.prototype['privileged-user'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdatePingTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdatePingTarget.prototype['uid-token'] = undefined;

/**
 * Deprecated
 * @member {Boolean} update-version
 */
UpdatePingTarget.prototype['update-version'] = undefined;






export default UpdatePingTarget;

