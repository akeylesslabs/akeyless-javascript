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
 * The CreateAuthMethodLDAPOutput model module.
 * @module model/CreateAuthMethodLDAPOutput
 * @version 3.3.13
 */
class CreateAuthMethodLDAPOutput {
    /**
     * Constructs a new <code>CreateAuthMethodLDAPOutput</code>.
     * @alias module:model/CreateAuthMethodLDAPOutput
     */
    constructor() { 
        
        CreateAuthMethodLDAPOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateAuthMethodLDAPOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodLDAPOutput} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodLDAPOutput} The populated <code>CreateAuthMethodLDAPOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodLDAPOutput();

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
CreateAuthMethodLDAPOutput.prototype['access_id'] = undefined;

/**
 * @member {String} prv_key
 */
CreateAuthMethodLDAPOutput.prototype['prv_key'] = undefined;






export default CreateAuthMethodLDAPOutput;

