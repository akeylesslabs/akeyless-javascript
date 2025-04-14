/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TargetCreateWindows model module.
 * @module model/TargetCreateWindows
 * @version 5.0.3
 */
class TargetCreateWindows {
    /**
     * Constructs a new <code>TargetCreateWindows</code>.
     * GatewayCreateProducerWindowsCmd is a command that creates a new windows target
     * @alias module:model/TargetCreateWindows
     * @param hostname {String} Server hostname
     * @param name {String} Target name
     * @param password {String} Privileged user password
     * @param username {String} Privileged username
     */
    constructor(hostname, name, password, username) { 
        
        TargetCreateWindows.initialize(this, hostname, name, password, username);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, hostname, name, password, username) { 
        obj['connection-type'] = 'credentials';
        obj['hostname'] = hostname;
        obj['json'] = false;
        obj['name'] = name;
        obj['password'] = password || 'dummy_value';
        obj['port'] = '5986';
        obj['use-tls'] = 'true';
        obj['username'] = username || 'dummy_value';
    }

    /**
     * Constructs a <code>TargetCreateWindows</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetCreateWindows} obj Optional instance to populate.
     * @return {module:model/TargetCreateWindows} The populated <code>TargetCreateWindows</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetCreateWindows();

            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
            }
            if (data.hasOwnProperty('connection-type')) {
                obj['connection-type'] = ApiClient.convertToType(data['connection-type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
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
            if (data.hasOwnProperty('parent-target-name')) {
                obj['parent-target-name'] = ApiClient.convertToType(data['parent-target-name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('use-tls')) {
                obj['use-tls'] = ApiClient.convertToType(data['use-tls'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TargetCreateWindows</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TargetCreateWindows</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TargetCreateWindows.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['certificate'] && !(typeof data['certificate'] === 'string' || data['certificate'] instanceof String)) {
            throw new Error("Expected the field `certificate` to be a primitive type in the JSON string but got " + data['certificate']);
        }
        // ensure the json data is a string
        if (data['connection-type'] && !(typeof data['connection-type'] === 'string' || data['connection-type'] instanceof String)) {
            throw new Error("Expected the field `connection-type` to be a primitive type in the JSON string but got " + data['connection-type']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['domain'] && !(typeof data['domain'] === 'string' || data['domain'] instanceof String)) {
            throw new Error("Expected the field `domain` to be a primitive type in the JSON string but got " + data['domain']);
        }
        // ensure the json data is a string
        if (data['hostname'] && !(typeof data['hostname'] === 'string' || data['hostname'] instanceof String)) {
            throw new Error("Expected the field `hostname` to be a primitive type in the JSON string but got " + data['hostname']);
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
        if (data['parent-target-name'] && !(typeof data['parent-target-name'] === 'string' || data['parent-target-name'] instanceof String)) {
            throw new Error("Expected the field `parent-target-name` to be a primitive type in the JSON string but got " + data['parent-target-name']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['port'] && !(typeof data['port'] === 'string' || data['port'] instanceof String)) {
            throw new Error("Expected the field `port` to be a primitive type in the JSON string but got " + data['port']);
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
        if (data['use-tls'] && !(typeof data['use-tls'] === 'string' || data['use-tls'] instanceof String)) {
            throw new Error("Expected the field `use-tls` to be a primitive type in the JSON string but got " + data['use-tls']);
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }

        return true;
    }


}

TargetCreateWindows.RequiredProperties = ["hostname", "name", "password", "username"];

/**
 * SSL CA certificate in base64 encoding generated from a trusted Certificate Authority (CA)
 * @member {String} certificate
 */
TargetCreateWindows.prototype['certificate'] = undefined;

/**
 * Type of connection to Windows Server [credentials/parent-target]
 * @member {String} connection-type
 * @default 'credentials'
 */
TargetCreateWindows.prototype['connection-type'] = 'credentials';

/**
 * Description of the object
 * @member {String} description
 */
TargetCreateWindows.prototype['description'] = undefined;

/**
 * User domain name
 * @member {String} domain
 */
TargetCreateWindows.prototype['domain'] = undefined;

/**
 * Server hostname
 * @member {String} hostname
 */
TargetCreateWindows.prototype['hostname'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetCreateWindows.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetCreateWindows.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetCreateWindows.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetCreateWindows.prototype['name'] = undefined;

/**
 * Name of the parent target, relevant only when connection-type is parent-target
 * @member {String} parent-target-name
 */
TargetCreateWindows.prototype['parent-target-name'] = undefined;

/**
 * Privileged user password
 * @member {String} password
 * @default 'dummy_value'
 */
TargetCreateWindows.prototype['password'] = 'dummy_value';

/**
 * Server WinRM port
 * @member {String} port
 * @default '5986'
 */
TargetCreateWindows.prototype['port'] = '5986';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetCreateWindows.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetCreateWindows.prototype['uid-token'] = undefined;

/**
 * Enable/Disable TLS for WinRM over HTTPS [true/false]
 * @member {String} use-tls
 * @default 'true'
 */
TargetCreateWindows.prototype['use-tls'] = 'true';

/**
 * Privileged username
 * @member {String} username
 * @default 'dummy_value'
 */
TargetCreateWindows.prototype['username'] = 'dummy_value';






export default TargetCreateWindows;

