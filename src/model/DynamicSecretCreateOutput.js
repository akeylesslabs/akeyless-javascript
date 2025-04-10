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
import DSProducerDetails from './DSProducerDetails';

/**
 * The DynamicSecretCreateOutput model module.
 * @module model/DynamicSecretCreateOutput
 * @version 5.0.2
 */
class DynamicSecretCreateOutput {
    /**
     * Constructs a new <code>DynamicSecretCreateOutput</code>.
     * @alias module:model/DynamicSecretCreateOutput
     */
    constructor() { 
        
        DynamicSecretCreateOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DynamicSecretCreateOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretCreateOutput} obj Optional instance to populate.
     * @return {module:model/DynamicSecretCreateOutput} The populated <code>DynamicSecretCreateOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretCreateOutput();

            if (data.hasOwnProperty('dynamic_secret_details')) {
                obj['dynamic_secret_details'] = DSProducerDetails.constructFromObject(data['dynamic_secret_details']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DynamicSecretCreateOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DynamicSecretCreateOutput</code>.
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
DynamicSecretCreateOutput.prototype['dynamic_secret_details'] = undefined;






export default DynamicSecretCreateOutput;

