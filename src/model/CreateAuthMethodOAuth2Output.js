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
 * The CreateAuthMethodOAuth2Output model module.
 * @module model/CreateAuthMethodOAuth2Output
 * @version 3.3.11
 */
class CreateAuthMethodOAuth2Output {
    /**
     * Constructs a new <code>CreateAuthMethodOAuth2Output</code>.
     * @alias module:model/CreateAuthMethodOAuth2Output
     */
    constructor() { 
        
        CreateAuthMethodOAuth2Output.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateAuthMethodOAuth2Output</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodOAuth2Output} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodOAuth2Output} The populated <code>CreateAuthMethodOAuth2Output</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodOAuth2Output();

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
CreateAuthMethodOAuth2Output.prototype['access_id'] = undefined;






export default CreateAuthMethodOAuth2Output;

