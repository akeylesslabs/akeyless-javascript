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
 * The CreateRoleAuthMethodAssocOutput model module.
 * @module model/CreateRoleAuthMethodAssocOutput
 * @version 2.4.1
 */
class CreateRoleAuthMethodAssocOutput {
    /**
     * Constructs a new <code>CreateRoleAuthMethodAssocOutput</code>.
     * CreateRoleAuthMethodAssocOutput defines output of CreateRoleAuthMethodAssoc operation.
     * @alias module:model/CreateRoleAuthMethodAssocOutput
     */
    constructor() { 
        
        CreateRoleAuthMethodAssocOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateRoleAuthMethodAssocOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRoleAuthMethodAssocOutput} obj Optional instance to populate.
     * @return {module:model/CreateRoleAuthMethodAssocOutput} The populated <code>CreateRoleAuthMethodAssocOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRoleAuthMethodAssocOutput();

            if (data.hasOwnProperty('assoc_id')) {
                obj['assoc_id'] = ApiClient.convertToType(data['assoc_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} assoc_id
 */
CreateRoleAuthMethodAssocOutput.prototype['assoc_id'] = undefined;






export default CreateRoleAuthMethodAssocOutput;

