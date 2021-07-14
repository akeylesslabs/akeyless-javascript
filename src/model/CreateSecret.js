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
 * The CreateSecret model module.
 * @module model/CreateSecret
 * @version 2.5.3
 */
class CreateSecret {
    /**
     * Constructs a new <code>CreateSecret</code>.
     * @alias module:model/CreateSecret
     * @param name {String} Secret name
     * @param value {String} The secret value
     */
    constructor(name, value) { 
        
        CreateSecret.initialize(this, name, value);
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
     * Constructs a <code>CreateSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSecret} obj Optional instance to populate.
     * @return {module:model/CreateSecret} The populated <code>CreateSecret</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSecret();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('multiline_value')) {
                obj['multiline_value'] = ApiClient.convertToType(data['multiline_value'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('protection_key')) {
                obj['protection_key'] = ApiClient.convertToType(data['protection_key'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
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
 * Metadata about the secret
 * @member {String} metadata
 */
CreateSecret.prototype['metadata'] = undefined;

/**
 * The provided value is a multiline value (separated by '\\n')
 * @member {Boolean} multiline_value
 */
CreateSecret.prototype['multiline_value'] = undefined;

/**
 * Secret name
 * @member {String} name
 */
CreateSecret.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
CreateSecret.prototype['password'] = undefined;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} protection_key
 */
CreateSecret.prototype['protection_key'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
CreateSecret.prototype['tags'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateSecret.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateSecret.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
CreateSecret.prototype['username'] = undefined;

/**
 * The secret value
 * @member {String} value
 */
CreateSecret.prototype['value'] = undefined;






export default CreateSecret;

