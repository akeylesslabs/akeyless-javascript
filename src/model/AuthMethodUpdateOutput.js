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
 * The AuthMethodUpdateOutput model module.
 * @module model/AuthMethodUpdateOutput
 * @version 4.2.2
 */
class AuthMethodUpdateOutput {
    /**
     * Constructs a new <code>AuthMethodUpdateOutput</code>.
     * @alias module:model/AuthMethodUpdateOutput
     */
    constructor() { 
        
        AuthMethodUpdateOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthMethodUpdateOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthMethodUpdateOutput} obj Optional instance to populate.
     * @return {module:model/AuthMethodUpdateOutput} The populated <code>AuthMethodUpdateOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthMethodUpdateOutput();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('prv_key')) {
                obj['prv_key'] = ApiClient.convertToType(data['prv_key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
AuthMethodUpdateOutput.prototype['name'] = undefined;

/**
 * @member {String} prv_key
 */
AuthMethodUpdateOutput.prototype['prv_key'] = undefined;






export default AuthMethodUpdateOutput;
