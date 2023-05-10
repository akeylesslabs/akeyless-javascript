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
 * The TargetTypeDetailsInput model module.
 * @module model/TargetTypeDetailsInput
 * @version 3.3.3
 */
class TargetTypeDetailsInput {
    /**
     * Constructs a new <code>TargetTypeDetailsInput</code>.
     * @alias module:model/TargetTypeDetailsInput
     */
    constructor() { 
        
        TargetTypeDetailsInput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TargetTypeDetailsInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetTypeDetailsInput} obj Optional instance to populate.
     * @return {module:model/TargetTypeDetailsInput} The populated <code>TargetTypeDetailsInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetTypeDetailsInput();

            if (data.hasOwnProperty('administrative_port')) {
                obj['administrative_port'] = ApiClient.convertToType(data['administrative_port'], 'String');
            }
            if (data.hasOwnProperty('api_key')) {
                obj['api_key'] = ApiClient.convertToType(data['api_key'], 'String');
            }
            if (data.hasOwnProperty('app_private_key')) {
                obj['app_private_key'] = ApiClient.convertToType(data['app_private_key'], ['Number']);
            }
            if (data.hasOwnProperty('artifactory_admin_apikey')) {
                obj['artifactory_admin_apikey'] = ApiClient.convertToType(data['artifactory_admin_apikey'], 'String');
            }
            if (data.hasOwnProperty('artifactory_admin_username')) {
                obj['artifactory_admin_username'] = ApiClient.convertToType(data['artifactory_admin_username'], 'String');
            }
            if (data.hasOwnProperty('artifactory_base_url')) {
                obj['artifactory_base_url'] = ApiClient.convertToType(data['artifactory_base_url'], 'String');
            }
            if (data.hasOwnProperty('auth_flow')) {
                obj['auth_flow'] = ApiClient.convertToType(data['auth_flow'], 'String');
            }
            if (data.hasOwnProperty('authorization_port')) {
                obj['authorization_port'] = ApiClient.convertToType(data['authorization_port'], 'String');
            }
            if (data.hasOwnProperty('aws_access_key_id')) {
                obj['aws_access_key_id'] = ApiClient.convertToType(data['aws_access_key_id'], 'String');
            }
            if (data.hasOwnProperty('aws_region')) {
                obj['aws_region'] = ApiClient.convertToType(data['aws_region'], 'String');
            }
            if (data.hasOwnProperty('aws_secret_access_key')) {
                obj['aws_secret_access_key'] = ApiClient.convertToType(data['aws_secret_access_key'], 'String');
            }
            if (data.hasOwnProperty('aws_session_token')) {
                obj['aws_session_token'] = ApiClient.convertToType(data['aws_session_token'], 'String');
            }
            if (data.hasOwnProperty('azure_client_id')) {
                obj['azure_client_id'] = ApiClient.convertToType(data['azure_client_id'], 'String');
            }
            if (data.hasOwnProperty('azure_client_secret')) {
                obj['azure_client_secret'] = ApiClient.convertToType(data['azure_client_secret'], 'String');
            }
            if (data.hasOwnProperty('azure_resource_group_name')) {
                obj['azure_resource_group_name'] = ApiClient.convertToType(data['azure_resource_group_name'], 'String');
            }
            if (data.hasOwnProperty('azure_resource_name')) {
                obj['azure_resource_name'] = ApiClient.convertToType(data['azure_resource_name'], 'String');
            }
            if (data.hasOwnProperty('azure_subscription_id')) {
                obj['azure_subscription_id'] = ApiClient.convertToType(data['azure_subscription_id'], 'String');
            }
            if (data.hasOwnProperty('azure_tenant_id')) {
                obj['azure_tenant_id'] = ApiClient.convertToType(data['azure_tenant_id'], 'String');
            }
            if (data.hasOwnProperty('ca_cert_data')) {
                obj['ca_cert_data'] = ApiClient.convertToType(data['ca_cert_data'], ['Number']);
            }
            if (data.hasOwnProperty('ca_cert_name')) {
                obj['ca_cert_name'] = ApiClient.convertToType(data['ca_cert_name'], 'String');
            }
            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
            }
            if (data.hasOwnProperty('chef_server_host_name')) {
                obj['chef_server_host_name'] = ApiClient.convertToType(data['chef_server_host_name'], 'String');
            }
            if (data.hasOwnProperty('chef_server_key')) {
                obj['chef_server_key'] = ApiClient.convertToType(data['chef_server_key'], 'String');
            }
            if (data.hasOwnProperty('chef_server_port')) {
                obj['chef_server_port'] = ApiClient.convertToType(data['chef_server_port'], 'String');
            }
            if (data.hasOwnProperty('chef_server_url')) {
                obj['chef_server_url'] = ApiClient.convertToType(data['chef_server_url'], 'String');
            }
            if (data.hasOwnProperty('chef_server_username')) {
                obj['chef_server_username'] = ApiClient.convertToType(data['chef_server_username'], 'String');
            }
            if (data.hasOwnProperty('chef_skip_ssl')) {
                obj['chef_skip_ssl'] = ApiClient.convertToType(data['chef_skip_ssl'], 'Boolean');
            }
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('client_secret')) {
                obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
            }
            if (data.hasOwnProperty('db_host_name')) {
                obj['db_host_name'] = ApiClient.convertToType(data['db_host_name'], 'String');
            }
            if (data.hasOwnProperty('db_name')) {
                obj['db_name'] = ApiClient.convertToType(data['db_name'], 'String');
            }
            if (data.hasOwnProperty('db_port')) {
                obj['db_port'] = ApiClient.convertToType(data['db_port'], 'String');
            }
            if (data.hasOwnProperty('db_private_key')) {
                obj['db_private_key'] = ApiClient.convertToType(data['db_private_key'], 'String');
            }
            if (data.hasOwnProperty('db_private_key_passphrase')) {
                obj['db_private_key_passphrase'] = ApiClient.convertToType(data['db_private_key_passphrase'], 'String');
            }
            if (data.hasOwnProperty('db_pwd')) {
                obj['db_pwd'] = ApiClient.convertToType(data['db_pwd'], 'String');
            }
            if (data.hasOwnProperty('db_server_certificates')) {
                obj['db_server_certificates'] = ApiClient.convertToType(data['db_server_certificates'], 'String');
            }
            if (data.hasOwnProperty('db_server_name')) {
                obj['db_server_name'] = ApiClient.convertToType(data['db_server_name'], 'String');
            }
            if (data.hasOwnProperty('db_user_name')) {
                obj['db_user_name'] = ApiClient.convertToType(data['db_user_name'], 'String');
            }
            if (data.hasOwnProperty('domain_name')) {
                obj['domain_name'] = ApiClient.convertToType(data['domain_name'], 'String');
            }
            if (data.hasOwnProperty('eks_access_key_id')) {
                obj['eks_access_key_id'] = ApiClient.convertToType(data['eks_access_key_id'], 'String');
            }
            if (data.hasOwnProperty('eks_cluster_ca_certificate')) {
                obj['eks_cluster_ca_certificate'] = ApiClient.convertToType(data['eks_cluster_ca_certificate'], 'String');
            }
            if (data.hasOwnProperty('eks_cluster_endpoint')) {
                obj['eks_cluster_endpoint'] = ApiClient.convertToType(data['eks_cluster_endpoint'], 'String');
            }
            if (data.hasOwnProperty('eks_cluster_name')) {
                obj['eks_cluster_name'] = ApiClient.convertToType(data['eks_cluster_name'], 'String');
            }
            if (data.hasOwnProperty('eks_region')) {
                obj['eks_region'] = ApiClient.convertToType(data['eks_region'], 'String');
            }
            if (data.hasOwnProperty('eks_secret_access_key')) {
                obj['eks_secret_access_key'] = ApiClient.convertToType(data['eks_secret_access_key'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('gcp_service_account_email')) {
                obj['gcp_service_account_email'] = ApiClient.convertToType(data['gcp_service_account_email'], 'String');
            }
            if (data.hasOwnProperty('gcp_service_account_key')) {
                obj['gcp_service_account_key'] = ApiClient.convertToType(data['gcp_service_account_key'], 'String');
            }
            if (data.hasOwnProperty('gcp_service_account_key_base64')) {
                obj['gcp_service_account_key_base64'] = ApiClient.convertToType(data['gcp_service_account_key_base64'], 'String');
            }
            if (data.hasOwnProperty('github_app_id')) {
                obj['github_app_id'] = ApiClient.convertToType(data['github_app_id'], 'Number');
            }
            if (data.hasOwnProperty('github_app_private_key')) {
                obj['github_app_private_key'] = ApiClient.convertToType(data['github_app_private_key'], 'String');
            }
            if (data.hasOwnProperty('github_base_url')) {
                obj['github_base_url'] = ApiClient.convertToType(data['github_base_url'], 'String');
            }
            if (data.hasOwnProperty('gke_cluster_ca_certificate')) {
                obj['gke_cluster_ca_certificate'] = ApiClient.convertToType(data['gke_cluster_ca_certificate'], 'String');
            }
            if (data.hasOwnProperty('gke_cluster_endpoint')) {
                obj['gke_cluster_endpoint'] = ApiClient.convertToType(data['gke_cluster_endpoint'], 'String');
            }
            if (data.hasOwnProperty('gke_cluster_name')) {
                obj['gke_cluster_name'] = ApiClient.convertToType(data['gke_cluster_name'], 'String');
            }
            if (data.hasOwnProperty('gke_service_account_key')) {
                obj['gke_service_account_key'] = ApiClient.convertToType(data['gke_service_account_key'], 'String');
            }
            if (data.hasOwnProperty('gke_service_account_name')) {
                obj['gke_service_account_name'] = ApiClient.convertToType(data['gke_service_account_name'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('hosts')) {
                obj['hosts'] = ApiClient.convertToType(data['hosts'], {'String': 'String'});
            }
            if (data.hasOwnProperty('imap_fqdn')) {
                obj['imap_fqdn'] = ApiClient.convertToType(data['imap_fqdn'], 'String');
            }
            if (data.hasOwnProperty('imap_password')) {
                obj['imap_password'] = ApiClient.convertToType(data['imap_password'], 'String');
            }
            if (data.hasOwnProperty('imap_port')) {
                obj['imap_port'] = ApiClient.convertToType(data['imap_port'], 'String');
            }
            if (data.hasOwnProperty('imap_user')) {
                obj['imap_user'] = ApiClient.convertToType(data['imap_user'], 'String');
            }
            if (data.hasOwnProperty('implementation_type')) {
                obj['implementation_type'] = ApiClient.convertToType(data['implementation_type'], 'String');
            }
            if (data.hasOwnProperty('k8s_bearer_token')) {
                obj['k8s_bearer_token'] = ApiClient.convertToType(data['k8s_bearer_token'], 'String');
            }
            if (data.hasOwnProperty('k8s_cluster_ca_certificate')) {
                obj['k8s_cluster_ca_certificate'] = ApiClient.convertToType(data['k8s_cluster_ca_certificate'], 'String');
            }
            if (data.hasOwnProperty('k8s_cluster_endpoint')) {
                obj['k8s_cluster_endpoint'] = ApiClient.convertToType(data['k8s_cluster_endpoint'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('ldap_audience')) {
                obj['ldap_audience'] = ApiClient.convertToType(data['ldap_audience'], 'String');
            }
            if (data.hasOwnProperty('ldap_bind_dn')) {
                obj['ldap_bind_dn'] = ApiClient.convertToType(data['ldap_bind_dn'], 'String');
            }
            if (data.hasOwnProperty('ldap_bind_password')) {
                obj['ldap_bind_password'] = ApiClient.convertToType(data['ldap_bind_password'], 'String');
            }
            if (data.hasOwnProperty('ldap_certificate')) {
                obj['ldap_certificate'] = ApiClient.convertToType(data['ldap_certificate'], 'String');
            }
            if (data.hasOwnProperty('ldap_token_expiration')) {
                obj['ldap_token_expiration'] = ApiClient.convertToType(data['ldap_token_expiration'], 'String');
            }
            if (data.hasOwnProperty('ldap_url')) {
                obj['ldap_url'] = ApiClient.convertToType(data['ldap_url'], 'String');
            }
            if (data.hasOwnProperty('mongodb_atlas_api_private_key')) {
                obj['mongodb_atlas_api_private_key'] = ApiClient.convertToType(data['mongodb_atlas_api_private_key'], 'String');
            }
            if (data.hasOwnProperty('mongodb_atlas_api_public_key')) {
                obj['mongodb_atlas_api_public_key'] = ApiClient.convertToType(data['mongodb_atlas_api_public_key'], 'String');
            }
            if (data.hasOwnProperty('mongodb_atlas_project_id')) {
                obj['mongodb_atlas_project_id'] = ApiClient.convertToType(data['mongodb_atlas_project_id'], 'String');
            }
            if (data.hasOwnProperty('mongodb_db_name')) {
                obj['mongodb_db_name'] = ApiClient.convertToType(data['mongodb_db_name'], 'String');
            }
            if (data.hasOwnProperty('mongodb_default_auth_db')) {
                obj['mongodb_default_auth_db'] = ApiClient.convertToType(data['mongodb_default_auth_db'], 'String');
            }
            if (data.hasOwnProperty('mongodb_host_port')) {
                obj['mongodb_host_port'] = ApiClient.convertToType(data['mongodb_host_port'], 'String');
            }
            if (data.hasOwnProperty('mongodb_is_atlas')) {
                obj['mongodb_is_atlas'] = ApiClient.convertToType(data['mongodb_is_atlas'], 'Boolean');
            }
            if (data.hasOwnProperty('mongodb_password')) {
                obj['mongodb_password'] = ApiClient.convertToType(data['mongodb_password'], 'String');
            }
            if (data.hasOwnProperty('mongodb_uri_connection')) {
                obj['mongodb_uri_connection'] = ApiClient.convertToType(data['mongodb_uri_connection'], 'String');
            }
            if (data.hasOwnProperty('mongodb_uri_options')) {
                obj['mongodb_uri_options'] = ApiClient.convertToType(data['mongodb_uri_options'], 'String');
            }
            if (data.hasOwnProperty('mongodb_username')) {
                obj['mongodb_username'] = ApiClient.convertToType(data['mongodb_username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('ping_url')) {
                obj['ping_url'] = ApiClient.convertToType(data['ping_url'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'String');
            }
            if (data.hasOwnProperty('private_key')) {
                obj['private_key'] = ApiClient.convertToType(data['private_key'], 'String');
            }
            if (data.hasOwnProperty('private_key_password')) {
                obj['private_key_password'] = ApiClient.convertToType(data['private_key_password'], 'String');
            }
            if (data.hasOwnProperty('privileged_user')) {
                obj['privileged_user'] = ApiClient.convertToType(data['privileged_user'], 'String');
            }
            if (data.hasOwnProperty('profile_id')) {
                obj['profile_id'] = ApiClient.convertToType(data['profile_id'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq_server_password')) {
                obj['rabbitmq_server_password'] = ApiClient.convertToType(data['rabbitmq_server_password'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq_server_uri')) {
                obj['rabbitmq_server_uri'] = ApiClient.convertToType(data['rabbitmq_server_uri'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq_server_user')) {
                obj['rabbitmq_server_user'] = ApiClient.convertToType(data['rabbitmq_server_user'], 'String');
            }
            if (data.hasOwnProperty('security_token')) {
                obj['security_token'] = ApiClient.convertToType(data['security_token'], 'String');
            }
            if (data.hasOwnProperty('sf_account')) {
                obj['sf_account'] = ApiClient.convertToType(data['sf_account'], 'String');
            }
            if (data.hasOwnProperty('ssl_connection_certificate')) {
                obj['ssl_connection_certificate'] = ApiClient.convertToType(data['ssl_connection_certificate'], 'String');
            }
            if (data.hasOwnProperty('ssl_connection_mode')) {
                obj['ssl_connection_mode'] = ApiClient.convertToType(data['ssl_connection_mode'], 'Boolean');
            }
            if (data.hasOwnProperty('tenant_url')) {
                obj['tenant_url'] = ApiClient.convertToType(data['tenant_url'], 'String');
            }
            if (data.hasOwnProperty('timeout')) {
                obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('use_gw_cloud_identity')) {
                obj['use_gw_cloud_identity'] = ApiClient.convertToType(data['use_gw_cloud_identity'], 'Boolean');
            }
            if (data.hasOwnProperty('use_gw_service_account')) {
                obj['use_gw_service_account'] = ApiClient.convertToType(data['use_gw_service_account'], 'Boolean');
            }
            if (data.hasOwnProperty('use_tls')) {
                obj['use_tls'] = ApiClient.convertToType(data['use_tls'], 'Boolean');
            }
            if (data.hasOwnProperty('user_name')) {
                obj['user_name'] = ApiClient.convertToType(data['user_name'], 'String');
            }
            if (data.hasOwnProperty('user_password')) {
                obj['user_password'] = ApiClient.convertToType(data['user_password'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('validation_email')) {
                obj['validation_email'] = ApiClient.convertToType(data['validation_email'], 'String');
            }
            if (data.hasOwnProperty('venafi_api_key')) {
                obj['venafi_api_key'] = ApiClient.convertToType(data['venafi_api_key'], 'String');
            }
            if (data.hasOwnProperty('venafi_base_url')) {
                obj['venafi_base_url'] = ApiClient.convertToType(data['venafi_base_url'], 'String');
            }
            if (data.hasOwnProperty('venafi_tpp_password')) {
                obj['venafi_tpp_password'] = ApiClient.convertToType(data['venafi_tpp_password'], 'String');
            }
            if (data.hasOwnProperty('venafi_tpp_username')) {
                obj['venafi_tpp_username'] = ApiClient.convertToType(data['venafi_tpp_username'], 'String');
            }
            if (data.hasOwnProperty('venafi_use_tpp')) {
                obj['venafi_use_tpp'] = ApiClient.convertToType(data['venafi_use_tpp'], 'Boolean');
            }
            if (data.hasOwnProperty('venafi_zone')) {
                obj['venafi_zone'] = ApiClient.convertToType(data['venafi_zone'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} administrative_port
 */
TargetTypeDetailsInput.prototype['administrative_port'] = undefined;

/**
 * @member {String} api_key
 */
TargetTypeDetailsInput.prototype['api_key'] = undefined;

/**
 * params needed for jwt auth AppPrivateKey is the rsa private key in PEM format
 * @member {Array.<Number>} app_private_key
 */
TargetTypeDetailsInput.prototype['app_private_key'] = undefined;

/**
 * @member {String} artifactory_admin_apikey
 */
TargetTypeDetailsInput.prototype['artifactory_admin_apikey'] = undefined;

/**
 * @member {String} artifactory_admin_username
 */
TargetTypeDetailsInput.prototype['artifactory_admin_username'] = undefined;

/**
 * @member {String} artifactory_base_url
 */
TargetTypeDetailsInput.prototype['artifactory_base_url'] = undefined;

/**
 * @member {String} auth_flow
 */
TargetTypeDetailsInput.prototype['auth_flow'] = undefined;

/**
 * @member {String} authorization_port
 */
TargetTypeDetailsInput.prototype['authorization_port'] = undefined;

/**
 * @member {String} aws_access_key_id
 */
TargetTypeDetailsInput.prototype['aws_access_key_id'] = undefined;

/**
 * @member {String} aws_region
 */
TargetTypeDetailsInput.prototype['aws_region'] = undefined;

/**
 * @member {String} aws_secret_access_key
 */
TargetTypeDetailsInput.prototype['aws_secret_access_key'] = undefined;

/**
 * @member {String} aws_session_token
 */
TargetTypeDetailsInput.prototype['aws_session_token'] = undefined;

/**
 * @member {String} azure_client_id
 */
TargetTypeDetailsInput.prototype['azure_client_id'] = undefined;

/**
 * @member {String} azure_client_secret
 */
TargetTypeDetailsInput.prototype['azure_client_secret'] = undefined;

/**
 * @member {String} azure_resource_group_name
 */
TargetTypeDetailsInput.prototype['azure_resource_group_name'] = undefined;

/**
 * @member {String} azure_resource_name
 */
TargetTypeDetailsInput.prototype['azure_resource_name'] = undefined;

/**
 * @member {String} azure_subscription_id
 */
TargetTypeDetailsInput.prototype['azure_subscription_id'] = undefined;

/**
 * @member {String} azure_tenant_id
 */
TargetTypeDetailsInput.prototype['azure_tenant_id'] = undefined;

/**
 * CACertData is the rsa 4096 certificate data in PEM format
 * @member {Array.<Number>} ca_cert_data
 */
TargetTypeDetailsInput.prototype['ca_cert_data'] = undefined;

/**
 * CACertName is the name of the certificate in SalesForce tenant
 * @member {String} ca_cert_name
 */
TargetTypeDetailsInput.prototype['ca_cert_name'] = undefined;

/**
 * @member {String} certificate
 */
TargetTypeDetailsInput.prototype['certificate'] = undefined;

/**
 * @member {String} chef_server_host_name
 */
TargetTypeDetailsInput.prototype['chef_server_host_name'] = undefined;

/**
 * @member {String} chef_server_key
 */
TargetTypeDetailsInput.prototype['chef_server_key'] = undefined;

/**
 * @member {String} chef_server_port
 */
TargetTypeDetailsInput.prototype['chef_server_port'] = undefined;

/**
 * @member {String} chef_server_url
 */
TargetTypeDetailsInput.prototype['chef_server_url'] = undefined;

/**
 * @member {String} chef_server_username
 */
TargetTypeDetailsInput.prototype['chef_server_username'] = undefined;

/**
 * @member {Boolean} chef_skip_ssl
 */
TargetTypeDetailsInput.prototype['chef_skip_ssl'] = undefined;

/**
 * @member {String} client_id
 */
TargetTypeDetailsInput.prototype['client_id'] = undefined;

/**
 * params needed for password auth
 * @member {String} client_secret
 */
TargetTypeDetailsInput.prototype['client_secret'] = undefined;

/**
 * @member {String} db_host_name
 */
TargetTypeDetailsInput.prototype['db_host_name'] = undefined;

/**
 * @member {String} db_name
 */
TargetTypeDetailsInput.prototype['db_name'] = undefined;

/**
 * @member {String} db_port
 */
TargetTypeDetailsInput.prototype['db_port'] = undefined;

/**
 * (Optional) Private Key in PEM format
 * @member {String} db_private_key
 */
TargetTypeDetailsInput.prototype['db_private_key'] = undefined;

/**
 * @member {String} db_private_key_passphrase
 */
TargetTypeDetailsInput.prototype['db_private_key_passphrase'] = undefined;

/**
 * @member {String} db_pwd
 */
TargetTypeDetailsInput.prototype['db_pwd'] = undefined;

/**
 * (Optional) DBServerCertificates defines the set of root certificate authorities that clients use when verifying server certificates. If DBServerCertificates is empty, TLS uses the host's root CA set.
 * @member {String} db_server_certificates
 */
TargetTypeDetailsInput.prototype['db_server_certificates'] = undefined;

/**
 * (Optional) ServerName is used to verify the hostname on the returned certificates unless InsecureSkipVerify is given. It is also included in the client's handshake to support virtual hosting unless it is an IP address.
 * @member {String} db_server_name
 */
TargetTypeDetailsInput.prototype['db_server_name'] = undefined;

/**
 * @member {String} db_user_name
 */
TargetTypeDetailsInput.prototype['db_user_name'] = undefined;

/**
 * @member {String} domain_name
 */
TargetTypeDetailsInput.prototype['domain_name'] = undefined;

/**
 * @member {String} eks_access_key_id
 */
TargetTypeDetailsInput.prototype['eks_access_key_id'] = undefined;

/**
 * @member {String} eks_cluster_ca_certificate
 */
TargetTypeDetailsInput.prototype['eks_cluster_ca_certificate'] = undefined;

/**
 * @member {String} eks_cluster_endpoint
 */
TargetTypeDetailsInput.prototype['eks_cluster_endpoint'] = undefined;

/**
 * @member {String} eks_cluster_name
 */
TargetTypeDetailsInput.prototype['eks_cluster_name'] = undefined;

/**
 * @member {String} eks_region
 */
TargetTypeDetailsInput.prototype['eks_region'] = undefined;

/**
 * @member {String} eks_secret_access_key
 */
TargetTypeDetailsInput.prototype['eks_secret_access_key'] = undefined;

/**
 * @member {String} email
 */
TargetTypeDetailsInput.prototype['email'] = undefined;

/**
 * Contact Info - GlobalSign requires this to be sent with every certificate creation request
 * @member {String} first_name
 */
TargetTypeDetailsInput.prototype['first_name'] = undefined;

/**
 * deprecated
 * @member {String} gcp_service_account_email
 */
TargetTypeDetailsInput.prototype['gcp_service_account_email'] = undefined;

/**
 * @member {String} gcp_service_account_key
 */
TargetTypeDetailsInput.prototype['gcp_service_account_key'] = undefined;

/**
 * @member {String} gcp_service_account_key_base64
 */
TargetTypeDetailsInput.prototype['gcp_service_account_key_base64'] = undefined;

/**
 * @member {Number} github_app_id
 */
TargetTypeDetailsInput.prototype['github_app_id'] = undefined;

/**
 * @member {String} github_app_private_key
 */
TargetTypeDetailsInput.prototype['github_app_private_key'] = undefined;

/**
 * @member {String} github_base_url
 */
TargetTypeDetailsInput.prototype['github_base_url'] = undefined;

/**
 * @member {String} gke_cluster_ca_certificate
 */
TargetTypeDetailsInput.prototype['gke_cluster_ca_certificate'] = undefined;

/**
 * @member {String} gke_cluster_endpoint
 */
TargetTypeDetailsInput.prototype['gke_cluster_endpoint'] = undefined;

/**
 * @member {String} gke_cluster_name
 */
TargetTypeDetailsInput.prototype['gke_cluster_name'] = undefined;

/**
 * @member {String} gke_service_account_key
 */
TargetTypeDetailsInput.prototype['gke_service_account_key'] = undefined;

/**
 * @member {String} gke_service_account_name
 */
TargetTypeDetailsInput.prototype['gke_service_account_name'] = undefined;

/**
 * @member {String} host
 */
TargetTypeDetailsInput.prototype['host'] = undefined;

/**
 * @member {String} hostname
 */
TargetTypeDetailsInput.prototype['hostname'] = undefined;

/**
 * @member {Object.<String, String>} hosts
 */
TargetTypeDetailsInput.prototype['hosts'] = undefined;

/**
 * @member {String} imap_fqdn
 */
TargetTypeDetailsInput.prototype['imap_fqdn'] = undefined;

/**
 * @member {String} imap_password
 */
TargetTypeDetailsInput.prototype['imap_password'] = undefined;

/**
 * @member {String} imap_port
 */
TargetTypeDetailsInput.prototype['imap_port'] = undefined;

/**
 * @member {String} imap_user
 */
TargetTypeDetailsInput.prototype['imap_user'] = undefined;

/**
 * @member {String} implementation_type
 */
TargetTypeDetailsInput.prototype['implementation_type'] = undefined;

/**
 * @member {String} k8s_bearer_token
 */
TargetTypeDetailsInput.prototype['k8s_bearer_token'] = undefined;

/**
 * @member {String} k8s_cluster_ca_certificate
 */
TargetTypeDetailsInput.prototype['k8s_cluster_ca_certificate'] = undefined;

/**
 * @member {String} k8s_cluster_endpoint
 */
TargetTypeDetailsInput.prototype['k8s_cluster_endpoint'] = undefined;

/**
 * @member {String} last_name
 */
TargetTypeDetailsInput.prototype['last_name'] = undefined;

/**
 * @member {String} ldap_audience
 */
TargetTypeDetailsInput.prototype['ldap_audience'] = undefined;

/**
 * @member {String} ldap_bind_dn
 */
TargetTypeDetailsInput.prototype['ldap_bind_dn'] = undefined;

/**
 * @member {String} ldap_bind_password
 */
TargetTypeDetailsInput.prototype['ldap_bind_password'] = undefined;

/**
 * @member {String} ldap_certificate
 */
TargetTypeDetailsInput.prototype['ldap_certificate'] = undefined;

/**
 * @member {String} ldap_token_expiration
 */
TargetTypeDetailsInput.prototype['ldap_token_expiration'] = undefined;

/**
 * @member {String} ldap_url
 */
TargetTypeDetailsInput.prototype['ldap_url'] = undefined;

/**
 * @member {String} mongodb_atlas_api_private_key
 */
TargetTypeDetailsInput.prototype['mongodb_atlas_api_private_key'] = undefined;

/**
 * @member {String} mongodb_atlas_api_public_key
 */
TargetTypeDetailsInput.prototype['mongodb_atlas_api_public_key'] = undefined;

/**
 * mongodb atlas fields
 * @member {String} mongodb_atlas_project_id
 */
TargetTypeDetailsInput.prototype['mongodb_atlas_project_id'] = undefined;

/**
 * common fields
 * @member {String} mongodb_db_name
 */
TargetTypeDetailsInput.prototype['mongodb_db_name'] = undefined;

/**
 * @member {String} mongodb_default_auth_db
 */
TargetTypeDetailsInput.prototype['mongodb_default_auth_db'] = undefined;

/**
 * @member {String} mongodb_host_port
 */
TargetTypeDetailsInput.prototype['mongodb_host_port'] = undefined;

/**
 * @member {Boolean} mongodb_is_atlas
 */
TargetTypeDetailsInput.prototype['mongodb_is_atlas'] = undefined;

/**
 * @member {String} mongodb_password
 */
TargetTypeDetailsInput.prototype['mongodb_password'] = undefined;

/**
 * mongodb fields
 * @member {String} mongodb_uri_connection
 */
TargetTypeDetailsInput.prototype['mongodb_uri_connection'] = undefined;

/**
 * @member {String} mongodb_uri_options
 */
TargetTypeDetailsInput.prototype['mongodb_uri_options'] = undefined;

/**
 * @member {String} mongodb_username
 */
TargetTypeDetailsInput.prototype['mongodb_username'] = undefined;

/**
 * @member {String} password
 */
TargetTypeDetailsInput.prototype['password'] = undefined;

/**
 * @member {String} payload
 */
TargetTypeDetailsInput.prototype['payload'] = undefined;

/**
 * @member {String} phone
 */
TargetTypeDetailsInput.prototype['phone'] = undefined;

/**
 * @member {String} ping_url
 */
TargetTypeDetailsInput.prototype['ping_url'] = undefined;

/**
 * @member {String} port
 */
TargetTypeDetailsInput.prototype['port'] = undefined;

/**
 * @member {String} private_key
 */
TargetTypeDetailsInput.prototype['private_key'] = undefined;

/**
 * @member {String} private_key_password
 */
TargetTypeDetailsInput.prototype['private_key_password'] = undefined;

/**
 * @member {String} privileged_user
 */
TargetTypeDetailsInput.prototype['privileged_user'] = undefined;

/**
 * @member {String} profile_id
 */
TargetTypeDetailsInput.prototype['profile_id'] = undefined;

/**
 * @member {String} rabbitmq_server_password
 */
TargetTypeDetailsInput.prototype['rabbitmq_server_password'] = undefined;

/**
 * @member {String} rabbitmq_server_uri
 */
TargetTypeDetailsInput.prototype['rabbitmq_server_uri'] = undefined;

/**
 * @member {String} rabbitmq_server_user
 */
TargetTypeDetailsInput.prototype['rabbitmq_server_user'] = undefined;

/**
 * @member {String} security_token
 */
TargetTypeDetailsInput.prototype['security_token'] = undefined;

/**
 * @member {String} sf_account
 */
TargetTypeDetailsInput.prototype['sf_account'] = undefined;

/**
 * (Optional) SSLConnectionCertificate defines the certificate for SSL connection. Must be base64 certificate loaded by UI using file loader field
 * @member {String} ssl_connection_certificate
 */
TargetTypeDetailsInput.prototype['ssl_connection_certificate'] = undefined;

/**
 * (Optional) SSLConnectionMode defines if SSL mode will be used to connect to DB
 * @member {Boolean} ssl_connection_mode
 */
TargetTypeDetailsInput.prototype['ssl_connection_mode'] = undefined;

/**
 * @member {String} tenant_url
 */
TargetTypeDetailsInput.prototype['tenant_url'] = undefined;

/**
 * A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.
 * @member {Number} timeout
 */
TargetTypeDetailsInput.prototype['timeout'] = undefined;

/**
 * @member {String} url
 */
TargetTypeDetailsInput.prototype['url'] = undefined;

/**
 * @member {Boolean} use_gw_cloud_identity
 */
TargetTypeDetailsInput.prototype['use_gw_cloud_identity'] = undefined;

/**
 * @member {Boolean} use_gw_service_account
 */
TargetTypeDetailsInput.prototype['use_gw_service_account'] = undefined;

/**
 * @member {Boolean} use_tls
 */
TargetTypeDetailsInput.prototype['use_tls'] = undefined;

/**
 * @member {String} user_name
 */
TargetTypeDetailsInput.prototype['user_name'] = undefined;

/**
 * @member {String} user_password
 */
TargetTypeDetailsInput.prototype['user_password'] = undefined;

/**
 * @member {String} username
 */
TargetTypeDetailsInput.prototype['username'] = undefined;

/**
 * @member {String} validation_email
 */
TargetTypeDetailsInput.prototype['validation_email'] = undefined;

/**
 * @member {String} venafi_api_key
 */
TargetTypeDetailsInput.prototype['venafi_api_key'] = undefined;

/**
 * @member {String} venafi_base_url
 */
TargetTypeDetailsInput.prototype['venafi_base_url'] = undefined;

/**
 * @member {String} venafi_tpp_password
 */
TargetTypeDetailsInput.prototype['venafi_tpp_password'] = undefined;

/**
 * @member {String} venafi_tpp_username
 */
TargetTypeDetailsInput.prototype['venafi_tpp_username'] = undefined;

/**
 * @member {Boolean} venafi_use_tpp
 */
TargetTypeDetailsInput.prototype['venafi_use_tpp'] = undefined;

/**
 * @member {String} venafi_zone
 */
TargetTypeDetailsInput.prototype['venafi_zone'] = undefined;






export default TargetTypeDetailsInput;

