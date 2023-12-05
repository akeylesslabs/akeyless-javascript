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
import Extension from './Extension';
import Name from './Name';

/**
 * The CertificateInfo model module.
 * @module model/CertificateInfo
 * @version 3.5.2
 */
class CertificateInfo {
    /**
     * Constructs a new <code>CertificateInfo</code>.
     * @alias module:model/CertificateInfo
     */
    constructor() { 
        
        CertificateInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CertificateInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CertificateInfo} obj Optional instance to populate.
     * @return {module:model/CertificateInfo} The populated <code>CertificateInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CertificateInfo();

            if (data.hasOwnProperty('ExtKeyUsage')) {
                obj['ExtKeyUsage'] = ApiClient.convertToType(data['ExtKeyUsage'], ['Number']);
            }
            if (data.hasOwnProperty('KeyUsage')) {
                obj['KeyUsage'] = ApiClient.convertToType(data['KeyUsage'], 'Number');
            }
            if (data.hasOwnProperty('dns_names')) {
                obj['dns_names'] = ApiClient.convertToType(data['dns_names'], ['String']);
            }
            if (data.hasOwnProperty('email_addresses')) {
                obj['email_addresses'] = ApiClient.convertToType(data['email_addresses'], ['String']);
            }
            if (data.hasOwnProperty('extensions')) {
                obj['extensions'] = ApiClient.convertToType(data['extensions'], [Extension]);
            }
            if (data.hasOwnProperty('ip_addresses')) {
                obj['ip_addresses'] = ApiClient.convertToType(data['ip_addresses'], ['String']);
            }
            if (data.hasOwnProperty('is_ca')) {
                obj['is_ca'] = ApiClient.convertToType(data['is_ca'], 'Boolean');
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = Name.constructFromObject(data['issuer']);
            }
            if (data.hasOwnProperty('issuing_certificate_url')) {
                obj['issuing_certificate_url'] = ApiClient.convertToType(data['issuing_certificate_url'], ['String']);
            }
            if (data.hasOwnProperty('key_size')) {
                obj['key_size'] = ApiClient.convertToType(data['key_size'], 'Number');
            }
            if (data.hasOwnProperty('not_after')) {
                obj['not_after'] = ApiClient.convertToType(data['not_after'], 'Date');
            }
            if (data.hasOwnProperty('not_before')) {
                obj['not_before'] = ApiClient.convertToType(data['not_before'], 'Date');
            }
            if (data.hasOwnProperty('ocsp_server')) {
                obj['ocsp_server'] = ApiClient.convertToType(data['ocsp_server'], ['String']);
            }
            if (data.hasOwnProperty('public_key_algorithm_name')) {
                obj['public_key_algorithm_name'] = ApiClient.convertToType(data['public_key_algorithm_name'], 'String');
            }
            if (data.hasOwnProperty('serial_number')) {
                obj['serial_number'] = ApiClient.convertToType(data['serial_number'], 'String');
            }
            if (data.hasOwnProperty('sha_1_fingerprint')) {
                obj['sha_1_fingerprint'] = ApiClient.convertToType(data['sha_1_fingerprint'], 'String');
            }
            if (data.hasOwnProperty('sha_256_fingerprint')) {
                obj['sha_256_fingerprint'] = ApiClient.convertToType(data['sha_256_fingerprint'], 'String');
            }
            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
            }
            if (data.hasOwnProperty('signature_algorithm_name')) {
                obj['signature_algorithm_name'] = ApiClient.convertToType(data['signature_algorithm_name'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = Name.constructFromObject(data['subject']);
            }
            if (data.hasOwnProperty('subject_public_key')) {
                obj['subject_public_key'] = ApiClient.convertToType(data['subject_public_key'], 'String');
            }
            if (data.hasOwnProperty('uris')) {
                obj['uris'] = ApiClient.convertToType(data['uris'], ['String']);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} ExtKeyUsage
 */
CertificateInfo.prototype['ExtKeyUsage'] = undefined;

/**
 * KeyUsage represents the set of actions that are valid for a given key. It's a bitmap of the KeyUsage* constants.
 * @member {Number} KeyUsage
 */
CertificateInfo.prototype['KeyUsage'] = undefined;

/**
 * @member {Array.<String>} dns_names
 */
CertificateInfo.prototype['dns_names'] = undefined;

/**
 * @member {Array.<String>} email_addresses
 */
CertificateInfo.prototype['email_addresses'] = undefined;

/**
 * @member {Array.<module:model/Extension>} extensions
 */
CertificateInfo.prototype['extensions'] = undefined;

/**
 * @member {Array.<String>} ip_addresses
 */
CertificateInfo.prototype['ip_addresses'] = undefined;

/**
 * @member {Boolean} is_ca
 */
CertificateInfo.prototype['is_ca'] = undefined;

/**
 * @member {module:model/Name} issuer
 */
CertificateInfo.prototype['issuer'] = undefined;

/**
 * @member {Array.<String>} issuing_certificate_url
 */
CertificateInfo.prototype['issuing_certificate_url'] = undefined;

/**
 * @member {Number} key_size
 */
CertificateInfo.prototype['key_size'] = undefined;

/**
 * @member {Date} not_after
 */
CertificateInfo.prototype['not_after'] = undefined;

/**
 * @member {Date} not_before
 */
CertificateInfo.prototype['not_before'] = undefined;

/**
 * @member {Array.<String>} ocsp_server
 */
CertificateInfo.prototype['ocsp_server'] = undefined;

/**
 * @member {String} public_key_algorithm_name
 */
CertificateInfo.prototype['public_key_algorithm_name'] = undefined;

/**
 * @member {String} serial_number
 */
CertificateInfo.prototype['serial_number'] = undefined;

/**
 * @member {String} sha_1_fingerprint
 */
CertificateInfo.prototype['sha_1_fingerprint'] = undefined;

/**
 * @member {String} sha_256_fingerprint
 */
CertificateInfo.prototype['sha_256_fingerprint'] = undefined;

/**
 * @member {String} signature
 */
CertificateInfo.prototype['signature'] = undefined;

/**
 * @member {String} signature_algorithm_name
 */
CertificateInfo.prototype['signature_algorithm_name'] = undefined;

/**
 * @member {module:model/Name} subject
 */
CertificateInfo.prototype['subject'] = undefined;

/**
 * @member {String} subject_public_key
 */
CertificateInfo.prototype['subject_public_key'] = undefined;

/**
 * @member {Array.<String>} uris
 */
CertificateInfo.prototype['uris'] = undefined;

/**
 * @member {Number} version
 */
CertificateInfo.prototype['version'] = undefined;






export default CertificateInfo;

