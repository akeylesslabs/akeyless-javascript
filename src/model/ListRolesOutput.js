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
import Role from './Role';

/**
 * The ListRolesOutput model module.
 * @module model/ListRolesOutput
 * @version 2.5.19
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

