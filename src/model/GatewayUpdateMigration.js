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
 * The GatewayUpdateMigration model module.
 * @module model/GatewayUpdateMigration
 * @version 2.17.0
 */
class GatewayUpdateMigration {
    /**
     * Constructs a new <code>GatewayUpdateMigration</code>.
     * gatewayUpdateMigration is a command that update migration
     * @alias module:model/GatewayUpdateMigration
     */
    constructor() { 
        
        GatewayUpdateMigration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayUpdateMigration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateMigration} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateMigration} The populated <code>GatewayUpdateMigration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateMigration();

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
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
            if (data.hasOwnProperty('new_name')) {
                obj['new_name'] = ApiClient.convertToType(data['new_name'], 'String');
            }
            if (data.hasOwnProperty('protection-key')) {
                obj['protection-key'] = ApiClient.convertToType(data['protection-key'], 'String');
            }
            if (data.hasOwnProperty('target-location')) {
                obj['target-location'] = ApiClient.convertToType(data['target-location'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * AWS Secret Access Key (relevant only for AWS migration)
 * @member {String} aws-key
 */
GatewayUpdateMigration.prototype['aws-key'] = undefined;

/**
 * AWS Access Key ID with sufficient permissions to get all secrets, e.g. 'arn:aws:secretsmanager:[Region]:[AccountId]:secret:[/path/to/secrets/_*]' (relevant only for AWS migration)
 * @member {String} aws-key-id
 */
GatewayUpdateMigration.prototype['aws-key-id'] = undefined;

/**
 * AWS region of the required Secrets Manager (relevant only for AWS migration)
 * @member {String} aws-region
 */
GatewayUpdateMigration.prototype['aws-region'] = undefined;

/**
 * Azure Key Vault Access client ID, should be Azure AD App with a service principal (relevant only for Azure Key Vault migration)
 * @member {String} azure-client-id
 */
GatewayUpdateMigration.prototype['azure-client-id'] = undefined;

/**
 * Azure Key Vault Name (relevant only for Azure Key Vault migration)
 * @member {String} azure-kv-name
 */
GatewayUpdateMigration.prototype['azure-kv-name'] = undefined;

/**
 * Azure Key Vault secret (relevant only for Azure Key Vault migration)
 * @member {String} azure-secret
 */
GatewayUpdateMigration.prototype['azure-secret'] = undefined;

/**
 * Azure Key Vault Access tenant ID (relevant only for Azure Key Vault migration)
 * @member {String} azure-tenant-id
 */
GatewayUpdateMigration.prototype['azure-tenant-id'] = undefined;

/**
 * Base64-encoded GCP Service Account private key text with sufficient permissions to Secrets Manager, Minimum required permission is Secret Manager Secret Accessor, e.g. 'roles/secretmanager.secretAccessor' (relevant only for GCP migration)
 * @member {String} gcp-key
 */
GatewayUpdateMigration.prototype['gcp-key'] = undefined;

/**
 * Import secret key as json value or independent secrets (relevant only for HasiCorp Vault migration)
 * @member {String} hashi-json
 */
GatewayUpdateMigration.prototype['hashi-json'] = undefined;

/**
 * HashiCorp Vault Namespaces is a comma-separated list of namespaces which need to be imported into Akeyless Vault. For every provided namespace, all its child namespaces are imported as well, e.g. nmsp/subnmsp1/subnmsp2,nmsp/anothernmsp. By default, import all namespaces (relevant only for HasiCorp Vault migration)
 * @member {Array.<String>} hashi-ns
 */
GatewayUpdateMigration.prototype['hashi-ns'] = undefined;

/**
 * HashiCorp Vault access token with sufficient permissions to preform list & read operations on secrets objects (relevant only for HasiCorp Vault migration)
 * @member {String} hashi-token
 */
GatewayUpdateMigration.prototype['hashi-token'] = undefined;

/**
 * HashiCorp Vault API URL, e.g. https://vault-mgr01:8200 (relevant only for HasiCorp Vault migration)
 * @member {String} hashi-url
 */
GatewayUpdateMigration.prototype['hashi-url'] = undefined;

/**
 * Migration ID (Can be retrieved with gateway-list-migration command)
 * @member {String} id
 */
GatewayUpdateMigration.prototype['id'] = undefined;

/**
 * For Certificate Authentication method K8s Cluster CA certificate (relevant only for K8s migration with Certificate Authentication method)
 * @member {Array.<Number>} k8s-ca-certificate
 */
GatewayUpdateMigration.prototype['k8s-ca-certificate'] = undefined;

/**
 * K8s Client certificate with sufficient permission to list and get secrets in the namespace(s) you selected (relevant only for K8s migration with Certificate Authentication method)
 * @member {Array.<Number>} k8s-client-certificate
 */
GatewayUpdateMigration.prototype['k8s-client-certificate'] = undefined;

/**
 * K8s Client key (relevant only for K8s migration with Certificate Authentication method)
 * @member {Array.<Number>} k8s-client-key
 */
GatewayUpdateMigration.prototype['k8s-client-key'] = undefined;

/**
 * K8s Namespace, Use this field to import secrets from a particular namespace only. By default, the secrets are imported from all namespaces (relevant only for K8s migration)
 * @member {String} k8s-namespace
 */
GatewayUpdateMigration.prototype['k8s-namespace'] = undefined;

/**
 * K8s Client password (relevant only for K8s migration with Password Authentication method)
 * @member {String} k8s-password
 */
GatewayUpdateMigration.prototype['k8s-password'] = undefined;

/**
 * K8s Skip Control Plane Secrets, This option allows to avoid importing secrets from system namespaces (relevant only for K8s migration)
 * @member {Boolean} k8s-skip-system
 */
GatewayUpdateMigration.prototype['k8s-skip-system'] = undefined;

/**
 * For Token Authentication method K8s Bearer Token with sufficient permission to list and get secrets in the namespace(s) you selected (relevant only for K8s migration with Token Authentication method)
 * @member {String} k8s-token
 */
GatewayUpdateMigration.prototype['k8s-token'] = undefined;

/**
 * K8s API Server URL, e.g. https://k8s-api.mycompany.com:6443 (relevant only for K8s migration)
 * @member {String} k8s-url
 */
GatewayUpdateMigration.prototype['k8s-url'] = undefined;

/**
 * For Password Authentication method K8s Client username with sufficient permission to list and get secrets in the namespace(s) you selected (relevant only for K8s migration with Password Authentication method)
 * @member {String} k8s-username
 */
GatewayUpdateMigration.prototype['k8s-username'] = undefined;

/**
 * Migration name
 * @member {String} name
 */
GatewayUpdateMigration.prototype['name'] = undefined;

/**
 * New migration name
 * @member {String} new_name
 */
GatewayUpdateMigration.prototype['new_name'] = undefined;

/**
 * The name of the key that protects the classic key value (if empty, the account default key will be used)
 * @member {String} protection-key
 */
GatewayUpdateMigration.prototype['protection-key'] = undefined;

/**
 * Target location in Akeyless for imported secrets
 * @member {String} target-location
 */
GatewayUpdateMigration.prototype['target-location'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateMigration.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateMigration.prototype['uid-token'] = undefined;






export default GatewayUpdateMigration;

