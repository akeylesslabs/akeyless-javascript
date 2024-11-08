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
import Item from './Item';

/**
 * The ListItemsInPathOutput model module.
 * @module model/ListItemsInPathOutput
 * @version 4.3.0
 */
class ListItemsInPathOutput {
    /**
     * Constructs a new <code>ListItemsInPathOutput</code>.
     * @alias module:model/ListItemsInPathOutput
     */
    constructor() { 
        
        ListItemsInPathOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListItemsInPathOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListItemsInPathOutput} obj Optional instance to populate.
     * @return {module:model/ListItemsInPathOutput} The populated <code>ListItemsInPathOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListItemsInPathOutput();

            if (data.hasOwnProperty('folders')) {
                obj['folders'] = ApiClient.convertToType(data['folders'], ['String']);
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Item]);
            }
            if (data.hasOwnProperty('next_page')) {
                obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} folders
 */
ListItemsInPathOutput.prototype['folders'] = undefined;

/**
 * @member {Array.<module:model/Item>} items
 */
ListItemsInPathOutput.prototype['items'] = undefined;

/**
 * @member {String} next_page
 */
ListItemsInPathOutput.prototype['next_page'] = undefined;






export default ListItemsInPathOutput;

