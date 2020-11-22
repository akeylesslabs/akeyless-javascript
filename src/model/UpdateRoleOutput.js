/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UpdateRoleOutput model module.
 * @module model/UpdateRoleOutput
 * @version 0.0.1
 */
class UpdateRoleOutput {
    /**
     * Constructs a new <code>UpdateRoleOutput</code>.
     * @alias module:model/UpdateRoleOutput
     */
    constructor() { 
        
        UpdateRoleOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateRoleOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRoleOutput} obj Optional instance to populate.
     * @return {module:model/UpdateRoleOutput} The populated <code>UpdateRoleOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRoleOutput();

            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} updated
 */
UpdateRoleOutput.prototype['updated'] = undefined;






export default UpdateRoleOutput;

