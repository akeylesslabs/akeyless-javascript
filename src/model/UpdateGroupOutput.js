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

/**
 * The UpdateGroupOutput model module.
 * @module model/UpdateGroupOutput
 * @version 3.5.0
 */
class UpdateGroupOutput {
    /**
     * Constructs a new <code>UpdateGroupOutput</code>.
     * @alias module:model/UpdateGroupOutput
     */
    constructor() { 
        
        UpdateGroupOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateGroupOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateGroupOutput} obj Optional instance to populate.
     * @return {module:model/UpdateGroupOutput} The populated <code>UpdateGroupOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateGroupOutput();

            if (data.hasOwnProperty('group_name')) {
                obj['group_name'] = ApiClient.convertToType(data['group_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} group_name
 */
UpdateGroupOutput.prototype['group_name'] = undefined;

/**
 * @member {String} id
 */
UpdateGroupOutput.prototype['id'] = undefined;

/**
 * @member {String} name
 */
UpdateGroupOutput.prototype['name'] = undefined;






export default UpdateGroupOutput;

