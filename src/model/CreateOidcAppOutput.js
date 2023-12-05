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
 * The CreateOidcAppOutput model module.
 * @module model/CreateOidcAppOutput
 * @version 3.5.2
 */
class CreateOidcAppOutput {
    /**
     * Constructs a new <code>CreateOidcAppOutput</code>.
     * @alias module:model/CreateOidcAppOutput
     */
    constructor() { 
        
        CreateOidcAppOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateOidcAppOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateOidcAppOutput} obj Optional instance to populate.
     * @return {module:model/CreateOidcAppOutput} The populated <code>CreateOidcAppOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateOidcAppOutput();

            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('client_secret')) {
                obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} client_id
 */
CreateOidcAppOutput.prototype['client_id'] = undefined;

/**
 * @member {String} client_secret
 */
CreateOidcAppOutput.prototype['client_secret'] = undefined;

/**
 * @member {String} name
 */
CreateOidcAppOutput.prototype['name'] = undefined;






export default CreateOidcAppOutput;

