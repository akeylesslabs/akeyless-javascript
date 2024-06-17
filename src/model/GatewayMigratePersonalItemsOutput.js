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
import MigrationItems from './MigrationItems';

/**
 * The GatewayMigratePersonalItemsOutput model module.
 * @module model/GatewayMigratePersonalItemsOutput
 * @version 4.1.0
 */
class GatewayMigratePersonalItemsOutput {
    /**
     * Constructs a new <code>GatewayMigratePersonalItemsOutput</code>.
     * @alias module:model/GatewayMigratePersonalItemsOutput
     */
    constructor() { 
        
        GatewayMigratePersonalItemsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayMigratePersonalItemsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayMigratePersonalItemsOutput} obj Optional instance to populate.
     * @return {module:model/GatewayMigratePersonalItemsOutput} The populated <code>GatewayMigratePersonalItemsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayMigratePersonalItemsOutput();

            if (data.hasOwnProperty('migration_items')) {
                obj['migration_items'] = MigrationItems.constructFromObject(data['migration_items']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MigrationItems} migration_items
 */
GatewayMigratePersonalItemsOutput.prototype['migration_items'] = undefined;






export default GatewayMigratePersonalItemsOutput;

