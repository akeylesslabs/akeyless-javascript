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
 * The UpdateOidcApp model module.
 * @module model/UpdateOidcApp
 * @version 4.3.0
 */
class UpdateOidcApp {
    /**
     * Constructs a new <code>UpdateOidcApp</code>.
     * @alias module:model/UpdateOidcApp
     * @param name {String} OIDC application name
     */
    constructor(name) { 
        
        UpdateOidcApp.initialize(this, name);
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
     * Constructs a <code>UpdateOidcApp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateOidcApp} obj Optional instance to populate.
     * @return {module:model/UpdateOidcApp} The populated <code>UpdateOidcApp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateOidcApp();

            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], 'String');
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
            if (data.hasOwnProperty('permission-assignment')) {
                obj['permission-assignment'] = ApiClient.convertToType(data['permission-assignment'], 'String');
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
            }
            if (data.hasOwnProperty('redirect-uris')) {
                obj['redirect-uris'] = ApiClient.convertToType(data['redirect-uris'], 'String');
            }
            if (data.hasOwnProperty('scopes')) {
                obj['scopes'] = ApiClient.convertToType(data['scopes'], 'String');
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
 * A comma separated list of allowed audiences
 * @member {String} audience
 */
UpdateOidcApp.prototype['audience'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateOidcApp.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the OIDC application (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateOidcApp.prototype['key'] = undefined;

/**
 * OIDC application name
 * @member {String} name
 */
UpdateOidcApp.prototype['name'] = undefined;

/**
 * A json string defining the access permission assignment for this app
 * @member {String} permission-assignment
 */
UpdateOidcApp.prototype['permission-assignment'] = undefined;

/**
 * Set to true if the app is public (cannot keep secrets)
 * @member {Boolean} public
 */
UpdateOidcApp.prototype['public'] = undefined;

/**
 * A comma separated list of allowed redirect uris
 * @member {String} redirect-uris
 */
UpdateOidcApp.prototype['redirect-uris'] = undefined;

/**
 * A comma separated list of allowed scopes
 * @member {String} scopes
 * @default 'openid'
 */
UpdateOidcApp.prototype['scopes'] = 'openid';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateOidcApp.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateOidcApp.prototype['uid-token'] = undefined;






export default UpdateOidcApp;

