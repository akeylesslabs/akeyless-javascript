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
 * The TargetUpdateGlobalSign model module.
 * @module model/TargetUpdateGlobalSign
 * @version 5.0.1
 */
class TargetUpdateGlobalSign {
    /**
     * Constructs a new <code>TargetUpdateGlobalSign</code>.
     * @alias module:model/TargetUpdateGlobalSign
     * @param contactEmail {String} Email of the GlobalSign GCC account contact
     * @param contactFirstName {String} First name of the GlobalSign GCC account contact
     * @param contactLastName {String} Last name of the GlobalSign GCC account contact
     * @param contactPhone {String} Telephone of the GlobalSign GCC account contact
     * @param name {String} Target name
     * @param password {String} Password of the GlobalSign GCC account
     * @param profileId {String} Profile ID of the GlobalSign GCC account
     * @param username {String} Username of the GlobalSign GCC account
     */
    constructor(contactEmail, contactFirstName, contactLastName, contactPhone, name, password, profileId, username) { 
        
        TargetUpdateGlobalSign.initialize(this, contactEmail, contactFirstName, contactLastName, contactPhone, name, password, profileId, username);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contactEmail, contactFirstName, contactLastName, contactPhone, name, password, profileId, username) { 
        obj['contact-email'] = contactEmail;
        obj['contact-first-name'] = contactFirstName;
        obj['contact-last-name'] = contactLastName;
        obj['contact-phone'] = contactPhone;
        obj['json'] = false;
        obj['name'] = name;
        obj['password'] = password;
        obj['profile-id'] = profileId;
        obj['timeout'] = '5m';
        obj['username'] = username;
    }

    /**
     * Constructs a <code>TargetUpdateGlobalSign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetUpdateGlobalSign} obj Optional instance to populate.
     * @return {module:model/TargetUpdateGlobalSign} The populated <code>TargetUpdateGlobalSign</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetUpdateGlobalSign();

            if (data.hasOwnProperty('contact-email')) {
                obj['contact-email'] = ApiClient.convertToType(data['contact-email'], 'String');
            }
            if (data.hasOwnProperty('contact-first-name')) {
                obj['contact-first-name'] = ApiClient.convertToType(data['contact-first-name'], 'String');
            }
            if (data.hasOwnProperty('contact-last-name')) {
                obj['contact-last-name'] = ApiClient.convertToType(data['contact-last-name'], 'String');
            }
            if (data.hasOwnProperty('contact-phone')) {
                obj['contact-phone'] = ApiClient.convertToType(data['contact-phone'], 'String');
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
            if (data.hasOwnProperty('profile-id')) {
                obj['profile-id'] = ApiClient.convertToType(data['profile-id'], 'String');
            }
            if (data.hasOwnProperty('timeout')) {
                obj['timeout'] = ApiClient.convertToType(data['timeout'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TargetUpdateGlobalSign</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TargetUpdateGlobalSign</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TargetUpdateGlobalSign.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['contact-email'] && !(typeof data['contact-email'] === 'string' || data['contact-email'] instanceof String)) {
            throw new Error("Expected the field `contact-email` to be a primitive type in the JSON string but got " + data['contact-email']);
        }
        // ensure the json data is a string
        if (data['contact-first-name'] && !(typeof data['contact-first-name'] === 'string' || data['contact-first-name'] instanceof String)) {
            throw new Error("Expected the field `contact-first-name` to be a primitive type in the JSON string but got " + data['contact-first-name']);
        }
        // ensure the json data is a string
        if (data['contact-last-name'] && !(typeof data['contact-last-name'] === 'string' || data['contact-last-name'] instanceof String)) {
            throw new Error("Expected the field `contact-last-name` to be a primitive type in the JSON string but got " + data['contact-last-name']);
        }
        // ensure the json data is a string
        if (data['contact-phone'] && !(typeof data['contact-phone'] === 'string' || data['contact-phone'] instanceof String)) {
            throw new Error("Expected the field `contact-phone` to be a primitive type in the JSON string but got " + data['contact-phone']);
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
        if (data['profile-id'] && !(typeof data['profile-id'] === 'string' || data['profile-id'] instanceof String)) {
            throw new Error("Expected the field `profile-id` to be a primitive type in the JSON string but got " + data['profile-id']);
        }
        // ensure the json data is a string
        if (data['timeout'] && !(typeof data['timeout'] === 'string' || data['timeout'] instanceof String)) {
            throw new Error("Expected the field `timeout` to be a primitive type in the JSON string but got " + data['timeout']);
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
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }

        return true;
    }


}

TargetUpdateGlobalSign.RequiredProperties = ["contact-email", "contact-first-name", "contact-last-name", "contact-phone", "name", "password", "profile-id", "username"];

/**
 * Email of the GlobalSign GCC account contact
 * @member {String} contact-email
 */
TargetUpdateGlobalSign.prototype['contact-email'] = undefined;

/**
 * First name of the GlobalSign GCC account contact
 * @member {String} contact-first-name
 */
TargetUpdateGlobalSign.prototype['contact-first-name'] = undefined;

/**
 * Last name of the GlobalSign GCC account contact
 * @member {String} contact-last-name
 */
TargetUpdateGlobalSign.prototype['contact-last-name'] = undefined;

/**
 * Telephone of the GlobalSign GCC account contact
 * @member {String} contact-phone
 */
TargetUpdateGlobalSign.prototype['contact-phone'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
TargetUpdateGlobalSign.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetUpdateGlobalSign.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
TargetUpdateGlobalSign.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetUpdateGlobalSign.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetUpdateGlobalSign.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetUpdateGlobalSign.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
TargetUpdateGlobalSign.prototype['new-name'] = undefined;

/**
 * Password of the GlobalSign GCC account
 * @member {String} password
 */
TargetUpdateGlobalSign.prototype['password'] = undefined;

/**
 * Profile ID of the GlobalSign GCC account
 * @member {String} profile-id
 */
TargetUpdateGlobalSign.prototype['profile-id'] = undefined;

/**
 * Timeout waiting for certificate validation in Duration format (1h - 1 Hour, 20m - 20 Minutes, 33m3s - 33 Minutes and 3 Seconds), maximum 1h.
 * @member {String} timeout
 * @default '5m'
 */
TargetUpdateGlobalSign.prototype['timeout'] = '5m';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetUpdateGlobalSign.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetUpdateGlobalSign.prototype['uid-token'] = undefined;

/**
 * Username of the GlobalSign GCC account
 * @member {String} username
 */
TargetUpdateGlobalSign.prototype['username'] = undefined;






export default TargetUpdateGlobalSign;

