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
 * The CreateAuthMethodK8SOutput model module.
 * @module model/CreateAuthMethodK8SOutput
 * @version 3.2.8
 */
class CreateAuthMethodK8SOutput {
    /**
     * Constructs a new <code>CreateAuthMethodK8SOutput</code>.
     * @alias module:model/CreateAuthMethodK8SOutput
     */
    constructor() { 
        
        CreateAuthMethodK8SOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateAuthMethodK8SOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodK8SOutput} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodK8SOutput} The populated <code>CreateAuthMethodK8SOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodK8SOutput();

            if (data.hasOwnProperty('access_id')) {
                obj['access_id'] = ApiClient.convertToType(data['access_id'], 'String');
            }
            if (data.hasOwnProperty('prv_key')) {
                obj['prv_key'] = ApiClient.convertToType(data['prv_key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} access_id
 */
CreateAuthMethodK8SOutput.prototype['access_id'] = undefined;

/**
 * @member {String} prv_key
 */
CreateAuthMethodK8SOutput.prototype['prv_key'] = undefined;






export default CreateAuthMethodK8SOutput;

