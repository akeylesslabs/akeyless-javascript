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
 * The GatewayMigrationSyncOutput model module.
 * @module model/GatewayMigrationSyncOutput
 * @version 1.57.0
 */
class GatewayMigrationSyncOutput {
    /**
     * Constructs a new <code>GatewayMigrationSyncOutput</code>.
     * @alias module:model/GatewayMigrationSyncOutput
     */
    constructor() { 
        
        GatewayMigrationSyncOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayMigrationSyncOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayMigrationSyncOutput} obj Optional instance to populate.
     * @return {module:model/GatewayMigrationSyncOutput} The populated <code>GatewayMigrationSyncOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayMigrationSyncOutput();

            if (data.hasOwnProperty('migration_name')) {
                obj['migration_name'] = ApiClient.convertToType(data['migration_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} migration_name
 */
GatewayMigrationSyncOutput.prototype['migration_name'] = undefined;






export default GatewayMigrationSyncOutput;

