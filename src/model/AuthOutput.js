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
 * The AuthOutput model module.
 * @module model/AuthOutput
 * @version 2.4.0
 */
class AuthOutput {
    /**
     * Constructs a new <code>AuthOutput</code>.
     * @alias module:model/AuthOutput
     */
    constructor() { 
        
        AuthOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthOutput} obj Optional instance to populate.
     * @return {module:model/AuthOutput} The populated <code>AuthOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthOutput();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} token
 */
AuthOutput.prototype['token'] = undefined;






export default AuthOutput;

