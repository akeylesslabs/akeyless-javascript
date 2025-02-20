/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
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
 * @version 5.0.0
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

    /**
     * Validates the JSON data with respect to <code>ProvisionCertificateOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProvisionCertificateOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['FailMessage'] && !(typeof data['FailMessage'] === 'string' || data['FailMessage'] instanceof String)) {
            throw new Error("Expected the field `FailMessage` to be a primitive type in the JSON string but got " + data['FailMessage']);
        }
        // ensure the json data is a string
        if (data['SuccessMessage'] && !(typeof data['SuccessMessage'] === 'string' || data['SuccessMessage'] instanceof String)) {
            throw new Error("Expected the field `SuccessMessage` to be a primitive type in the JSON string but got " + data['SuccessMessage']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['host_names'])) {
            throw new Error("Expected the field `host_names` to be an array in the JSON data but got " + data['host_names']);
        }

        return true;
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

