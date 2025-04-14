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
 * The CreateSalesforceTarget model module.
 * @module model/CreateSalesforceTarget
 * @version 5.0.3
 */
class CreateSalesforceTarget {
    /**
     * Constructs a new <code>CreateSalesforceTarget</code>.
     * createSalesforceTarget is a command that creates a new target. [Deprecated: Use target-create-salesforce command]
     * @alias module:model/CreateSalesforceTarget
     * @param authFlow {String} type of the auth flow ('jwt' / 'user-password')
     * @param clientId {String} Client ID of the oauth2 app to use for connecting to Salesforce
     * @param email {String} The email of the user attached to the oauth2 app used for connecting to Salesforce
     * @param name {String} Target name
     * @param tenantUrl {String} Url of the Salesforce tenant
     */
    constructor(authFlow, clientId, email, name, tenantUrl) { 
        
        CreateSalesforceTarget.initialize(this, authFlow, clientId, email, name, tenantUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, authFlow, clientId, email, name, tenantUrl) { 
        obj['auth-flow'] = authFlow;
        obj['client-id'] = clientId;
        obj['email'] = email;
        obj['json'] = false;
        obj['name'] = name;
        obj['tenant-url'] = tenantUrl;
    }

    /**
     * Constructs a <code>CreateSalesforceTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSalesforceTarget} obj Optional instance to populate.
     * @return {module:model/CreateSalesforceTarget} The populated <code>CreateSalesforceTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSalesforceTarget();

            if (data.hasOwnProperty('app-private-key-data')) {
                obj['app-private-key-data'] = ApiClient.convertToType(data['app-private-key-data'], 'String');
            }
            if (data.hasOwnProperty('auth-flow')) {
                obj['auth-flow'] = ApiClient.convertToType(data['auth-flow'], 'String');
            }
            if (data.hasOwnProperty('ca-cert-data')) {
                obj['ca-cert-data'] = ApiClient.convertToType(data['ca-cert-data'], 'String');
            }
            if (data.hasOwnProperty('ca-cert-name')) {
                obj['ca-cert-name'] = ApiClient.convertToType(data['ca-cert-name'], 'String');
            }
            if (data.hasOwnProperty('client-id')) {
                obj['client-id'] = ApiClient.convertToType(data['client-id'], 'String');
            }
            if (data.hasOwnProperty('client-secret')) {
                obj['client-secret'] = ApiClient.convertToType(data['client-secret'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
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
            if (data.hasOwnProperty('security-token')) {
                obj['security-token'] = ApiClient.convertToType(data['security-token'], 'String');
            }
            if (data.hasOwnProperty('tenant-url')) {
                obj['tenant-url'] = ApiClient.convertToType(data['tenant-url'], 'String');
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
     * Validates the JSON data with respect to <code>CreateSalesforceTarget</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateSalesforceTarget</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateSalesforceTarget.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['app-private-key-data'] && !(typeof data['app-private-key-data'] === 'string' || data['app-private-key-data'] instanceof String)) {
            throw new Error("Expected the field `app-private-key-data` to be a primitive type in the JSON string but got " + data['app-private-key-data']);
        }
        // ensure the json data is a string
        if (data['auth-flow'] && !(typeof data['auth-flow'] === 'string' || data['auth-flow'] instanceof String)) {
            throw new Error("Expected the field `auth-flow` to be a primitive type in the JSON string but got " + data['auth-flow']);
        }
        // ensure the json data is a string
        if (data['ca-cert-data'] && !(typeof data['ca-cert-data'] === 'string' || data['ca-cert-data'] instanceof String)) {
            throw new Error("Expected the field `ca-cert-data` to be a primitive type in the JSON string but got " + data['ca-cert-data']);
        }
        // ensure the json data is a string
        if (data['ca-cert-name'] && !(typeof data['ca-cert-name'] === 'string' || data['ca-cert-name'] instanceof String)) {
            throw new Error("Expected the field `ca-cert-name` to be a primitive type in the JSON string but got " + data['ca-cert-name']);
        }
        // ensure the json data is a string
        if (data['client-id'] && !(typeof data['client-id'] === 'string' || data['client-id'] instanceof String)) {
            throw new Error("Expected the field `client-id` to be a primitive type in the JSON string but got " + data['client-id']);
        }
        // ensure the json data is a string
        if (data['client-secret'] && !(typeof data['client-secret'] === 'string' || data['client-secret'] instanceof String)) {
            throw new Error("Expected the field `client-secret` to be a primitive type in the JSON string but got " + data['client-secret']);
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
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
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['security-token'] && !(typeof data['security-token'] === 'string' || data['security-token'] instanceof String)) {
            throw new Error("Expected the field `security-token` to be a primitive type in the JSON string but got " + data['security-token']);
        }
        // ensure the json data is a string
        if (data['tenant-url'] && !(typeof data['tenant-url'] === 'string' || data['tenant-url'] instanceof String)) {
            throw new Error("Expected the field `tenant-url` to be a primitive type in the JSON string but got " + data['tenant-url']);
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

CreateSalesforceTarget.RequiredProperties = ["auth-flow", "client-id", "email", "name", "tenant-url"];

/**
 * Base64 encoded PEM of the connected app private key (relevant for JWT auth only)
 * @member {String} app-private-key-data
 */
CreateSalesforceTarget.prototype['app-private-key-data'] = undefined;

/**
 * type of the auth flow ('jwt' / 'user-password')
 * @member {String} auth-flow
 */
CreateSalesforceTarget.prototype['auth-flow'] = undefined;

/**
 * Base64 encoded PEM cert to use when uploading a new key to Salesforce
 * @member {String} ca-cert-data
 */
CreateSalesforceTarget.prototype['ca-cert-data'] = undefined;

/**
 * name of the certificate in Salesforce tenant to use when uploading new key
 * @member {String} ca-cert-name
 */
CreateSalesforceTarget.prototype['ca-cert-name'] = undefined;

/**
 * Client ID of the oauth2 app to use for connecting to Salesforce
 * @member {String} client-id
 */
CreateSalesforceTarget.prototype['client-id'] = undefined;

/**
 * Client secret of the oauth2 app to use for connecting to Salesforce (required for password flow)
 * @member {String} client-secret
 */
CreateSalesforceTarget.prototype['client-secret'] = undefined;

/**
 * Deprecated - use description
 * @member {String} comment
 */
CreateSalesforceTarget.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateSalesforceTarget.prototype['description'] = undefined;

/**
 * The email of the user attached to the oauth2 app used for connecting to Salesforce
 * @member {String} email
 */
CreateSalesforceTarget.prototype['email'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateSalesforceTarget.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateSalesforceTarget.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
CreateSalesforceTarget.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
CreateSalesforceTarget.prototype['name'] = undefined;

/**
 * The password of the user attached to the oauth2 app used for connecting to Salesforce (required for user-password flow)
 * @member {String} password
 */
CreateSalesforceTarget.prototype['password'] = undefined;

/**
 * The security token of the user attached to the oauth2 app used for connecting to Salesforce  (required for user-password flow)
 * @member {String} security-token
 */
CreateSalesforceTarget.prototype['security-token'] = undefined;

/**
 * Url of the Salesforce tenant
 * @member {String} tenant-url
 */
CreateSalesforceTarget.prototype['tenant-url'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateSalesforceTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateSalesforceTarget.prototype['uid-token'] = undefined;






export default CreateSalesforceTarget;

