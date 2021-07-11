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
 * The SignPKICertOutput model module.
 * @module model/SignPKICertOutput
 * @version 2.5.0
 */
class SignPKICertOutput {
    /**
     * Constructs a new <code>SignPKICertOutput</code>.
     * @alias module:model/SignPKICertOutput
     */
    constructor() { 
        
        SignPKICertOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SignPKICertOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignPKICertOutput} obj Optional instance to populate.
     * @return {module:model/SignPKICertOutput} The populated <code>SignPKICertOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignPKICertOutput();

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
SignPKICertOutput.prototype['result'] = undefined;






export default SignPKICertOutput;
