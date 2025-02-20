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
 * The CertificateVersionInfo model module.
 * @module model/CertificateVersionInfo
 * @version 5.0.0
 */
class CertificateVersionInfo {
    /**
     * Constructs a new <code>CertificateVersionInfo</code>.
     * @alias module:model/CertificateVersionInfo
     */
    constructor() { 
        
        CertificateVersionInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CertificateVersionInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CertificateVersionInfo} obj Optional instance to populate.
     * @return {module:model/CertificateVersionInfo} The populated <code>CertificateVersionInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CertificateVersionInfo();

            if (data.hasOwnProperty('not_after')) {
                obj['not_after'] = ApiClient.convertToType(data['not_after'], 'Date');
            }
            if (data.hasOwnProperty('not_before')) {
                obj['not_before'] = ApiClient.convertToType(data['not_before'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CertificateVersionInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CertificateVersionInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * @member {Date} not_after
 */
CertificateVersionInfo.prototype['not_after'] = undefined;

/**
 * @member {Date} not_before
 */
CertificateVersionInfo.prototype['not_before'] = undefined;

/**
 * @member {String} status
 */
CertificateVersionInfo.prototype['status'] = undefined;






export default CertificateVersionInfo;

