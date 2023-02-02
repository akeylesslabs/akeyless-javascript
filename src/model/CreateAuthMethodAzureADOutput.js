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
 * The CreateAuthMethodAzureADOutput model module.
 * @module model/CreateAuthMethodAzureADOutput
 * @version 3.2.3
 */
class CreateAuthMethodAzureADOutput {
    /**
     * Constructs a new <code>CreateAuthMethodAzureADOutput</code>.
     * @alias module:model/CreateAuthMethodAzureADOutput
     */
    constructor() { 
        
        CreateAuthMethodAzureADOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateAuthMethodAzureADOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodAzureADOutput} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodAzureADOutput} The populated <code>CreateAuthMethodAzureADOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodAzureADOutput();

            if (data.hasOwnProperty('access_id')) {
                obj['access_id'] = ApiClient.convertToType(data['access_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} access_id
 */
CreateAuthMethodAzureADOutput.prototype['access_id'] = undefined;






export default CreateAuthMethodAzureADOutput;

