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
 * The KmipRenewClientCertificateOutput model module.
 * @module model/KmipRenewClientCertificateOutput
 * @version 2.5.7
 */
class KmipRenewClientCertificateOutput {
    /**
     * Constructs a new <code>KmipRenewClientCertificateOutput</code>.
     * @alias module:model/KmipRenewClientCertificateOutput
     */
    constructor() { 
        
        KmipRenewClientCertificateOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KmipRenewClientCertificateOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KmipRenewClientCertificateOutput} obj Optional instance to populate.
     * @return {module:model/KmipRenewClientCertificateOutput} The populated <code>KmipRenewClientCertificateOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KmipRenewClientCertificateOutput();

            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} certificate
 */
KmipRenewClientCertificateOutput.prototype['certificate'] = undefined;

/**
 * @member {String} id
 */
KmipRenewClientCertificateOutput.prototype['id'] = undefined;

/**
 * @member {String} key
 */
KmipRenewClientCertificateOutput.prototype['key'] = undefined;






export default KmipRenewClientCertificateOutput;

