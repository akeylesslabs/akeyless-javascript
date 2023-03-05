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
 * The CreateClassicKeyOutput model module.
 * @module model/CreateClassicKeyOutput
 * @version 3.2.7
 */
class CreateClassicKeyOutput {
    /**
     * Constructs a new <code>CreateClassicKeyOutput</code>.
     * @alias module:model/CreateClassicKeyOutput
     */
    constructor() { 
        
        CreateClassicKeyOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateClassicKeyOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateClassicKeyOutput} obj Optional instance to populate.
     * @return {module:model/CreateClassicKeyOutput} The populated <code>CreateClassicKeyOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateClassicKeyOutput();

            if (data.hasOwnProperty('classic_key_id')) {
                obj['classic_key_id'] = ApiClient.convertToType(data['classic_key_id'], 'String');
            }
            if (data.hasOwnProperty('classic_key_name')) {
                obj['classic_key_name'] = ApiClient.convertToType(data['classic_key_name'], 'String');
            }
            if (data.hasOwnProperty('classic_key_type')) {
                obj['classic_key_type'] = ApiClient.convertToType(data['classic_key_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} classic_key_id
 */
CreateClassicKeyOutput.prototype['classic_key_id'] = undefined;

/**
 * @member {String} classic_key_name
 */
CreateClassicKeyOutput.prototype['classic_key_name'] = undefined;

/**
 * @member {String} classic_key_type
 */
CreateClassicKeyOutput.prototype['classic_key_type'] = undefined;






export default CreateClassicKeyOutput;

