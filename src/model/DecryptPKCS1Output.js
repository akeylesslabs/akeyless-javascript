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
 * The DecryptPKCS1Output model module.
 * @module model/DecryptPKCS1Output
 * @version 3.3.9
 */
class DecryptPKCS1Output {
    /**
     * Constructs a new <code>DecryptPKCS1Output</code>.
     * @alias module:model/DecryptPKCS1Output
     */
    constructor() { 
        
        DecryptPKCS1Output.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DecryptPKCS1Output</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecryptPKCS1Output} obj Optional instance to populate.
     * @return {module:model/DecryptPKCS1Output} The populated <code>DecryptPKCS1Output</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecryptPKCS1Output();

            if (data.hasOwnProperty('plaintext')) {
                obj['plaintext'] = ApiClient.convertToType(data['plaintext'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} plaintext
 */
DecryptPKCS1Output.prototype['plaintext'] = undefined;






export default DecryptPKCS1Output;

