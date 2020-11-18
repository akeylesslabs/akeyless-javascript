/**
 * includes all operations supported by Akeyless.
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetSSHCertificateOutput model module.
 * @module model/GetSSHCertificateOutput
 * @version 0.0.1
 */
class GetSSHCertificateOutput {
    /**
     * Constructs a new <code>GetSSHCertificateOutput</code>.
     * @alias module:model/GetSSHCertificateOutput
     */
    constructor() { 
        
        GetSSHCertificateOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSSHCertificateOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSSHCertificateOutput} obj Optional instance to populate.
     * @return {module:model/GetSSHCertificateOutput} The populated <code>GetSSHCertificateOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSSHCertificateOutput();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} data
 */
GetSSHCertificateOutput.prototype['data'] = undefined;

/**
 * @member {String} path
 */
GetSSHCertificateOutput.prototype['path'] = undefined;






export default GetSSHCertificateOutput;

