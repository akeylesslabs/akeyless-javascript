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
import CertificateChainInfo from './CertificateChainInfo';
import CertificateExpirationEvent from './CertificateExpirationEvent';
import CertificateIssueInfo from './CertificateIssueInfo';
import CertificateTemplateInfo from './CertificateTemplateInfo';
import ClassicKeyDetailsInfo from './ClassicKeyDetailsInfo';
import DynamicSecretProducerInfo from './DynamicSecretProducerInfo';
import ImporterInfo from './ImporterInfo';
import NextAutoRotationEvent from './NextAutoRotationEvent';
import OidcClientInfo from './OidcClientInfo';
import PasswordPolicyInfo from './PasswordPolicyInfo';
import RotatedSecretDetailsInfo from './RotatedSecretDetailsInfo';
import SecureRemoteAccess from './SecureRemoteAccess';
import StaticSecretDetailsInfo from './StaticSecretDetailsInfo';
import TokenizerInfo from './TokenizerInfo';

/**
 * The ItemGeneralInfo model module.
 * @module model/ItemGeneralInfo
 * @version 5.0.3
 */
class ItemGeneralInfo {
    /**
     * Constructs a new <code>ItemGeneralInfo</code>.
     * @alias module:model/ItemGeneralInfo
     */
    constructor() { 
        
        ItemGeneralInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemGeneralInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemGeneralInfo} obj Optional instance to populate.
     * @return {module:model/ItemGeneralInfo} The populated <code>ItemGeneralInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemGeneralInfo();

            if (data.hasOwnProperty('cert_issue_details')) {
                obj['cert_issue_details'] = CertificateIssueInfo.constructFromObject(data['cert_issue_details']);
            }
            if (data.hasOwnProperty('certificate_chain_info')) {
                obj['certificate_chain_info'] = CertificateChainInfo.constructFromObject(data['certificate_chain_info']);
            }
            if (data.hasOwnProperty('certificate_format')) {
                obj['certificate_format'] = ApiClient.convertToType(data['certificate_format'], 'String');
            }
            if (data.hasOwnProperty('certificates_template_info')) {
                obj['certificates_template_info'] = CertificateTemplateInfo.constructFromObject(data['certificates_template_info']);
            }
            if (data.hasOwnProperty('classic_key_details')) {
                obj['classic_key_details'] = ClassicKeyDetailsInfo.constructFromObject(data['classic_key_details']);
            }
            if (data.hasOwnProperty('cluster_gw_url')) {
                obj['cluster_gw_url'] = ApiClient.convertToType(data['cluster_gw_url'], 'String');
            }
            if (data.hasOwnProperty('display_metadata')) {
                obj['display_metadata'] = ApiClient.convertToType(data['display_metadata'], 'String');
            }
            if (data.hasOwnProperty('dynamic_secret_producer_details')) {
                obj['dynamic_secret_producer_details'] = DynamicSecretProducerInfo.constructFromObject(data['dynamic_secret_producer_details']);
            }
            if (data.hasOwnProperty('expiration_events')) {
                obj['expiration_events'] = ApiClient.convertToType(data['expiration_events'], [CertificateExpirationEvent]);
            }
            if (data.hasOwnProperty('importer_info')) {
                obj['importer_info'] = ImporterInfo.constructFromObject(data['importer_info']);
            }
            if (data.hasOwnProperty('next_rotation_events')) {
                obj['next_rotation_events'] = ApiClient.convertToType(data['next_rotation_events'], [NextAutoRotationEvent]);
            }
            if (data.hasOwnProperty('oidc_client_info')) {
                obj['oidc_client_info'] = OidcClientInfo.constructFromObject(data['oidc_client_info']);
            }
            if (data.hasOwnProperty('password_policy')) {
                obj['password_policy'] = PasswordPolicyInfo.constructFromObject(data['password_policy']);
            }
            if (data.hasOwnProperty('rotated_secret_details')) {
                obj['rotated_secret_details'] = RotatedSecretDetailsInfo.constructFromObject(data['rotated_secret_details']);
            }
            if (data.hasOwnProperty('secure_remote_access_details')) {
                obj['secure_remote_access_details'] = SecureRemoteAccess.constructFromObject(data['secure_remote_access_details']);
            }
            if (data.hasOwnProperty('static_secret_info')) {
                obj['static_secret_info'] = StaticSecretDetailsInfo.constructFromObject(data['static_secret_info']);
            }
            if (data.hasOwnProperty('tokenizer_info')) {
                obj['tokenizer_info'] = TokenizerInfo.constructFromObject(data['tokenizer_info']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ItemGeneralInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ItemGeneralInfo</code>.
     */
    static validateJSON(data) {
        // validate the optional field `cert_issue_details`
        if (data['cert_issue_details']) { // data not null
          CertificateIssueInfo.validateJSON(data['cert_issue_details']);
        }
        // validate the optional field `certificate_chain_info`
        if (data['certificate_chain_info']) { // data not null
          CertificateChainInfo.validateJSON(data['certificate_chain_info']);
        }
        // ensure the json data is a string
        if (data['certificate_format'] && !(typeof data['certificate_format'] === 'string' || data['certificate_format'] instanceof String)) {
            throw new Error("Expected the field `certificate_format` to be a primitive type in the JSON string but got " + data['certificate_format']);
        }
        // validate the optional field `certificates_template_info`
        if (data['certificates_template_info']) { // data not null
          CertificateTemplateInfo.validateJSON(data['certificates_template_info']);
        }
        // validate the optional field `classic_key_details`
        if (data['classic_key_details']) { // data not null
          ClassicKeyDetailsInfo.validateJSON(data['classic_key_details']);
        }
        // ensure the json data is a string
        if (data['cluster_gw_url'] && !(typeof data['cluster_gw_url'] === 'string' || data['cluster_gw_url'] instanceof String)) {
            throw new Error("Expected the field `cluster_gw_url` to be a primitive type in the JSON string but got " + data['cluster_gw_url']);
        }
        // ensure the json data is a string
        if (data['display_metadata'] && !(typeof data['display_metadata'] === 'string' || data['display_metadata'] instanceof String)) {
            throw new Error("Expected the field `display_metadata` to be a primitive type in the JSON string but got " + data['display_metadata']);
        }
        // validate the optional field `dynamic_secret_producer_details`
        if (data['dynamic_secret_producer_details']) { // data not null
          DynamicSecretProducerInfo.validateJSON(data['dynamic_secret_producer_details']);
        }
        if (data['expiration_events']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['expiration_events'])) {
                throw new Error("Expected the field `expiration_events` to be an array in the JSON data but got " + data['expiration_events']);
            }
            // validate the optional field `expiration_events` (array)
            for (const item of data['expiration_events']) {
                CertificateExpirationEvent.validateJSON(item);
            };
        }
        // validate the optional field `importer_info`
        if (data['importer_info']) { // data not null
          ImporterInfo.validateJSON(data['importer_info']);
        }
        if (data['next_rotation_events']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['next_rotation_events'])) {
                throw new Error("Expected the field `next_rotation_events` to be an array in the JSON data but got " + data['next_rotation_events']);
            }
            // validate the optional field `next_rotation_events` (array)
            for (const item of data['next_rotation_events']) {
                NextAutoRotationEvent.validateJSON(item);
            };
        }
        // validate the optional field `oidc_client_info`
        if (data['oidc_client_info']) { // data not null
          OidcClientInfo.validateJSON(data['oidc_client_info']);
        }
        // validate the optional field `password_policy`
        if (data['password_policy']) { // data not null
          PasswordPolicyInfo.validateJSON(data['password_policy']);
        }
        // validate the optional field `rotated_secret_details`
        if (data['rotated_secret_details']) { // data not null
          RotatedSecretDetailsInfo.validateJSON(data['rotated_secret_details']);
        }
        // validate the optional field `secure_remote_access_details`
        if (data['secure_remote_access_details']) { // data not null
          SecureRemoteAccess.validateJSON(data['secure_remote_access_details']);
        }
        // validate the optional field `static_secret_info`
        if (data['static_secret_info']) { // data not null
          StaticSecretDetailsInfo.validateJSON(data['static_secret_info']);
        }
        // validate the optional field `tokenizer_info`
        if (data['tokenizer_info']) { // data not null
          TokenizerInfo.validateJSON(data['tokenizer_info']);
        }

        return true;
    }


}



/**
 * @member {module:model/CertificateIssueInfo} cert_issue_details
 */
ItemGeneralInfo.prototype['cert_issue_details'] = undefined;

/**
 * @member {module:model/CertificateChainInfo} certificate_chain_info
 */
ItemGeneralInfo.prototype['certificate_chain_info'] = undefined;

/**
 * @member {String} certificate_format
 */
ItemGeneralInfo.prototype['certificate_format'] = undefined;

/**
 * @member {module:model/CertificateTemplateInfo} certificates_template_info
 */
ItemGeneralInfo.prototype['certificates_template_info'] = undefined;

/**
 * @member {module:model/ClassicKeyDetailsInfo} classic_key_details
 */
ItemGeneralInfo.prototype['classic_key_details'] = undefined;

/**
 * @member {String} cluster_gw_url
 */
ItemGeneralInfo.prototype['cluster_gw_url'] = undefined;

/**
 * @member {String} display_metadata
 */
ItemGeneralInfo.prototype['display_metadata'] = undefined;

/**
 * @member {module:model/DynamicSecretProducerInfo} dynamic_secret_producer_details
 */
ItemGeneralInfo.prototype['dynamic_secret_producer_details'] = undefined;

/**
 * @member {Array.<module:model/CertificateExpirationEvent>} expiration_events
 */
ItemGeneralInfo.prototype['expiration_events'] = undefined;

/**
 * @member {module:model/ImporterInfo} importer_info
 */
ItemGeneralInfo.prototype['importer_info'] = undefined;

/**
 * @member {Array.<module:model/NextAutoRotationEvent>} next_rotation_events
 */
ItemGeneralInfo.prototype['next_rotation_events'] = undefined;

/**
 * @member {module:model/OidcClientInfo} oidc_client_info
 */
ItemGeneralInfo.prototype['oidc_client_info'] = undefined;

/**
 * @member {module:model/PasswordPolicyInfo} password_policy
 */
ItemGeneralInfo.prototype['password_policy'] = undefined;

/**
 * @member {module:model/RotatedSecretDetailsInfo} rotated_secret_details
 */
ItemGeneralInfo.prototype['rotated_secret_details'] = undefined;

/**
 * @member {module:model/SecureRemoteAccess} secure_remote_access_details
 */
ItemGeneralInfo.prototype['secure_remote_access_details'] = undefined;

/**
 * @member {module:model/StaticSecretDetailsInfo} static_secret_info
 */
ItemGeneralInfo.prototype['static_secret_info'] = undefined;

/**
 * @member {module:model/TokenizerInfo} tokenizer_info
 */
ItemGeneralInfo.prototype['tokenizer_info'] = undefined;






export default ItemGeneralInfo;

