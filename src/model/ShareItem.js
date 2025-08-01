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
 * The ShareItem model module.
 * @module model/ShareItem
 * @version 5.0.6
 */
class ShareItem {
    /**
     * Constructs a new <code>ShareItem</code>.
     * @alias module:model/ShareItem
     * @param action {String} Action to be performed on the item [start/stop/describe]
     * @param itemName {String} Item name
     */
    constructor(action, itemName) { 
        
        ShareItem.initialize(this, action, itemName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, action, itemName) { 
        obj['accessibility'] = 'regular';
        obj['action'] = action;
        obj['item-name'] = itemName;
        obj['json'] = false;
        obj['share-type'] = 'email';
        obj['view-once'] = false;
    }

    /**
     * Constructs a <code>ShareItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShareItem} obj Optional instance to populate.
     * @return {module:model/ShareItem} The populated <code>ShareItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShareItem();

            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('emails')) {
                obj['emails'] = ApiClient.convertToType(data['emails'], ['String']);
            }
            if (data.hasOwnProperty('item-name')) {
                obj['item-name'] = ApiClient.convertToType(data['item-name'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('share-type')) {
                obj['share-type'] = ApiClient.convertToType(data['share-type'], 'String');
            }
            if (data.hasOwnProperty('shared-token-id')) {
                obj['shared-token-id'] = ApiClient.convertToType(data['shared-token-id'], ['String']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('view-once')) {
                obj['view-once'] = ApiClient.convertToType(data['view-once'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShareItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShareItem</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ShareItem.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['accessibility'] && !(typeof data['accessibility'] === 'string' || data['accessibility'] instanceof String)) {
            throw new Error("Expected the field `accessibility` to be a primitive type in the JSON string but got " + data['accessibility']);
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['emails'])) {
            throw new Error("Expected the field `emails` to be an array in the JSON data but got " + data['emails']);
        }
        // ensure the json data is a string
        if (data['item-name'] && !(typeof data['item-name'] === 'string' || data['item-name'] instanceof String)) {
            throw new Error("Expected the field `item-name` to be a primitive type in the JSON string but got " + data['item-name']);
        }
        // ensure the json data is a string
        if (data['share-type'] && !(typeof data['share-type'] === 'string' || data['share-type'] instanceof String)) {
            throw new Error("Expected the field `share-type` to be a primitive type in the JSON string but got " + data['share-type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['shared-token-id'])) {
            throw new Error("Expected the field `shared-token-id` to be an array in the JSON data but got " + data['shared-token-id']);
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

ShareItem.RequiredProperties = ["action", "item-name"];

/**
 * for personal password manager
 * @member {String} accessibility
 * @default 'regular'
 */
ShareItem.prototype['accessibility'] = 'regular';

/**
 * Action to be performed on the item [start/stop/describe]
 * @member {String} action
 */
ShareItem.prototype['action'] = undefined;

/**
 * List of emails to start/stop sharing the secret with
 * @member {Array.<String>} emails
 */
ShareItem.prototype['emails'] = undefined;

/**
 * Item name
 * @member {String} item-name
 */
ShareItem.prototype['item-name'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
ShareItem.prototype['json'] = false;

/**
 * Share type [email/token]
 * @member {String} share-type
 * @default 'email'
 */
ShareItem.prototype['share-type'] = 'email';

/**
 * Shared token ids in order to stop sharing a secret
 * @member {Array.<String>} shared-token-id
 */
ShareItem.prototype['shared-token-id'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
ShareItem.prototype['token'] = undefined;

/**
 * TTL of the Availability of the shared secret in seconds
 * @member {Number} ttl
 */
ShareItem.prototype['ttl'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
ShareItem.prototype['uid-token'] = undefined;

/**
 * ViewOnlyOnce Shared secrets can only be viewed once [true/false]
 * @member {Boolean} view-once
 * @default false
 */
ShareItem.prototype['view-once'] = false;






export default ShareItem;

