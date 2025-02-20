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
 * The BatchTokenizationRequestLine model module.
 * @module model/BatchTokenizationRequestLine
 * @version 5.0.0
 */
class BatchTokenizationRequestLine {
    /**
     * Constructs a new <code>BatchTokenizationRequestLine</code>.
     * @alias module:model/BatchTokenizationRequestLine
     */
    constructor() { 
        
        BatchTokenizationRequestLine.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BatchTokenizationRequestLine</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchTokenizationRequestLine} obj Optional instance to populate.
     * @return {module:model/BatchTokenizationRequestLine} The populated <code>BatchTokenizationRequestLine</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchTokenizationRequestLine();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('item_id')) {
                obj['item_id'] = ApiClient.convertToType(data['item_id'], 'Number');
            }
            if (data.hasOwnProperty('tweak')) {
                obj['tweak'] = ApiClient.convertToType(data['tweak'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BatchTokenizationRequestLine</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatchTokenizationRequestLine</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['data'] && !(typeof data['data'] === 'string' || data['data'] instanceof String)) {
            throw new Error("Expected the field `data` to be a primitive type in the JSON string but got " + data['data']);
        }
        // ensure the json data is a string
        if (data['tweak'] && !(typeof data['tweak'] === 'string' || data['tweak'] instanceof String)) {
            throw new Error("Expected the field `tweak` to be a primitive type in the JSON string but got " + data['tweak']);
        }

        return true;
    }


}



/**
 * @member {String} data
 */
BatchTokenizationRequestLine.prototype['data'] = undefined;

/**
 * @member {Number} item_id
 */
BatchTokenizationRequestLine.prototype['item_id'] = undefined;

/**
 * @member {String} tweak
 */
BatchTokenizationRequestLine.prototype['tweak'] = undefined;






export default BatchTokenizationRequestLine;

