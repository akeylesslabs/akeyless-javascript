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
 * The DescribeItem model module.
 * @module model/DescribeItem
 * @version 3.3.13
 */
class DescribeItem {
    /**
     * Constructs a new <code>DescribeItem</code>.
     * @alias module:model/DescribeItem
     * @param name {String} Item name
     */
    constructor(name) { 
        
        DescribeItem.initialize(this, name);
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
     * Constructs a <code>DescribeItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeItem} obj Optional instance to populate.
     * @return {module:model/DescribeItem} The populated <code>DescribeItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DescribeItem();

            if (data.hasOwnProperty('bastion-details')) {
                obj['bastion-details'] = ApiClient.convertToType(data['bastion-details'], 'Boolean');
            }
            if (data.hasOwnProperty('display-id')) {
                obj['display-id'] = ApiClient.convertToType(data['display-id'], 'String');
            }
            if (data.hasOwnProperty('gateway-details')) {
                obj['gateway-details'] = ApiClient.convertToType(data['gateway-details'], 'Boolean');
            }
            if (data.hasOwnProperty('item-id')) {
                obj['item-id'] = ApiClient.convertToType(data['item-id'], 'Number');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('show-versions')) {
                obj['show-versions'] = ApiClient.convertToType(data['show-versions'], 'Boolean');
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
 * Indicate if the item should return with ztb cluster details (url, etc)
 * @member {Boolean} bastion-details
 * @default false
 */
DescribeItem.prototype['bastion-details'] = false;

/**
 * The display id of the item
 * @member {String} display-id
 */
DescribeItem.prototype['display-id'] = undefined;

/**
 * Indicate if the item should return with clusters details (url, etc)
 * @member {Boolean} gateway-details
 * @default false
 */
DescribeItem.prototype['gateway-details'] = false;

/**
 * Item id of the item
 * @member {Number} item-id
 */
DescribeItem.prototype['item-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DescribeItem.prototype['json'] = false;

/**
 * Item name
 * @member {String} name
 */
DescribeItem.prototype['name'] = undefined;

/**
 * Include all item versions in reply
 * @member {Boolean} show-versions
 * @default false
 */
DescribeItem.prototype['show-versions'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DescribeItem.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DescribeItem.prototype['uid-token'] = undefined;






export default DescribeItem;

