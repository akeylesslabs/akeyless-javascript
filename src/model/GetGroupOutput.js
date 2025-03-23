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
import AccessPermissionAssignment from './AccessPermissionAssignment';

/**
 * The GetGroupOutput model module.
 * @module model/GetGroupOutput
 * @version 5.0.1
 */
class GetGroupOutput {
    /**
     * Constructs a new <code>GetGroupOutput</code>.
     * @alias module:model/GetGroupOutput
     */
    constructor() { 
        
        GetGroupOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupOutput} obj Optional instance to populate.
     * @return {module:model/GetGroupOutput} The populated <code>GetGroupOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupOutput();

            if (data.hasOwnProperty('account_id')) {
                obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
            }
            if (data.hasOwnProperty('creation_date')) {
                obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('group_alias')) {
                obj['group_alias'] = ApiClient.convertToType(data['group_alias'], 'String');
            }
            if (data.hasOwnProperty('group_id')) {
                obj['group_id'] = ApiClient.convertToType(data['group_id'], 'String');
            }
            if (data.hasOwnProperty('group_name')) {
                obj['group_name'] = ApiClient.convertToType(data['group_name'], 'String');
            }
            if (data.hasOwnProperty('is_subclaims_with_operator')) {
                obj['is_subclaims_with_operator'] = ApiClient.convertToType(data['is_subclaims_with_operator'], 'Boolean');
            }
            if (data.hasOwnProperty('modification_date')) {
                obj['modification_date'] = ApiClient.convertToType(data['modification_date'], 'Date');
            }
            if (data.hasOwnProperty('user_assignments')) {
                obj['user_assignments'] = ApiClient.convertToType(data['user_assignments'], [AccessPermissionAssignment]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetGroupOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetGroupOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['account_id'] && !(typeof data['account_id'] === 'string' || data['account_id'] instanceof String)) {
            throw new Error("Expected the field `account_id` to be a primitive type in the JSON string but got " + data['account_id']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['group_alias'] && !(typeof data['group_alias'] === 'string' || data['group_alias'] instanceof String)) {
            throw new Error("Expected the field `group_alias` to be a primitive type in the JSON string but got " + data['group_alias']);
        }
        // ensure the json data is a string
        if (data['group_id'] && !(typeof data['group_id'] === 'string' || data['group_id'] instanceof String)) {
            throw new Error("Expected the field `group_id` to be a primitive type in the JSON string but got " + data['group_id']);
        }
        // ensure the json data is a string
        if (data['group_name'] && !(typeof data['group_name'] === 'string' || data['group_name'] instanceof String)) {
            throw new Error("Expected the field `group_name` to be a primitive type in the JSON string but got " + data['group_name']);
        }
        if (data['user_assignments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['user_assignments'])) {
                throw new Error("Expected the field `user_assignments` to be an array in the JSON data but got " + data['user_assignments']);
            }
            // validate the optional field `user_assignments` (array)
            for (const item of data['user_assignments']) {
                AccessPermissionAssignment.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} account_id
 */
GetGroupOutput.prototype['account_id'] = undefined;

/**
 * @member {Date} creation_date
 */
GetGroupOutput.prototype['creation_date'] = undefined;

/**
 * @member {String} description
 */
GetGroupOutput.prototype['description'] = undefined;

/**
 * @member {String} group_alias
 */
GetGroupOutput.prototype['group_alias'] = undefined;

/**
 * @member {String} group_id
 */
GetGroupOutput.prototype['group_id'] = undefined;

/**
 * @member {String} group_name
 */
GetGroupOutput.prototype['group_name'] = undefined;

/**
 * @member {Boolean} is_subclaims_with_operator
 */
GetGroupOutput.prototype['is_subclaims_with_operator'] = undefined;

/**
 * @member {Date} modification_date
 */
GetGroupOutput.prototype['modification_date'] = undefined;

/**
 * @member {Array.<module:model/AccessPermissionAssignment>} user_assignments
 */
GetGroupOutput.prototype['user_assignments'] = undefined;






export default GetGroupOutput;

