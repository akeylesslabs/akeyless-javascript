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
 * The ProvisionCertificateOutput model module.
 * @module model/ProvisionCertificateOutput
 * @version 4.2.5
 */
class ProvisionCertificateOutput {
    /**
     * Constructs a new <code>ProvisionCertificateOutput</code>.
     * @alias module:model/ProvisionCertificateOutput
     */
    constructor() { 
        
        ProvisionCertificateOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProvisionCertificateOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProvisionCertificateOutput} obj Optional instance to populate.
     * @return {module:model/ProvisionCertificateOutput} The populated <code>ProvisionCertificateOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProvisionCertificateOutput();

            if (data.hasOwnProperty('FailMessage')) {
                obj['FailMessage'] = ApiClient.convertToType(data['FailMessage'], 'String');
            }
            if (data.hasOwnProperty('SuccessMessage')) {
                obj['SuccessMessage'] = ApiClient.convertToType(data['SuccessMessage'], 'String');
            }
            if (data.hasOwnProperty('host_names')) {
                obj['host_names'] = ApiClient.convertToType(data['host_names'], ['String']);
            }
            if (data.hasOwnProperty('provisioned_at')) {
                obj['provisioned_at'] = ApiClient.convertToType(data['provisioned_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} FailMessage
 */
ProvisionCertificateOutput.prototype['FailMessage'] = undefined;

/**
 * @member {String} SuccessMessage
 */
ProvisionCertificateOutput.prototype['SuccessMessage'] = undefined;

/**
 * @member {Array.<String>} host_names
 */
ProvisionCertificateOutput.prototype['host_names'] = undefined;

/**
 * @member {Date} provisioned_at
 */
ProvisionCertificateOutput.prototype['provisioned_at'] = undefined;






export default ProvisionCertificateOutput;

