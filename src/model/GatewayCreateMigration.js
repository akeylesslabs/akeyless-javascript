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
 * The GatewayCreateMigration model module.
 * @module model/GatewayCreateMigration
 * @version 3.6.0
 */
class GatewayCreateMigration {
    /**
     * Constructs a new <code>GatewayCreateMigration</code>.
     * gatewayCreateMigration is a command that create migration
     * @alias module:model/GatewayCreateMigration
     * @param name {String} Migration name
     * @param siTargetName {String} SSH, Windows or Linked Target Name. (Relevant only for Server Inventory migration)
     * @param siUsersPathTemplate {String} Path location template for migrating users as Rotated Secrets e.g.: .../Users/{{COMPUTER_NAME}}/{{USERNAME}} (Relevant only for Server Inventory migration)
     * @param targetLocation {String} Target location in Akeyless for imported secrets
     */
    constructor(name, siTargetName, siUsersPathTemplate, targetLocation) { 
        
        GatewayCreateMigration.initialize(this, name, siTargetName, siUsersPathTemplate, targetLocation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, siTargetName, siUsersPathTemplate, targetLocation) { 
        obj['name'] = name;
        obj['si-target-name'] = siTargetName;
        obj['si-users-path-template'] = siUsersPathTemplate;
        obj['target-location'] = targetLocation;
    }

    /**
     * Constructs a <code>GatewayCreateMigration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateMigration} obj Optional instance to populate.
     * @return {module:model/GatewayCreateMigration} The populated <code>GatewayCreateMigration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateMigration();

            if (data.hasOwnProperty('1password-email')) {
                obj['1password-email'] = ApiClient.convertToType(data['1password-email'], 'String');
            }
            if (data.hasOwnProperty('1password-password')) {
                obj['1password-password'] = ApiClient.convertToType(data['1password-password'], 'String');
            }
            if (data.hasOwnProperty('1password-secret-key')) {
                obj['1password-secret-key'] = ApiClient.convertToType(data['1password-secret-key'], 'String');
            }
            if (data.hasOwnProperty('1password-url')) {
                obj['1password-url'] = ApiClient.convertToType(data['1password-url'], 'String');
            }
            if (data.hasOwnProperty('1password-vaults')) {
                obj['1password-vaults'] = ApiClient.convertToType(data['1password-vaults'], ['String']);
            }
            if (data.hasOwnProperty('ad-discover-services')) {
                obj['ad-discover-services'] = ApiClient.convertToType(data['ad-discover-services'], 'String');
            }
            if (data.hasOwnProperty('ad-discovery-types')) {
                obj['ad-discovery-types'] = ApiClient.convertToType(data['ad-discovery-types'], ['String']);
            }
            if (data.hasOwnProperty('ad-os-filter')) {
                obj['ad-os-filter'] = ApiClient.convertToType(data['ad-os-filter'], 'String');
            }
            if (data.hasOwnProperty('ad-ssh-port')) {
                obj['ad-ssh-port'] = ApiClient.convertToType(data['ad-ssh-port'], 'String');
            }
            if (data.hasOwnProperty('ad-targets-type')) {
                obj['ad-targets-type'] = ApiClient.convertToType(data['ad-targets-type'], 'String');
            }
            if (data.hasOwnProperty('ad-winrm-over-http')) {
                obj['ad-winrm-over-http'] = ApiClient.convertToType(data['ad-winrm-over-http'], 'String');
            }
            if (data.hasOwnProperty('ad-winrm-port')) {
                obj['ad-winrm-port'] = ApiClient.convertToType(data['ad-winrm-port'], 'String');
            }
            if (data.hasOwnProperty('ad_auto_rotate')) {
                obj['ad_auto_rotate'] = ApiClient.convertToType(data['ad_auto_rotate'], 'String');
            }
            if (data.hasOwnProperty('ad_computer_base_dn')) {
                obj['ad_computer_base_dn'] = ApiClient.convertToType(data['ad_computer_base_dn'], 'String');
            }
            if (data.hasOwnProperty('ad_discover_local_users')) {
                obj['ad_discover_local_users'] = ApiClient.convertToType(data['ad_discover_local_users'], 'String');
            }
            if (data.hasOwnProperty('ad_domain_name')) {
                obj['ad_domain_name'] = ApiClient.convertToType(data['ad_domain_name'], 'String');
            }
            if (data.hasOwnProperty('ad_domain_users_path_template')) {
                obj['ad_domain_users_path_template'] = ApiClient.convertToType(data['ad_domain_users_path_template'], 'String');
            }
            if (data.hasOwnProperty('ad_local_users_ignore')) {
                obj['ad_local_users_ignore'] = ApiClient.convertToType(data['ad_local_users_ignore'], 'String');
            }
            if (data.hasOwnProperty('ad_local_users_path_template')) {
                obj['ad_local_users_path_template'] = ApiClient.convertToType(data['ad_local_users_path_template'], 'String');
            }
            if (data.hasOwnProperty('ad_rotation_hour')) {
                obj['ad_rotation_hour'] = ApiClient.convertToType(data['ad_rotation_hour'], 'Number');
            }
            if (data.hasOwnProperty('ad_rotation_interval')) {
                obj['ad_rotation_interval'] = ApiClient.convertToType(data['ad_rotation_interval'], 'Number');
            }
            if (data.hasOwnProperty('ad_sra_enable_rdp')) {
                obj['ad_sra_enable_rdp'] = ApiClient.convertToType(data['ad_sra_enable_rdp'], 'String');
            }
            if (data.hasOwnProperty('ad_target_name')) {
                obj['ad_target_name'] = ApiClient.convertToType(data['ad_target_name'], 'String');
            }
            if (data.hasOwnProperty('ad_targets_path_template')) {
                obj['ad_targets_path_template'] = ApiClient.convertToType(data['ad_targets_path_template'], 'String');
            }
            if (data.hasOwnProperty('ad_user_base_dn')) {
                obj['ad_user_base_dn'] = ApiClient.convertToType(data['ad_user_base_dn'], 'String');
            }
            if (data.hasOwnProperty('ad_user_groups')) {
                obj['ad_user_groups'] = ApiClient.convertToType(data['ad_user_groups'], 'String');
            }
            if (data.hasOwnProperty('aws-key')) {
                obj['aws-key'] = ApiClient.convertToType(data['aws-key'], 'String');
            }
            if (data.hasOwnProperty('aws-key-id')) {
                obj['aws-key-id'] = ApiClient.convertToType(data['aws-key-id'], 'String');
            }
            if (data.hasOwnProperty('aws-region')) {
                obj['aws-region'] = ApiClient.convertToType(data['aws-region'], 'String');
            }
            if (data.hasOwnProperty('azure-client-id')) {
                obj['azure-client-id'] = ApiClient.convertToType(data['azure-client-id'], 'String');
            }
            if (data.hasOwnProperty('azure-kv-name')) {
                obj['azure-kv-name'] = ApiClient.convertToType(data['azure-kv-name'], 'String');
            }
            if (data.hasOwnProperty('azure-secret')) {
                obj['azure-secret'] = ApiClient.convertToType(data['azure-secret'], 'String');
            }
            if (data.hasOwnProperty('azure-tenant-id')) {
                obj['azure-tenant-id'] = ApiClient.convertToType(data['azure-tenant-id'], 'String');
            }
            if (data.hasOwnProperty('gcp-key')) {
                obj['gcp-key'] = ApiClient.convertToType(data['gcp-key'], 'String');
            }
            if (data.hasOwnProperty('hashi-json')) {
                obj['hashi-json'] = ApiClient.convertToType(data['hashi-json'], 'String');
            }
            if (data.hasOwnProperty('hashi-ns')) {
                obj['hashi-ns'] = ApiClient.convertToType(data['hashi-ns'], ['String']);
            }
            if (data.hasOwnProperty('hashi-token')) {
                obj['hashi-token'] = ApiClient.convertToType(data['hashi-token'], 'String');
            }
            if (data.hasOwnProperty('hashi-url')) {
                obj['hashi-url'] = ApiClient.convertToType(data['hashi-url'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('k8s-ca-certificate')) {
                obj['k8s-ca-certificate'] = ApiClient.convertToType(data['k8s-ca-certificate'], ['Number']);
            }
            if (data.hasOwnProperty('k8s-client-certificate')) {
                obj['k8s-client-certificate'] = ApiClient.convertToType(data['k8s-client-certificate'], ['Number']);
            }
            if (data.hasOwnProperty('k8s-client-key')) {
                obj['k8s-client-key'] = ApiClient.convertToType(data['k8s-client-key'], ['Number']);
            }
            if (data.hasOwnProperty('k8s-namespace')) {
                obj['k8s-namespace'] = ApiClient.convertToType(data['k8s-namespace'], 'String');
            }
            if (data.hasOwnProperty('k8s-password')) {
                obj['k8s-password'] = ApiClient.convertToType(data['k8s-password'], 'String');
            }
            if (data.hasOwnProperty('k8s-skip-system')) {
                obj['k8s-skip-system'] = ApiClient.convertToType(data['k8s-skip-system'], 'Boolean');
            }
            if (data.hasOwnProperty('k8s-token')) {
                obj['k8s-token'] = ApiClient.convertToType(data['k8s-token'], 'String');
            }
            if (data.hasOwnProperty('k8s-url')) {
                obj['k8s-url'] = ApiClient.convertToType(data['k8s-url'], 'String');
            }
            if (data.hasOwnProperty('k8s-username')) {
                obj['k8s-username'] = ApiClient.convertToType(data['k8s-username'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('protection-key')) {
                obj['protection-key'] = ApiClient.convertToType(data['protection-key'], 'String');
            }
            if (data.hasOwnProperty('si-auto-rotate')) {
                obj['si-auto-rotate'] = ApiClient.convertToType(data['si-auto-rotate'], 'String');
            }
            if (data.hasOwnProperty('si-rotation-hour')) {
                obj['si-rotation-hour'] = ApiClient.convertToType(data['si-rotation-hour'], 'Number');
            }
            if (data.hasOwnProperty('si-rotation-interval')) {
                obj['si-rotation-interval'] = ApiClient.convertToType(data['si-rotation-interval'], 'Number');
            }
            if (data.hasOwnProperty('si-sra-enable-rdp')) {
                obj['si-sra-enable-rdp'] = ApiClient.convertToType(data['si-sra-enable-rdp'], 'String');
            }
            if (data.hasOwnProperty('si-target-name')) {
                obj['si-target-name'] = ApiClient.convertToType(data['si-target-name'], 'String');
            }
            if (data.hasOwnProperty('si-user-groups')) {
                obj['si-user-groups'] = ApiClient.convertToType(data['si-user-groups'], 'String');
            }
            if (data.hasOwnProperty('si-users-ignore')) {
                obj['si-users-ignore'] = ApiClient.convertToType(data['si-users-ignore'], 'String');
            }
            if (data.hasOwnProperty('si-users-path-template')) {
                obj['si-users-path-template'] = ApiClient.convertToType(data['si-users-path-template'], 'String');
            }
            if (data.hasOwnProperty('target-location')) {
                obj['target-location'] = ApiClient.convertToType(data['target-location'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 1Password user email to connect to the API
 * @member {String} 1password-email
 */
GatewayCreateMigration.prototype['1password-email'] = undefined;

/**
 * 1Password user password to connect to the API
 * @member {String} 1password-password
 */
GatewayCreateMigration.prototype['1password-password'] = undefined;

/**
 * 1Password user secret key to connect to the API
 * @member {String} 1password-secret-key
 */
GatewayCreateMigration.prototype['1password-secret-key'] = undefined;

/**
 * 1Password api container url
 * @member {String} 1password-url
 */
GatewayCreateMigration.prototype['1password-url'] = undefined;

/**
 * 1Password list of vault to get the items from
 * @member {Array.<String>} 1password-vaults
 */
GatewayCreateMigration.prototype['1password-vaults'] = undefined;

/**
 * Enable/Disable discovery of Windows services from each domain server as part of the SSH/Windows Rotated Secrets. Default is false. (Relevant only for Active Directory migration)
 * @member {String} ad-discover-services
 * @default 'false'
 */
GatewayCreateMigration.prototype['ad-discover-services'] = 'false';

/**
 * Set migration discovery types (domain-users, computers, local-users). (Relevant only for Active Directory migration)
 * @member {Array.<String>} ad-discovery-types
 */
GatewayCreateMigration.prototype['ad-discovery-types'] = undefined;

/**
 * Filter by Operating System to run the migration, can be used with wildcards, e.g. SRV20* (Relevant only for Active Directory migration)
 * @member {String} ad-os-filter
 */
GatewayCreateMigration.prototype['ad-os-filter'] = undefined;

/**
 * Set the SSH Port for further connection to the domain servers. Default is port 22 (Relevant only for Active Directory migration)
 * @member {String} ad-ssh-port
 * @default '22'
 */
GatewayCreateMigration.prototype['ad-ssh-port'] = '22';

/**
 * Set the target type of the domain servers [ssh/windows](Relevant only for Active Directory migration)
 * @member {String} ad-targets-type
 * @default 'windows'
 */
GatewayCreateMigration.prototype['ad-targets-type'] = 'windows';

/**
 * Use WinRM over HTTP, by default runs over HTTPS
 * @member {String} ad-winrm-over-http
 * @default 'false'
 */
GatewayCreateMigration.prototype['ad-winrm-over-http'] = 'false';

/**
 * Set the WinRM Port for further connection to the domain servers. Default is 5986 (Relevant only for Active Directory migration)
 * @member {String} ad-winrm-port
 * @default '5986'
 */
GatewayCreateMigration.prototype['ad-winrm-port'] = '5986';

/**
 * Enable/Disable automatic/recurrent rotation for migrated secrets. Default is false: only manual rotation is allowed for migrated secrets. If set to true, this command should be combined with --ad-rotation-interval and --ad-rotation-hour parameters (Relevant only for Active Directory migration)
 * @member {String} ad_auto_rotate
 */
GatewayCreateMigration.prototype['ad_auto_rotate'] = undefined;

/**
 * Distinguished Name of Computer objects (servers) to search in Active Directory e.g.: CN=Computers,DC=example,DC=com (Relevant only for Active Directory migration)
 * @member {String} ad_computer_base_dn
 */
GatewayCreateMigration.prototype['ad_computer_base_dn'] = undefined;

/**
 * Enable/Disable discovery of local users from each domain server and migrate them as SSH/Windows Rotated Secrets. Default is false: only domain users will be migrated. Discovery of local users might require further installation of SSH on the servers, based on the supplied computer base DN. This will be implemented automatically as part of the migration process (Relevant only for Active Directory migration) Deprecated: use AdDiscoverTypes
 * @member {String} ad_discover_local_users
 */
GatewayCreateMigration.prototype['ad_discover_local_users'] = undefined;

/**
 * Active Directory Domain Name (Relevant only for Active Directory migration)
 * @member {String} ad_domain_name
 */
GatewayCreateMigration.prototype['ad_domain_name'] = undefined;

/**
 * Path location template for migrating domain users as Rotated Secrets e.g.: .../DomainUsers/{{USERNAME}} (Relevant only for Active Directory migration)
 * @member {String} ad_domain_users_path_template
 */
GatewayCreateMigration.prototype['ad_domain_users_path_template'] = undefined;

/**
 * Comma-separated list of Local Users which should not be migrated (Relevant only for Active Directory migration)
 * @member {String} ad_local_users_ignore
 */
GatewayCreateMigration.prototype['ad_local_users_ignore'] = undefined;

/**
 * Path location template for migrating domain users as Rotated Secrets e.g.: .../LocalUsers/{{COMPUTER_NAME}}/{{USERNAME}} (Relevant only for Active Directory migration)
 * @member {String} ad_local_users_path_template
 */
GatewayCreateMigration.prototype['ad_local_users_path_template'] = undefined;

/**
 * The hour of the scheduled rotation in UTC (Relevant only for Active Directory migration)
 * @member {Number} ad_rotation_hour
 */
GatewayCreateMigration.prototype['ad_rotation_hour'] = undefined;

/**
 * The number of days to wait between every automatic rotation [1-365] (Relevant only for Active Directory migration)
 * @member {Number} ad_rotation_interval
 */
GatewayCreateMigration.prototype['ad_rotation_interval'] = undefined;

/**
 * Enable/Disable RDP Secure Remote Access for the migrated local users rotated secrets. Default is false: rotated secrets will not be created with SRA (Relevant only for Active Directory migration)
 * @member {String} ad_sra_enable_rdp
 */
GatewayCreateMigration.prototype['ad_sra_enable_rdp'] = undefined;

/**
 * Active Directory LDAP Target Name. Server type should be Active Directory (Relevant only for Active Directory migration)
 * @member {String} ad_target_name
 */
GatewayCreateMigration.prototype['ad_target_name'] = undefined;

/**
 * Path location template for migrating domain servers as SSH/Windows Targets e.g.: .../Servers/{{COMPUTER_NAME}} (Relevant only for Active Directory migration)
 * @member {String} ad_targets_path_template
 */
GatewayCreateMigration.prototype['ad_targets_path_template'] = undefined;

/**
 * Distinguished Name of User objects to search in Active Directory, e.g.: CN=Users,DC=example,DC=com (Relevant only for Active Directory migration)
 * @member {String} ad_user_base_dn
 */
GatewayCreateMigration.prototype['ad_user_base_dn'] = undefined;

/**
 * Comma-separated list of domain groups from which privileged domain users will be migrated. If empty, migrate all users based on the --ad-user-base-dn (Relevant only for Active Directory migration)
 * @member {String} ad_user_groups
 */
GatewayCreateMigration.prototype['ad_user_groups'] = undefined;

/**
 * AWS Secret Access Key (relevant only for AWS migration)
 * @member {String} aws-key
 */
GatewayCreateMigration.prototype['aws-key'] = undefined;

/**
 * AWS Access Key ID with sufficient permissions to get all secrets, e.g. 'arn:aws:secretsmanager:[Region]:[AccountId]:secret:[/path/to/secrets/_*]' (relevant only for AWS migration)
 * @member {String} aws-key-id
 */
GatewayCreateMigration.prototype['aws-key-id'] = undefined;

/**
 * AWS region of the required Secrets Manager (relevant only for AWS migration)
 * @member {String} aws-region
 * @default 'us-east-2'
 */
GatewayCreateMigration.prototype['aws-region'] = 'us-east-2';

/**
 * Azure Key Vault Access client ID, should be Azure AD App with a service principal (relevant only for Azure Key Vault migration)
 * @member {String} azure-client-id
 */
GatewayCreateMigration.prototype['azure-client-id'] = undefined;

/**
 * Azure Key Vault Name (relevant only for Azure Key Vault migration)
 * @member {String} azure-kv-name
 */
GatewayCreateMigration.prototype['azure-kv-name'] = undefined;

/**
 * Azure Key Vault secret (relevant only for Azure Key Vault migration)
 * @member {String} azure-secret
 */
GatewayCreateMigration.prototype['azure-secret'] = undefined;

/**
 * Azure Key Vault Access tenant ID (relevant only for Azure Key Vault migration)
 * @member {String} azure-tenant-id
 */
GatewayCreateMigration.prototype['azure-tenant-id'] = undefined;

/**
 * Base64-encoded GCP Service Account private key text with sufficient permissions to Secrets Manager, Minimum required permission is Secret Manager Secret Accessor, e.g. 'roles/secretmanager.secretAccessor' (relevant only for GCP migration)
 * @member {String} gcp-key
 */
GatewayCreateMigration.prototype['gcp-key'] = undefined;

/**
 * Import secret key as json value or independent secrets (relevant only for HasiCorp Vault migration) [true/false]
 * @member {String} hashi-json
 * @default 'true'
 */
GatewayCreateMigration.prototype['hashi-json'] = 'true';

/**
 * HashiCorp Vault Namespaces is a comma-separated list of namespaces which need to be imported into Akeyless Vault. For every provided namespace, all its child namespaces are imported as well, e.g. nmsp/subnmsp1/subnmsp2,nmsp/anothernmsp. By default, import all namespaces (relevant only for HasiCorp Vault migration)
 * @member {Array.<String>} hashi-ns
 */
GatewayCreateMigration.prototype['hashi-ns'] = undefined;

/**
 * HashiCorp Vault access token with sufficient permissions to preform list & read operations on secrets objects (relevant only for HasiCorp Vault migration)
 * @member {String} hashi-token
 */
GatewayCreateMigration.prototype['hashi-token'] = undefined;

/**
 * HashiCorp Vault API URL, e.g. https://vault-mgr01:8200 (relevant only for HasiCorp Vault migration)
 * @member {String} hashi-url
 */
GatewayCreateMigration.prototype['hashi-url'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayCreateMigration.prototype['json'] = false;

/**
 * For Certificate Authentication method K8s Cluster CA certificate (relevant only for K8s migration with Certificate Authentication method)
 * @member {Array.<Number>} k8s-ca-certificate
 */
GatewayCreateMigration.prototype['k8s-ca-certificate'] = undefined;

/**
 * K8s Client certificate with sufficient permission to list and get secrets in the namespace(s) you selected (relevant only for K8s migration with Certificate Authentication method)
 * @member {Array.<Number>} k8s-client-certificate
 */
GatewayCreateMigration.prototype['k8s-client-certificate'] = undefined;

/**
 * K8s Client key (relevant only for K8s migration with Certificate Authentication method)
 * @member {Array.<Number>} k8s-client-key
 */
GatewayCreateMigration.prototype['k8s-client-key'] = undefined;

/**
 * K8s Namespace, Use this field to import secrets from a particular namespace only. By default, the secrets are imported from all namespaces (relevant only for K8s migration)
 * @member {String} k8s-namespace
 */
GatewayCreateMigration.prototype['k8s-namespace'] = undefined;

/**
 * K8s Client password (relevant only for K8s migration with Password Authentication method)
 * @member {String} k8s-password
 */
GatewayCreateMigration.prototype['k8s-password'] = undefined;

/**
 * K8s Skip Control Plane Secrets, This option allows to avoid importing secrets from system namespaces (relevant only for K8s migration)
 * @member {Boolean} k8s-skip-system
 */
GatewayCreateMigration.prototype['k8s-skip-system'] = undefined;

/**
 * For Token Authentication method K8s Bearer Token with sufficient permission to list and get secrets in the namespace(s) you selected (relevant only for K8s migration with Token Authentication method)
 * @member {String} k8s-token
 */
GatewayCreateMigration.prototype['k8s-token'] = undefined;

/**
 * K8s API Server URL, e.g. https://k8s-api.mycompany.com:6443 (relevant only for K8s migration)
 * @member {String} k8s-url
 */
GatewayCreateMigration.prototype['k8s-url'] = undefined;

/**
 * For Password Authentication method K8s Client username with sufficient permission to list and get secrets in the namespace(s) you selected (relevant only for K8s migration with Password Authentication method)
 * @member {String} k8s-username
 */
GatewayCreateMigration.prototype['k8s-username'] = undefined;

/**
 * Migration name
 * @member {String} name
 */
GatewayCreateMigration.prototype['name'] = undefined;

/**
 * The name of the key that protects the classic key value (if empty, the account default key will be used)
 * @member {String} protection-key
 */
GatewayCreateMigration.prototype['protection-key'] = undefined;

/**
 * Enable/Disable automatic/recurrent rotation for migrated secrets. Default is false: only manual rotation is allowed for migrated secrets. If set to true, this command should be combined with --si-rotation-interval and --si-rotation-hour parameters (Relevant only for Server Inventory migration)
 * @member {String} si-auto-rotate
 */
GatewayCreateMigration.prototype['si-auto-rotate'] = undefined;

/**
 * The hour of the scheduled rotation in UTC (Relevant only for Server Inventory migration)
 * @member {Number} si-rotation-hour
 */
GatewayCreateMigration.prototype['si-rotation-hour'] = undefined;

/**
 * The number of days to wait between every automatic rotation [1-365] (Relevant only for Server Inventory migration)
 * @member {Number} si-rotation-interval
 */
GatewayCreateMigration.prototype['si-rotation-interval'] = undefined;

/**
 * Enable/Disable RDP Secure Remote Access for the migrated local users rotated secrets. Default is false: rotated secrets will not be created with SRA (Relevant only for Server Inventory migration)
 * @member {String} si-sra-enable-rdp
 * @default 'false'
 */
GatewayCreateMigration.prototype['si-sra-enable-rdp'] = 'false';

/**
 * SSH, Windows or Linked Target Name. (Relevant only for Server Inventory migration)
 * @member {String} si-target-name
 */
GatewayCreateMigration.prototype['si-target-name'] = undefined;

/**
 * Comma-separated list of groups to migrate users from. If empty, all users from all groups will be migrated (Relevant only for Server Inventory migration)
 * @member {String} si-user-groups
 */
GatewayCreateMigration.prototype['si-user-groups'] = undefined;

/**
 * Comma-separated list of Local Users which should not be migrated (Relevant only for Server Inventory migration)
 * @member {String} si-users-ignore
 */
GatewayCreateMigration.prototype['si-users-ignore'] = undefined;

/**
 * Path location template for migrating users as Rotated Secrets e.g.: .../Users/{{COMPUTER_NAME}}/{{USERNAME}} (Relevant only for Server Inventory migration)
 * @member {String} si-users-path-template
 */
GatewayCreateMigration.prototype['si-users-path-template'] = undefined;

/**
 * Target location in Akeyless for imported secrets
 * @member {String} target-location
 */
GatewayCreateMigration.prototype['target-location'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateMigration.prototype['token'] = undefined;

/**
 * Migration type (hashi/aws/gcp/k8s/azure_kv/1password/active_directory)
 * @member {String} type
 */
GatewayCreateMigration.prototype['type'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateMigration.prototype['uid-token'] = undefined;






export default GatewayCreateMigration;

