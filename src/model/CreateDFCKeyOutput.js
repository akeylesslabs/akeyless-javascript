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
 * The CreateDFCKeyOutput model module.
 * @module model/CreateDFCKeyOutput
 * @version 2.15.30
 */
class CreateDFCKeyOutput {
    /**
     * Constructs a new <code>CreateDFCKeyOutput</code>.
     * @alias module:model/CreateDFCKeyOutput
     */
    constructor() { 
        
        CreateDFCKeyOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateDFCKeyOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateDFCKeyOutput} obj Optional instance to populate.
     * @return {module:model/CreateDFCKeyOutput} The populated <code>CreateDFCKeyOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateDFCKeyOutput();

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
CreateDFCKeyOutput.prototype['fragment_results'] = undefined;






export default CreateDFCKeyOutput;

