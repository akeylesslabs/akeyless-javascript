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
 * The EsmDeleteSecretOutput model module.
 * @module model/EsmDeleteSecretOutput
 * @version 4.3.0
 */
class EsmDeleteSecretOutput {
    /**
     * Constructs a new <code>EsmDeleteSecretOutput</code>.
     * @alias module:model/EsmDeleteSecretOutput
     */
    constructor() { 
        
        EsmDeleteSecretOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EsmDeleteSecretOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EsmDeleteSecretOutput} obj Optional instance to populate.
     * @return {module:model/EsmDeleteSecretOutput} The populated <code>EsmDeleteSecretOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EsmDeleteSecretOutput();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
EsmDeleteSecretOutput.prototype['name'] = undefined;






export default EsmDeleteSecretOutput;

