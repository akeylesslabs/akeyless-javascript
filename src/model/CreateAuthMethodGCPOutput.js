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
 * The CreateAuthMethodGCPOutput model module.
 * @module model/CreateAuthMethodGCPOutput
 * @version 2.15.28
 */
class CreateAuthMethodGCPOutput {
    /**
     * Constructs a new <code>CreateAuthMethodGCPOutput</code>.
     * @alias module:model/CreateAuthMethodGCPOutput
     */
    constructor() { 
        
        CreateAuthMethodGCPOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateAuthMethodGCPOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodGCPOutput} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodGCPOutput} The populated <code>CreateAuthMethodGCPOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodGCPOutput();

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
CreateAuthMethodGCPOutput.prototype['access_id'] = undefined;






export default CreateAuthMethodGCPOutput;

