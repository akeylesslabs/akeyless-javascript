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
 * The RollbackSecretOutput model module.
 * @module model/RollbackSecretOutput
 * @version 3.5.1
 */
class RollbackSecretOutput {
    /**
     * Constructs a new <code>RollbackSecretOutput</code>.
     * @alias module:model/RollbackSecretOutput
     */
    constructor() { 
        
        RollbackSecretOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RollbackSecretOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RollbackSecretOutput} obj Optional instance to populate.
     * @return {module:model/RollbackSecretOutput} The populated <code>RollbackSecretOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RollbackSecretOutput();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
RollbackSecretOutput.prototype['name'] = undefined;

/**
 * @member {Number} version
 */
RollbackSecretOutput.prototype['version'] = undefined;






export default RollbackSecretOutput;

