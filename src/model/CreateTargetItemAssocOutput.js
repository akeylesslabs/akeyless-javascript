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
 * The CreateTargetItemAssocOutput model module.
 * @module model/CreateTargetItemAssocOutput
 * @version 2.4.6
 */
class CreateTargetItemAssocOutput {
    /**
     * Constructs a new <code>CreateTargetItemAssocOutput</code>.
     * CreateTargetItemAssocOutput defines output of CreateTargetItemAssoc operation.
     * @alias module:model/CreateTargetItemAssocOutput
     */
    constructor() { 
        
        CreateTargetItemAssocOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateTargetItemAssocOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTargetItemAssocOutput} obj Optional instance to populate.
     * @return {module:model/CreateTargetItemAssocOutput} The populated <code>CreateTargetItemAssocOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTargetItemAssocOutput();

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
CreateTargetItemAssocOutput.prototype['assoc_id'] = undefined;






export default CreateTargetItemAssocOutput;

