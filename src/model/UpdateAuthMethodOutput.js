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
 * The UpdateAuthMethodOutput model module.
 * @module model/UpdateAuthMethodOutput
 * @version 3.3.15
 */
class UpdateAuthMethodOutput {
    /**
     * Constructs a new <code>UpdateAuthMethodOutput</code>.
     * @alias module:model/UpdateAuthMethodOutput
     */
    constructor() { 
        
        UpdateAuthMethodOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateAuthMethodOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAuthMethodOutput} obj Optional instance to populate.
     * @return {module:model/UpdateAuthMethodOutput} The populated <code>UpdateAuthMethodOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAuthMethodOutput();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
UpdateAuthMethodOutput.prototype['name'] = undefined;






export default UpdateAuthMethodOutput;

