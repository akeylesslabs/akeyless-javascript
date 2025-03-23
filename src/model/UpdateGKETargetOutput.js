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
 * The UpdateGKETargetOutput model module.
 * @module model/UpdateGKETargetOutput
 * @version 5.0.1
 */
class UpdateGKETargetOutput {
    /**
     * Constructs a new <code>UpdateGKETargetOutput</code>.
     * @alias module:model/UpdateGKETargetOutput
     */
    constructor() { 
        
        UpdateGKETargetOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateGKETargetOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateGKETargetOutput} obj Optional instance to populate.
     * @return {module:model/UpdateGKETargetOutput} The populated <code>UpdateGKETargetOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateGKETargetOutput();

            if (data.hasOwnProperty('target_id')) {
                obj['target_id'] = ApiClient.convertToType(data['target_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateGKETargetOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateGKETargetOutput</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} target_id
 */
UpdateGKETargetOutput.prototype['target_id'] = undefined;






export default UpdateGKETargetOutput;

