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
import CertificateChainInfo from './CertificateChainInfo';
import CertificateIssueInfo from './CertificateIssueInfo';
import CertificateTemplateInfo from './CertificateTemplateInfo';
import ClassicKeyDetailsInfo from './ClassicKeyDetailsInfo';
import DynamicSecretProducerInfo from './DynamicSecretProducerInfo';
import ImporterInfo from './ImporterInfo';
import OidcClientInfo from './OidcClientInfo';
import PasswordPolicyInfo from './PasswordPolicyInfo';
import RotatedSecretDetailsInfo from './RotatedSecretDetailsInfo';
import SecureRemoteAccess from './SecureRemoteAccess';
import StaticSecretDetailsInfo from './StaticSecretDetailsInfo';
import TokenizerInfo from './TokenizerInfo';

/**
 * The ItemGeneralInfo model module.
 * @module model/ItemGeneralInfo
 * @version 3.5.3
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
            if (data.hasOwnProperty('importer_info')) {
                obj['importer_info'] = ImporterInfo.constructFromObject(data['importer_info']);
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
 * @member {module:model/ImporterInfo} importer_info
 */
ItemGeneralInfo.prototype['importer_info'] = undefined;

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

