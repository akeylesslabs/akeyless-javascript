/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EncryptPKCS1Output model module.
 * @module model/EncryptPKCS1Output
 * @version 0.0.1
 */
class EncryptPKCS1Output {
    /**
     * Constructs a new <code>EncryptPKCS1Output</code>.
     * @alias module:model/EncryptPKCS1Output
     */
    constructor() { 
        
        EncryptPKCS1Output.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EncryptPKCS1Output</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EncryptPKCS1Output} obj Optional instance to populate.
     * @return {module:model/EncryptPKCS1Output} The populated <code>EncryptPKCS1Output</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptPKCS1Output();

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
EncryptPKCS1Output.prototype['result'] = undefined;






export default EncryptPKCS1Output;

