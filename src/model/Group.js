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
 * The Group model module.
 * @module model/Group
 * @version 4.3.0
 */
class Group {
    /**
     * Constructs a new <code>Group</code>.
     * @alias module:model/Group
     */
    constructor() { 
        
        Group.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Group} obj Optional instance to populate.
     * @return {module:model/Group} The populated <code>Group</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Group();

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


}

/**
 * @member {String} account_id
 */
Group.prototype['account_id'] = undefined;

/**
 * @member {Date} creation_date
 */
Group.prototype['creation_date'] = undefined;

/**
 * @member {String} description
 */
Group.prototype['description'] = undefined;

/**
 * @member {String} group_alias
 */
Group.prototype['group_alias'] = undefined;

/**
 * @member {String} group_id
 */
Group.prototype['group_id'] = undefined;

/**
 * @member {String} group_name
 */
Group.prototype['group_name'] = undefined;

/**
 * @member {Boolean} is_subclaims_with_operator
 */
Group.prototype['is_subclaims_with_operator'] = undefined;

/**
 * @member {Date} modification_date
 */
Group.prototype['modification_date'] = undefined;

/**
 * @member {Array.<module:model/AccessPermissionAssignment>} user_assignments
 */
Group.prototype['user_assignments'] = undefined;






export default Group;

