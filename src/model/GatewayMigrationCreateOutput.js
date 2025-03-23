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
 * The GatewayMigrationCreateOutput model module.
 * @module model/GatewayMigrationCreateOutput
 * @version 5.0.1
 */
class GatewayMigrationCreateOutput {
    /**
     * Constructs a new <code>GatewayMigrationCreateOutput</code>.
     * @alias module:model/GatewayMigrationCreateOutput
     */
    constructor() { 
        
        GatewayMigrationCreateOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayMigrationCreateOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayMigrationCreateOutput} obj Optional instance to populate.
     * @return {module:model/GatewayMigrationCreateOutput} The populated <code>GatewayMigrationCreateOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayMigrationCreateOutput();

            if (data.hasOwnProperty('migration_name')) {
                obj['migration_name'] = ApiClient.convertToType(data['migration_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GatewayMigrationCreateOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayMigrationCreateOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['migration_name'] && !(typeof data['migration_name'] === 'string' || data['migration_name'] instanceof String)) {
            throw new Error("Expected the field `migration_name` to be a primitive type in the JSON string but got " + data['migration_name']);
        }

        return true;
    }


}



/**
 * @member {String} migration_name
 */
GatewayMigrationCreateOutput.prototype['migration_name'] = undefined;






export default GatewayMigrationCreateOutput;

