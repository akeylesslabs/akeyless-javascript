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
import Target from './Target';
import TargetTypeDetailsInput from './TargetTypeDetailsInput';

/**
 * The GetTargetDetailsOutput model module.
 * @module model/GetTargetDetailsOutput
 * @version 4.3.0
 */
class GetTargetDetailsOutput {
    /**
     * Constructs a new <code>GetTargetDetailsOutput</code>.
     * @alias module:model/GetTargetDetailsOutput
     */
    constructor() { 
        
        GetTargetDetailsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTargetDetailsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTargetDetailsOutput} obj Optional instance to populate.
     * @return {module:model/GetTargetDetailsOutput} The populated <code>GetTargetDetailsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTargetDetailsOutput();

            if (data.hasOwnProperty('target')) {
                obj['target'] = Target.constructFromObject(data['target']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = TargetTypeDetailsInput.constructFromObject(data['value']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Target} target
 */
GetTargetDetailsOutput.prototype['target'] = undefined;

/**
 * @member {module:model/TargetTypeDetailsInput} value
 */
GetTargetDetailsOutput.prototype['value'] = undefined;






export default GetTargetDetailsOutput;

