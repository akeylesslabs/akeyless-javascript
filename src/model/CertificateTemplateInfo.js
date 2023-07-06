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
 * The CertificateTemplateInfo model module.
 * @module model/CertificateTemplateInfo
 * @version 3.3.14
 */
class CertificateTemplateInfo {
    /**
     * Constructs a new <code>CertificateTemplateInfo</code>.
     * @alias module:model/CertificateTemplateInfo
     */
    constructor() { 
        
        CertificateTemplateInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CertificateTemplateInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CertificateTemplateInfo} obj Optional instance to populate.
     * @return {module:model/CertificateTemplateInfo} The populated <code>CertificateTemplateInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CertificateTemplateInfo();

            if (data.hasOwnProperty('common_name')) {
                obj['common_name'] = ApiClient.convertToType(data['common_name'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('digest_algo')) {
                obj['digest_algo'] = ApiClient.convertToType(data['digest_algo'], 'String');
            }
            if (data.hasOwnProperty('locality')) {
                obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
            }
            if (data.hasOwnProperty('province')) {
                obj['province'] = ApiClient.convertToType(data['province'], 'String');
            }
            if (data.hasOwnProperty('self_signed_enabled')) {
                obj['self_signed_enabled'] = ApiClient.convertToType(data['self_signed_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} common_name
 */
CertificateTemplateInfo.prototype['common_name'] = undefined;

/**
 * @member {String} country
 */
CertificateTemplateInfo.prototype['country'] = undefined;

/**
 * @member {String} digest_algo
 */
CertificateTemplateInfo.prototype['digest_algo'] = undefined;

/**
 * @member {String} locality
 */
CertificateTemplateInfo.prototype['locality'] = undefined;

/**
 * @member {String} organization
 */
CertificateTemplateInfo.prototype['organization'] = undefined;

/**
 * @member {String} province
 */
CertificateTemplateInfo.prototype['province'] = undefined;

/**
 * @member {Boolean} self_signed_enabled
 */
CertificateTemplateInfo.prototype['self_signed_enabled'] = undefined;

/**
 * @member {Number} ttl
 */
CertificateTemplateInfo.prototype['ttl'] = undefined;






export default CertificateTemplateInfo;

