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
import SecretInfo from './SecretInfo';

/**
 * The EsmListSecretsOutput model module.
 * @module model/EsmListSecretsOutput
 * @version 4.0.0
 */
class EsmListSecretsOutput {
    /**
     * Constructs a new <code>EsmListSecretsOutput</code>.
     * @alias module:model/EsmListSecretsOutput
     */
    constructor() { 
        
        EsmListSecretsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EsmListSecretsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EsmListSecretsOutput} obj Optional instance to populate.
     * @return {module:model/EsmListSecretsOutput} The populated <code>EsmListSecretsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EsmListSecretsOutput();

            if (data.hasOwnProperty('secrets_list')) {
                obj['secrets_list'] = ApiClient.convertToType(data['secrets_list'], [SecretInfo]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SecretInfo>} secrets_list
 */
EsmListSecretsOutput.prototype['secrets_list'] = undefined;






export default EsmListSecretsOutput;

