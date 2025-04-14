/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UpdateAuthMethodK8SOutput model module.
 * @module model/UpdateAuthMethodK8SOutput
 * @version 5.0.3
 */
class UpdateAuthMethodK8SOutput {
    /**
     * Constructs a new <code>UpdateAuthMethodK8SOutput</code>.
     * @alias module:model/UpdateAuthMethodK8SOutput
     */
    constructor() { 
        
        UpdateAuthMethodK8SOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateAuthMethodK8SOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAuthMethodK8SOutput} obj Optional instance to populate.
     * @return {module:model/UpdateAuthMethodK8SOutput} The populated <code>UpdateAuthMethodK8SOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAuthMethodK8SOutput();

            if (data.hasOwnProperty('prv_key')) {
                obj['prv_key'] = ApiClient.convertToType(data['prv_key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateAuthMethodK8SOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateAuthMethodK8SOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['prv_key'] && !(typeof data['prv_key'] === 'string' || data['prv_key'] instanceof String)) {
            throw new Error("Expected the field `prv_key` to be a primitive type in the JSON string but got " + data['prv_key']);
        }

        return true;
    }


}



/**
 * @member {String} prv_key
 */
UpdateAuthMethodK8SOutput.prototype['prv_key'] = undefined;






export default UpdateAuthMethodK8SOutput;

