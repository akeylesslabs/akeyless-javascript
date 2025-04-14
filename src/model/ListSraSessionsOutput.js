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
import GatewayNameInfo from './GatewayNameInfo';
import SraSessionEntryOut from './SraSessionEntryOut';

/**
 * The ListSraSessionsOutput model module.
 * @module model/ListSraSessionsOutput
 * @version 5.0.3
 */
class ListSraSessionsOutput {
    /**
     * Constructs a new <code>ListSraSessionsOutput</code>.
     * @alias module:model/ListSraSessionsOutput
     */
    constructor() { 
        
        ListSraSessionsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListSraSessionsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSraSessionsOutput} obj Optional instance to populate.
     * @return {module:model/ListSraSessionsOutput} The populated <code>ListSraSessionsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListSraSessionsOutput();

            if (data.hasOwnProperty('allowed_gateways')) {
                obj['allowed_gateways'] = ApiClient.convertToType(data['allowed_gateways'], [GatewayNameInfo]);
            }
            if (data.hasOwnProperty('next_page')) {
                obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
            }
            if (data.hasOwnProperty('sessions')) {
                obj['sessions'] = ApiClient.convertToType(data['sessions'], [SraSessionEntryOut]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListSraSessionsOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListSraSessionsOutput</code>.
     */
    static validateJSON(data) {
        if (data['allowed_gateways']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['allowed_gateways'])) {
                throw new Error("Expected the field `allowed_gateways` to be an array in the JSON data but got " + data['allowed_gateways']);
            }
            // validate the optional field `allowed_gateways` (array)
            for (const item of data['allowed_gateways']) {
                GatewayNameInfo.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['next_page'] && !(typeof data['next_page'] === 'string' || data['next_page'] instanceof String)) {
            throw new Error("Expected the field `next_page` to be a primitive type in the JSON string but got " + data['next_page']);
        }
        if (data['sessions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sessions'])) {
                throw new Error("Expected the field `sessions` to be an array in the JSON data but got " + data['sessions']);
            }
            // validate the optional field `sessions` (array)
            for (const item of data['sessions']) {
                SraSessionEntryOut.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/GatewayNameInfo>} allowed_gateways
 */
ListSraSessionsOutput.prototype['allowed_gateways'] = undefined;

/**
 * @member {String} next_page
 */
ListSraSessionsOutput.prototype['next_page'] = undefined;

/**
 * @member {Array.<module:model/SraSessionEntryOut>} sessions
 */
ListSraSessionsOutput.prototype['sessions'] = undefined;






export default ListSraSessionsOutput;

