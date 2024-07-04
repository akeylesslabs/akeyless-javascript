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
 * The MigrationGeneral model module.
 * @module model/MigrationGeneral
 * @version 4.2.0
 */
class MigrationGeneral {
    /**
     * Constructs a new <code>MigrationGeneral</code>.
     * @alias module:model/MigrationGeneral
     */
    constructor() { 
        
        MigrationGeneral.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MigrationGeneral</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MigrationGeneral} obj Optional instance to populate.
     * @return {module:model/MigrationGeneral} The populated <code>MigrationGeneral</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MigrationGeneral();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last_migration')) {
                obj['last_migration'] = ApiClient.convertToType(data['last_migration'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new_name')) {
                obj['new_name'] = ApiClient.convertToType(data['new_name'], 'String');
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('protection_key')) {
                obj['protection_key'] = ApiClient.convertToType(data['protection_key'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
MigrationGeneral.prototype['id'] = undefined;

/**
 * @member {String} last_migration
 */
MigrationGeneral.prototype['last_migration'] = undefined;

/**
 * @member {String} name
 */
MigrationGeneral.prototype['name'] = undefined;

/**
 * @member {String} new_name
 */
MigrationGeneral.prototype['new_name'] = undefined;

/**
 * @member {String} prefix
 */
MigrationGeneral.prototype['prefix'] = undefined;

/**
 * @member {String} protection_key
 */
MigrationGeneral.prototype['protection_key'] = undefined;

/**
 * @member {String} status
 */
MigrationGeneral.prototype['status'] = undefined;

/**
 * @member {String} type
 */
MigrationGeneral.prototype['type'] = undefined;






export default MigrationGeneral;

