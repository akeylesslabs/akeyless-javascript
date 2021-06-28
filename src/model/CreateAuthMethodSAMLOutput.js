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
 * The CreateAuthMethodSAMLOutput model module.
 * @module model/CreateAuthMethodSAMLOutput
 * @version 2.4.4
 */
class CreateAuthMethodSAMLOutput {
    /**
     * Constructs a new <code>CreateAuthMethodSAMLOutput</code>.
     * @alias module:model/CreateAuthMethodSAMLOutput
     */
    constructor() { 
        
        CreateAuthMethodSAMLOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateAuthMethodSAMLOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodSAMLOutput} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodSAMLOutput} The populated <code>CreateAuthMethodSAMLOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodSAMLOutput();

            if (data.hasOwnProperty('access_id')) {
                obj['access_id'] = ApiClient.convertToType(data['access_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} access_id
 */
CreateAuthMethodSAMLOutput.prototype['access_id'] = undefined;






export default CreateAuthMethodSAMLOutput;

