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
 * The ShareItem model module.
 * @module model/ShareItem
 * @version 4.3.0
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
        obj['action'] = action;
        obj['item-name'] = itemName;
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


}

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
 * For Password Management use, reflect the website context
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

