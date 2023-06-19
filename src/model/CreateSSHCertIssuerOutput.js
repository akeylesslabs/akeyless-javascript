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
 * The CreateSSHCertIssuerOutput model module.
 * @module model/CreateSSHCertIssuerOutput
 * @version 3.3.9
 */
class CreateSSHCertIssuerOutput {
    /**
     * Constructs a new <code>CreateSSHCertIssuerOutput</code>.
     * @alias module:model/CreateSSHCertIssuerOutput
     */
    constructor() { 
        
        CreateSSHCertIssuerOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateSSHCertIssuerOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSSHCertIssuerOutput} obj Optional instance to populate.
     * @return {module:model/CreateSSHCertIssuerOutput} The populated <code>CreateSSHCertIssuerOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSSHCertIssuerOutput();

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
CreateSSHCertIssuerOutput.prototype['name'] = undefined;






export default CreateSSHCertIssuerOutput;

