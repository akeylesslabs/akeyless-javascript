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
 * The SignPKCS1Output model module.
 * @module model/SignPKCS1Output
 * @version 2.5.22
 */
class SignPKCS1Output {
    /**
     * Constructs a new <code>SignPKCS1Output</code>.
     * @alias module:model/SignPKCS1Output
     */
    constructor() { 
        
        SignPKCS1Output.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SignPKCS1Output</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignPKCS1Output} obj Optional instance to populate.
     * @return {module:model/SignPKCS1Output} The populated <code>SignPKCS1Output</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignPKCS1Output();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} result
 */
SignPKCS1Output.prototype['result'] = undefined;






export default SignPKCS1Output;

