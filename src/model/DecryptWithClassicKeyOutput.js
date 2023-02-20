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
 * The DecryptWithClassicKeyOutput model module.
 * @module model/DecryptWithClassicKeyOutput
 * @version 3.2.5
 */
class DecryptWithClassicKeyOutput {
    /**
     * Constructs a new <code>DecryptWithClassicKeyOutput</code>.
     * @alias module:model/DecryptWithClassicKeyOutput
     */
    constructor() { 
        
        DecryptWithClassicKeyOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DecryptWithClassicKeyOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecryptWithClassicKeyOutput} obj Optional instance to populate.
     * @return {module:model/DecryptWithClassicKeyOutput} The populated <code>DecryptWithClassicKeyOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecryptWithClassicKeyOutput();

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
DecryptWithClassicKeyOutput.prototype['result'] = undefined;






export default DecryptWithClassicKeyOutput;

