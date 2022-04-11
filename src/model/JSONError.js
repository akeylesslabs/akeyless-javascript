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
 * The JSONError model module.
 * @module model/JSONError
 * @version 2.15.30
 */
class JSONError {
    /**
     * Constructs a new <code>JSONError</code>.
     * @alias module:model/JSONError
     */
    constructor() { 
        
        JSONError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JSONError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JSONError} obj Optional instance to populate.
     * @return {module:model/JSONError} The populated <code>JSONError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JSONError();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} error
 */
JSONError.prototype['error'] = undefined;






export default JSONError;

