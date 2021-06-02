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
 * @version 2.4.2
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

            if (data.hasOwnProperty('artifactory_admin_apikey')) {
                obj['artifactory_admin_apikey'] = ApiClient.convertToType(data['artifactory_admin_apikey'], 'String');
            }
            if (data.hasOwnProperty('artifactory_admin_username')) {
                obj['artifactory_admin_username'] = ApiClient.convertToType(data['artifactory_admin_username'], 'String');
            }
            if (data.hasOwnProperty('artifactory_base_url')) {
                obj['artifactory_base_url'] = ApiClient.convertToType(data['artifactory_base_url'], 'String');
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
            if (data.hasOwnProperty('azure_tenant_id')) {
                obj['azure_tenant_id'] = ApiClient.convertToType(data['azure_tenant_id'], 'String');
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
            if (data.hasOwnProperty('db_host_name')) {
                obj['db_host_name'] = ApiClient.convertToType(data['db_host_name'], 'String');
            }
            if (data.hasOwnProperty('db_name')) {
                obj['db_name'] = ApiClient.convertToType(data['db_name'], 'String');
            }
            if (data.hasOwnProperty('db_port')) {
                obj['db_port'] = ApiClient.convertToType(data['db_port'], 'String');
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
            if (data.hasOwnProperty('eks_access_key_id')) {
                obj['eks_access_key_id'] = ApiClient.convertToType(data['eks_access_key_id'], 'String');
            }
            if (data.hasOwnProperty('eks_assume_role')) {
                obj['eks_assume_role'] = ApiClient.convertToType(data['eks_assume_role'], 'String');
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
            if (data.hasOwnProperty('gcp_service_account_email')) {
                obj['gcp_service_account_email'] = ApiClient.convertToType(data['gcp_service_account_email'], 'String');
            }
            if (data.hasOwnProperty('gcp_service_account_key')) {
                obj['gcp_service_account_key'] = ApiClient.convertToType(data['gcp_service_account_key'], ['Number']);
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
            if (data.hasOwnProperty('mongodb_atlas')) {
                obj['mongodb_atlas'] = ApiClient.convertToType(data['mongodb_atlas'], 'Boolean');
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
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'String');
            }
            if (data.hasOwnProperty('private_key')) {
                obj['private_key'] = ApiClient.convertToType(data['private_key'], 'String');
            }
            if (data.hasOwnProperty('private_key_password')) {
                obj['private_key_password'] = ApiClient.convertToType(data['private_key_password'], 'String');
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
            if (data.hasOwnProperty('sf_account')) {
                obj['sf_account'] = ApiClient.convertToType(data['sf_account'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
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
 * @member {String} azure_tenant_id
 */
TargetTypeDetailsInput.prototype['azure_tenant_id'] = undefined;

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
 * @member {String} eks_access_key_id
 */
TargetTypeDetailsInput.prototype['eks_access_key_id'] = undefined;

/**
 * @member {String} eks_assume_role
 */
TargetTypeDetailsInput.prototype['eks_assume_role'] = undefined;

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
 * @member {String} gcp_service_account_email
 */
TargetTypeDetailsInput.prototype['gcp_service_account_email'] = undefined;

/**
 * @member {Array.<Number>} gcp_service_account_key
 */
TargetTypeDetailsInput.prototype['gcp_service_account_key'] = undefined;

/**
 * @member {String} gke_cluster_ca_certificate
 */
TargetTypeDetailsInput.prototype['gke_cluster_ca_certificate'] = undefined;

/**
 * @member {String} gke_cluster_endpoint
 */
TargetTypeDetailsInput.prototype['gke_cluster_endpoint'] = undefined;

/**
 * GKEProjectID            string `json:\"gke_project_id\"`
 * @member {String} gke_cluster_name
 */
TargetTypeDetailsInput.prototype['gke_cluster_name'] = undefined;

/**
 * @member {String} gke_service_account_key
 */
TargetTypeDetailsInput.prototype['gke_service_account_key'] = undefined;

/**
 * GKEClusterComputeZone   string `json:\"gke_cluster_compute_zone\"`
 * @member {String} gke_service_account_name
 */
TargetTypeDetailsInput.prototype['gke_service_account_name'] = undefined;

/**
 * @member {String} host
 */
TargetTypeDetailsInput.prototype['host'] = undefined;

/**
 * @member {Boolean} mongodb_atlas
 */
TargetTypeDetailsInput.prototype['mongodb_atlas'] = undefined;

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
 * @member {String} sf_account
 */
TargetTypeDetailsInput.prototype['sf_account'] = undefined;

/**
 * @member {String} url
 */
TargetTypeDetailsInput.prototype['url'] = undefined;

/**
 * @member {String} username
 */
TargetTypeDetailsInput.prototype['username'] = undefined;

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

