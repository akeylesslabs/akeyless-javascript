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
import CertificateExpirationEvent from './CertificateExpirationEvent';
import CertificateInfo from './CertificateInfo';

/**
 * The CertificateChainInfo model module.
 * @module model/CertificateChainInfo
 * @version 3.5.1
 */
class CertificateChainInfo {
    /**
     * Constructs a new <code>CertificateChainInfo</code>.
     * @alias module:model/CertificateChainInfo
     */
    constructor() { 
        
        CertificateChainInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CertificateChainInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CertificateChainInfo} obj Optional instance to populate.
     * @return {module:model/CertificateChainInfo} The populated <code>CertificateChainInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CertificateChainInfo();

            if (data.hasOwnProperty('certificate_chain')) {
                obj['certificate_chain'] = ApiClient.convertToType(data['certificate_chain'], [CertificateInfo]);
            }
            if (data.hasOwnProperty('certificate_format')) {
                obj['certificate_format'] = ApiClient.convertToType(data['certificate_format'], 'String');
            }
            if (data.hasOwnProperty('certificate_issuer_item_id')) {
                obj['certificate_issuer_item_id'] = ApiClient.convertToType(data['certificate_issuer_item_id'], 'Number');
            }
            if (data.hasOwnProperty('certificate_issuer_name')) {
                obj['certificate_issuer_name'] = ApiClient.convertToType(data['certificate_issuer_name'], 'String');
            }
            if (data.hasOwnProperty('certificate_pem')) {
                obj['certificate_pem'] = ApiClient.convertToType(data['certificate_pem'], 'String');
            }
            if (data.hasOwnProperty('certificate_status')) {
                obj['certificate_status'] = ApiClient.convertToType(data['certificate_status'], 'String');
            }
            if (data.hasOwnProperty('expiration_events')) {
                obj['expiration_events'] = ApiClient.convertToType(data['expiration_events'], [CertificateExpirationEvent]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CertificateInfo>} certificate_chain
 */
CertificateChainInfo.prototype['certificate_chain'] = undefined;

/**
 * @member {String} certificate_format
 */
CertificateChainInfo.prototype['certificate_format'] = undefined;

/**
 * @member {Number} certificate_issuer_item_id
 */
CertificateChainInfo.prototype['certificate_issuer_item_id'] = undefined;

/**
 * @member {String} certificate_issuer_name
 */
CertificateChainInfo.prototype['certificate_issuer_name'] = undefined;

/**
 * @member {String} certificate_pem
 */
CertificateChainInfo.prototype['certificate_pem'] = undefined;

/**
 * @member {String} certificate_status
 */
CertificateChainInfo.prototype['certificate_status'] = undefined;

/**
 * @member {Array.<module:model/CertificateExpirationEvent>} expiration_events
 */
CertificateChainInfo.prototype['expiration_events'] = undefined;






export default CertificateChainInfo;

