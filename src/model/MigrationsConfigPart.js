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
import AWSSecretsMigration from './AWSSecretsMigration';
import AzureKeyVaultMigration from './AzureKeyVaultMigration';
import GCPSecretsMigration from './GCPSecretsMigration';
import HashiMigration from './HashiMigration';
import K8SMigration from './K8SMigration';

/**
 * The MigrationsConfigPart model module.
 * @module model/MigrationsConfigPart
 * @version 2.17.0
 */
class MigrationsConfigPart {
    /**
     * Constructs a new <code>MigrationsConfigPart</code>.
     * @alias module:model/MigrationsConfigPart
     */
    constructor() { 
        
        MigrationsConfigPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MigrationsConfigPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MigrationsConfigPart} obj Optional instance to populate.
     * @return {module:model/MigrationsConfigPart} The populated <code>MigrationsConfigPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MigrationsConfigPart();

            if (data.hasOwnProperty('aws_secrets_migrations')) {
                obj['aws_secrets_migrations'] = ApiClient.convertToType(data['aws_secrets_migrations'], [AWSSecretsMigration]);
            }
            if (data.hasOwnProperty('azure_kv_migrations')) {
                obj['azure_kv_migrations'] = ApiClient.convertToType(data['azure_kv_migrations'], [AzureKeyVaultMigration]);
            }
            if (data.hasOwnProperty('gcp_secrets_migrations')) {
                obj['gcp_secrets_migrations'] = ApiClient.convertToType(data['gcp_secrets_migrations'], [GCPSecretsMigration]);
            }
            if (data.hasOwnProperty('hashi_migrations')) {
                obj['hashi_migrations'] = ApiClient.convertToType(data['hashi_migrations'], [HashiMigration]);
            }
            if (data.hasOwnProperty('k8s_migrations')) {
                obj['k8s_migrations'] = ApiClient.convertToType(data['k8s_migrations'], [K8SMigration]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/AWSSecretsMigration>} aws_secrets_migrations
 */
MigrationsConfigPart.prototype['aws_secrets_migrations'] = undefined;

/**
 * @member {Array.<module:model/AzureKeyVaultMigration>} azure_kv_migrations
 */
MigrationsConfigPart.prototype['azure_kv_migrations'] = undefined;

/**
 * @member {Array.<module:model/GCPSecretsMigration>} gcp_secrets_migrations
 */
MigrationsConfigPart.prototype['gcp_secrets_migrations'] = undefined;

/**
 * @member {Array.<module:model/HashiMigration>} hashi_migrations
 */
MigrationsConfigPart.prototype['hashi_migrations'] = undefined;

/**
 * @member {Array.<module:model/K8SMigration>} k8s_migrations
 */
MigrationsConfigPart.prototype['k8s_migrations'] = undefined;






export default MigrationsConfigPart;

