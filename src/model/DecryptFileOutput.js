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
 * The DecryptFileOutput model module.
 * @module model/DecryptFileOutput
 * @version 2.15.29
 */
class DecryptFileOutput {
    /**
     * Constructs a new <code>DecryptFileOutput</code>.
     * @alias module:model/DecryptFileOutput
     */
    constructor() { 
        
        DecryptFileOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DecryptFileOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecryptFileOutput} obj Optional instance to populate.
     * @return {module:model/DecryptFileOutput} The populated <code>DecryptFileOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecryptFileOutput();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('plain_text')) {
                obj['plain_text'] = ApiClient.convertToType(data['plain_text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} path
 */
DecryptFileOutput.prototype['path'] = undefined;

/**
 * @member {String} plain_text
 */
DecryptFileOutput.prototype['plain_text'] = undefined;






export default DecryptFileOutput;

