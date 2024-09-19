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
 * The CreateGlobalSignTarget model module.
 * @module model/CreateGlobalSignTarget
 * @version 4.2.4
 */
class CreateGlobalSignTarget {
    /**
     * Constructs a new <code>CreateGlobalSignTarget</code>.
     * createGlobalSignTarget is a command that creates a new target. [Deprecated: Use target-create-globalsign command]
     * @alias module:model/CreateGlobalSignTarget
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
        
        CreateGlobalSignTarget.initialize(this, contactEmail, contactFirstName, contactLastName, contactPhone, name, password, profileId, username);
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
        obj['name'] = name;
        obj['password'] = password;
        obj['profile-id'] = profileId;
        obj['username'] = username;
    }

    /**
     * Constructs a <code>CreateGlobalSignTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateGlobalSignTarget} obj Optional instance to populate.
     * @return {module:model/CreateGlobalSignTarget} The populated <code>CreateGlobalSignTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateGlobalSignTarget();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
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
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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


}

/**
 * Deprecated - use description
 * @member {String} comment
 */
CreateGlobalSignTarget.prototype['comment'] = undefined;

/**
 * Email of the GlobalSign GCC account contact
 * @member {String} contact-email
 */
CreateGlobalSignTarget.prototype['contact-email'] = undefined;

/**
 * First name of the GlobalSign GCC account contact
 * @member {String} contact-first-name
 */
CreateGlobalSignTarget.prototype['contact-first-name'] = undefined;

/**
 * Last name of the GlobalSign GCC account contact
 * @member {String} contact-last-name
 */
CreateGlobalSignTarget.prototype['contact-last-name'] = undefined;

/**
 * Telephone of the GlobalSign GCC account contact
 * @member {String} contact-phone
 */
CreateGlobalSignTarget.prototype['contact-phone'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateGlobalSignTarget.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateGlobalSignTarget.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateGlobalSignTarget.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
CreateGlobalSignTarget.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
CreateGlobalSignTarget.prototype['name'] = undefined;

/**
 * Password of the GlobalSign GCC account
 * @member {String} password
 */
CreateGlobalSignTarget.prototype['password'] = undefined;

/**
 * Profile ID of the GlobalSign GCC account
 * @member {String} profile-id
 */
CreateGlobalSignTarget.prototype['profile-id'] = undefined;

/**
 * Timeout waiting for certificate validation in Duration format (1h - 1 Hour, 20m - 20 Minutes, 33m3s - 33 Minutes and 3 Seconds), maximum 1h.
 * @member {String} timeout
 * @default '5m'
 */
CreateGlobalSignTarget.prototype['timeout'] = '5m';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateGlobalSignTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateGlobalSignTarget.prototype['uid-token'] = undefined;

/**
 * Username of the GlobalSign GCC account
 * @member {String} username
 */
CreateGlobalSignTarget.prototype['username'] = undefined;






export default CreateGlobalSignTarget;

