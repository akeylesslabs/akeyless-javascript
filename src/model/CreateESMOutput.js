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
 * The CreateESMOutput model module.
 * @module model/CreateESMOutput
 * @version 4.3.0
 */
class CreateESMOutput {
    /**
     * Constructs a new <code>CreateESMOutput</code>.
     * @alias module:model/CreateESMOutput
     */
    constructor() { 
        
        CreateESMOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateESMOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateESMOutput} obj Optional instance to populate.
     * @return {module:model/CreateESMOutput} The populated <code>CreateESMOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateESMOutput();

            if (data.hasOwnProperty('external_secret_manager_id')) {
                obj['external_secret_manager_id'] = ApiClient.convertToType(data['external_secret_manager_id'], 'Number');
            }
            if (data.hasOwnProperty('external_secret_manager_name')) {
                obj['external_secret_manager_name'] = ApiClient.convertToType(data['external_secret_manager_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} external_secret_manager_id
 */
CreateESMOutput.prototype['external_secret_manager_id'] = undefined;

/**
 * @member {String} external_secret_manager_name
 */
CreateESMOutput.prototype['external_secret_manager_name'] = undefined;






export default CreateESMOutput;

