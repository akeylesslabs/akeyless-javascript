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
import MigrationItems from './MigrationItems';

/**
 * The MigrationStatusReplyObj model module.
 * @module model/MigrationStatusReplyObj
 * @version 3.3.3
 */
class MigrationStatusReplyObj {
    /**
     * Constructs a new <code>MigrationStatusReplyObj</code>.
     * @alias module:model/MigrationStatusReplyObj
     */
    constructor() { 
        
        MigrationStatusReplyObj.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MigrationStatusReplyObj</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MigrationStatusReplyObj} obj Optional instance to populate.
     * @return {module:model/MigrationStatusReplyObj} The populated <code>MigrationStatusReplyObj</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MigrationStatusReplyObj();

            if (data.hasOwnProperty('duration_time')) {
                obj['duration_time'] = ApiClient.convertToType(data['duration_time'], 'String');
            }
            if (data.hasOwnProperty('last_status_message')) {
                obj['last_status_message'] = ApiClient.convertToType(data['last_status_message'], 'String');
            }
            if (data.hasOwnProperty('max_name_length')) {
                obj['max_name_length'] = ApiClient.convertToType(data['max_name_length'], 'Number');
            }
            if (data.hasOwnProperty('max_value_length')) {
                obj['max_value_length'] = ApiClient.convertToType(data['max_value_length'], 'Number');
            }
            if (data.hasOwnProperty('migration_id')) {
                obj['migration_id'] = ApiClient.convertToType(data['migration_id'], 'String');
            }
            if (data.hasOwnProperty('migration_items')) {
                obj['migration_items'] = MigrationItems.constructFromObject(data['migration_items']);
            }
            if (data.hasOwnProperty('migration_name')) {
                obj['migration_name'] = ApiClient.convertToType(data['migration_name'], 'String');
            }
            if (data.hasOwnProperty('migration_state')) {
                obj['migration_state'] = ApiClient.convertToType(data['migration_state'], 'String');
            }
            if (data.hasOwnProperty('migration_type')) {
                obj['migration_type'] = ApiClient.convertToType(data['migration_type'], 'String');
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} duration_time
 */
MigrationStatusReplyObj.prototype['duration_time'] = undefined;

/**
 * @member {String} last_status_message
 */
MigrationStatusReplyObj.prototype['last_status_message'] = undefined;

/**
 * @member {Number} max_name_length
 */
MigrationStatusReplyObj.prototype['max_name_length'] = undefined;

/**
 * @member {Number} max_value_length
 */
MigrationStatusReplyObj.prototype['max_value_length'] = undefined;

/**
 * @member {String} migration_id
 */
MigrationStatusReplyObj.prototype['migration_id'] = undefined;

/**
 * @member {module:model/MigrationItems} migration_items
 */
MigrationStatusReplyObj.prototype['migration_items'] = undefined;

/**
 * @member {String} migration_name
 */
MigrationStatusReplyObj.prototype['migration_name'] = undefined;

/**
 * @member {String} migration_state
 */
MigrationStatusReplyObj.prototype['migration_state'] = undefined;

/**
 * @member {String} migration_type
 */
MigrationStatusReplyObj.prototype['migration_type'] = undefined;

/**
 * @member {String} start_time
 */
MigrationStatusReplyObj.prototype['start_time'] = undefined;






export default MigrationStatusReplyObj;

