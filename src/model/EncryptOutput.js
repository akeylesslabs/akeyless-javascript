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
 * The EncryptOutput model module.
 * @module model/EncryptOutput
 * @version 4.3.0
 */
class EncryptOutput {
    /**
     * Constructs a new <code>EncryptOutput</code>.
     * @alias module:model/EncryptOutput
     */
    constructor() { 
        
        EncryptOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EncryptOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EncryptOutput} obj Optional instance to populate.
     * @return {module:model/EncryptOutput} The populated <code>EncryptOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptOutput();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} result
 */
EncryptOutput.prototype['result'] = undefined;






export default EncryptOutput;

