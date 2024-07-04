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
import Group from './Group';

/**
 * The ListGroupsOutput model module.
 * @module model/ListGroupsOutput
 * @version 4.2.0
 */
class ListGroupsOutput {
    /**
     * Constructs a new <code>ListGroupsOutput</code>.
     * @alias module:model/ListGroupsOutput
     */
    constructor() { 
        
        ListGroupsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListGroupsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListGroupsOutput} obj Optional instance to populate.
     * @return {module:model/ListGroupsOutput} The populated <code>ListGroupsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListGroupsOutput();

            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [Group]);
            }
            if (data.hasOwnProperty('next_page')) {
                obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Group>} groups
 */
ListGroupsOutput.prototype['groups'] = undefined;

/**
 * @member {String} next_page
 */
ListGroupsOutput.prototype['next_page'] = undefined;






export default ListGroupsOutput;

