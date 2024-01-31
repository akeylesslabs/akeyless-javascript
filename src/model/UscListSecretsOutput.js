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
 * The UscListSecretsOutput model module.
 * @module model/UscListSecretsOutput
 * @version 3.6.1
 */
class UscListSecretsOutput {
    /**
     * Constructs a new <code>UscListSecretsOutput</code>.
     * @alias module:model/UscListSecretsOutput
     */
    constructor() { 
        
        UscListSecretsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UscListSecretsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UscListSecretsOutput} obj Optional instance to populate.
     * @return {module:model/UscListSecretsOutput} The populated <code>UscListSecretsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UscListSecretsOutput();

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
UscListSecretsOutput.prototype['secrets_list'] = undefined;






export default UscListSecretsOutput;

