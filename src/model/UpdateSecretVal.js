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
 * The UpdateSecretVal model module.
 * @module model/UpdateSecretVal
 * @version 2.5.10
 */
class UpdateSecretVal {
    /**
     * Constructs a new <code>UpdateSecretVal</code>.
     * @alias module:model/UpdateSecretVal
     * @param name {String} Secret name
     * @param value {String} The new secret value
     */
    constructor(name, value) { 
        
        UpdateSecretVal.initialize(this, name, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, value) { 
        obj['name'] = name;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>UpdateSecretVal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateSecretVal} obj Optional instance to populate.
     * @return {module:model/UpdateSecretVal} The populated <code>UpdateSecretVal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateSecretVal();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('multiline')) {
                obj['multiline'] = ApiClient.convertToType(data['multiline'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-version')) {
                obj['new-version'] = ApiClient.convertToType(data['new-version'], 'Boolean');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
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
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateSecretVal.prototype['key'] = undefined;

/**
 * The provided value is a multiline value (separated by '\\n')
 * @member {Boolean} multiline
 */
UpdateSecretVal.prototype['multiline'] = undefined;

/**
 * Secret name
 * @member {String} name
 */
UpdateSecretVal.prototype['name'] = undefined;

/**
 * Whether to create a new version of not
 * @member {Boolean} new-version
 * @default false
 */
UpdateSecretVal.prototype['new-version'] = false;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
UpdateSecretVal.prototype['password'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateSecretVal.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateSecretVal.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
UpdateSecretVal.prototype['username'] = undefined;

/**
 * The new secret value
 * @member {String} value
 */
UpdateSecretVal.prototype['value'] = undefined;






export default UpdateSecretVal;

