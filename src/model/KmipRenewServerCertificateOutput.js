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
 * The KmipRenewServerCertificateOutput model module.
 * @module model/KmipRenewServerCertificateOutput
 * @version 2.5.12
 */
class KmipRenewServerCertificateOutput {
    /**
     * Constructs a new <code>KmipRenewServerCertificateOutput</code>.
     * @alias module:model/KmipRenewServerCertificateOutput
     */
    constructor() { 
        
        KmipRenewServerCertificateOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KmipRenewServerCertificateOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KmipRenewServerCertificateOutput} obj Optional instance to populate.
     * @return {module:model/KmipRenewServerCertificateOutput} The populated <code>KmipRenewServerCertificateOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KmipRenewServerCertificateOutput();

            if (data.hasOwnProperty('ca_cert')) {
                obj['ca_cert'] = ApiClient.convertToType(data['ca_cert'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ca_cert
 */
KmipRenewServerCertificateOutput.prototype['ca_cert'] = undefined;






export default KmipRenewServerCertificateOutput;

