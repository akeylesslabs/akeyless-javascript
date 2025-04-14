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
import Role from './Role';

/**
 * The ListRolesOutput model module.
 * @module model/ListRolesOutput
 * @version 5.0.3
 */
class ListRolesOutput {
    /**
     * Constructs a new <code>ListRolesOutput</code>.
     * @alias module:model/ListRolesOutput
     */
    constructor() { 
        
        ListRolesOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListRolesOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListRolesOutput} obj Optional instance to populate.
     * @return {module:model/ListRolesOutput} The populated <code>ListRolesOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListRolesOutput();

            if (data.hasOwnProperty('next_page')) {
                obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], [Role]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListRolesOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListRolesOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page'] && !(typeof data['next_page'] === 'string' || data['next_page'] instanceof String)) {
            throw new Error("Expected the field `next_page` to be a primitive type in the JSON string but got " + data['next_page']);
        }
        if (data['roles']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['roles'])) {
                throw new Error("Expected the field `roles` to be an array in the JSON data but got " + data['roles']);
            }
            // validate the optional field `roles` (array)
            for (const item of data['roles']) {
                Role.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} next_page
 */
ListRolesOutput.prototype['next_page'] = undefined;

/**
 * @member {Array.<module:model/Role>} roles
 */
ListRolesOutput.prototype['roles'] = undefined;






export default ListRolesOutput;

