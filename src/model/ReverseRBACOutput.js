/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ReverseRBACClient from './ReverseRBACClient';

/**
 * The ReverseRBACOutput model module.
 * @module model/ReverseRBACOutput
 * @version 5.0.0
 */
class ReverseRBACOutput {
    /**
     * Constructs a new <code>ReverseRBACOutput</code>.
     * @alias module:model/ReverseRBACOutput
     */
    constructor() { 
        
        ReverseRBACOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReverseRBACOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReverseRBACOutput} obj Optional instance to populate.
     * @return {module:model/ReverseRBACOutput} The populated <code>ReverseRBACOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReverseRBACOutput();

            if (data.hasOwnProperty('clients')) {
                obj['clients'] = ApiClient.convertToType(data['clients'], {'String': ReverseRBACClient});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReverseRBACOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReverseRBACOutput</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Object.<String, module:model/ReverseRBACClient>} clients
 */
ReverseRBACOutput.prototype['clients'] = undefined;






export default ReverseRBACOutput;

