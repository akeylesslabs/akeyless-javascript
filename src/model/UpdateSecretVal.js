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
 * @version 3.5.1
 */
class UpdateSecretVal {
    /**
     * Constructs a new <code>UpdateSecretVal</code>.
     * @alias module:model/UpdateSecretVal
     * @param name {String} Secret name
     * @param value {String} The secret value (only relevant for type 'generic')
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

            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
            }
            if (data.hasOwnProperty('custom-field')) {
                obj['custom-field'] = ApiClient.convertToType(data['custom-field'], {'String': 'String'});
            }
            if (data.hasOwnProperty('inject-url')) {
                obj['inject-url'] = ApiClient.convertToType(data['inject-url'], ['String']);
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
 * for personal password manager
 * @member {String} accessibility
 * @default 'regular'
 */
UpdateSecretVal.prototype['accessibility'] = 'regular';

/**
 * For Password Management use, additional fields
 * @member {Object.<String, String>} custom-field
 */
UpdateSecretVal.prototype['custom-field'] = undefined;

/**
 * For Password Management use, reflect the website context
 * @member {Array.<String>} inject-url
 */
UpdateSecretVal.prototype['inject-url'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateSecretVal.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
UpdateSecretVal.prototype['keep-prev-version'] = undefined;

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
 * Deprecated
 * @member {Boolean} new-version
 */
UpdateSecretVal.prototype['new-version'] = undefined;

/**
 * For Password Management use, additional fields
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
 * For Password Management use
 * @member {String} username
 */
UpdateSecretVal.prototype['username'] = undefined;

/**
 * The secret value (only relevant for type 'generic')
 * @member {String} value
 */
UpdateSecretVal.prototype['value'] = undefined;






export default UpdateSecretVal;

