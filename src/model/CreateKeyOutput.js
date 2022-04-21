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
 * The CreateKeyOutput model module.
 * @module model/CreateKeyOutput
 * @version 2.16.1
 */
class CreateKeyOutput {
    /**
     * Constructs a new <code>CreateKeyOutput</code>.
     * @alias module:model/CreateKeyOutput
     */
    constructor() { 
        
        CreateKeyOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateKeyOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateKeyOutput} obj Optional instance to populate.
     * @return {module:model/CreateKeyOutput} The populated <code>CreateKeyOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateKeyOutput();

            if (data.hasOwnProperty('fragment_results')) {
                obj['fragment_results'] = ApiClient.convertToType(data['fragment_results'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} fragment_results
 */
CreateKeyOutput.prototype['fragment_results'] = undefined;






export default CreateKeyOutput;

