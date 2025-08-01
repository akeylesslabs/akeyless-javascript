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
import AzurePayload from './AzurePayload';
import MigrationGeneral from './MigrationGeneral';

/**
 * The AzureKeyVaultMigration model module.
 * @module model/AzureKeyVaultMigration
 * @version 5.0.6
 */
class AzureKeyVaultMigration {
    /**
     * Constructs a new <code>AzureKeyVaultMigration</code>.
     * @alias module:model/AzureKeyVaultMigration
     */
    constructor() { 
        
        AzureKeyVaultMigration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AzureKeyVaultMigration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AzureKeyVaultMigration} obj Optional instance to populate.
     * @return {module:model/AzureKeyVaultMigration} The populated <code>AzureKeyVaultMigration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AzureKeyVaultMigration();

            if (data.hasOwnProperty('general')) {
                obj['general'] = MigrationGeneral.constructFromObject(data['general']);
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = AzurePayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AzureKeyVaultMigration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AzureKeyVaultMigration</code>.
     */
    static validateJSON(data) {
        // validate the optional field `general`
        if (data['general']) { // data not null
          MigrationGeneral.validateJSON(data['general']);
        }
        // validate the optional field `payload`
        if (data['payload']) { // data not null
          AzurePayload.validateJSON(data['payload']);
        }

        return true;
    }


}



/**
 * @member {module:model/MigrationGeneral} general
 */
AzureKeyVaultMigration.prototype['general'] = undefined;

/**
 * @member {module:model/AzurePayload} payload
 */
AzureKeyVaultMigration.prototype['payload'] = undefined;






export default AzureKeyVaultMigration;

