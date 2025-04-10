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
 * The DynamicSecretUpdateGcp model module.
 * @module model/DynamicSecretUpdateGcp
 * @version 5.0.2
 */
class DynamicSecretUpdateGcp {
    /**
     * Constructs a new <code>DynamicSecretUpdateGcp</code>.
     * dynamicSecretUpdateGcp is a command that updates a GCP dynamic secret
     * @alias module:model/DynamicSecretUpdateGcp
     * @param name {String} Dynamic secret name
     * @param serviceAccountType {String} The type of the gcp dynamic secret. Options[fixed, dynamic]
     */
    constructor(name, serviceAccountType) { 
        
        DynamicSecretUpdateGcp.initialize(this, name, serviceAccountType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, serviceAccountType) { 
        obj['json'] = false;
        obj['name'] = name;
        obj['service-account-type'] = serviceAccountType || 'fixed';
        obj['user-ttl'] = '60m';
    }

    /**
     * Constructs a <code>DynamicSecretUpdateGcp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretUpdateGcp} obj Optional instance to populate.
     * @return {module:model/DynamicSecretUpdateGcp} The populated <code>DynamicSecretUpdateGcp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretUpdateGcp();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('gcp-cred-type')) {
                obj['gcp-cred-type'] = ApiClient.convertToType(data['gcp-cred-type'], 'String');
            }
            if (data.hasOwnProperty('gcp-key')) {
                obj['gcp-key'] = ApiClient.convertToType(data['gcp-key'], 'String');
            }
            if (data.hasOwnProperty('gcp-key-algo')) {
                obj['gcp-key-algo'] = ApiClient.convertToType(data['gcp-key-algo'], 'String');
            }
            if (data.hasOwnProperty('gcp-sa-email')) {
                obj['gcp-sa-email'] = ApiClient.convertToType(data['gcp-sa-email'], 'String');
            }
            if (data.hasOwnProperty('gcp-token-scopes')) {
                obj['gcp-token-scopes'] = ApiClient.convertToType(data['gcp-token-scopes'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('role-binding')) {
                obj['role-binding'] = ApiClient.convertToType(data['role-binding'], 'String');
            }
            if (data.hasOwnProperty('service-account-type')) {
                obj['service-account-type'] = ApiClient.convertToType(data['service-account-type'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user-ttl')) {
                obj['user-ttl'] = ApiClient.convertToType(data['user-ttl'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DynamicSecretUpdateGcp</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DynamicSecretUpdateGcp</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DynamicSecretUpdateGcp.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['gcp-cred-type'] && !(typeof data['gcp-cred-type'] === 'string' || data['gcp-cred-type'] instanceof String)) {
            throw new Error("Expected the field `gcp-cred-type` to be a primitive type in the JSON string but got " + data['gcp-cred-type']);
        }
        // ensure the json data is a string
        if (data['gcp-key'] && !(typeof data['gcp-key'] === 'string' || data['gcp-key'] instanceof String)) {
            throw new Error("Expected the field `gcp-key` to be a primitive type in the JSON string but got " + data['gcp-key']);
        }
        // ensure the json data is a string
        if (data['gcp-key-algo'] && !(typeof data['gcp-key-algo'] === 'string' || data['gcp-key-algo'] instanceof String)) {
            throw new Error("Expected the field `gcp-key-algo` to be a primitive type in the JSON string but got " + data['gcp-key-algo']);
        }
        // ensure the json data is a string
        if (data['gcp-sa-email'] && !(typeof data['gcp-sa-email'] === 'string' || data['gcp-sa-email'] instanceof String)) {
            throw new Error("Expected the field `gcp-sa-email` to be a primitive type in the JSON string but got " + data['gcp-sa-email']);
        }
        // ensure the json data is a string
        if (data['gcp-token-scopes'] && !(typeof data['gcp-token-scopes'] === 'string' || data['gcp-token-scopes'] instanceof String)) {
            throw new Error("Expected the field `gcp-token-scopes` to be a primitive type in the JSON string but got " + data['gcp-token-scopes']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['new-name'] && !(typeof data['new-name'] === 'string' || data['new-name'] instanceof String)) {
            throw new Error("Expected the field `new-name` to be a primitive type in the JSON string but got " + data['new-name']);
        }
        // ensure the json data is a string
        if (data['producer-encryption-key-name'] && !(typeof data['producer-encryption-key-name'] === 'string' || data['producer-encryption-key-name'] instanceof String)) {
            throw new Error("Expected the field `producer-encryption-key-name` to be a primitive type in the JSON string but got " + data['producer-encryption-key-name']);
        }
        // ensure the json data is a string
        if (data['role-binding'] && !(typeof data['role-binding'] === 'string' || data['role-binding'] instanceof String)) {
            throw new Error("Expected the field `role-binding` to be a primitive type in the JSON string but got " + data['role-binding']);
        }
        // ensure the json data is a string
        if (data['service-account-type'] && !(typeof data['service-account-type'] === 'string' || data['service-account-type'] instanceof String)) {
            throw new Error("Expected the field `service-account-type` to be a primitive type in the JSON string but got " + data['service-account-type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['target-name'] && !(typeof data['target-name'] === 'string' || data['target-name'] instanceof String)) {
            throw new Error("Expected the field `target-name` to be a primitive type in the JSON string but got " + data['target-name']);
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
        if (data['user-ttl'] && !(typeof data['user-ttl'] === 'string' || data['user-ttl'] instanceof String)) {
            throw new Error("Expected the field `user-ttl` to be a primitive type in the JSON string but got " + data['user-ttl']);
        }

        return true;
    }


}

DynamicSecretUpdateGcp.RequiredProperties = ["name", "service-account-type"];

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
DynamicSecretUpdateGcp.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretUpdateGcp.prototype['description'] = undefined;

/**
 * @member {String} gcp-cred-type
 */
DynamicSecretUpdateGcp.prototype['gcp-cred-type'] = undefined;

/**
 * Base64-encoded service account private key text
 * @member {String} gcp-key
 */
DynamicSecretUpdateGcp.prototype['gcp-key'] = undefined;

/**
 * Service account key algorithm, e.g. KEY_ALG_RSA_1024
 * @member {String} gcp-key-algo
 */
DynamicSecretUpdateGcp.prototype['gcp-key-algo'] = undefined;

/**
 * The email of the fixed service acocunt to generate keys or tokens for. (revelant for service-account-type=fixed)
 * @member {String} gcp-sa-email
 */
DynamicSecretUpdateGcp.prototype['gcp-sa-email'] = undefined;

/**
 * Access token scopes list, e.g. scope1,scope2
 * @member {String} gcp-token-scopes
 */
DynamicSecretUpdateGcp.prototype['gcp-token-scopes'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretUpdateGcp.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretUpdateGcp.prototype['name'] = undefined;

/**
 * Dynamic secret name
 * @member {String} new-name
 */
DynamicSecretUpdateGcp.prototype['new-name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
DynamicSecretUpdateGcp.prototype['producer-encryption-key-name'] = undefined;

/**
 * Role binding definitions in json format
 * @member {String} role-binding
 */
DynamicSecretUpdateGcp.prototype['role-binding'] = undefined;

/**
 * The type of the gcp dynamic secret. Options[fixed, dynamic]
 * @member {String} service-account-type
 * @default 'fixed'
 */
DynamicSecretUpdateGcp.prototype['service-account-type'] = 'fixed';

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretUpdateGcp.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretUpdateGcp.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretUpdateGcp.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretUpdateGcp.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
DynamicSecretUpdateGcp.prototype['user-ttl'] = '60m';






export default DynamicSecretUpdateGcp;

