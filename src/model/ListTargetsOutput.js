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
import Target from './Target';

/**
 * The ListTargetsOutput model module.
 * @module model/ListTargetsOutput
 * @version 5.0.1
 */
class ListTargetsOutput {
    /**
     * Constructs a new <code>ListTargetsOutput</code>.
     * @alias module:model/ListTargetsOutput
     */
    constructor() { 
        
        ListTargetsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListTargetsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTargetsOutput} obj Optional instance to populate.
     * @return {module:model/ListTargetsOutput} The populated <code>ListTargetsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTargetsOutput();

            if (data.hasOwnProperty('next_page')) {
                obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
            }
            if (data.hasOwnProperty('targets')) {
                obj['targets'] = ApiClient.convertToType(data['targets'], [Target]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListTargetsOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListTargetsOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page'] && !(typeof data['next_page'] === 'string' || data['next_page'] instanceof String)) {
            throw new Error("Expected the field `next_page` to be a primitive type in the JSON string but got " + data['next_page']);
        }
        if (data['targets']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['targets'])) {
                throw new Error("Expected the field `targets` to be an array in the JSON data but got " + data['targets']);
            }
            // validate the optional field `targets` (array)
            for (const item of data['targets']) {
                Target.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} next_page
 */
ListTargetsOutput.prototype['next_page'] = undefined;

/**
 * @member {Array.<module:model/Target>} targets
 */
ListTargetsOutput.prototype['targets'] = undefined;






export default ListTargetsOutput;

