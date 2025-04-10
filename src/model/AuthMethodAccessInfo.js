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
import KerberosAccessRules from './KerberosAccessRules';
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
 * @version 5.0.2
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
            if (data.hasOwnProperty('kerberos_access_rules')) {
                obj['kerberos_access_rules'] = KerberosAccessRules.constructFromObject(data['kerberos_access_rules']);
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

    /**
     * Validates the JSON data with respect to <code>AuthMethodAccessInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthMethodAccessInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['access_id_alias'] && !(typeof data['access_id_alias'] === 'string' || data['access_id_alias'] instanceof String)) {
            throw new Error("Expected the field `access_id_alias` to be a primitive type in the JSON string but got " + data['access_id_alias']);
        }
        // validate the optional field `api_key_access_rules`
        if (data['api_key_access_rules']) { // data not null
          APIKeyAccessRules.validateJSON(data['api_key_access_rules']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['audit_logs_claims'])) {
            throw new Error("Expected the field `audit_logs_claims` to be an array in the JSON data but got " + data['audit_logs_claims']);
        }
        // validate the optional field `aws_iam_access_rules`
        if (data['aws_iam_access_rules']) { // data not null
          AWSIAMAccessRules.validateJSON(data['aws_iam_access_rules']);
        }
        // validate the optional field `azure_ad_access_rules`
        if (data['azure_ad_access_rules']) { // data not null
          AzureADAccessRules.validateJSON(data['azure_ad_access_rules']);
        }
        // validate the optional field `cert_access_rules`
        if (data['cert_access_rules']) { // data not null
          CertAccessRules.validateJSON(data['cert_access_rules']);
        }
        // ensure the json data is a string
        if (data['cidr_whitelist'] && !(typeof data['cidr_whitelist'] === 'string' || data['cidr_whitelist'] instanceof String)) {
            throw new Error("Expected the field `cidr_whitelist` to be a primitive type in the JSON string but got " + data['cidr_whitelist']);
        }
        // validate the optional field `email_pass_access_rules`
        if (data['email_pass_access_rules']) { // data not null
          EmailPassAccessRules.validateJSON(data['email_pass_access_rules']);
        }
        // validate the optional field `gcp_access_rules`
        if (data['gcp_access_rules']) { // data not null
          GCPAccessRules.validateJSON(data['gcp_access_rules']);
        }
        // ensure the json data is a string
        if (data['gw_cidr_whitelist'] && !(typeof data['gw_cidr_whitelist'] === 'string' || data['gw_cidr_whitelist'] instanceof String)) {
            throw new Error("Expected the field `gw_cidr_whitelist` to be a primitive type in the JSON string but got " + data['gw_cidr_whitelist']);
        }
        // validate the optional field `huawei_access_rules`
        if (data['huawei_access_rules']) { // data not null
          HuaweiAccessRules.validateJSON(data['huawei_access_rules']);
        }
        // validate the optional field `k8s_access_rules`
        if (data['k8s_access_rules']) { // data not null
          KubernetesAccessRules.validateJSON(data['k8s_access_rules']);
        }
        // validate the optional field `kerberos_access_rules`
        if (data['kerberos_access_rules']) { // data not null
          KerberosAccessRules.validateJSON(data['kerberos_access_rules']);
        }
        // validate the optional field `ldap_access_rules`
        if (data['ldap_access_rules']) { // data not null
          LDAPAccessRules.validateJSON(data['ldap_access_rules']);
        }
        // validate the optional field `oauth2_access_rules`
        if (data['oauth2_access_rules']) { // data not null
          OAuth2AccessRules.validateJSON(data['oauth2_access_rules']);
        }
        // validate the optional field `oci_access_rules`
        if (data['oci_access_rules']) { // data not null
          OCIAccessRules.validateJSON(data['oci_access_rules']);
        }
        // validate the optional field `oidc_access_rules`
        if (data['oidc_access_rules']) { // data not null
          OIDCAccessRules.validateJSON(data['oidc_access_rules']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['product_types'])) {
            throw new Error("Expected the field `product_types` to be an array in the JSON data but got " + data['product_types']);
        }
        // ensure the json data is a string
        if (data['rules_type'] && !(typeof data['rules_type'] === 'string' || data['rules_type'] instanceof String)) {
            throw new Error("Expected the field `rules_type` to be a primitive type in the JSON string but got " + data['rules_type']);
        }
        // validate the optional field `saml_access_rules`
        if (data['saml_access_rules']) { // data not null
          SAMLAccessRules.validateJSON(data['saml_access_rules']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['sub_claims_delimiters'])) {
            throw new Error("Expected the field `sub_claims_delimiters` to be an array in the JSON data but got " + data['sub_claims_delimiters']);
        }
        // validate the optional field `universal_identity_access_rules`
        if (data['universal_identity_access_rules']) { // data not null
          UniversalIdentityAccessRules.validateJSON(data['universal_identity_access_rules']);
        }

        return true;
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
 * @member {module:model/KerberosAccessRules} kerberos_access_rules
 */
AuthMethodAccessInfo.prototype['kerberos_access_rules'] = undefined;

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

