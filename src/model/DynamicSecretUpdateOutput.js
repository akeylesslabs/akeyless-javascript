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
import DSProducerDetails from './DSProducerDetails';

/**
 * The DynamicSecretUpdateOutput model module.
 * @module model/DynamicSecretUpdateOutput
 * @version 5.0.6
 */
class DynamicSecretUpdateOutput {
    /**
     * Constructs a new <code>DynamicSecretUpdateOutput</code>.
     * @alias module:model/DynamicSecretUpdateOutput
     */
    constructor() { 
        
        DynamicSecretUpdateOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DynamicSecretUpdateOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretUpdateOutput} obj Optional instance to populate.
     * @return {module:model/DynamicSecretUpdateOutput} The populated <code>DynamicSecretUpdateOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretUpdateOutput();

            if (data.hasOwnProperty('dynamic_secret_details')) {
                obj['dynamic_secret_details'] = DSProducerDetails.constructFromObject(data['dynamic_secret_details']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DynamicSecretUpdateOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DynamicSecretUpdateOutput</code>.
     */
    static validateJSON(data) {
        // validate the optional field `dynamic_secret_details`
        if (data['dynamic_secret_details']) { // data not null
          DSProducerDetails.validateJSON(data['dynamic_secret_details']);
        }

        return true;
    }


}



/**
 * @member {module:model/DSProducerDetails} dynamic_secret_details
 */
DynamicSecretUpdateOutput.prototype['dynamic_secret_details'] = undefined;






export default DynamicSecretUpdateOutput;

