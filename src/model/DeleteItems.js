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
 * The DeleteItems model module.
 * @module model/DeleteItems
 * @version 4.2.2
 */
class DeleteItems {
    /**
     * Constructs a new <code>DeleteItems</code>.
     * @alias module:model/DeleteItems
     * @param path {String} Path to delete the items from
     */
    constructor(path) { 
        
        DeleteItems.initialize(this, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path) { 
        obj['path'] = path;
    }

    /**
     * Constructs a <code>DeleteItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteItems} obj Optional instance to populate.
     * @return {module:model/DeleteItems} The populated <code>DeleteItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteItems();

            if (data.hasOwnProperty('item')) {
                obj['item'] = ApiClient.convertToType(data['item'], ['String']);
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
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
 * A list of items to delete, To specify multiple items use argument multiple times
 * @member {Array.<String>} item
 */
DeleteItems.prototype['item'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DeleteItems.prototype['json'] = false;

/**
 * Path to delete the items from
 * @member {String} path
 * @default 'dummy_path'
 */
DeleteItems.prototype['path'] = 'dummy_path';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DeleteItems.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DeleteItems.prototype['uid-token'] = undefined;






export default DeleteItems;

