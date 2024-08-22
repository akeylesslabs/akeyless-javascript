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
import APIKeyAccessRules from './APIKeyAccessRules';
import AWSIAMAccessRules from './AWSIAMAccessRules';
import AzureADAccessRules from './AzureADAccessRules';
import CertAccessRules from './CertAccessRules';
import EmailPassAccessRules from './EmailPassAccessRules';
import GCPAccessRules from './GCPAccessRules';
import HuaweiAccessRules from './HuaweiAccessRules';
import KubernetesAccessRules from './KubernetesAccessRules';
import LDAPAccessRules from './LDAPAccessRules';
import OAuth2AccessRules from './OAuth2AccessRules';
import OCIAccessRules from './OCIAccessRules';
import OIDCAccessRules from './OIDCAccessRules';
import SAMLAccessRules from './SAMLAccessRules';
import UniversalIdentityAccessRules from './UniversalIdentityAccessRules';

/**
 * The AuthMethodAccessInfo model module.
 * @module model/AuthMethodAccessInfo
 * @version 4.2.3
 */
class AuthMethodAccessInfo {
    /**
     * Constructs a new <code>AuthMethodAccessInfo</code>.
     * @alias module:model/AuthMethodAccessInfo
     */
    constructor() { 
        
        AuthMethodAccessInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthMethodAccessInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthMethodAccessInfo} obj Optional instance to populate.
     * @return {module:model/AuthMethodAccessInfo} The populated <code>AuthMethodAccessInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthMethodAccessInfo();

            if (data.hasOwnProperty('access_expires')) {
                obj['access_expires'] = ApiClient.convertToType(data['access_expires'], 'Number');
            }
            if (data.hasOwnProperty('access_id_alias')) {
                obj['access_id_alias'] = ApiClient.convertToType(data['access_id_alias'], 'String');
            }
            if (data.hasOwnProperty('api_key_access_rules')) {
                obj['api_key_access_rules'] = APIKeyAccessRules.constructFromObject(data['api_key_access_rules']);
            }
            if (data.hasOwnProperty('audit_logs_claims')) {
                obj['audit_logs_claims'] = ApiClient.convertToType(data['audit_logs_claims'], ['String']);
            }
            if (data.hasOwnProperty('aws_iam_access_rules')) {
                obj['aws_iam_access_rules'] = AWSIAMAccessRules.constructFromObject(data['aws_iam_access_rules']);
            }
            if (data.hasOwnProperty('azure_ad_access_rules')) {
                obj['azure_ad_access_rules'] = AzureADAccessRules.constructFromObject(data['azure_ad_access_rules']);
            }
            if (data.hasOwnProperty('cert_access_rules')) {
                obj['cert_access_rules'] = CertAccessRules.constructFromObject(data['cert_access_rules']);
            }
            if (data.hasOwnProperty('cidr_whitelist')) {
                obj['cidr_whitelist'] = ApiClient.convertToType(data['cidr_whitelist'], 'String');
            }
            if (data.hasOwnProperty('email_pass_access_rules')) {
                obj['email_pass_access_rules'] = EmailPassAccessRules.constructFromObject(data['email_pass_access_rules']);
            }
            if (data.hasOwnProperty('force_sub_claims')) {
                obj['force_sub_claims'] = ApiClient.convertToType(data['force_sub_claims'], 'Boolean');
            }
            if (data.hasOwnProperty('gcp_access_rules')) {
                obj['gcp_access_rules'] = GCPAccessRules.constructFromObject(data['gcp_access_rules']);
            }
            if (data.hasOwnProperty('gw_cidr_whitelist')) {
                obj['gw_cidr_whitelist'] = ApiClient.convertToType(data['gw_cidr_whitelist'], 'String');
            }
            if (data.hasOwnProperty('huawei_access_rules')) {
                obj['huawei_access_rules'] = HuaweiAccessRules.constructFromObject(data['huawei_access_rules']);
            }
            if (data.hasOwnProperty('jwt_ttl')) {
                obj['jwt_ttl'] = ApiClient.convertToType(data['jwt_ttl'], 'Number');
            }
            if (data.hasOwnProperty('k8s_access_rules')) {
                obj['k8s_access_rules'] = KubernetesAccessRules.constructFromObject(data['k8s_access_rules']);
            }
            if (data.hasOwnProperty('ldap_access_rules')) {
                obj['ldap_access_rules'] = LDAPAccessRules.constructFromObject(data['ldap_access_rules']);
            }
            if (data.hasOwnProperty('oauth2_access_rules')) {
                obj['oauth2_access_rules'] = OAuth2AccessRules.constructFromObject(data['oauth2_access_rules']);
            }
            if (data.hasOwnProperty('oci_access_rules')) {
                obj['oci_access_rules'] = OCIAccessRules.constructFromObject(data['oci_access_rules']);
            }
            if (data.hasOwnProperty('oidc_access_rules')) {
                obj['oidc_access_rules'] = OIDCAccessRules.constructFromObject(data['oidc_access_rules']);
            }
            if (data.hasOwnProperty('product_types')) {
                obj['product_types'] = ApiClient.convertToType(data['product_types'], ['String']);
            }
            if (data.hasOwnProperty('rules_type')) {
                obj['rules_type'] = ApiClient.convertToType(data['rules_type'], 'String');
            }
            if (data.hasOwnProperty('saml_access_rules')) {
                obj['saml_access_rules'] = SAMLAccessRules.constructFromObject(data['saml_access_rules']);
            }
            if (data.hasOwnProperty('sub_claims_delimiters')) {
                obj['sub_claims_delimiters'] = ApiClient.convertToType(data['sub_claims_delimiters'], ['String']);
            }
            if (data.hasOwnProperty('universal_identity_access_rules')) {
                obj['universal_identity_access_rules'] = UniversalIdentityAccessRules.constructFromObject(data['universal_identity_access_rules']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} access_expires
 */
AuthMethodAccessInfo.prototype['access_expires'] = undefined;

/**
 * for accounts where AccessId holds encrypted email this field will hold generated AccessId, for accounts based on regular AccessId it will be equal to accessId itself
 * @member {String} access_id_alias
 */
AuthMethodAccessInfo.prototype['access_id_alias'] = undefined;

/**
 * @member {module:model/APIKeyAccessRules} api_key_access_rules
 */
AuthMethodAccessInfo.prototype['api_key_access_rules'] = undefined;

/**
 * @member {Array.<String>} audit_logs_claims
 */
AuthMethodAccessInfo.prototype['audit_logs_claims'] = undefined;

/**
 * @member {module:model/AWSIAMAccessRules} aws_iam_access_rules
 */
AuthMethodAccessInfo.prototype['aws_iam_access_rules'] = undefined;

/**
 * @member {module:model/AzureADAccessRules} azure_ad_access_rules
 */
AuthMethodAccessInfo.prototype['azure_ad_access_rules'] = undefined;

/**
 * @member {module:model/CertAccessRules} cert_access_rules
 */
AuthMethodAccessInfo.prototype['cert_access_rules'] = undefined;

/**
 * @member {String} cidr_whitelist
 */
AuthMethodAccessInfo.prototype['cidr_whitelist'] = undefined;

/**
 * @member {module:model/EmailPassAccessRules} email_pass_access_rules
 */
AuthMethodAccessInfo.prototype['email_pass_access_rules'] = undefined;

/**
 * if true the role associated with this auth method must include sub claims
 * @member {Boolean} force_sub_claims
 */
AuthMethodAccessInfo.prototype['force_sub_claims'] = undefined;

/**
 * @member {module:model/GCPAccessRules} gcp_access_rules
 */
AuthMethodAccessInfo.prototype['gcp_access_rules'] = undefined;

/**
 * @member {String} gw_cidr_whitelist
 */
AuthMethodAccessInfo.prototype['gw_cidr_whitelist'] = undefined;

/**
 * @member {module:model/HuaweiAccessRules} huawei_access_rules
 */
AuthMethodAccessInfo.prototype['huawei_access_rules'] = undefined;

/**
 * @member {Number} jwt_ttl
 */
AuthMethodAccessInfo.prototype['jwt_ttl'] = undefined;

/**
 * @member {module:model/KubernetesAccessRules} k8s_access_rules
 */
AuthMethodAccessInfo.prototype['k8s_access_rules'] = undefined;

/**
 * @member {module:model/LDAPAccessRules} ldap_access_rules
 */
AuthMethodAccessInfo.prototype['ldap_access_rules'] = undefined;

/**
 * @member {module:model/OAuth2AccessRules} oauth2_access_rules
 */
AuthMethodAccessInfo.prototype['oauth2_access_rules'] = undefined;

/**
 * @member {module:model/OCIAccessRules} oci_access_rules
 */
AuthMethodAccessInfo.prototype['oci_access_rules'] = undefined;

/**
 * @member {module:model/OIDCAccessRules} oidc_access_rules
 */
AuthMethodAccessInfo.prototype['oidc_access_rules'] = undefined;

/**
 * List of product types this auth method will be in use of
 * @member {Array.<String>} product_types
 */
AuthMethodAccessInfo.prototype['product_types'] = undefined;

/**
 * @member {String} rules_type
 */
AuthMethodAccessInfo.prototype['rules_type'] = undefined;

/**
 * @member {module:model/SAMLAccessRules} saml_access_rules
 */
AuthMethodAccessInfo.prototype['saml_access_rules'] = undefined;

/**
 * @member {Array.<String>} sub_claims_delimiters
 */
AuthMethodAccessInfo.prototype['sub_claims_delimiters'] = undefined;

/**
 * @member {module:model/UniversalIdentityAccessRules} universal_identity_access_rules
 */
AuthMethodAccessInfo.prototype['universal_identity_access_rules'] = undefined;






export default AuthMethodAccessInfo;

