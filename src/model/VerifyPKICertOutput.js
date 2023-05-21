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
 * The VerifyPKICertOutput model module.
 * @module model/VerifyPKICertOutput
 * @version 3.3.5
 */
class VerifyPKICertOutput {
    /**
     * Constructs a new <code>VerifyPKICertOutput</code>.
     * @alias module:model/VerifyPKICertOutput
     */
    constructor() { 
        
        VerifyPKICertOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VerifyPKICertOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerifyPKICertOutput} obj Optional instance to populate.
     * @return {module:model/VerifyPKICertOutput} The populated <code>VerifyPKICertOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VerifyPKICertOutput();

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
VerifyPKICertOutput.prototype['result'] = undefined;






export default VerifyPKICertOutput;

