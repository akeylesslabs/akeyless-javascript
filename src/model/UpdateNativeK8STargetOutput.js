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
 * The UpdateNativeK8STargetOutput model module.
 * @module model/UpdateNativeK8STargetOutput
 * @version 2.4.5
 */
class UpdateNativeK8STargetOutput {
    /**
     * Constructs a new <code>UpdateNativeK8STargetOutput</code>.
     * @alias module:model/UpdateNativeK8STargetOutput
     */
    constructor() { 
        
        UpdateNativeK8STargetOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateNativeK8STargetOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateNativeK8STargetOutput} obj Optional instance to populate.
     * @return {module:model/UpdateNativeK8STargetOutput} The populated <code>UpdateNativeK8STargetOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateNativeK8STargetOutput();

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
UpdateNativeK8STargetOutput.prototype['target_id'] = undefined;






export default UpdateNativeK8STargetOutput;

