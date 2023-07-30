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
 * The CreateGlobalSignAtlasTargetOutput model module.
 * @module model/CreateGlobalSignAtlasTargetOutput
 * @version 3.3.16
 */
class CreateGlobalSignAtlasTargetOutput {
    /**
     * Constructs a new <code>CreateGlobalSignAtlasTargetOutput</code>.
     * @alias module:model/CreateGlobalSignAtlasTargetOutput
     */
    constructor() { 
        
        CreateGlobalSignAtlasTargetOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateGlobalSignAtlasTargetOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateGlobalSignAtlasTargetOutput} obj Optional instance to populate.
     * @return {module:model/CreateGlobalSignAtlasTargetOutput} The populated <code>CreateGlobalSignAtlasTargetOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateGlobalSignAtlasTargetOutput();

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
CreateGlobalSignAtlasTargetOutput.prototype['target_id'] = undefined;






export default CreateGlobalSignAtlasTargetOutput;

