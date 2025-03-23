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
import ActiveDirectoryPayload from './ActiveDirectoryPayload';
import MigrationGeneral from './MigrationGeneral';

/**
 * The ActiveDirectoryMigration model module.
 * @module model/ActiveDirectoryMigration
 * @version 5.0.1
 */
class ActiveDirectoryMigration {
    /**
     * Constructs a new <code>ActiveDirectoryMigration</code>.
     * @alias module:model/ActiveDirectoryMigration
     */
    constructor() { 
        
        ActiveDirectoryMigration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActiveDirectoryMigration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActiveDirectoryMigration} obj Optional instance to populate.
     * @return {module:model/ActiveDirectoryMigration} The populated <code>ActiveDirectoryMigration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActiveDirectoryMigration();

            if (data.hasOwnProperty('general')) {
                obj['general'] = MigrationGeneral.constructFromObject(data['general']);
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ActiveDirectoryPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActiveDirectoryMigration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActiveDirectoryMigration</code>.
     */
    static validateJSON(data) {
        // validate the optional field `general`
        if (data['general']) { // data not null
          MigrationGeneral.validateJSON(data['general']);
        }
        // validate the optional field `payload`
        if (data['payload']) { // data not null
          ActiveDirectoryPayload.validateJSON(data['payload']);
        }

        return true;
    }


}



/**
 * @member {module:model/MigrationGeneral} general
 */
ActiveDirectoryMigration.prototype['general'] = undefined;

/**
 * @member {module:model/ActiveDirectoryPayload} payload
 */
ActiveDirectoryMigration.prototype['payload'] = undefined;






export default ActiveDirectoryMigration;

