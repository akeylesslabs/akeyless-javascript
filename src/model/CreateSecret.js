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
 * @version 2.16.11
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

            if (data.hasOwnProperty('custom-fields')) {
                obj['custom-fields'] = ApiClient.convertToType(data['custom-fields'], {'String': 'String'});
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('item-accessibility')) {
                obj['item-accessibility'] = ApiClient.convertToType(data['item-accessibility'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('multiline_value')) {
                obj['multiline_value'] = ApiClient.convertToType(data['multiline_value'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'Number');
            }
            if (data.hasOwnProperty('protection_key')) {
                obj['protection_key'] = ApiClient.convertToType(data['protection_key'], 'String');
            }
            if (data.hasOwnProperty('secure-access-bastion-issuer')) {
                obj['secure-access-bastion-issuer'] = ApiClient.convertToType(data['secure-access-bastion-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-host')) {
                obj['secure-access-host'] = ApiClient.convertToType(data['secure-access-host'], ['String']);
            }
            if (data.hasOwnProperty('secure-access-ssh-creds')) {
                obj['secure-access-ssh-creds'] = ApiClient.convertToType(data['secure-access-ssh-creds'], 'String');
            }
            if (data.hasOwnProperty('secure-access-ssh-user')) {
                obj['secure-access-ssh-user'] = ApiClient.convertToType(data['secure-access-ssh-user'], 'String');
            }
            if (data.hasOwnProperty('secure-access-url')) {
                obj['secure-access-url'] = ApiClient.convertToType(data['secure-access-url'], 'String');
            }
            if (data.hasOwnProperty('secure-access-web-browsing')) {
                obj['secure-access-web-browsing'] = ApiClient.convertToType(data['secure-access-web-browsing'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-proxy')) {
                obj['secure-access-web-proxy'] = ApiClient.convertToType(data['secure-access-web-proxy'], 'Boolean');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('use-lower-letters')) {
                obj['use-lower-letters'] = ApiClient.convertToType(data['use-lower-letters'], 'String');
            }
            if (data.hasOwnProperty('use-numbers')) {
                obj['use-numbers'] = ApiClient.convertToType(data['use-numbers'], 'String');
            }
            if (data.hasOwnProperty('use-special-characters')) {
                obj['use-special-characters'] = ApiClient.convertToType(data['use-special-characters'], 'String');
            }
            if (data.hasOwnProperty('use_capital-letters')) {
                obj['use_capital-letters'] = ApiClient.convertToType(data['use_capital-letters'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
        }
        return obj;
    }


}

/**
 * For Password Management use, additional fields
 * @member {Object.<String, String>} custom-fields
 */
CreateSecret.prototype['custom-fields'] = undefined;

/**
 * Protection from accidental deletion of this item
 * @member {String} delete_protection
 */
CreateSecret.prototype['delete_protection'] = undefined;

/**
 * for personal password manager
 * @member {String} item-accessibility
 */
CreateSecret.prototype['item-accessibility'] = undefined;

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
 * For PasswordPolicy use
 * @member {Number} password-length
 */
CreateSecret.prototype['password-length'] = undefined;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} protection_key
 */
CreateSecret.prototype['protection_key'] = undefined;

/**
 * @member {String} secure-access-bastion-issuer
 */
CreateSecret.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * @member {String} secure-access-enable
 */
CreateSecret.prototype['secure-access-enable'] = undefined;

/**
 * @member {Array.<String>} secure-access-host
 */
CreateSecret.prototype['secure-access-host'] = undefined;

/**
 * @member {String} secure-access-ssh-creds
 */
CreateSecret.prototype['secure-access-ssh-creds'] = undefined;

/**
 * @member {String} secure-access-ssh-user
 */
CreateSecret.prototype['secure-access-ssh-user'] = undefined;

/**
 * @member {String} secure-access-url
 */
CreateSecret.prototype['secure-access-url'] = undefined;

/**
 * @member {Boolean} secure-access-web-browsing
 */
CreateSecret.prototype['secure-access-web-browsing'] = undefined;

/**
 * @member {Boolean} secure-access-web-proxy
 */
CreateSecret.prototype['secure-access-web-proxy'] = undefined;

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
 * For Password Management use, reflect the website context
 * @member {String} type
 */
CreateSecret.prototype['type'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateSecret.prototype['uid-token'] = undefined;

/**
 * For PasswordPolicy use
 * @member {String} use-lower-letters
 */
CreateSecret.prototype['use-lower-letters'] = undefined;

/**
 * For PasswordPolicy use
 * @member {String} use-numbers
 */
CreateSecret.prototype['use-numbers'] = undefined;

/**
 * For PasswordPolicy use
 * @member {String} use-special-characters
 */
CreateSecret.prototype['use-special-characters'] = undefined;

/**
 * For PasswordPolicy use
 * @member {String} use_capital-letters
 */
CreateSecret.prototype['use_capital-letters'] = undefined;

/**
 * For Password Management use
 * @member {String} username
 */
CreateSecret.prototype['username'] = undefined;

/**
 * The secret value
 * @member {String} value
 */
CreateSecret.prototype['value'] = undefined;

/**
 * For Password Management use, reflect the website context
 * @member {String} website
 */
CreateSecret.prototype['website'] = undefined;






export default CreateSecret;

