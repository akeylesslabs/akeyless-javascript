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
import MigrationStatus from './MigrationStatus';

/**
 * The LastStatusInfo model module.
 * @module model/LastStatusInfo
 * @version 3.5.1
 */
class LastStatusInfo {
    /**
     * Constructs a new <code>LastStatusInfo</code>.
     * @alias module:model/LastStatusInfo
     */
    constructor() { 
        
        LastStatusInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LastStatusInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LastStatusInfo} obj Optional instance to populate.
     * @return {module:model/LastStatusInfo} The populated <code>LastStatusInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LastStatusInfo();

            if (data.hasOwnProperty('migrations_status')) {
                obj['migrations_status'] = MigrationStatus.constructFromObject(data['migrations_status']);
            }
            if (data.hasOwnProperty('producers_errors')) {
                obj['producers_errors'] = ApiClient.convertToType(data['producers_errors'], Object);
            }
            if (data.hasOwnProperty('was_migrations_copied_to_new_table')) {
                obj['was_migrations_copied_to_new_table'] = ApiClient.convertToType(data['was_migrations_copied_to_new_table'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MigrationStatus} migrations_status
 */
LastStatusInfo.prototype['migrations_status'] = undefined;

/**
 * @member {Object} producers_errors
 */
LastStatusInfo.prototype['producers_errors'] = undefined;

/**
 * flag to indicate migrationStatus copied to new table
 * @member {Boolean} was_migrations_copied_to_new_table
 */
LastStatusInfo.prototype['was_migrations_copied_to_new_table'] = undefined;






export default LastStatusInfo;

