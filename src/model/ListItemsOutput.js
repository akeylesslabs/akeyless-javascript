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
import Item from './Item';

/**
 * The ListItemsOutput model module.
 * @module model/ListItemsOutput
 * @version 5.0.0
 */
class ListItemsOutput {
    /**
     * Constructs a new <code>ListItemsOutput</code>.
     * @alias module:model/ListItemsOutput
     */
    constructor() { 
        
        ListItemsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListItemsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListItemsOutput} obj Optional instance to populate.
     * @return {module:model/ListItemsOutput} The populated <code>ListItemsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListItemsOutput();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Item]);
            }
            if (data.hasOwnProperty('next_page')) {
                obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListItemsOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListItemsOutput</code>.
     */
    static validateJSON(data) {
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                Item.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['next_page'] && !(typeof data['next_page'] === 'string' || data['next_page'] instanceof String)) {
            throw new Error("Expected the field `next_page` to be a primitive type in the JSON string but got " + data['next_page']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/Item>} items
 */
ListItemsOutput.prototype['items'] = undefined;

/**
 * @member {String} next_page
 */
ListItemsOutput.prototype['next_page'] = undefined;






export default ListItemsOutput;

