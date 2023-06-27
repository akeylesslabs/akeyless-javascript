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
 * The MigrationItems model module.
 * @module model/MigrationItems
 * @version 3.3.11
 */
class MigrationItems {
    /**
     * Constructs a new <code>MigrationItems</code>.
     * @alias module:model/MigrationItems
     */
    constructor() { 
        
        MigrationItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MigrationItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MigrationItems} obj Optional instance to populate.
     * @return {module:model/MigrationItems} The populated <code>MigrationItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MigrationItems();

            if (data.hasOwnProperty('failed')) {
                obj['failed'] = ApiClient.convertToType(data['failed'], 'Number');
            }
            if (data.hasOwnProperty('migrated')) {
                obj['migrated'] = ApiClient.convertToType(data['migrated'], 'Number');
            }
            if (data.hasOwnProperty('skipped')) {
                obj['skipped'] = ApiClient.convertToType(data['skipped'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} failed
 */
MigrationItems.prototype['failed'] = undefined;

/**
 * @member {Number} migrated
 */
MigrationItems.prototype['migrated'] = undefined;

/**
 * @member {Number} skipped
 */
MigrationItems.prototype['skipped'] = undefined;

/**
 * @member {Number} total
 */
MigrationItems.prototype['total'] = undefined;






export default MigrationItems;

