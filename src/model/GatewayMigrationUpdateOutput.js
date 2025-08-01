/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GatewayMigrationUpdateOutput model module.
 * @module model/GatewayMigrationUpdateOutput
 * @version 5.0.6
 */
class GatewayMigrationUpdateOutput {
    /**
     * Constructs a new <code>GatewayMigrationUpdateOutput</code>.
     * @alias module:model/GatewayMigrationUpdateOutput
     */
    constructor() { 
        
        GatewayMigrationUpdateOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayMigrationUpdateOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayMigrationUpdateOutput} obj Optional instance to populate.
     * @return {module:model/GatewayMigrationUpdateOutput} The populated <code>GatewayMigrationUpdateOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayMigrationUpdateOutput();

            if (data.hasOwnProperty('migration_name')) {
                obj['migration_name'] = ApiClient.convertToType(data['migration_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GatewayMigrationUpdateOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayMigrationUpdateOutput</code>.
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
GatewayMigrationUpdateOutput.prototype['migration_name'] = undefined;






export default GatewayMigrationUpdateOutput;

