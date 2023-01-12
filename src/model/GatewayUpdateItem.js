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
 * @version 3.1.1
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
            if (data.hasOwnProperty('auto-rotate')) {
                obj['auto-rotate'] = ApiClient.convertToType(data['auto-rotate'], 'String');
            }
            if (data.hasOwnProperty('custom-payload')) {
                obj['custom-payload'] = ApiClient.convertToType(data['custom-payload'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('gcp-key')) {
                obj['gcp-key'] = ApiClient.convertToType(data['gcp-key'], 'String');
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
 * @member {String} api-id
 */
GatewayUpdateItem.prototype['api-id'] = undefined;

/**
 * @member {String} api-key
 */
GatewayUpdateItem.prototype['api-key'] = undefined;

/**
 * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation
 * @member {String} auto-rotate
 */
GatewayUpdateItem.prototype['auto-rotate'] = undefined;

/**
 * @member {String} custom-payload
 */
GatewayUpdateItem.prototype['custom-payload'] = undefined;

/**
 * Protection from accidental deletion of this item
 * @member {String} delete_protection
 */
GatewayUpdateItem.prototype['delete_protection'] = undefined;

/**
 * Base64-encoded service account private key text
 * @member {String} gcp-key
 */
GatewayUpdateItem.prototype['gcp-key'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
GatewayUpdateItem.prototype['json'] = undefined;

/**
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
 * New item metadata
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
 * List of the existent tags that will be removed from this item
 * @member {Array.<String>} rm-tag
 */
GatewayUpdateItem.prototype['rm-tag'] = undefined;

/**
 * @member {String} rotated-password
 */
GatewayUpdateItem.prototype['rotated-password'] = undefined;

/**
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
 */
GatewayUpdateItem.prototype['rotator-creds-type'] = undefined;

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

