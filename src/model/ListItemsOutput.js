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
 * The ListItemsOutput model module.
 * @module model/ListItemsOutput
 * @version 3.3.12
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

