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
 * The GatewayUpdateItem model module.
 * @module model/GatewayUpdateItem
 * @version 4.2.2
 */
class GatewayUpdateItem {
    /**
     * Constructs a new <code>GatewayUpdateItem</code>.
     * gatewayUpdateItem is a command that updates classic key
     * @alias module:model/GatewayUpdateItem
     * @param name {String} Item name
     * @param type {String} Item type
     */
    constructor(name, type) { 
        
        GatewayUpdateItem.initialize(this, name, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type) { 
        obj['name'] = name;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>GatewayUpdateItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateItem} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateItem} The populated <code>GatewayUpdateItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateItem();

            if (data.hasOwnProperty('add-tag')) {
                obj['add-tag'] = ApiClient.convertToType(data['add-tag'], ['String']);
            }
            if (data.hasOwnProperty('api-id')) {
                obj['api-id'] = ApiClient.convertToType(data['api-id'], 'String');
            }
            if (data.hasOwnProperty('api-key')) {
                obj['api-key'] = ApiClient.convertToType(data['api-key'], 'String');
            }
            if (data.hasOwnProperty('app-id')) {
                obj['app-id'] = ApiClient.convertToType(data['app-id'], 'String');
            }
            if (data.hasOwnProperty('auto-rotate')) {
                obj['auto-rotate'] = ApiClient.convertToType(data['auto-rotate'], 'String');
            }
            if (data.hasOwnProperty('custom-payload')) {
                obj['custom-payload'] = ApiClient.convertToType(data['custom-payload'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('gcp-key')) {
                obj['gcp-key'] = ApiClient.convertToType(data['gcp-key'], 'String');
            }
            if (data.hasOwnProperty('gcp-service-account-email')) {
                obj['gcp-service-account-email'] = ApiClient.convertToType(data['gcp-service-account-email'], 'String');
            }
            if (data.hasOwnProperty('gcp-service-account-key-id')) {
                obj['gcp-service-account-key-id'] = ApiClient.convertToType(data['gcp-service-account-key-id'], 'String');
            }
            if (data.hasOwnProperty('grace-rotation')) {
                obj['grace-rotation'] = ApiClient.convertToType(data['grace-rotation'], 'String');
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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-metadata')) {
                obj['new-metadata'] = ApiClient.convertToType(data['new-metadata'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('new-version')) {
                obj['new-version'] = ApiClient.convertToType(data['new-version'], 'Boolean');
            }
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
            }
            if (data.hasOwnProperty('rm-tag')) {
                obj['rm-tag'] = ApiClient.convertToType(data['rm-tag'], ['String']);
            }
            if (data.hasOwnProperty('rotated-password')) {
                obj['rotated-password'] = ApiClient.convertToType(data['rotated-password'], 'String');
            }
            if (data.hasOwnProperty('rotated-username')) {
                obj['rotated-username'] = ApiClient.convertToType(data['rotated-username'], 'String');
            }
            if (data.hasOwnProperty('rotation-hour')) {
                obj['rotation-hour'] = ApiClient.convertToType(data['rotation-hour'], 'Number');
            }
            if (data.hasOwnProperty('rotation-interval')) {
                obj['rotation-interval'] = ApiClient.convertToType(data['rotation-interval'], 'String');
            }
            if (data.hasOwnProperty('rotator-creds-type')) {
                obj['rotator-creds-type'] = ApiClient.convertToType(data['rotator-creds-type'], 'String');
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
        }
        return obj;
    }


}

/**
 * List of the new tags that will be attached to this item
 * @member {Array.<String>} add-tag
 */
GatewayUpdateItem.prototype['add-tag'] = undefined;

/**
 * API ID to rotate (relevant only for rotator-type=api-key)
 * @member {String} api-id
 */
GatewayUpdateItem.prototype['api-id'] = undefined;

/**
 * API key to rotate (relevant only for rotator-type=api-key)
 * @member {String} api-key
 */
GatewayUpdateItem.prototype['api-key'] = undefined;

/**
 * ApplicationId (used in azure)
 * @member {String} app-id
 */
GatewayUpdateItem.prototype['app-id'] = undefined;

/**
 * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false]
 * @member {String} auto-rotate
 */
GatewayUpdateItem.prototype['auto-rotate'] = undefined;

/**
 * Secret payload to be sent with rotation request (relevant only for rotator-type=custom)
 * @member {String} custom-payload
 */
GatewayUpdateItem.prototype['custom-payload'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
GatewayUpdateItem.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 * @default 'default_metadata'
 */
GatewayUpdateItem.prototype['description'] = 'default_metadata';

/**
 * Base64-encoded service account private key text
 * @member {String} gcp-key
 */
GatewayUpdateItem.prototype['gcp-key'] = undefined;

/**
 * The email of the gcp service account to rotate
 * @member {String} gcp-service-account-email
 */
GatewayUpdateItem.prototype['gcp-service-account-email'] = undefined;

/**
 * The key id of the gcp service account to rotate
 * @member {String} gcp-service-account-key-id
 */
GatewayUpdateItem.prototype['gcp-service-account-key-id'] = undefined;

/**
 * Create a new access key without deleting the old key from AWS for backup (relevant only for AWS) [true/false]
 * @member {String} grace-rotation
 */
GatewayUpdateItem.prototype['grace-rotation'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateItem.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. (relevant only for --type=rotated-secret). If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
GatewayUpdateItem.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
GatewayUpdateItem.prototype['key'] = undefined;

/**
 * Item name
 * @member {String} name
 */
GatewayUpdateItem.prototype['name'] = undefined;

/**
 * Deprecated - use description
 * @member {String} new-metadata
 * @default 'default_metadata'
 */
GatewayUpdateItem.prototype['new-metadata'] = 'default_metadata';

/**
 * New item name
 * @member {String} new-name
 */
GatewayUpdateItem.prototype['new-name'] = undefined;

/**
 * Deprecated
 * @member {Boolean} new-version
 */
GatewayUpdateItem.prototype['new-version'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
GatewayUpdateItem.prototype['password-length'] = undefined;

/**
 * List of the existent tags that will be removed from this item
 * @member {Array.<String>} rm-tag
 */
GatewayUpdateItem.prototype['rm-tag'] = undefined;

/**
 * rotated-username password (relevant only for rotator-type=password)
 * @member {String} rotated-password
 */
GatewayUpdateItem.prototype['rotated-password'] = undefined;

/**
 * username to be rotated, if selected \\\"use-self-creds\\\" at rotator-creds-type, this username will try to rotate it's own password, if \\\"use-target-creds\\\" is selected, target credentials will be use to rotate the rotated-password (relevant only for rotator-type=password)
 * @member {String} rotated-username
 */
GatewayUpdateItem.prototype['rotated-username'] = undefined;

/**
 * The Rotation Hour
 * @member {Number} rotation-hour
 * @default 0
 */
GatewayUpdateItem.prototype['rotation-hour'] = 0;

/**
 * The number of days to wait between every automatic key rotation (1-365)
 * @member {String} rotation-interval
 */
GatewayUpdateItem.prototype['rotation-interval'] = undefined;

/**
 * The rotation credentials type
 * @member {String} rotator-creds-type
 * @default 'use-self-creds'
 */
GatewayUpdateItem.prototype['rotator-creds-type'] = 'use-self-creds';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateItem.prototype['token'] = undefined;

/**
 * Item type
 * @member {String} type
 */
GatewayUpdateItem.prototype['type'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateItem.prototype['uid-token'] = undefined;






export default GatewayUpdateItem;

