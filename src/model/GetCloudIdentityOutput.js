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
 * The GetCloudIdentityOutput model module.
 * @module model/GetCloudIdentityOutput
 * @version 2.17.0
 */
class GetCloudIdentityOutput {
    /**
     * Constructs a new <code>GetCloudIdentityOutput</code>.
     * @alias module:model/GetCloudIdentityOutput
     */
    constructor() { 
        
        GetCloudIdentityOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCloudIdentityOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCloudIdentityOutput} obj Optional instance to populate.
     * @return {module:model/GetCloudIdentityOutput} The populated <code>GetCloudIdentityOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCloudIdentityOutput();

            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} provider
 */
GetCloudIdentityOutput.prototype['provider'] = undefined;

/**
 * @member {String} token
 */
GetCloudIdentityOutput.prototype['token'] = undefined;






export default GetCloudIdentityOutput;

