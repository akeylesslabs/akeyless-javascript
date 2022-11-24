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
 * The GatewayMigrationDeleteOutput model module.
 * @module model/GatewayMigrationDeleteOutput
 * @version 2.20.2
 */
class GatewayMigrationDeleteOutput {
    /**
     * Constructs a new <code>GatewayMigrationDeleteOutput</code>.
     * @alias module:model/GatewayMigrationDeleteOutput
     */
    constructor() { 
        
        GatewayMigrationDeleteOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayMigrationDeleteOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayMigrationDeleteOutput} obj Optional instance to populate.
     * @return {module:model/GatewayMigrationDeleteOutput} The populated <code>GatewayMigrationDeleteOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayMigrationDeleteOutput();

            if (data.hasOwnProperty('migration_id')) {
                obj['migration_id'] = ApiClient.convertToType(data['migration_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} migration_id
 */
GatewayMigrationDeleteOutput.prototype['migration_id'] = undefined;






export default GatewayMigrationDeleteOutput;

