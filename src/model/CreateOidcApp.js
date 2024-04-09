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
 * The CreateOidcApp model module.
 * @module model/CreateOidcApp
 * @version 3.6.3
 */
class CreateOidcApp {
    /**
     * Constructs a new <code>CreateOidcApp</code>.
     * @alias module:model/CreateOidcApp
     * @param name {String} OIDC application name
     */
    constructor(name) { 
        
        CreateOidcApp.initialize(this, name);
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
     * Constructs a <code>CreateOidcApp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateOidcApp} obj Optional instance to populate.
     * @return {module:model/CreateOidcApp} The populated <code>CreateOidcApp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateOidcApp();

            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
            }
            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ApiClient.convertToType(data['audience'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
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
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
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
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
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
 * for personal password manager
 * @member {String} accessibility
 * @default 'regular'
 */
CreateOidcApp.prototype['accessibility'] = 'regular';

/**
 * A comma separated list of allowed audiences
 * @member {String} audience
 */
CreateOidcApp.prototype['audience'] = undefined;

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
CreateOidcApp.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateOidcApp.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateOidcApp.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the OIDC application (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateOidcApp.prototype['key'] = undefined;

/**
 * Deprecated - use description
 * @member {String} metadata
 */
CreateOidcApp.prototype['metadata'] = undefined;

/**
 * OIDC application name
 * @member {String} name
 */
CreateOidcApp.prototype['name'] = undefined;

/**
 * A json string defining the access permission assignment for this app
 * @member {String} permission-assignment
 */
CreateOidcApp.prototype['permission-assignment'] = undefined;

/**
 * Set to true if the app is public (cannot keep secrets)
 * @member {Boolean} public
 */
CreateOidcApp.prototype['public'] = undefined;

/**
 * A comma separated list of allowed redirect uris
 * @member {String} redirect-uris
 */
CreateOidcApp.prototype['redirect-uris'] = undefined;

/**
 * A comma separated list of allowed scopes
 * @member {String} scopes
 * @default 'openid'
 */
CreateOidcApp.prototype['scopes'] = 'openid';

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
CreateOidcApp.prototype['tags'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateOidcApp.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateOidcApp.prototype['uid-token'] = undefined;






export default CreateOidcApp;

