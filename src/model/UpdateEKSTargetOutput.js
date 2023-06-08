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
 * The UpdateEKSTargetOutput model module.
 * @module model/UpdateEKSTargetOutput
 * @version 3.3.7
 */
class UpdateEKSTargetOutput {
    /**
     * Constructs a new <code>UpdateEKSTargetOutput</code>.
     * @alias module:model/UpdateEKSTargetOutput
     */
    constructor() { 
        
        UpdateEKSTargetOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateEKSTargetOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateEKSTargetOutput} obj Optional instance to populate.
     * @return {module:model/UpdateEKSTargetOutput} The populated <code>UpdateEKSTargetOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateEKSTargetOutput();

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
UpdateEKSTargetOutput.prototype['target_id'] = undefined;






export default UpdateEKSTargetOutput;

