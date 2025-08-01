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
import EmailError from './EmailError';

/**
 * The ResponseStopShareItem model module.
 * @module model/ResponseStopShareItem
 * @version 5.0.6
 */
class ResponseStopShareItem {
    /**
     * Constructs a new <code>ResponseStopShareItem</code>.
     * @alias module:model/ResponseStopShareItem
     */
    constructor() { 
        
        ResponseStopShareItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseStopShareItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseStopShareItem} obj Optional instance to populate.
     * @return {module:model/ResponseStopShareItem} The populated <code>ResponseStopShareItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseStopShareItem();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [EmailError]);
            }
            if (data.hasOwnProperty('item_name')) {
                obj['item_name'] = ApiClient.convertToType(data['item_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResponseStopShareItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseStopShareItem</code>.
     */
    static validateJSON(data) {
        if (data['errors']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['errors'])) {
                throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
            }
            // validate the optional field `errors` (array)
            for (const item of data['errors']) {
                EmailError.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['item_name'] && !(typeof data['item_name'] === 'string' || data['item_name'] instanceof String)) {
            throw new Error("Expected the field `item_name` to be a primitive type in the JSON string but got " + data['item_name']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/EmailError>} errors
 */
ResponseStopShareItem.prototype['errors'] = undefined;

/**
 * @member {String} item_name
 */
ResponseStopShareItem.prototype['item_name'] = undefined;






export default ResponseStopShareItem;

