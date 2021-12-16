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
import MigrationsConfigPart from './MigrationsConfigPart';

/**
 * The GatewayMigrationListOutput model module.
 * @module model/GatewayMigrationListOutput
 * @version 2.5.22
 */
class GatewayMigrationListOutput {
    /**
     * Constructs a new <code>GatewayMigrationListOutput</code>.
     * @alias module:model/GatewayMigrationListOutput
     */
    constructor() { 
        
        GatewayMigrationListOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayMigrationListOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayMigrationListOutput} obj Optional instance to populate.
     * @return {module:model/GatewayMigrationListOutput} The populated <code>GatewayMigrationListOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayMigrationListOutput();

            if (data.hasOwnProperty('body')) {
                obj['body'] = MigrationsConfigPart.constructFromObject(data['body']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MigrationsConfigPart} body
 */
GatewayMigrationListOutput.prototype['body'] = undefined;






export default GatewayMigrationListOutput;
