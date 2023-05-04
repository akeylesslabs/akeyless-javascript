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
 * The CreateWindowsTarget model module.
 * @module model/CreateWindowsTarget
 * @version 3.3.1
 */
class CreateWindowsTarget {
    /**
     * Constructs a new <code>CreateWindowsTarget</code>.
     * @alias module:model/CreateWindowsTarget
     * @param hostname {String} Server hostname
     * @param name {String} Target name
     * @param password {String} Privileged user password
     * @param username {String} Privileged username
     */
    constructor(hostname, name, password, username) { 
        
        CreateWindowsTarget.initialize(this, hostname, name, password, username);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, hostname, name, password, username) { 
        obj['hostname'] = hostname;
        obj['name'] = name;
        obj['password'] = password;
        obj['username'] = username;
    }

    /**
     * Constructs a <code>CreateWindowsTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateWindowsTarget} obj Optional instance to populate.
     * @return {module:model/CreateWindowsTarget} The populated <code>CreateWindowsTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateWindowsTarget();

            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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


}

/**
 * SSL CA certificate in base64 encoding generated from a trusted Certificate Authority (CA)
 * @member {String} certificate
 */
CreateWindowsTarget.prototype['certificate'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateWindowsTarget.prototype['description'] = undefined;

/**
 * User domain name
 * @member {String} domain
 */
CreateWindowsTarget.prototype['domain'] = undefined;

/**
 * Server hostname
 * @member {String} hostname
 */
CreateWindowsTarget.prototype['hostname'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateWindowsTarget.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateWindowsTarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
CreateWindowsTarget.prototype['name'] = undefined;

/**
 * Privileged user password
 * @member {String} password
 */
CreateWindowsTarget.prototype['password'] = undefined;

/**
 * Server WinRM port
 * @member {String} port
 * @default '5986'
 */
CreateWindowsTarget.prototype['port'] = '5986';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateWindowsTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateWindowsTarget.prototype['uid-token'] = undefined;

/**
 * Enable/Disable TLS for WinRM over HTTPS [true/false]
 * @member {String} use-tls
 * @default 'true'
 */
CreateWindowsTarget.prototype['use-tls'] = 'true';

/**
 * Privileged username
 * @member {String} username
 */
CreateWindowsTarget.prototype['username'] = undefined;






export default CreateWindowsTarget;

