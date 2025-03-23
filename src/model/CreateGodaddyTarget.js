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
 * The CreateGodaddyTarget model module.
 * @module model/CreateGodaddyTarget
 * @version 5.0.1
 */
class CreateGodaddyTarget {
    /**
     * Constructs a new <code>CreateGodaddyTarget</code>.
     * createGodaddyTarget is a command that creates a new target. [Deprecated: Use target-create-godaddy command]
     * @alias module:model/CreateGodaddyTarget
     * @param apiKey {String} Key of the api credentials to the Godaddy account
     * @param imapFqdn {String} ImapFQDN of the IMAP service, FQDN or IPv4 address. Must be FQDN if the IMAP is using TLS
     * @param imapPassword {String} ImapPassword to access the IMAP service
     * @param imapUsername {String} ImapUsername to access the IMAP service
     * @param name {String} Target name
     * @param secret {String} Secret of the api credentials to the Godaddy account
     */
    constructor(apiKey, imapFqdn, imapPassword, imapUsername, name, secret) { 
        
        CreateGodaddyTarget.initialize(this, apiKey, imapFqdn, imapPassword, imapUsername, name, secret);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiKey, imapFqdn, imapPassword, imapUsername, name, secret) { 
        obj['api-key'] = apiKey;
        obj['imap-fqdn'] = imapFqdn;
        obj['imap-password'] = imapPassword;
        obj['imap-port'] = '993';
        obj['imap-username'] = imapUsername;
        obj['json'] = false;
        obj['name'] = name;
        obj['secret'] = secret;
        obj['timeout'] = '5m';
    }

    /**
     * Constructs a <code>CreateGodaddyTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateGodaddyTarget} obj Optional instance to populate.
     * @return {module:model/CreateGodaddyTarget} The populated <code>CreateGodaddyTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateGodaddyTarget();

            if (data.hasOwnProperty('api-key')) {
                obj['api-key'] = ApiClient.convertToType(data['api-key'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('imap-fqdn')) {
                obj['imap-fqdn'] = ApiClient.convertToType(data['imap-fqdn'], 'String');
            }
            if (data.hasOwnProperty('imap-password')) {
                obj['imap-password'] = ApiClient.convertToType(data['imap-password'], 'String');
            }
            if (data.hasOwnProperty('imap-port')) {
                obj['imap-port'] = ApiClient.convertToType(data['imap-port'], 'String');
            }
            if (data.hasOwnProperty('imap-username')) {
                obj['imap-username'] = ApiClient.convertToType(data['imap-username'], 'String');
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
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateGodaddyTarget</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateGodaddyTarget</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateGodaddyTarget.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['api-key'] && !(typeof data['api-key'] === 'string' || data['api-key'] instanceof String)) {
            throw new Error("Expected the field `api-key` to be a primitive type in the JSON string but got " + data['api-key']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['imap-fqdn'] && !(typeof data['imap-fqdn'] === 'string' || data['imap-fqdn'] instanceof String)) {
            throw new Error("Expected the field `imap-fqdn` to be a primitive type in the JSON string but got " + data['imap-fqdn']);
        }
        // ensure the json data is a string
        if (data['imap-password'] && !(typeof data['imap-password'] === 'string' || data['imap-password'] instanceof String)) {
            throw new Error("Expected the field `imap-password` to be a primitive type in the JSON string but got " + data['imap-password']);
        }
        // ensure the json data is a string
        if (data['imap-port'] && !(typeof data['imap-port'] === 'string' || data['imap-port'] instanceof String)) {
            throw new Error("Expected the field `imap-port` to be a primitive type in the JSON string but got " + data['imap-port']);
        }
        // ensure the json data is a string
        if (data['imap-username'] && !(typeof data['imap-username'] === 'string' || data['imap-username'] instanceof String)) {
            throw new Error("Expected the field `imap-username` to be a primitive type in the JSON string but got " + data['imap-username']);
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
        if (data['secret'] && !(typeof data['secret'] === 'string' || data['secret'] instanceof String)) {
            throw new Error("Expected the field `secret` to be a primitive type in the JSON string but got " + data['secret']);
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

        return true;
    }


}

CreateGodaddyTarget.RequiredProperties = ["api-key", "imap-fqdn", "imap-password", "imap-username", "name", "secret"];

/**
 * Key of the api credentials to the Godaddy account
 * @member {String} api-key
 */
CreateGodaddyTarget.prototype['api-key'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateGodaddyTarget.prototype['description'] = undefined;

/**
 * ImapFQDN of the IMAP service, FQDN or IPv4 address. Must be FQDN if the IMAP is using TLS
 * @member {String} imap-fqdn
 */
CreateGodaddyTarget.prototype['imap-fqdn'] = undefined;

/**
 * ImapPassword to access the IMAP service
 * @member {String} imap-password
 */
CreateGodaddyTarget.prototype['imap-password'] = undefined;

/**
 * ImapPort of the IMAP service
 * @member {String} imap-port
 * @default '993'
 */
CreateGodaddyTarget.prototype['imap-port'] = '993';

/**
 * ImapUsername to access the IMAP service
 * @member {String} imap-username
 */
CreateGodaddyTarget.prototype['imap-username'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateGodaddyTarget.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateGodaddyTarget.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
CreateGodaddyTarget.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
CreateGodaddyTarget.prototype['name'] = undefined;

/**
 * Secret of the api credentials to the Godaddy account
 * @member {String} secret
 */
CreateGodaddyTarget.prototype['secret'] = undefined;

/**
 * Timeout waiting for certificate validation in Duration format (1h - 1 Hour, 20m - 20 Minutes, 33m3s - 33 Minutes and 3 Seconds), maximum 1h.
 * @member {String} timeout
 * @default '5m'
 */
CreateGodaddyTarget.prototype['timeout'] = '5m';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateGodaddyTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateGodaddyTarget.prototype['uid-token'] = undefined;






export default CreateGodaddyTarget;

