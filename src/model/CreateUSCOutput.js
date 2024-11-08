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
 * The CreateUSCOutput model module.
 * @module model/CreateUSCOutput
 * @version 4.3.0
 */
class CreateUSCOutput {
    /**
     * Constructs a new <code>CreateUSCOutput</code>.
     * @alias module:model/CreateUSCOutput
     */
    constructor() { 
        
        CreateUSCOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateUSCOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUSCOutput} obj Optional instance to populate.
     * @return {module:model/CreateUSCOutput} The populated <code>CreateUSCOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateUSCOutput();

            if (data.hasOwnProperty('universal_secrets_connector_id')) {
                obj['universal_secrets_connector_id'] = ApiClient.convertToType(data['universal_secrets_connector_id'], 'Number');
            }
            if (data.hasOwnProperty('universal_secrets_connector_name')) {
                obj['universal_secrets_connector_name'] = ApiClient.convertToType(data['universal_secrets_connector_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} universal_secrets_connector_id
 */
CreateUSCOutput.prototype['universal_secrets_connector_id'] = undefined;

/**
 * @member {String} universal_secrets_connector_name
 */
CreateUSCOutput.prototype['universal_secrets_connector_name'] = undefined;






export default CreateUSCOutput;

