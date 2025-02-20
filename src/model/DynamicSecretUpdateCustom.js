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
 * The DynamicSecretUpdateCustom model module.
 * @module model/DynamicSecretUpdateCustom
 * @version 5.0.0
 */
class DynamicSecretUpdateCustom {
    /**
     * Constructs a new <code>DynamicSecretUpdateCustom</code>.
     * @alias module:model/DynamicSecretUpdateCustom
     * @param createSyncUrl {String} URL of an endpoint that implements /sync/create method, for example https://webhook.example.com/sync/create
     * @param name {String} Dynamic secret name
     * @param revokeSyncUrl {String} URL of an endpoint that implements /sync/revoke method, for example https://webhook.example.com/sync/revoke
     */
    constructor(createSyncUrl, name, revokeSyncUrl) { 
        
        DynamicSecretUpdateCustom.initialize(this, createSyncUrl, name, revokeSyncUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createSyncUrl, name, revokeSyncUrl) { 
        obj['create-sync-url'] = createSyncUrl;
        obj['enable-admin-rotation'] = false;
        obj['json'] = false;
        obj['name'] = name;
        obj['revoke-sync-url'] = revokeSyncUrl;
        obj['timeout-sec'] = 60;
        obj['user-ttl'] = '60m';
    }

    /**
     * Constructs a <code>DynamicSecretUpdateCustom</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretUpdateCustom} obj Optional instance to populate.
     * @return {module:model/DynamicSecretUpdateCustom} The populated <code>DynamicSecretUpdateCustom</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretUpdateCustom();

            if (data.hasOwnProperty('admin-rotation-interval-days')) {
                obj['admin-rotation-interval-days'] = ApiClient.convertToType(data['admin-rotation-interval-days'], 'Number');
            }
            if (data.hasOwnProperty('create-sync-url')) {
                obj['create-sync-url'] = ApiClient.convertToType(data['create-sync-url'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('enable-admin-rotation')) {
                obj['enable-admin-rotation'] = ApiClient.convertToType(data['enable-admin-rotation'], 'Boolean');
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
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('revoke-sync-url')) {
                obj['revoke-sync-url'] = ApiClient.convertToType(data['revoke-sync-url'], 'String');
            }
            if (data.hasOwnProperty('rotate-sync-url')) {
                obj['rotate-sync-url'] = ApiClient.convertToType(data['rotate-sync-url'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('timeout-sec')) {
                obj['timeout-sec'] = ApiClient.convertToType(data['timeout-sec'], 'Number');
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
     * Validates the JSON data with respect to <code>DynamicSecretUpdateCustom</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DynamicSecretUpdateCustom</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DynamicSecretUpdateCustom.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['create-sync-url'] && !(typeof data['create-sync-url'] === 'string' || data['create-sync-url'] instanceof String)) {
            throw new Error("Expected the field `create-sync-url` to be a primitive type in the JSON string but got " + data['create-sync-url']);
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
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['new-name'] && !(typeof data['new-name'] === 'string' || data['new-name'] instanceof String)) {
            throw new Error("Expected the field `new-name` to be a primitive type in the JSON string but got " + data['new-name']);
        }
        // ensure the json data is a string
        if (data['payload'] && !(typeof data['payload'] === 'string' || data['payload'] instanceof String)) {
            throw new Error("Expected the field `payload` to be a primitive type in the JSON string but got " + data['payload']);
        }
        // ensure the json data is a string
        if (data['producer-encryption-key-name'] && !(typeof data['producer-encryption-key-name'] === 'string' || data['producer-encryption-key-name'] instanceof String)) {
            throw new Error("Expected the field `producer-encryption-key-name` to be a primitive type in the JSON string but got " + data['producer-encryption-key-name']);
        }
        // ensure the json data is a string
        if (data['revoke-sync-url'] && !(typeof data['revoke-sync-url'] === 'string' || data['revoke-sync-url'] instanceof String)) {
            throw new Error("Expected the field `revoke-sync-url` to be a primitive type in the JSON string but got " + data['revoke-sync-url']);
        }
        // ensure the json data is a string
        if (data['rotate-sync-url'] && !(typeof data['rotate-sync-url'] === 'string' || data['rotate-sync-url'] instanceof String)) {
            throw new Error("Expected the field `rotate-sync-url` to be a primitive type in the JSON string but got " + data['rotate-sync-url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
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

DynamicSecretUpdateCustom.RequiredProperties = ["create-sync-url", "name", "revoke-sync-url"];

/**
 * Define rotation interval in days
 * @member {Number} admin-rotation-interval-days
 */
DynamicSecretUpdateCustom.prototype['admin-rotation-interval-days'] = undefined;

/**
 * URL of an endpoint that implements /sync/create method, for example https://webhook.example.com/sync/create
 * @member {String} create-sync-url
 */
DynamicSecretUpdateCustom.prototype['create-sync-url'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
DynamicSecretUpdateCustom.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretUpdateCustom.prototype['description'] = undefined;

/**
 * Should admin credentials be rotated
 * @member {Boolean} enable-admin-rotation
 * @default false
 */
DynamicSecretUpdateCustom.prototype['enable-admin-rotation'] = false;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretUpdateCustom.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretUpdateCustom.prototype['name'] = undefined;

/**
 * Dynamic secret name
 * @member {String} new-name
 */
DynamicSecretUpdateCustom.prototype['new-name'] = undefined;

/**
 * Secret payload to be sent with each create/revoke webhook request
 * @member {String} payload
 */
DynamicSecretUpdateCustom.prototype['payload'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
DynamicSecretUpdateCustom.prototype['producer-encryption-key-name'] = undefined;

/**
 * URL of an endpoint that implements /sync/revoke method, for example https://webhook.example.com/sync/revoke
 * @member {String} revoke-sync-url
 */
DynamicSecretUpdateCustom.prototype['revoke-sync-url'] = undefined;

/**
 * URL of an endpoint that implements /sync/rotate method, for example https://webhook.example.com/sync/rotate
 * @member {String} rotate-sync-url
 */
DynamicSecretUpdateCustom.prototype['rotate-sync-url'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretUpdateCustom.prototype['tags'] = undefined;

/**
 * Maximum allowed time in seconds for the webhook to return the results
 * @member {Number} timeout-sec
 * @default 60
 */
DynamicSecretUpdateCustom.prototype['timeout-sec'] = 60;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretUpdateCustom.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretUpdateCustom.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
DynamicSecretUpdateCustom.prototype['user-ttl'] = '60m';






export default DynamicSecretUpdateCustom;

