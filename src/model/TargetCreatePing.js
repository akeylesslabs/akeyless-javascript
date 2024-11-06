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
 * The TargetCreatePing model module.
 * @module model/TargetCreatePing
 * @version 4.3.0
 */
class TargetCreatePing {
    /**
     * Constructs a new <code>TargetCreatePing</code>.
     * targetCreatePing is a command that creates a new ping target
     * @alias module:model/TargetCreatePing
     * @param name {String} Target name
     */
    constructor(name) { 
        
        TargetCreatePing.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>TargetCreatePing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetCreatePing} obj Optional instance to populate.
     * @return {module:model/TargetCreatePing} The populated <code>TargetCreatePing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetCreatePing();

            if (data.hasOwnProperty('administrative-port')) {
                obj['administrative-port'] = ApiClient.convertToType(data['administrative-port'], 'String');
            }
            if (data.hasOwnProperty('authorization-port')) {
                obj['authorization-port'] = ApiClient.convertToType(data['authorization-port'], 'String');
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
        }
        return obj;
    }


}

/**
 * Ping Federate administrative port
 * @member {String} administrative-port
 * @default '9999'
 */
TargetCreatePing.prototype['administrative-port'] = '9999';

/**
 * Ping Federate authorization port
 * @member {String} authorization-port
 * @default '9031'
 */
TargetCreatePing.prototype['authorization-port'] = '9031';

/**
 * Description of the object
 * @member {String} description
 */
TargetCreatePing.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetCreatePing.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetCreatePing.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetCreatePing.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetCreatePing.prototype['name'] = undefined;

/**
 * Ping Federate privileged user password
 * @member {String} password
 */
TargetCreatePing.prototype['password'] = undefined;

/**
 * Ping URL
 * @member {String} ping-url
 */
TargetCreatePing.prototype['ping-url'] = undefined;

/**
 * Ping Federate privileged user
 * @member {String} privileged-user
 */
TargetCreatePing.prototype['privileged-user'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetCreatePing.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetCreatePing.prototype['uid-token'] = undefined;






export default TargetCreatePing;

