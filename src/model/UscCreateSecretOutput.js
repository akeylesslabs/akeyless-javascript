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
 * The UscCreateSecretOutput model module.
 * @module model/UscCreateSecretOutput
 * @version 4.3.0
 */
class UscCreateSecretOutput {
    /**
     * Constructs a new <code>UscCreateSecretOutput</code>.
     * @alias module:model/UscCreateSecretOutput
     */
    constructor() { 
        
        UscCreateSecretOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UscCreateSecretOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UscCreateSecretOutput} obj Optional instance to populate.
     * @return {module:model/UscCreateSecretOutput} The populated <code>UscCreateSecretOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UscCreateSecretOutput();

            if (data.hasOwnProperty('secret_id')) {
                obj['secret_id'] = ApiClient.convertToType(data['secret_id'], 'String');
            }
            if (data.hasOwnProperty('version_id')) {
                obj['version_id'] = ApiClient.convertToType(data['version_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} secret_id
 */
UscCreateSecretOutput.prototype['secret_id'] = undefined;

/**
 * @member {String} version_id
 */
UscCreateSecretOutput.prototype['version_id'] = undefined;






export default UscCreateSecretOutput;

