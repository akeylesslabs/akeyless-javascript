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
 * The ImportPasswordsOutput model module.
 * @module model/ImportPasswordsOutput
 * @version 3.5.3
 */
class ImportPasswordsOutput {
    /**
     * Constructs a new <code>ImportPasswordsOutput</code>.
     * @alias module:model/ImportPasswordsOutput
     */
    constructor() { 
        
        ImportPasswordsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImportPasswordsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportPasswordsOutput} obj Optional instance to populate.
     * @return {module:model/ImportPasswordsOutput} The populated <code>ImportPasswordsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImportPasswordsOutput();

            if (data.hasOwnProperty('imported')) {
                obj['imported'] = ApiClient.convertToType(data['imported'], 'Number');
            }
            if (data.hasOwnProperty('passwords_in_file')) {
                obj['passwords_in_file'] = ApiClient.convertToType(data['passwords_in_file'], 'Number');
            }
            if (data.hasOwnProperty('successfully_parsed')) {
                obj['successfully_parsed'] = ApiClient.convertToType(data['successfully_parsed'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} imported
 */
ImportPasswordsOutput.prototype['imported'] = undefined;

/**
 * @member {Number} passwords_in_file
 */
ImportPasswordsOutput.prototype['passwords_in_file'] = undefined;

/**
 * @member {Number} successfully_parsed
 */
ImportPasswordsOutput.prototype['successfully_parsed'] = undefined;






export default ImportPasswordsOutput;

