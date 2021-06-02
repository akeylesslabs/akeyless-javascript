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
import ItemTargetAssociation from './ItemTargetAssociation';

/**
 * The DSProducerDetails model module.
 * @module model/DSProducerDetails
 * @version 2.4.2
 */
class DSProducerDetails {
    /**
     * Constructs a new <code>DSProducerDetails</code>.
     * @alias module:model/DSProducerDetails
     */
    constructor() { 
        
        DSProducerDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DSProducerDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DSProducerDetails} obj Optional instance to populate.
     * @return {module:model/DSProducerDetails} The populated <code>DSProducerDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DSProducerDetails();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('admin_name')) {
                obj['admin_name'] = ApiClient.convertToType(data['admin_name'], 'String');
            }
            if (data.hasOwnProperty('admin_pwd')) {
                obj['admin_pwd'] = ApiClient.convertToType(data['admin_pwd'], 'String');
            }
            if (data.hasOwnProperty('admin_rotation_interval_days')) {
                obj['admin_rotation_interval_days'] = ApiClient.convertToType(data['admin_rotation_interval_days'], 'Number');
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
            if (data.hasOwnProperty('artifactory_token_audience')) {
                obj['artifactory_token_audience'] = ApiClient.convertToType(data['artifactory_token_audience'], 'String');
            }
            if (data.hasOwnProperty('artifactory_token_scope')) {
                obj['artifactory_token_scope'] = ApiClient.convertToType(data['artifactory_token_scope'], 'String');
            }
            if (data.hasOwnProperty('aws_access_key_id')) {
                obj['aws_access_key_id'] = ApiClient.convertToType(data['aws_access_key_id'], 'String');
            }
            if (data.hasOwnProperty('aws_access_mode')) {
                obj['aws_access_mode'] = ApiClient.convertToType(data['aws_access_mode'], 'String');
            }
            if (data.hasOwnProperty('aws_region')) {
                obj['aws_region'] = ApiClient.convertToType(data['aws_region'], 'String');
            }
            if (data.hasOwnProperty('aws_role_arns')) {
                obj['aws_role_arns'] = ApiClient.convertToType(data['aws_role_arns'], 'String');
            }
            if (data.hasOwnProperty('aws_secret_access_key')) {
                obj['aws_secret_access_key'] = ApiClient.convertToType(data['aws_secret_access_key'], 'String');
            }
            if (data.hasOwnProperty('aws_session_token')) {
                obj['aws_session_token'] = ApiClient.convertToType(data['aws_session_token'], 'String');
            }
            if (data.hasOwnProperty('aws_user_console_access')) {
                obj['aws_user_console_access'] = ApiClient.convertToType(data['aws_user_console_access'], 'Boolean');
            }
            if (data.hasOwnProperty('aws_user_groups')) {
                obj['aws_user_groups'] = ApiClient.convertToType(data['aws_user_groups'], 'String');
            }
            if (data.hasOwnProperty('aws_user_policies')) {
                obj['aws_user_policies'] = ApiClient.convertToType(data['aws_user_policies'], 'String');
            }
            if (data.hasOwnProperty('aws_user_programmatic_access')) {
                obj['aws_user_programmatic_access'] = ApiClient.convertToType(data['aws_user_programmatic_access'], 'Boolean');
            }
            if (data.hasOwnProperty('azure_app_object_id')) {
                obj['azure_app_object_id'] = ApiClient.convertToType(data['azure_app_object_id'], 'String');
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
            if (data.hasOwnProperty('azure_user_groups_obj_id')) {
                obj['azure_user_groups_obj_id'] = ApiClient.convertToType(data['azure_user_groups_obj_id'], 'String');
            }
            if (data.hasOwnProperty('azure_user_portal_access')) {
                obj['azure_user_portal_access'] = ApiClient.convertToType(data['azure_user_portal_access'], 'Boolean');
            }
            if (data.hasOwnProperty('azure_user_programmatic_access')) {
                obj['azure_user_programmatic_access'] = ApiClient.convertToType(data['azure_user_programmatic_access'], 'Boolean');
            }
            if (data.hasOwnProperty('azure_user_roles_template_id')) {
                obj['azure_user_roles_template_id'] = ApiClient.convertToType(data['azure_user_roles_template_id'], 'String');
            }
            if (data.hasOwnProperty('chef_organizations')) {
                obj['chef_organizations'] = ApiClient.convertToType(data['chef_organizations'], 'String');
            }
            if (data.hasOwnProperty('chef_server_access_mode')) {
                obj['chef_server_access_mode'] = ApiClient.convertToType(data['chef_server_access_mode'], 'String');
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
            if (data.hasOwnProperty('create_sync_url')) {
                obj['create_sync_url'] = ApiClient.convertToType(data['create_sync_url'], 'String');
            }
            if (data.hasOwnProperty('db_host_name')) {
                obj['db_host_name'] = ApiClient.convertToType(data['db_host_name'], 'String');
            }
            if (data.hasOwnProperty('db_isolation_level')) {
                obj['db_isolation_level'] = ApiClient.convertToType(data['db_isolation_level'], 'String');
            }
            if (data.hasOwnProperty('db_max_idle_conns')) {
                obj['db_max_idle_conns'] = ApiClient.convertToType(data['db_max_idle_conns'], 'String');
            }
            if (data.hasOwnProperty('db_max_open_conns')) {
                obj['db_max_open_conns'] = ApiClient.convertToType(data['db_max_open_conns'], 'String');
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
            if (data.hasOwnProperty('dynamic_secret_id')) {
                obj['dynamic_secret_id'] = ApiClient.convertToType(data['dynamic_secret_id'], 'Number');
            }
            if (data.hasOwnProperty('dynamic_secret_key')) {
                obj['dynamic_secret_key'] = ApiClient.convertToType(data['dynamic_secret_key'], 'String');
            }
            if (data.hasOwnProperty('dynamic_secret_name')) {
                obj['dynamic_secret_name'] = ApiClient.convertToType(data['dynamic_secret_name'], 'String');
            }
            if (data.hasOwnProperty('dynamic_secret_type')) {
                obj['dynamic_secret_type'] = ApiClient.convertToType(data['dynamic_secret_type'], 'String');
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
            if (data.hasOwnProperty('enable_admin_rotation')) {
                obj['enable_admin_rotation'] = ApiClient.convertToType(data['enable_admin_rotation'], 'Boolean');
            }
            if (data.hasOwnProperty('failure_message')) {
                obj['failure_message'] = ApiClient.convertToType(data['failure_message'], 'String');
            }
            if (data.hasOwnProperty('fixed_user_only')) {
                obj['fixed_user_only'] = ApiClient.convertToType(data['fixed_user_only'], 'String');
            }
            if (data.hasOwnProperty('gcp_key_algo')) {
                obj['gcp_key_algo'] = ApiClient.convertToType(data['gcp_key_algo'], 'String');
            }
            if (data.hasOwnProperty('gcp_service_account_email')) {
                obj['gcp_service_account_email'] = ApiClient.convertToType(data['gcp_service_account_email'], 'String');
            }
            if (data.hasOwnProperty('gcp_service_account_key')) {
                obj['gcp_service_account_key'] = ApiClient.convertToType(data['gcp_service_account_key'], ['Number']);
            }
            if (data.hasOwnProperty('gcp_token_lifetime')) {
                obj['gcp_token_lifetime'] = ApiClient.convertToType(data['gcp_token_lifetime'], 'String');
            }
            if (data.hasOwnProperty('gcp_token_scope')) {
                obj['gcp_token_scope'] = ApiClient.convertToType(data['gcp_token_scope'], 'String');
            }
            if (data.hasOwnProperty('gcp_token_type')) {
                obj['gcp_token_type'] = ApiClient.convertToType(data['gcp_token_type'], 'String');
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
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], 'String');
            }
            if (data.hasOwnProperty('host_name')) {
                obj['host_name'] = ApiClient.convertToType(data['host_name'], 'String');
            }
            if (data.hasOwnProperty('host_port')) {
                obj['host_port'] = ApiClient.convertToType(data['host_port'], 'String');
            }
            if (data.hasOwnProperty('item_targets_assoc')) {
                obj['item_targets_assoc'] = ApiClient.convertToType(data['item_targets_assoc'], [ItemTargetAssociation]);
            }
            if (data.hasOwnProperty('last_admin_rotation')) {
                obj['last_admin_rotation'] = ApiClient.convertToType(data['last_admin_rotation'], 'Number');
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
            if (data.hasOwnProperty('mongodb_is_atlas')) {
                obj['mongodb_is_atlas'] = ApiClient.convertToType(data['mongodb_is_atlas'], 'Boolean');
            }
            if (data.hasOwnProperty('mongodb_password')) {
                obj['mongodb_password'] = ApiClient.convertToType(data['mongodb_password'], 'String');
            }
            if (data.hasOwnProperty('mongodb_roles')) {
                obj['mongodb_roles'] = ApiClient.convertToType(data['mongodb_roles'], 'String');
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
            if (data.hasOwnProperty('mssql_creation_statements')) {
                obj['mssql_creation_statements'] = ApiClient.convertToType(data['mssql_creation_statements'], 'String');
            }
            if (data.hasOwnProperty('mssql_revocation_statements')) {
                obj['mssql_revocation_statements'] = ApiClient.convertToType(data['mssql_revocation_statements'], 'String');
            }
            if (data.hasOwnProperty('mysql_creation_statements')) {
                obj['mysql_creation_statements'] = ApiClient.convertToType(data['mysql_creation_statements'], 'String');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
            }
            if (data.hasOwnProperty('postgres_creation_statements')) {
                obj['postgres_creation_statements'] = ApiClient.convertToType(data['postgres_creation_statements'], 'String');
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
            if (data.hasOwnProperty('rabbitmq_user_conf_permission')) {
                obj['rabbitmq_user_conf_permission'] = ApiClient.convertToType(data['rabbitmq_user_conf_permission'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq_user_read_permission')) {
                obj['rabbitmq_user_read_permission'] = ApiClient.convertToType(data['rabbitmq_user_read_permission'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq_user_tags')) {
                obj['rabbitmq_user_tags'] = ApiClient.convertToType(data['rabbitmq_user_tags'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq_user_vhost')) {
                obj['rabbitmq_user_vhost'] = ApiClient.convertToType(data['rabbitmq_user_vhost'], 'String');
            }
            if (data.hasOwnProperty('rabbitmq_user_write_permission')) {
                obj['rabbitmq_user_write_permission'] = ApiClient.convertToType(data['rabbitmq_user_write_permission'], 'String');
            }
            if (data.hasOwnProperty('revoke_sync_url')) {
                obj['revoke_sync_url'] = ApiClient.convertToType(data['revoke_sync_url'], 'String');
            }
            if (data.hasOwnProperty('rotate_sync_url')) {
                obj['rotate_sync_url'] = ApiClient.convertToType(data['rotate_sync_url'], 'String');
            }
            if (data.hasOwnProperty('sf_account')) {
                obj['sf_account'] = ApiClient.convertToType(data['sf_account'], 'String');
            }
            if (data.hasOwnProperty('sf_user_role')) {
                obj['sf_user_role'] = ApiClient.convertToType(data['sf_user_role'], 'String');
            }
            if (data.hasOwnProperty('sf_warehouse_name')) {
                obj['sf_warehouse_name'] = ApiClient.convertToType(data['sf_warehouse_name'], 'String');
            }
            if (data.hasOwnProperty('should_stop')) {
                obj['should_stop'] = ApiClient.convertToType(data['should_stop'], 'String');
            }
            if (data.hasOwnProperty('timeout_seconds')) {
                obj['timeout_seconds'] = ApiClient.convertToType(data['timeout_seconds'], 'Number');
            }
            if (data.hasOwnProperty('user_principal_name')) {
                obj['user_principal_name'] = ApiClient.convertToType(data['user_principal_name'], 'String');
            }
            if (data.hasOwnProperty('user_ttl')) {
                obj['user_ttl'] = ApiClient.convertToType(data['user_ttl'], 'String');
            }
            if (data.hasOwnProperty('venafi_allow_subdomains')) {
                obj['venafi_allow_subdomains'] = ApiClient.convertToType(data['venafi_allow_subdomains'], 'Boolean');
            }
            if (data.hasOwnProperty('venafi_allowed_domains')) {
                obj['venafi_allowed_domains'] = ApiClient.convertToType(data['venafi_allowed_domains'], ['String']);
            }
            if (data.hasOwnProperty('venafi_api_key')) {
                obj['venafi_api_key'] = ApiClient.convertToType(data['venafi_api_key'], 'String');
            }
            if (data.hasOwnProperty('venafi_auto_generated_folder')) {
                obj['venafi_auto_generated_folder'] = ApiClient.convertToType(data['venafi_auto_generated_folder'], 'String');
            }
            if (data.hasOwnProperty('venafi_base_url')) {
                obj['venafi_base_url'] = ApiClient.convertToType(data['venafi_base_url'], 'String');
            }
            if (data.hasOwnProperty('venafi_root_first_in_chain')) {
                obj['venafi_root_first_in_chain'] = ApiClient.convertToType(data['venafi_root_first_in_chain'], 'Boolean');
            }
            if (data.hasOwnProperty('venafi_sign_using_akeyless_pki')) {
                obj['venafi_sign_using_akeyless_pki'] = ApiClient.convertToType(data['venafi_sign_using_akeyless_pki'], 'Boolean');
            }
            if (data.hasOwnProperty('venafi_signer_key_name')) {
                obj['venafi_signer_key_name'] = ApiClient.convertToType(data['venafi_signer_key_name'], 'String');
            }
            if (data.hasOwnProperty('venafi_store_private_key')) {
                obj['venafi_store_private_key'] = ApiClient.convertToType(data['venafi_store_private_key'], 'Boolean');
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
 * @member {Boolean} active
 */
DSProducerDetails.prototype['active'] = undefined;

/**
 * @member {String} admin_name
 */
DSProducerDetails.prototype['admin_name'] = undefined;

/**
 * @member {String} admin_pwd
 */
DSProducerDetails.prototype['admin_pwd'] = undefined;

/**
 * @member {Number} admin_rotation_interval_days
 */
DSProducerDetails.prototype['admin_rotation_interval_days'] = undefined;

/**
 * @member {String} artifactory_admin_apikey
 */
DSProducerDetails.prototype['artifactory_admin_apikey'] = undefined;

/**
 * @member {String} artifactory_admin_username
 */
DSProducerDetails.prototype['artifactory_admin_username'] = undefined;

/**
 * @member {String} artifactory_base_url
 */
DSProducerDetails.prototype['artifactory_base_url'] = undefined;

/**
 * @member {String} artifactory_token_audience
 */
DSProducerDetails.prototype['artifactory_token_audience'] = undefined;

/**
 * @member {String} artifactory_token_scope
 */
DSProducerDetails.prototype['artifactory_token_scope'] = undefined;

/**
 * @member {String} aws_access_key_id
 */
DSProducerDetails.prototype['aws_access_key_id'] = undefined;

/**
 * @member {String} aws_access_mode
 */
DSProducerDetails.prototype['aws_access_mode'] = undefined;

/**
 * @member {String} aws_region
 */
DSProducerDetails.prototype['aws_region'] = undefined;

/**
 * @member {String} aws_role_arns
 */
DSProducerDetails.prototype['aws_role_arns'] = undefined;

/**
 * @member {String} aws_secret_access_key
 */
DSProducerDetails.prototype['aws_secret_access_key'] = undefined;

/**
 * @member {String} aws_session_token
 */
DSProducerDetails.prototype['aws_session_token'] = undefined;

/**
 * @member {Boolean} aws_user_console_access
 */
DSProducerDetails.prototype['aws_user_console_access'] = undefined;

/**
 * @member {String} aws_user_groups
 */
DSProducerDetails.prototype['aws_user_groups'] = undefined;

/**
 * @member {String} aws_user_policies
 */
DSProducerDetails.prototype['aws_user_policies'] = undefined;

/**
 * @member {Boolean} aws_user_programmatic_access
 */
DSProducerDetails.prototype['aws_user_programmatic_access'] = undefined;

/**
 * @member {String} azure_app_object_id
 */
DSProducerDetails.prototype['azure_app_object_id'] = undefined;

/**
 * @member {String} azure_client_id
 */
DSProducerDetails.prototype['azure_client_id'] = undefined;

/**
 * @member {String} azure_client_secret
 */
DSProducerDetails.prototype['azure_client_secret'] = undefined;

/**
 * @member {String} azure_tenant_id
 */
DSProducerDetails.prototype['azure_tenant_id'] = undefined;

/**
 * @member {String} azure_user_groups_obj_id
 */
DSProducerDetails.prototype['azure_user_groups_obj_id'] = undefined;

/**
 * @member {Boolean} azure_user_portal_access
 */
DSProducerDetails.prototype['azure_user_portal_access'] = undefined;

/**
 * @member {Boolean} azure_user_programmatic_access
 */
DSProducerDetails.prototype['azure_user_programmatic_access'] = undefined;

/**
 * @member {String} azure_user_roles_template_id
 */
DSProducerDetails.prototype['azure_user_roles_template_id'] = undefined;

/**
 * @member {String} chef_organizations
 */
DSProducerDetails.prototype['chef_organizations'] = undefined;

/**
 * @member {String} chef_server_access_mode
 */
DSProducerDetails.prototype['chef_server_access_mode'] = undefined;

/**
 * @member {String} chef_server_host_name
 */
DSProducerDetails.prototype['chef_server_host_name'] = undefined;

/**
 * @member {String} chef_server_key
 */
DSProducerDetails.prototype['chef_server_key'] = undefined;

/**
 * @member {String} chef_server_port
 */
DSProducerDetails.prototype['chef_server_port'] = undefined;

/**
 * @member {String} chef_server_url
 */
DSProducerDetails.prototype['chef_server_url'] = undefined;

/**
 * @member {String} chef_server_username
 */
DSProducerDetails.prototype['chef_server_username'] = undefined;

/**
 * @member {Boolean} chef_skip_ssl
 */
DSProducerDetails.prototype['chef_skip_ssl'] = undefined;

/**
 * @member {String} create_sync_url
 */
DSProducerDetails.prototype['create_sync_url'] = undefined;

/**
 * @member {String} db_host_name
 */
DSProducerDetails.prototype['db_host_name'] = undefined;

/**
 * @member {String} db_isolation_level
 */
DSProducerDetails.prototype['db_isolation_level'] = undefined;

/**
 * @member {String} db_max_idle_conns
 */
DSProducerDetails.prototype['db_max_idle_conns'] = undefined;

/**
 * @member {String} db_max_open_conns
 */
DSProducerDetails.prototype['db_max_open_conns'] = undefined;

/**
 * @member {String} db_name
 */
DSProducerDetails.prototype['db_name'] = undefined;

/**
 * @member {String} db_port
 */
DSProducerDetails.prototype['db_port'] = undefined;

/**
 * @member {String} db_pwd
 */
DSProducerDetails.prototype['db_pwd'] = undefined;

/**
 * (Optional) DBServerCertificates defines the set of root certificate authorities that clients use when verifying server certificates. If DBServerCertificates is empty, TLS uses the host's root CA set.
 * @member {String} db_server_certificates
 */
DSProducerDetails.prototype['db_server_certificates'] = undefined;

/**
 * (Optional) ServerName is used to verify the hostname on the returned certificates unless InsecureSkipVerify is given. It is also included in the client's handshake to support virtual hosting unless it is an IP address.
 * @member {String} db_server_name
 */
DSProducerDetails.prototype['db_server_name'] = undefined;

/**
 * @member {String} db_user_name
 */
DSProducerDetails.prototype['db_user_name'] = undefined;

/**
 * @member {Number} dynamic_secret_id
 */
DSProducerDetails.prototype['dynamic_secret_id'] = undefined;

/**
 * @member {String} dynamic_secret_key
 */
DSProducerDetails.prototype['dynamic_secret_key'] = undefined;

/**
 * @member {String} dynamic_secret_name
 */
DSProducerDetails.prototype['dynamic_secret_name'] = undefined;

/**
 * @member {String} dynamic_secret_type
 */
DSProducerDetails.prototype['dynamic_secret_type'] = undefined;

/**
 * @member {String} eks_access_key_id
 */
DSProducerDetails.prototype['eks_access_key_id'] = undefined;

/**
 * @member {String} eks_assume_role
 */
DSProducerDetails.prototype['eks_assume_role'] = undefined;

/**
 * @member {String} eks_cluster_ca_certificate
 */
DSProducerDetails.prototype['eks_cluster_ca_certificate'] = undefined;

/**
 * @member {String} eks_cluster_endpoint
 */
DSProducerDetails.prototype['eks_cluster_endpoint'] = undefined;

/**
 * @member {String} eks_cluster_name
 */
DSProducerDetails.prototype['eks_cluster_name'] = undefined;

/**
 * @member {String} eks_region
 */
DSProducerDetails.prototype['eks_region'] = undefined;

/**
 * @member {String} eks_secret_access_key
 */
DSProducerDetails.prototype['eks_secret_access_key'] = undefined;

/**
 * @member {Boolean} enable_admin_rotation
 */
DSProducerDetails.prototype['enable_admin_rotation'] = undefined;

/**
 * @member {String} failure_message
 */
DSProducerDetails.prototype['failure_message'] = undefined;

/**
 * @member {String} fixed_user_only
 */
DSProducerDetails.prototype['fixed_user_only'] = undefined;

/**
 * @member {String} gcp_key_algo
 */
DSProducerDetails.prototype['gcp_key_algo'] = undefined;

/**
 * @member {String} gcp_service_account_email
 */
DSProducerDetails.prototype['gcp_service_account_email'] = undefined;

/**
 * @member {Array.<Number>} gcp_service_account_key
 */
DSProducerDetails.prototype['gcp_service_account_key'] = undefined;

/**
 * @member {String} gcp_token_lifetime
 */
DSProducerDetails.prototype['gcp_token_lifetime'] = undefined;

/**
 * @member {String} gcp_token_scope
 */
DSProducerDetails.prototype['gcp_token_scope'] = undefined;

/**
 * @member {String} gcp_token_type
 */
DSProducerDetails.prototype['gcp_token_type'] = undefined;

/**
 * @member {String} gke_cluster_ca_certificate
 */
DSProducerDetails.prototype['gke_cluster_ca_certificate'] = undefined;

/**
 * @member {String} gke_cluster_endpoint
 */
DSProducerDetails.prototype['gke_cluster_endpoint'] = undefined;

/**
 * GKEProjectID            string `json:\"gke_project_id\"`
 * @member {String} gke_cluster_name
 */
DSProducerDetails.prototype['gke_cluster_name'] = undefined;

/**
 * @member {String} gke_service_account_key
 */
DSProducerDetails.prototype['gke_service_account_key'] = undefined;

/**
 * GKEClusterComputeZone   string `json:\"gke_cluster_compute_zone\"`
 * @member {String} gke_service_account_name
 */
DSProducerDetails.prototype['gke_service_account_name'] = undefined;

/**
 * @member {String} groups
 */
DSProducerDetails.prototype['groups'] = undefined;

/**
 * @member {String} host_name
 */
DSProducerDetails.prototype['host_name'] = undefined;

/**
 * @member {String} host_port
 */
DSProducerDetails.prototype['host_port'] = undefined;

/**
 * @member {Array.<module:model/ItemTargetAssociation>} item_targets_assoc
 */
DSProducerDetails.prototype['item_targets_assoc'] = undefined;

/**
 * @member {Number} last_admin_rotation
 */
DSProducerDetails.prototype['last_admin_rotation'] = undefined;

/**
 * @member {Boolean} mongodb_atlas
 */
DSProducerDetails.prototype['mongodb_atlas'] = undefined;

/**
 * @member {String} mongodb_atlas_api_private_key
 */
DSProducerDetails.prototype['mongodb_atlas_api_private_key'] = undefined;

/**
 * @member {String} mongodb_atlas_api_public_key
 */
DSProducerDetails.prototype['mongodb_atlas_api_public_key'] = undefined;

/**
 * mongodb atlas fields
 * @member {String} mongodb_atlas_project_id
 */
DSProducerDetails.prototype['mongodb_atlas_project_id'] = undefined;

/**
 * common fields
 * @member {String} mongodb_db_name
 */
DSProducerDetails.prototype['mongodb_db_name'] = undefined;

/**
 * @member {String} mongodb_default_auth_db
 */
DSProducerDetails.prototype['mongodb_default_auth_db'] = undefined;

/**
 * @member {String} mongodb_host_port
 */
DSProducerDetails.prototype['mongodb_host_port'] = undefined;

/**
 * @member {Boolean} mongodb_is_atlas
 */
DSProducerDetails.prototype['mongodb_is_atlas'] = undefined;

/**
 * @member {String} mongodb_password
 */
DSProducerDetails.prototype['mongodb_password'] = undefined;

/**
 * common fields
 * @member {String} mongodb_roles
 */
DSProducerDetails.prototype['mongodb_roles'] = undefined;

/**
 * mongodb fields
 * @member {String} mongodb_uri_connection
 */
DSProducerDetails.prototype['mongodb_uri_connection'] = undefined;

/**
 * @member {String} mongodb_uri_options
 */
DSProducerDetails.prototype['mongodb_uri_options'] = undefined;

/**
 * @member {String} mongodb_username
 */
DSProducerDetails.prototype['mongodb_username'] = undefined;

/**
 * @member {String} mssql_creation_statements
 */
DSProducerDetails.prototype['mssql_creation_statements'] = undefined;

/**
 * @member {String} mssql_revocation_statements
 */
DSProducerDetails.prototype['mssql_revocation_statements'] = undefined;

/**
 * @member {String} mysql_creation_statements
 */
DSProducerDetails.prototype['mysql_creation_statements'] = undefined;

/**
 * @member {String} payload
 */
DSProducerDetails.prototype['payload'] = undefined;

/**
 * @member {String} postgres_creation_statements
 */
DSProducerDetails.prototype['postgres_creation_statements'] = undefined;

/**
 * @member {String} rabbitmq_server_password
 */
DSProducerDetails.prototype['rabbitmq_server_password'] = undefined;

/**
 * @member {String} rabbitmq_server_uri
 */
DSProducerDetails.prototype['rabbitmq_server_uri'] = undefined;

/**
 * @member {String} rabbitmq_server_user
 */
DSProducerDetails.prototype['rabbitmq_server_user'] = undefined;

/**
 * @member {String} rabbitmq_user_conf_permission
 */
DSProducerDetails.prototype['rabbitmq_user_conf_permission'] = undefined;

/**
 * @member {String} rabbitmq_user_read_permission
 */
DSProducerDetails.prototype['rabbitmq_user_read_permission'] = undefined;

/**
 * @member {String} rabbitmq_user_tags
 */
DSProducerDetails.prototype['rabbitmq_user_tags'] = undefined;

/**
 * @member {String} rabbitmq_user_vhost
 */
DSProducerDetails.prototype['rabbitmq_user_vhost'] = undefined;

/**
 * @member {String} rabbitmq_user_write_permission
 */
DSProducerDetails.prototype['rabbitmq_user_write_permission'] = undefined;

/**
 * @member {String} revoke_sync_url
 */
DSProducerDetails.prototype['revoke_sync_url'] = undefined;

/**
 * @member {String} rotate_sync_url
 */
DSProducerDetails.prototype['rotate_sync_url'] = undefined;

/**
 * @member {String} sf_account
 */
DSProducerDetails.prototype['sf_account'] = undefined;

/**
 * generated  users info
 * @member {String} sf_user_role
 */
DSProducerDetails.prototype['sf_user_role'] = undefined;

/**
 * @member {String} sf_warehouse_name
 */
DSProducerDetails.prototype['sf_warehouse_name'] = undefined;

/**
 * TODO delete this after migration
 * @member {String} should_stop
 */
DSProducerDetails.prototype['should_stop'] = undefined;

/**
 * @member {Number} timeout_seconds
 */
DSProducerDetails.prototype['timeout_seconds'] = undefined;

/**
 * @member {String} user_principal_name
 */
DSProducerDetails.prototype['user_principal_name'] = undefined;

/**
 * @member {String} user_ttl
 */
DSProducerDetails.prototype['user_ttl'] = undefined;

/**
 * @member {Boolean} venafi_allow_subdomains
 */
DSProducerDetails.prototype['venafi_allow_subdomains'] = undefined;

/**
 * @member {Array.<String>} venafi_allowed_domains
 */
DSProducerDetails.prototype['venafi_allowed_domains'] = undefined;

/**
 * @member {String} venafi_api_key
 */
DSProducerDetails.prototype['venafi_api_key'] = undefined;

/**
 * @member {String} venafi_auto_generated_folder
 */
DSProducerDetails.prototype['venafi_auto_generated_folder'] = undefined;

/**
 * @member {String} venafi_base_url
 */
DSProducerDetails.prototype['venafi_base_url'] = undefined;

/**
 * @member {Boolean} venafi_root_first_in_chain
 */
DSProducerDetails.prototype['venafi_root_first_in_chain'] = undefined;

/**
 * @member {Boolean} venafi_sign_using_akeyless_pki
 */
DSProducerDetails.prototype['venafi_sign_using_akeyless_pki'] = undefined;

/**
 * @member {String} venafi_signer_key_name
 */
DSProducerDetails.prototype['venafi_signer_key_name'] = undefined;

/**
 * @member {Boolean} venafi_store_private_key
 */
DSProducerDetails.prototype['venafi_store_private_key'] = undefined;

/**
 * @member {String} venafi_tpp_password
 */
DSProducerDetails.prototype['venafi_tpp_password'] = undefined;

/**
 * @member {String} venafi_tpp_username
 */
DSProducerDetails.prototype['venafi_tpp_username'] = undefined;

/**
 * @member {Boolean} venafi_use_tpp
 */
DSProducerDetails.prototype['venafi_use_tpp'] = undefined;

/**
 * @member {String} venafi_zone
 */
DSProducerDetails.prototype['venafi_zone'] = undefined;






export default DSProducerDetails;

