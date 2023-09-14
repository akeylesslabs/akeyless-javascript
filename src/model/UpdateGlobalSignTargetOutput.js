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
 * The UpdateGlobalSignTargetOutput model module.
 * @module model/UpdateGlobalSignTargetOutput
 * @version 3.4.0
 */
class UpdateGlobalSignTargetOutput {
    /**
     * Constructs a new <code>UpdateGlobalSignTargetOutput</code>.
     * @alias module:model/UpdateGlobalSignTargetOutput
     */
    constructor() { 
        
        UpdateGlobalSignTargetOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateGlobalSignTargetOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateGlobalSignTargetOutput} obj Optional instance to populate.
     * @return {module:model/UpdateGlobalSignTargetOutput} The populated <code>UpdateGlobalSignTargetOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateGlobalSignTargetOutput();

            if (data.hasOwnProperty('target_id')) {
                obj['target_id'] = ApiClient.convertToType(data['target_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} target_id
 */
UpdateGlobalSignTargetOutput.prototype['target_id'] = undefined;






export default UpdateGlobalSignTargetOutput;

