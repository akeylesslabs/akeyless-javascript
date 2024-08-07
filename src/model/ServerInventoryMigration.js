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
import MigrationGeneral from './MigrationGeneral';
import ServerInventoryPayload from './ServerInventoryPayload';

/**
 * The ServerInventoryMigration model module.
 * @module model/ServerInventoryMigration
 * @version 4.2.2
 */
class ServerInventoryMigration {
    /**
     * Constructs a new <code>ServerInventoryMigration</code>.
     * @alias module:model/ServerInventoryMigration
     */
    constructor() { 
        
        ServerInventoryMigration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServerInventoryMigration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServerInventoryMigration} obj Optional instance to populate.
     * @return {module:model/ServerInventoryMigration} The populated <code>ServerInventoryMigration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServerInventoryMigration();

            if (data.hasOwnProperty('general')) {
                obj['general'] = MigrationGeneral.constructFromObject(data['general']);
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ServerInventoryPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MigrationGeneral} general
 */
ServerInventoryMigration.prototype['general'] = undefined;

/**
 * @member {module:model/ServerInventoryPayload} payload
 */
ServerInventoryMigration.prototype['payload'] = undefined;






export default ServerInventoryMigration;

